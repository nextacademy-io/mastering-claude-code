// Effort lab, live measurement tool: run the review prompt N times per effort level on
// sonnet in print mode, keep every answer, and score each run against the four bugs
// by the words it uses to describe them.
//
//   node measure.mjs            three runs at low and at high
//   node measure.mjs 10         ten runs per level
//   node measure.mjs 5 low      five runs at one level, or a list: 5 low,medium,high
//   node measure.mjs score      score the runs already in ./runs, start nothing
//
// Run it in an empty folder that holds review.ts and this file, outside the
// workshop repository. Answers land in ./runs/<level>-NN.json plus a readable
// .md copy. Existing runs are kept, and a second call numbers on from the last
// run, so "10" twice gives twenty per level. Every call ends with the score
// table and one summary line per level.
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const PROMPT = 'Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof.'
const MODEL = 'sonnet'
// The four bugs of review.ts: the line each sits on, and words an answer uses when it
// describes that behaviour, in English or German. See FINDINGS.md.
const BUGS = [
  { line: 16, name: 'cancelled joinable', words: /cancel|abgesagt|abgebrochen|storniert/i },
  { line: 18, name: 'null capacity is 0', words: /unlimited|unbegrenzt|\?\?\s*0|\bnull\b/i },
  { line: 19, name: '> instead of >=', words: />=|off.by.one|one (?:too many|more)|überbuch|überschr/i },
  { line: 21, name: 'sort mutates', words: /\bsort|mutat|in.place|verändert/i },
]
const PERFECT = `${BUGS.length}/${BUGS.length}`
const runsDir = join(process.cwd(), 'runs')

main()

function main() {
  const { scoreOnly, runsPerLevel, levels } = parseArgs(process.argv.slice(2))
  if (!scoreOnly) {
    checkLabFolder()
    for (const level of levels) {
      const first = nextIndex(level)
      for (let i = first; i < first + runsPerLevel; i++) runOnce(level, i)
    }
  }
  const rows = scoreRuns()
  if (!rows.length) {
    console.log('no runs in ./runs yet')
    return
  }
  console.table(rows)
  printSummary(rows)
  console.log('Compare output tokens, not cost_usd: runs that wrote the prompt cache cost several times more at the same output.')
  console.log('The score is a heuristic on the words each answer uses. Read runs/<id>.md when a run looks off.')
}

function parseArgs(args) {
  if (args[0] === 'score') return { scoreOnly: true }
  const runsPerLevel = Number(args[0] ?? 3)
  const levels = args[1] ? args[1].split(',') : ['low', 'high']
  if (!(Number.isInteger(runsPerLevel) && runsPerLevel > 0)) {
    console.error('usage: node measure.mjs [N] [level,level,...]   or   node measure.mjs score')
    process.exit(1)
  }
  return { scoreOnly: false, runsPerLevel, levels }
}

function checkLabFolder() {
  if (!existsSync(join(process.cwd(), 'review.ts'))) {
    console.error('review.ts is not in this folder. Copy it here first.')
    process.exit(1)
  }
  if (process.env.CLAUDE_CODE_EFFORT_LEVEL) {
    console.error(`CLAUDE_CODE_EFFORT_LEVEL is set to "${process.env.CLAUDE_CODE_EFFORT_LEVEL}". It overrides --effort. Unset it first.`)
    process.exit(1)
  }
  mkdirSync(runsDir, { recursive: true })
}

// The next free index for a level, so a second call adds runs instead of skipping them.
function nextIndex(level) {
  const taken = readdirSync(runsDir)
    .map((name) => name.match(new RegExp(`^${level}-(\\d+)\\.json$`)))
    .filter(Boolean)
    .map((match) => Number(match[1]))
  return taken.length ? Math.max(...taken) + 1 : 1
}

// One print-mode run. Saves runs/<id>.json and runs/<id>.md, or says why not.
function runOnce(level, index) {
  const id = `${level}-${String(index).padStart(2, '0')}`
  const file = join(runsDir, `${id}.json`)
  if (existsSync(file)) {
    console.log(`${id}: exists, kept`)
    return
  }
  const result = callClaude(level)
  if (result.status !== 0 || !result.stdout) {
    console.log(`${id}: failed (exit ${result.status}) ${result.error?.message ?? ''}\n${(result.stderr || '').slice(0, 400)}`)
    return
  }
  let answer
  try {
    answer = JSON.parse(result.stdout)
  } catch {
    console.log(`${id}: stdout is not JSON, nothing saved\n${result.stdout.slice(0, 400)}`)
    return
  }
  if (answer.is_error) {
    console.log(`${id}: claude reported an error, nothing saved\n${String(answer.result ?? '').slice(0, 400)}`)
    return
  }
  writeFileSync(file, result.stdout)
  writeFileSync(join(runsDir, `${id}.md`), `# ${id}\n\n${answer.result ?? ''}\n`)
  console.log(`${id}: output_tokens ${answer.usage?.output_tokens}, total_cost_usd ${answer.total_cost_usd}`)
}

