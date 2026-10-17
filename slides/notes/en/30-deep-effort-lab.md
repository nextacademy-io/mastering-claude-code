<!-- @note: effort-what-the-extra-reasoning-buys -->
> Do:
> - Opener for the block. No demo yet
> - Deep dive in the appendix: you got here from the chip on "Flags change how a session starts"

Say:
- The main line said what effort is: reasoning spent on this task, never a fix for missing context
- Here you see what a level costs and what it finds, on one file with four known bugs
- Two concept slides first, then the two live runs, then the score table

<!-- @note: task-20-effort-lab -->
> Do:
> - No reset branch: the lab runs in an empty folder outside your CLASH clone, holding only a copy of workshop-artifacts/20-reasoning-lab/review.ts
> - Say the four bugs are in workshop-artifacts/20-reasoning-lab/FINDINGS.md, to be opened after both runs, not before

Say:
- Same file, same prompt, same model. One thing changes: /effort on low, then /clear and /effort on high, each confirmed with s
- You score findings against the four bugs, not tone or length. The output tokens come from my print-mode runs
- A tie is a valid result: this task did not earn the extra reasoning

<!-- @note: five-levels-one-default-per-model -->
> Do:
> - Docs link: open it, scroll to "Adjust effort level", point at the table of levels per model, then back to the slides
> - Live: /effort with no argument opens the slider; Esc closes it without a change

Say:
- Five levels on current models; Opus 4.6 and Sonnet 4.6 have no xhigh, and a level the model lacks runs as the next one below
- [click] The default is high on every model that supports effort, except Opus 5.5 and Sonnet 5.5, which start at medium
- [click] [click] The scale is calibrated per model: the same name does not mean the same amount of thinking on two models
- [click] max: deepest, prone to overthinking, and Claude Code applies it to this session only unless the environment variable sets it

<!-- @note: where-effort-is-set-who-wins -->
> Do:
> - Docs link: scroll to "Set the effort level", point at the list of ways and the frontmatter paragraph, then back
> - Live if a session is open: /effort, slider to low, s — the session header now says "with low effort". A level typed after /effort would be saved as the default

Say:
- First an explicit choice: the CLAUDE_CODE_EFFORT_LEVEL variable, the --effort flag, or /effort in the session
- [click] Then your settings: a level saved per model under modelSettings, or an effortLevel key
- [click] Then the model's default
- [click] Enter saves the level as your default, s applies it to this session only; max is always this session only
- A skill or subagent can carry an effort field in its frontmatter: it overrides the session level while it runs, not the variable. maxEffortLevel in managed settings caps every source

<!-- @note: same-task-different-effort -->
> Do:
> - Run it in a new folder that holds only a copy of workshop-artifacts/20-reasoning-lab/review.ts, outside the workshop repository and your CLASH clone: no answer key, no CLAUDE.md, no project-level Claude Code hooks
> - Check that CLAUDE_CODE_EFFORT_LEVEL is not set and no maxEffortLevel cap sits below high: either one can make both runs use the same level
> - FULL WORKING SOLUTION (trainer only): claude -p --model sonnet --effort low --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
>   claude -p --model sonnet --effort high --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
> - Participants do the same in a session: /effort, slider to low, s, the prompt, a score, /clear, slider to high, the same prompt. Print mode is yours: a session on a subscription shows no per-run token count
> - Docs link: open it, scroll to "Set the effort level", then back to the slides

Say:
- One variable changes: effort. Score the findings and usage.output_tokens, not tone or length — thinking is billed as output
- Skip total_cost_usd: cached input bills at a lower rate, and whether the second run reads the cache the first run wrote depends on the model and the provider, so the two figures do not compare
- The four findings, only after both runs: cancelled returns true; null capacity means unlimited but becomes 0; the full check uses > instead of >=; sort mutates participantIds

<!-- @note: measure-the-extra-reasoning -->
> Do:
> - Fill the table from the two live results
> - If both runs find all four, say that clearly: this task did not earn higher effort. That is a useful result

Say:
- Reasoning has value only through better decisions or less rework
- The useful comparison is total engineering effort: reasoning plus implementation plus rework plus verification
- Repeat this experiment on one real task before changing a team's default effort

<!-- @note: effort-lab -->
> Do:
> - Participants run both reviews in their own session, score against workshop-artifacts/20-reasoning-lab/FINDINGS.md, fill their table
> - Collect the sentences: how many say high effort paid off, how many say tie
> - Next comes the debrief "Ten runs per level end in a tie"; its back chip returns to "Flags change how a session starts", and the slide after that is "Print mode: no interaction, just an answer"

Say:
- Done when: two reviews, four numbers in the table, one sentence
- Now you: the same measurement on one real function in your CLASH clone, from its root, with CLAUDE.md and hooks loaded this time

<!-- @note: ten-runs-per-level-end-in-a-tie -->
> Do:
> - Show it after the sentences are collected, next to the group's tables
> - Last slide of the block: the back chip returns to "Flags change how a session starts"
> - The raw runs: twenty claude -p calls on Sonnet 5.5 with the lab prompt, one turn each, scored with measure.mjs and read through by hand. The table is in workshop-artifacts/20-reasoning-lab/README.md

Say:
- Twenty runs, twenty times all four bugs, zero false positives: on this file, low already saturates
- [click] What high bought: about a fifth more output tokens, spent on longer proofs and extra edge cases such as capacity 0 or a frozen array
- That is the tie the task warned about. The file is too small to need the reasoning; a real task with hidden coupling can look different, so repeat the measurement there before changing a default
- The cost line is the trap: the first run of each level wrote the prompt cache and reports about five times the total_cost_usd of the next run at the same output. Compare output_tokens
