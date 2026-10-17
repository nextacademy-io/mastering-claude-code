<!-- @note: same-task-different-effort -->
> Do:
> - Deep dive in the appendix: you got here from the chip on "Flags change how a session starts"
> - Run it in a new folder that holds only a copy of workshop-artifacts/reasoning-lab/review.ts, outside the workshop repository and your CLASH clone: no answer key, no CLAUDE.md, no project-level Claude Code hooks
> - Check that CLAUDE_CODE_EFFORT_LEVEL is not set and no maxEffortLevel cap sits below high: either one can make both runs use the same level
> - FULL WORKING SOLUTION (trainer only): claude -p --model sonnet --effort low --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
>   claude -p --model sonnet --effort high --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
> - Docs link: open it, scroll to "Set the effort level", then back to the slides

Say:
- One variable changes: effort. Score the findings and usage.output_tokens, not tone or length — thinking is billed as output
- Skip total_cost_usd: the second run reads the prompt prefix the first run cached, so its input looks cheaper
- The four findings, only after both runs: cancelled returns true; null capacity means unlimited but becomes 0; the full check uses > instead of >=; sort mutates participantIds

<!-- @note: measure-the-extra-reasoning -->
> Do:
> - Fill the table from the two live results
> - If both runs find all four, say that clearly: this task did not earn higher effort. That is a useful result
> - Afterwards the back chip returns to "Flags change how a session starts"; the next slide is "Print mode: no interaction, just an answer"

Say:
- Reasoning has value only through better decisions or less rework
- The useful comparison is total engineering effort: reasoning plus implementation plus rework plus verification
- Repeat this experiment on one real task before changing a team's default effort