function callClaude(level) {
  const env = { ...process.env }
  delete env.CLAUDECODE // a nested "claude" refuses to start while it is set; dropping it lets this script run from a Claude Code session
  // On Windows "claude" is a .cmd shim that only starts through a shell, and a shell
  // splits the prompt at spaces unless it is quoted. Elsewhere the args pass through as they are.
  const isWindows = process.platform === 'win32'
  const quoteForShell = (arg) => (isWindows && /\s/.test(arg) ? `"${arg}"` : arg)
  const claudeArgs = ['-p', '--model', MODEL, '--effort', level, '--output-format', 'json', PROMPT]
  return spawnSync('claude', claudeArgs.map(quoteForShell), { encoding: 'utf8', env, shell: isWindows, maxBuffer: 50e6 })
}

// Scoring: a bug counts as found when the answer describes its behaviour (the words in
// BUGS), not when it merely cites the line. The line numbers an answer names are listed
// as a second signal: the four bug lines, and any other line for you to judge. This is a
// heuristic. When a run looks off, read runs/<id>.md and score it against FINDINGS.md.
function scoreRuns() {
  const files = existsSync(runsDir) ? readdirSync(runsDir) : []
  return files.filter((name) => name.endsWith('.json')).sort().map(scoreRun)
}

function scoreRun(fileName) {
  const answer = JSON.parse(readFileSync(join(runsDir, fileName), 'utf8'))
  const text = answer.result ?? ''
  const found = BUGS.filter((bug) => bug.words.test(text))
  const namedLines = linesNamedIn(text)
  const bugLines = BUGS.map((bug) => bug.line)
  const otherLines = [...namedLines].filter((line) => !bugLines.includes(line)).sort((a, b) => a - b)
  return {
    run: fileName.replace('.json', ''),
    model: Object.keys(answer.modelUsage ?? {}).join('+'), // every model the run touched, e.g. a haiku helper next to sonnet
    turns: answer.num_turns,
    found: `${found.length}/${BUGS.length}`,
    'not found': BUGS.filter((bug) => !found.includes(bug)).map((bug) => bug.name).join(', ') || '-',
    'bug lines named': bugLines.filter((line) => namedLines.has(line)).join(',') || '-',
    'other lines': otherLines.join(',') || '-',
    'cache read': answer.usage?.cache_read_input_tokens,
    'cache write': answer.usage?.cache_creation_input_tokens,
    'output tokens': answer.usage?.output_tokens,
    cost_usd: Number(answer.total_cost_usd).toFixed(4),
  }
}

// Every line number the answer names: "line 16", "Line: 16", "**Line** 16", "lines 16 and 18",
// "Zeile 16" (German), "l. 16", "review.ts:16". A range such as "Lines 18–20" or "18 to 20" names
// every line in it. A bare "16:" without the word does not count.
function linesNamedIn(text) {
  const lines = new Set()
  const pattern = /(?:\b(?:lines?|zeilen?|l\.)|review\.ts)[\s:#*_`]*(\d+(?:\s*(?:[-–,&/]|and|und|to|bis)\s*\d+)*)/gi
  for (const match of text.matchAll(pattern)) {
    for (const part of match[1].matchAll(/(\d+)(?:\s*(?:[-–]|to|bis)\s*(\d+))?/gi)) {
      const from = Number(part[1])
      const to = part[2] ? Math.min(Number(part[2]), from + 50) : from
      for (let line = from; line <= to; line++) lines.add(line)
    }
  }
  return lines
}

// One line per level: how many runs described every bug, and the spread of output tokens.
function printSummary(rows) {
  const levelOf = (row) => row.run.split('-')[0]
  for (const level of new Set(rows.map(levelOf))) {
    const levelRows = rows.filter((row) => levelOf(row) === level)
    const outputs = levelRows.map((row) => row['output tokens']).sort((a, b) => a - b)
    const mean = Math.round(outputs.reduce((sum, n) => sum + n, 0) / outputs.length)
    const perfectRuns = levelRows.filter((row) => row.found === PERFECT).length
    console.log(`${level}: ${levelRows.length} runs, ${PERFECT} in ${perfectRuns}, output tokens min ${outputs[0]} median ${median(outputs)} mean ${mean} max ${outputs[outputs.length - 1]}`)
  }
}

function median(sorted) {
  const mid = sorted.length >> 1
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
}
