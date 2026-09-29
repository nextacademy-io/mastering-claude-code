# Reasoning lab

Use `review.ts` with exactly the same review prompt at two effort levels, on the same model.

Run the lab outside the workshop repository. Copy `review.ts` into an empty folder and run both
commands there, with the prompt pointing at `@review.ts`. Inside the workshop repository,
`claude -p` loads its `CLAUDE.md`, can read the presenter notes that hold the answers, and fires
the workshop repository's Claude Code Stop hook (`.claude/hooks/deploy-slides.sh`) after every
run.

Unset `CLAUDE_CODE_EFFORT_LEVEL` first: it overrides `--effort`. An effort cap, from
`maxEffortLevel` or from your organisation, runs a higher level at the cap; with
`--output-format json` an organisation cap does this without a warning.

The trainer ground truth is in the presenter note of "Same task, different effort", not in this
folder.

Score correct findings, false positives and output tokens (`usage.output_tokens` in the JSON;
thinking is billed as output). Do not compare `total_cost_usd`: the second run reads the prompt
prefix the first run cached. The exercise is not designed to make high effort win every run. A
tie is evidence that the small task did not justify the extra spend.
