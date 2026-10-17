# Task 20 — Effort lab

> Part: Foundations · Reset branch: none, an empty folder outside your CLASH clone
> Slides: https://mastering-claude-code.vercel.app/task-20

## Theory

- [Five levels, one default per model](https://mastering-claude-code.vercel.app/theory-effort-levels)
- [Where effort is set, who wins](https://mastering-claude-code.vercel.app/theory-effort-precedence)
- [Same task, different effort](https://mastering-claude-code.vercel.app/theory-effort-lab)

> **Reminder:** Effort sets how much the model thinks on each step; measure what a higher level buys before you make it a default.

## You will end up with

Two reviews of the same file from the same prompt and the same model, one at low effort and
one at high, in one session with `/clear` between them. A filled score table: correct findings
and false positives for each run. And one sentence that says whether the extra reasoning found
more.

## Why

Effort is a knob. You turn it with a command, a flag, a setting, even per skill. Turning it up
costs tokens on every step. Whether it buys anything depends on the task. This lab makes that
visible on one small file with four known bugs: you score what each level finds, and the
trainer's runs show what each level costs. The result is often a tie, and a tie is a real
result: that task did not earn the extra reasoning.

## Do this

1. Make an empty folder outside your CLASH clone and outside the workshop repository.
   ```bash
   mkdir effort-lab
   cd effort-lab
   ```
   Copy [`workshop-artifacts/20-reasoning-lab/review.ts`](../workshop-artifacts/20-reasoning-lab/review.ts) from the workshop repository into it. The
   folder now holds one file and nothing else: no project `CLAUDE.md`, no `.claude/`, no answer
   key. That is the point. From this folder, Claude Code sees only the file; your own user
   settings still load, as in every session.
2. Check that nothing pins the level. The environment variable wins over `/effort`.
   ```bash
   echo $CLAUDE_CODE_EFFORT_LEVEL
   ```
   On Windows in PowerShell: `$env:CLAUDE_CODE_EFFORT_LEVEL`. You see an empty line. If you
   see a level name instead, open the box below.

   <details>
   <summary>A level name came back? Remove it for this terminal only</summary>

   Bash:

   ```bash
   unset CLAUDE_CODE_EFFORT_LEVEL
   ```

   PowerShell:

   ```powershell
   Remove-Item Env:CLAUDE_CODE_EFFORT_LEVEL
   ```

   Run the check again: now it prints an empty line.

   </details>

   Stay in this terminal for the session below. A new terminal can bring the variable back.

3. Start Claude Code in the folder, on Sonnet.
   ```bash
   claude --model sonnet
   ```
   Claude Code asks whether you trust this folder. Say yes. The prompt opens, and the session
   header names the model.
4. Set the effort for this session only.
   ```text
   /effort
   ```
   A slider opens. Move it to `low` and press `s`, not `Enter`: `s` applies the level to this
   session, `Enter` would save it as your default. The session header now says "with low effort".
5. Run the review.
   ```text
   Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof.
   ```
   Claude reads the file and lists its findings as text.
6. Score this run now, while the findings are on screen. Open
   [`workshop-artifacts/20-reasoning-lab/FINDINGS.md`](../workshop-artifacts/20-reasoning-lab/FINDINGS.md) in the workshop repository and unfold its
   box. It lists the four bugs with their lines. Count the findings that match one of the four,
   and the findings that match none. Fill the `low` row.

   | | correct | false positives |
   |---|---|---|
   | low | __/4 | __ |
   | high | __/4 | __ |

7. Start over in the same session.
   ```text
   /clear
   ```
   The conversation is gone. The next run starts without the first one's findings in its window.
8. Set the effort to high, again for this session only.
   ```text
   /effort
   ```
   Move the slider to `high`, press `s`. The header now says "with high effort". If the slider
   stops below `high`, an effort cap is set on your machine or by your organisation; tell the
   trainer, the comparison needs both levels.
9. Run the same review again. Only the level has changed.
   ```text
   Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof.
   ```
   You see a second list of findings, usually longer.
10. Score it the same way and fill the `high` row.
11. Write one sentence: did high effort find more on this file? The cost side, output tokens
    per level, comes from the trainer's runs on the slide "Measure the extra reasoning". The
    debrief slide after the recap shows twenty measured runs.

## Now you

- The same measurement on one real function in your CLASH clone, in a session started from the
  clone's root. Goal: a second table. This time `CLAUDE.md`, the project's rules and its Claude
  Code hooks load too. Note what else changed between the two runs besides the level.

## Check

- [ ] Both runs used the same model and the same prompt; only the effort level differs.
- [ ] The table holds four numbers, counted against the four bugs in `FINDINGS.md`.
- [ ] `/effort` in a new session opens on your old default: `s` saved nothing.
- [ ] One sentence says whether the extra reasoning found more, and "tie" is an allowed answer.

## Stuck?

There is no reset branch: the lab touches nothing in your CLASH clone. Delete the folder and
copy `review.ts` again. If both runs report the same number of findings, that is not a mistake.

## Go further

Measure the cost side yourself, in print mode: one run per level, from the lab folder. The JSON
ends with a `usage` block, and its `output_tokens` is what the level cost. Thinking is billed as
output, so it is in there.

```bash
claude -p --model sonnet --effort low --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
```

For many runs at once, [`workshop-artifacts/20-reasoning-lab/measure.mjs`](../workshop-artifacts/20-reasoning-lab/measure.mjs) does the calls and the
scoring; its `README.md` says how.

## Links

- https://code.claude.com/docs/en/model-config#adjust-effort-level
- https://code.claude.com/docs/en/cli-reference
- https://code.claude.com/docs/en/headless
