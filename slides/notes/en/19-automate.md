<!-- @note: nobody-at-the-keyboard -->
> Do:
> - Opener for the block. No demo yet

Say:
- So far you sat at the keyboard: you typed, Claude worked, you watched
- Five ways to step away, each one small and real
- You do the first four; the fifth needs a claude.ai plan and GitHub access

<!-- @note: task-18-automate -->
> Do:
> - Branch: 18-start in your CLASH clone, identical to 14-start; the task 13 hooks sit in .claude/settings.json
> - Warn now: every turn ends with npm run build (task 13 Stop hook), so the loop looks slow

Say:
- Five mechanisms, one task: style, goal, loop, background session, routine
- The routine step is a demo; follow on your own CLASH fork if you can

<!-- @note: an-output-style-sets-the-voice -->
> Do:
> - Docs link: the "Built-in output styles" table — what Proactive, Explanatory and Learning add
> - Live: /output-style with no argument lists the styles and marks the current one
> - Then /output-style concise and one question; then /output-style default to switch back

Say:
- Concise drops the lead-in and the recap; the work underneath stays as thorough
- Switch mid-session: the new style applies from your next message
- The choice lands in .claude/settings.local.json as outputStyle; the command ignores case, the value does not
- A style is an instruction, not a guarantee; what must always happen is a hook
- A fresh subagent runs its own system prompt, so no style reaches it

<!-- @note: host-notes-md -->
> Do:
> - FULL WORKING SOLUTION (trainer only): workshop-artifacts/18-automate/host-notes.md
>       ---
>       description: Ends every answer with one plain line for a CLASH host.
>       keep-coding-instructions: true
>       ---
>
>       Work as usual. Then end every answer with exactly one extra line.
>       That line starts with "Host note:" and says, in plain words, what changed for a CLASH host (a person who creates clashes).
>       No code, no file names and no jargon in that line. When nothing changed for a host, write: Host note: nothing changed for hosts.
> - Type the LIVE line, save, restart Claude Code: style files are read at launch
> - After the restart: /output-style host-notes, listed next to the built-ins
> - Ask: What does joinClash in app/actions/clashes.ts do? The last line starts with "Host note:"

Say:
- keep-coding-instructions: true keeps Claude Code's coding instructions under your style; default is false
- No name field, so the file name is the style name: /output-style host-notes
- A misspelled frontmatter field is ignored without an error: check the list after the restart



<!-- @note: goal-evidence-decides-when-to-stop -->
> Do:
> - Docs link: "Write an effective condition" — the three bullets, then the turn-clause sentence under them
> - Before any run, name the four parts: end state, proof, constraints, turn ceiling

Say:
- /goal is not another loop command: it sets a completion condition for this session
- [click] After each turn a small evaluator reads the transcript: met, not yet met, or impossible
- [click] Not yet met: another turn. Met or impossible: the goal clears. The turn ceiling bounds the rest
- Permissions stay as they are; unattended turns need auto mode, a separate choice
- A running subagent or background shell delays the verdict; long waits bring check-in turns, and those cost usage too
- /goal needs a trusted folder with hooks allowed; with disableAllHooks, it says why it is unavailable

<!-- @note: bound-the-work -->
> Do:
> - FULL WORKING SOLUTION (trainer only), typed as one line in your CLASH clone on a clean branch:
>   /goal npx tsc --noEmit exits 0 and npm run lint exits 0; or stop after 6 turns
> - It may finish after one turn; that is fine
> - Point at the verdict in the transcript (Ctrl+O shows its reason), then run /goal with no argument: condition, turn count, token spend. /goal shows the reason only while a goal is still active
> - Optional: set a deliberately longer condition, then /goal clear: it prints Goal cleared: with the condition. After a met goal it prints No goal set instead

Say:
- The point is the contract, not making the demo artificially long
- For real feature work, add constraints such as "no test files changed" or a browser outcome, plus a turn ceiling
- A usage limit, or a Claude Code hook that ends the turn, pauses a goal; it stays set, goes on later and is still bounded by the condition you wrote

