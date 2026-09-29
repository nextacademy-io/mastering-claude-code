<!-- @note: task-01-setup-and-first-conversation -->
> Do:
> - Branch: 01-start has only docs/SPEC.md, README.md and .gitignore — nothing built yet

Say:
- Ask Claude about the spec, then /init writes your first CLAUDE.md

<!-- @note: the-prompt-is-a-chat-in-your-terminal -->
> Do:
> - Show a real turn in Claude, in the Clash repo
> - Point at the tool lines as they appear — the loop from the last section, live
> - Tool choice varies run to run — same probabilities lesson as two slides ago. If it picks Bash, the permission prompt is the gate from that section, live too
> - Press Esc while it works — stops the turn, keeps the conversation
> - Esc twice on an idle prompt opens the rewind menu instead — don't double-tap it right after stopping a turn
> - Ctrl+C twice from an idle prompt exits — mid-turn, the first press interrupts instead, like Esc

Say:
- Whatever tools appear — Read, Glob, Grep, Bash — is the loop from the last section, live

<!-- @note: point-at-files-with -->
> Do:
> - Previews tasks/01-setup-first-conversation.md step 6

Say:
- Type @ and a path; tab completes it
- File goes straight into the prompt
- Contrast: "find the spec and read it" — model greps around, reads a few wrong files, all of it lands in context too
- Pointing is cheaper and more precise
- First context-engineering habit — starts right away

<!-- @note: slash-commands -->
> Do:
> - tasks/01-setup-first-conversation.md steps 9-10 show /init, /clear, /context and /help — read the lines aloud, don't run them yet
> - /context, /usage and /rewind are only named here — /context is demoed later in this task, /usage in "Now you", /rewind in Task 03
> - Docs link: open it, scroll to "Commands across a typical workflow", then back to the slides

Say:
- Slash command = instruction to Claude Code itself
- /help lists them
- /init reads the project, writes a starter CLAUDE.md
- /clear empties the session
- [click] /context draws the bars from the harness section with real numbers
- [click] /usage shows what this session spent
- [click] /rewind takes files and conversation back to an earlier point — Claude Code checkpoints before every change

<!-- @note: the-permission-prompt -->
> Do:
> - Trigger one live — ask it to install a package
> - Press Shift+Tab once to reach manual first
> - Read the three options
> - Name it, don't pick it

Say:
- In auto mode the classifier decides instead of you; a prompt still appears for ask rules, the first read outside the working folder, or after repeated blocks
- Option two writes a rule into settings — allows this class of command from now on
- Option three lets you type a correction
- Bash prompts can show one more choice, "Yes, and switch to auto mode"
- Shift+Tab cycles the modes: auto → manual → accept edits → plan → back to auto. With no mode set and auto mode available, every interactive session starts in auto (since v2.1.283; before, only Pro, Max and Team); claude -p starts in manual — and so can the first session right after installing
- Accept-edits stops asking for file edits; plan mode is read-only
- Plan mode gets used a lot from the next part on

<!-- @note: claude-md-is-your-standing-instruction -->
> Do:
> - Open the file /init produced
> - Keep it short — every line is in every prompt
> - Docs link: open it, scroll to "CLAUDE.md files", then back to the slides

Say:
- Starting point, not the final word
- Rule of thumb: telling Claude the same thing again in a new session → it belongs in CLAUDE.md
- Build part: add a rule each time the app teaches you one

<!-- @note: in-your-editor -->
> Do:
> - Mention only, don't demo at length

Say:
- [click] IDE extensions run the same Claude Code, but the VS Code panel has only some of the commands and skills, no ! shortcut and no Tab completion. For the rest, run claude in VS Code's integrated terminal — the JetBrains plugin always works that way
- Edits show as inline diffs; current file and selection passed as context
- Everyone can pick their own surface
- Workshop uses the terminal — same everywhere

<!-- @note: keys-worth-knowing -->
> Do:
> - Ask the group a question: keyboard-first or mouse-first? Use the answer to pace the shortcuts demo
> - Demo: Esc during a turn, Shift+Tab for the mode, Tab after @ to complete a path
> - Docs link: open it, scroll to "Keyboard shortcuts", then back to the slides

Say:
- "?" on an empty prompt line shows the rest of the shortcuts
- No keystroke saves to CLAUDE.md directly — the old # shortcut for that is gone. Ask Claude in words, or edit the file yourself

<!-- @note: your-first-conversation -->
> Do:
> - FULL WORKING PROMPT (trainer), three separate messages:
>   - Read @docs/SPEC.md. In one sentence, what does this app do?
>   - Which five kinds of records does the app need? Say how they connect to each other.
>   - Which screen looks hardest to build, and why?
> - Then run /init and open the CLAUDE.md it writes
> - Do not promise an exact length — /init output can vary by Claude Code version. Point out useful repo-specific guidance and the spec reference
> - Then /clear and /context: point at the CLAUDE.md line — first proof that conversation context can be cleared while repo guidance persists

Say:
- CLAUDE.md and the spec line are already inside every prompt — the budget from Part I, now with real numbers

<!-- @note: setup-and-first-conversation -->
> Do:
> - Everyone installs, clones pawsaw/clash, checks out 01-start — repo with only the spec in it
> - Then the first conversation and /init
> - Watch the chat while people work
> - Watch for people who never press Enter on the permission prompt, or who type in the terminal while Claude works
> - Usual blockers: Node version (CLASH needs 20+), login, `claude` not found right after the native install (open a new terminal). An EBADENGINE warning when someone installs Claude Code with npm is harmless — it still runs
> - Nobody moves on until Claude Code runs in their clone and CLAUDE.md exists

Say:
- Install, clone, first questions about the spec, then /init
- Done when: Claude Code runs in your clone, it answered your questions, and CLAUDE.md exists

<!-- @note: flags-change-how-a-session-starts -->
Say:
- Two different kinds of flag: what a session can do, and which session opens
- [click] --settings stacks above your own files, below managed — good for a one-off experiment
- [click] -p answers and exits. No conversation left running
- [click] --resume and --continue get their own slide, after print mode and the effort lab

<!-- @note: print-mode-no-interaction-just-an-answer -->
> Do:
> - FULL WORKING SOLUTION (trainer only): claude -p "what does package.json say the app is called?"
>   claude -p "list every route under app/(app)/" --output-format json

Say:
- This is what a script or another program calls — no terminal UI, no back-and-forth
- --output-format json gives you something you can pipe into another tool
- The "never claude -p in CI" rule from the GitHub Actions module is about that one YAML step, not this

<!-- @note: same-task-different-effort -->
> Do:
> - Run it in a new, empty folder that holds only a copy of workshop-artifacts/reasoning-lab/review.ts. Create that folder outside the workshop repository and outside your CLASH clone: no answer key, no CLAUDE.md, no project-level Claude Code hooks
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

Say:
- Reasoning has value only through better decisions or less rework
- The useful comparison is total engineering effort: reasoning plus implementation plus rework plus verification
- Repeat this experiment on one real task before changing a team's default effort

<!-- @note: pick-up-where-you-left-off -->
Say:
- Usually you want --continue: same folder, pick straight back up
- [click] --resume is for choosing: a different session, or one you left running in the background
