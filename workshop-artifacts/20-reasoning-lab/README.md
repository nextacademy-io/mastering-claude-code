# Reasoning lab

Use `review.ts` with exactly the same review prompt at two effort levels, on the same model.

Run the lab outside the workshop repository. Copy `review.ts` into an empty folder and work there,
with the prompt pointing at `@review.ts`. Inside the workshop repository, Claude Code loads its
`CLAUDE.md`, can read the presenter notes that hold the answers, and fires the workshop
repository's Claude Code Stop hook (`.claude/hooks/deploy-slides.sh`) after every turn.

Unset `CLAUDE_CODE_EFFORT_LEVEL` first: it overrides `--effort` and `/effort`.

Participants work in a session: `claude --model sonnet`, then `/effort` with the slider on `low`,
confirmed with `s` so it applies to this session only (`Enter`, or a level typed after `/effort`,
saves it as the default), the prompt, a score, then `/clear`, the slider on `high`, the same prompt,
a second score. A session on a subscription shows no per-run token count, so they count findings.

The trainer measures the cost side in print mode, one run per level. `usage.output_tokens` in the
JSON is what the level cost; thinking is billed as output:

```bash
claude -p --model sonnet --effort low --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
```

An effort cap, from `maxEffortLevel` or from your organisation, runs a higher level at the cap;
with `--output-format json` an organisation cap does this without a warning.

The four bugs are listed in `FINDINGS.md` in this folder, the answer key of task 20. Open it after
a run, not before. The presenter note of "Same task, different effort" lists the same four.

Do not compare `total_cost_usd`: cached input bills at a lower rate, and whether the second run
reads the cache the first run wrote depends on the model and the provider. The exercise is not
designed to make high effort win every run. A tie is evidence that the small task did not justify
the extra spend.

## Measure it yourself

`measure.mjs` in this folder does the print-mode runs for you and scores them. Copy it next to
`review.ts` into the empty lab folder and run it there with Node:

```bash
node measure.mjs 10
```

That is ten runs at `low` and ten at `high`. Every answer lands in `runs/` as JSON plus a readable
`.md` copy, and the script prints a table: which of the four bugs each answer describes (a few
words per bug, English or German, so a bug counts only when the answer names its behaviour, not
when it merely cites a line), the bug lines and any other line it names, cache reads and writes,
output tokens and cost. The score is a heuristic: when a run looks off, read its `.md` and score it
against `FINDINGS.md`. Existing
runs are kept and a second call numbers on from the last run, so `10` twice gives twenty per
level; `node measure.mjs score` only re-scores. The script refuses to start while
`CLAUDE_CODE_EFFORT_LEVEL` is set.

## Measured

Ten print-mode runs per level on Sonnet 5.5 with the prompt above, one turn each, scored with
`measure.mjs` and read through by hand:

| level | correct | false positives | output tokens, median (min to max) |
|---|---|---|---|
| low | 4/4 in 10 of 10 runs | 0 | 1366 (1210 to 1532) |
| high | 4/4 in 10 of 10 runs | 0 | 1658 (1568 to 1811) |

High spent its extra tokens on longer proofs and more edge cases, not on more findings. The first
run of each level wrote the prompt cache and reports about five times the `total_cost_usd` of the
next run at the same output.