<!-- @note: loop-the-prompt-comes-back -->
> Do:
> - Docs link: "Let Claude choose the interval", then "Stop a loop". Live in your CLASH clone, first:
>   Run npm run build in the background and tell me when it is done.
> - Then, no interval on purpose:
>   /loop tell me whether the background build has finished and whether it passed; if it failed, name the first error
> - Each round ends with the Stop hook's build, then Claude names the pause it chose
> - Esc while it waits, then ask: what scheduled tasks do I have?

Say:
- [click] Round one: Claude reports, then picks a pause from what it saw
- [click] It comes back until Esc while it waits, or until Claude calls it done
- Claude may watch with Monitor instead of a loop, or the loop may end before Esc
- Either way the check is "ran at least once, no longer listed"
- .claude/loop.md counts for a bare /loop only, never with a prompt — that is Now you

<!-- @note: background-the-session-keeps-working -->
> Do:
> - Docs link: "How file edits are isolated". Dry-run once first: the Stop hook fires in the worktree
> - Live, from a terminal at the root of your CLASH clone, not inside a session: the `claude --bg --name audit …` command from tasks/18-automate.md step 13
> - It returns at once: short id, then claude agents, claude attach <id>, claude logs <id>, claude stop <id>
> - Then claude agents: select the audit row, Space peeks, Enter attaches, ← on an empty prompt detaches

Say:
- [click] claude --bg takes the prompt as a positional argument, not -p; --name names the row
- [click] claude agents lists background sessions across all your projects; subagents are not rows
- Before its first edit the session moves into .claude/worktrees/, so docs/audit.md lands there
- The fresh worktree has no node_modules, so the Stop hook's build fails until npm install

<!-- @note: routines-the-cloud-runs-it -->
> Do:
> - Docs link: the three trigger types, then "Create from the CLI"
> - The slide table is "Compare scheduling options" from the scheduled-tasks page, cut to four rows

Say:
- [click] Cloud: your machine can be off
- [click] Cloud and Desktop tasks need no open session; only /loop does
- [click] Cloud sees no local files: every run clones CLASH fresh from its default branch
- A routine belongs to one claude.ai account; what it does on GitHub appears as you
- No permission prompts in a run: the prompt itself must say what not to do

<!-- @note: the-spec-drift-routine -->
> Do:
> - FULL WORKING SOLUTION (trainer only), typed in your CLASH clone as one message:
>   /schedule weekly spec-drift guard for CLASH. Compare the rules in docs/SPEC.md (the "Rules" and "Data" sections) with prisma/schema.prisma and with the exported Server Actions in app/actions/. When a rule and the code disagree, open a pull request that names the rule, the file and a proposed fix. One pull request per run. When nothing drifted, do nothing: no pull request, no issue, no commit.
> - Before the demo: docs/SPEC.md must sit on the CLASH fork branch the routine clones
> - Own CLASH fork only, with the claude.ai login in the CLI, not an API key
> - Then /schedule list and https://claude.ai/code/routines; change a rule in docs/SPEC.md to see a pull request

Say:
- Read the prompt aloud, pause at the last sentence: "do nothing" matters when nobody watches
- One pull request per run bounds a wrong run, like maxTurns in task 16
- A GitHub trigger needs the Claude GitHub App on your CLASH fork — that is Now you
- Connectors are claude.ai integrations: not a local claude mcp add server, but a committed .mcp.json

<!-- @note: automate -->
> Do:
> - Hand off to tasks/18-automate.md; the routine step is the trainer demo
> - Answer key: workshop-artifacts/18-automate/ with host-notes.md, loop.md, schedule-prompt.md and the README smoke tests

Say:
- Ask: which of the five needs an open session, which runs with the machine off?
- Go further: capstone brief B with claude --bg while you build brief A in the foreground
