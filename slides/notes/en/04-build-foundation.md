<!-- @note: build-clash -->
> Do:
> - Divider for Part II
> - Point at the four modules of this part

Say:
- "From here on you build. I show one step, you do it on your
machine. The spec is docs/SPEC.md. Claude writes the code. You decide what is good."
- Each one is a task; each task has a reset branch

<!-- @note: task-02-foundation -->
> Do:
> - Branch: 02-start has the spec plus a first CLAUDE.md

Say:
- From a brief to a working app: scaffold it, plan the data model, then build it

<!-- @note: a-brief-has-three-parts -->
> Do:
> - Participants do this in steps 1-2
> - Start in manual mode, let the group watch the first two or three permission prompts
> - Your CLASH clone is intentionally non-empty: point out the brief's rule to preserve the workshop files before create-next-app runs
> - Then switch to auto — a Next.js scaffold is standard, low-risk work
> - Show the three parts on the real Task 02 scaffold brief; contrast with the cold prompt "set up a Next.js app"

Say:
- A prompt is a wish; a brief is a contract
- [click:3] Key point: the "done when" line is the one people forget — it's what stops Claude from wandering
- It works too, but nobody — not you, not Claude — knows when it's finished

<!-- @note: read-the-diff-not-the-summary -->
> Do:
> - Participants do this in steps 3-4
> - Ask for `git status`, then run `/diff` live after the scaffold: only scaffold changes, before plan mode touches anything
> - The panel may say some files are "not shown", even new ones from a shell command: `git status`, the complete list, comes first
> - Ask Claude to commit, read the message it wrote

Say:
- Habit to build early: after every step, read `/diff` — in fullscreen the panel stays open and refreshes itself, and running `/diff` again closes it
- Claude's summary is usually right — the diff is always right
- This is a good first place to let Claude take over a chore

<!-- @note: plan-mode-read-think-propose -->
> Do:
> - Participants do this in steps 5, 7-8 — step 6 (the prompt) is next, on a live-coding slide
> - Docs link: open it, scroll to "Analyze before you edit with plan mode", then back to the slides
> - Demo live: Shift+Tab until the status bar shows "plan mode on" (two presses from Manual mode, three from auto — from v2.1.283 interactive sessions start in auto)
> - Once the next slide's prompt is sent, let the plan appear, read one part out loud, ask the group ("why lib/generated/prisma?")
> - Switch back and say "do it"

Say:
- [click] Point: the data model is hard to change later — this is the moment to look before Claude writes



<!-- @note: plan-the-data-model -->
> Do:
> - Participants do this in step 6
> - Paste the prompt with the rules as bullet points; "\" at a line's end starts a new line without sending

Say:
- SQLite has no enums
- the generated client path keeps the import stable
- tsx makes the TypeScript seed command portable across the workshop's supported Node versions
- Prisma 7.10+ may generate prisma7.config.ts; older 7.x projects can still use prisma.config.ts
- the seed is what every later task logs in with

<!-- @note: when-a-plan-earns-its-cost -->
> Do:
> - The data-model plan just earned its cost: a schema is hard to change later
> - Ask the group for one change that needs no plan. Judge: how unsure you are, how much can break, how easy to undo

Say:
- A plan costs tokens and review time: it reads code and writes one more document to check
- [click] If you can describe the diff in one sentence and check it cheaply, skip the plan

<!-- @note: a-good-plan-has-an-exit -->
> Do:
> - Go back to the data-model plan: which of the eight fields does it have?
> - Docs link: open it, scroll to "Explore first, then plan, then code", then back to the slides

Say:
- Evidence means real files, contracts and observed behavior, not a tour of your CLASH clone
- [click:2] Risks: what would make the approach wrong
- [click] Verification: how each risky step gets checked
- [click] Done is observable. Without it, a plan keeps growing during the build

<!-- @note: plan-or-roadmap -->
> Do:
> - Ask: could two middle pieces be reviewed, merged or undone on their own? If yes, they are work packages

Say:
- A plan covers one change you can check as a whole
- If the pieces can ship or be undone one by one, write a roadmap with a small plan per piece
- Smaller pieces are cheaper to review, hand off, undo and check

<!-- @note: upgrade-the-planner-not-the-run -->
> Do:
> - Docs link: open it, scroll to "opusplan model setting", then back to the slides
> - If a session already runs Opus, opusplan changes only the run: execution moves to Sonnet

Say:
- Spend the expensive model on the decision; routine execution rarely needs it
- [click] The fresh reviewer can be a subagent, no second vendor or tool: it attacks assumptions, missing constraints and verification gaps
- [click] Fix the gaps once: a reviewer asked to find gaps usually reports some
- [click] Freeze the work package, execute, verify

<!-- @note: foundation -->
> Do:
> - Task 02 recap: hand off to tasks/02-foundation.md, full 11 steps, and watch the chat — no more slides until Task 03
> - Most common stall: create-next-app and local package-manager preferences. The brief forces npm, no src/ directory, non-interactive answers and preservation of the workshop files

Say:
- 02-start = spec plus a first CLAUDE.md; 03-start = where you land if this task goes wrong
- "answer yes to everything you are not sure about."
