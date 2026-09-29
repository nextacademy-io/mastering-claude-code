<!-- @note: hooks-rules-the-agent-cannot-cross -->
> Do:
> - Assume nobody has written a hook yet
> - Build one slowly, then show three fast

Say:
- Naming trap: CLASH's `hooks/` folder is React hooks (one file, `use-mobile.ts`)
- Claude Code hooks live in `.claude/settings.json` — different things

<!-- @note: task-13-hooks -->
> Do:
> - Branch: 13-start already has the reference app, the skill and CLAUDE.md — no hooks yet

Say:
- Four hooks to learn, four hooks to build — the first one gets written wrong, on purpose

<!-- @note: event-matcher-exit-code -->
> Do:
> - Open `.claude/settings.json`
> - Next slide turns that into a lesson, on purpose
> - Docs link: open it, scroll to "How hooks work", then back to the slides

Say:
- A hook needs three things: the EVENT, the MATCHER (which tool), the EXIT CODE — everything else is detail
- Critical rule: only exit code 2 blocks
- [click] On PreToolUse/PostToolUse, plain exit-0 stdout goes only to the debug log — Claude never sees it
- [click] What reaches the agent: stderr on exit 2, or structured JSON on stdout at exit 0
- Matcher matches the TOOL NAME, not a file path

<!-- @note: one-hook-slowly -->
> Do:
> - This is the DELIBERATE mistake — write it exactly as shown
> - Edit a file under `app/actions/` through Claude Code — nothing fires. Let it sit. Ask why.
> - Fix live with the sibling "if" field:
>   "matcher": "Edit|Write",
>   "hooks": [{ "type": "command",
>     "if": "Edit(app/actions/**)",
>     "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/typecheck-actions.sh",
>     "timeout": 60 }]
> - Then write `.claude/hooks/typecheck-actions.sh` (reference: `workshop-artifacts/13-hooks/`)
> - Introduce a type error into `app/actions/venues.ts` on purpose, through Claude Code, so the hook fires
> - Watch `tsc` fail, watch Claude get the failure on stderr, watch it fix its own code — the moment people remember

Say:
- Answer: matcher matches the TOOL NAME (Edit, Write, Bash), not a path — a path glob there is parsed as an unanchored regex against the tool name and never matches
- `if` holds exactly one permission rule — no `or`, no list. An `Edit(...)` rule covers every file-editing tool, so it catches Write too

<!-- @note: three-more-fast -->
> Do:
> - Move quickly — the idea is already in their heads

Say:
- [click:2] Output replacement: PostToolUse supports `hookSpecificOutput.updatedToolOutput` for ALL tools, not only MCP
- Use it to collapse a noisy `npm run build` log into one pass/fail line before it reaches context
- The replacement needs the tool's own shape. For Bash that is an object with stdout, stderr, interrupted and isImage; a plain string is ignored and the full log still arrives
- Same "context is a budget" argument, now applied to a hook instead of a CLAUDE.md rule

<!-- @note: pretooluse-deny-rules -->
> Do:
> - FULL WORKING SOLUTION (trainer only): `workshop-artifacts/13-hooks/settings.json`
> - Try editing a file under `prisma/migrations/`, watch the denial on screen

Say:
- Three separate matcher blocks, one per tool: Edit/Write for migrations, Bash for `rm`, Read for `.env`
- `hookSpecificOutput.permissionDecision` values: allow/deny/ask — the plain exit-2 form works the same

<!-- @note: gate-the-turn -->
> Do:
> - FULL WORKING SOLUTION (trainer only): `workshop-artifacts/13-hooks/build-gate.sh`
> - Break the build on purpose, try to end the turn, watch Stop refuse and hand the failure tail to the agent
> - Fix, end the turn, watch it succeed
> - Name that distinction

Say:
- Wired under "Stop" with no matcher — Stop has no tool to match on
- Stop gates the end of a TURN, not a tool call
- `set -euo pipefail`: -e stops at the first failing command outside an if, -u at an unset variable, pipefail fails a pipeline like a | b when any part fails. An -e stop exits 1, not 2, so it does not block: that is why the build runs inside an if

<!-- @note: advice-vs-law -->
> Do:
> - Foreshadow from the skills part pays off
> - Mention `hard_deny` in passing
> - Name it, don't configure it

Say:
- Skills are advice, hooks are law
- [click] A skill is what you tell a new colleague; a hook is what CI rejects
- If a CLAUDE.md rule keeps getting repeated and the agent keeps drifting past it, that rule wanted to be a hook
- `hard_deny` is `settings.autoMode.hard_deny`, part of auto mode where a classifier reviews actions instead of you — not a PreToolUse decision
- Outside auto mode hard_deny does nothing. What blocks in every mode, bypassPermissions included, is a permissions.deny rule or a PreToolUse hook

<!-- @note: settings-override-each-other -->
> Do:
> - Docs link: open it, scroll to "Settings precedence", then back to the slides

Say:
- Five places hold settings. For a plain key, the highest one wins. Lists like permissions.allow, and all hooks, merge: every file adds its entries
- [click] Managed — your organization deploys it, nothing overrides it
- [click] Command line — `claude --settings`, one session only
- [click] Project local — `.claude/settings.local.json`, yours, never committed
- [click] Shared project — `.claude/settings.json`, committed, the whole team gets it
- [click] User — `~/.claude/settings.json`, every project on your machine

<!-- @note: the-sandbox-limits-what-a-command-touches -->
> Do:
> - Run `/sandbox` live if there is time — show the Mode and Config tabs
> - Mode tab: auto-allow runs sandboxed commands without a prompt; regular permissions sends every command through your normal permission rules, so unapproved ones still ask. Both keep the same limits. Allowed hosts are not a mode: they sit in the network allowlist
> - Docs link: open it, scroll to "How sandboxing works", then back to the slides

Say:
- A sandboxed Bash command still runs — the operating system enforces the limit, not a prompt
- [click] Filesystem: write access stays inside the project. Read access is wide, minus what you deny
- Network: nothing is reachable until you approve a host, once, then it is remembered
- Windows has no native sandbox — run Claude Code inside WSL2 to get one

<!-- @note: your-org-can-lock-settings-down -->
Say:
- `managed-settings.json`, MDM, or the claude.ai console — an administrator deploys it, not you
- It sits above every other file. Nothing you set overrides it
- `/status` names the managed source in force, so you always know what applies

<!-- @note: hooks -->
> Do:
> - Confirm people reproduced the broken matcher version before moving on
> - The "why didn't it fire" beat only lands if they saw the silence themselves
> - Close with `/hooks` live — a read-only browser, grouped by event: pick an event to see the hooks they just wrote under it


<!-- @note: ignored-by-git-is-not-hidden -->
> Do:
> - Point back to task 02: .env missing from git status was useful, but never a security boundary
> - Docs link: open it, point at `CLAUDE_CODE_GLOB_NO_IGNORE` and `CLAUDE_CODE_GLOB_HIDDEN` (both include the files by default), then back to the slides
> - Watch for: on macOS, Linux and WSL Claude searches with find through Bash, not Glob — those two variables change Glob only

Say:
- .gitignore answers one question: should Git track this path?
- [click] What Claude's tools can see is a different question: Glob still finds gitignored files and dotfiles by default
- [click] Our .env hook watches only the Read tool. A permission deny rule on Read also stops cat, head and tail; only the sandbox (macOS, Linux, WSL2) stops grep -r and scripts

<!-- @note: tool-output-becomes-local-history -->
> Do:
> - Do not demo a real credential. Draw the path only
> - Point at the .env hook they just built: it blocks the Read tool, not a cat in Bash
> - Docs link: open it, scroll to "Plaintext storage", then back to the slides

Say:
- Tool inputs and results are written to local session transcripts in plaintext
- If a command prints a token or Read opens a secret, that value can be in the transcript even when the file itself is gitignored
- Deny credential reads, and shorten how long transcripts are kept: cleanupPeriodDays sets it


<!-- @note: security-three-rules -->
> Do:
> - Optional: point at "Protect against prompt injection" — the safeguards Claude Code already runs; the three rules on the slide are what you add on top

Say:
- Prompt injection in one sentence: a model cannot tell data from instructions by looking
- CLASH is full of user-supplied titles and bios — prime injection surface
- Task 12's workflow already applied the rule: readers of untrusted content do not hold write tools
- Hooks make that rule law
- Subagent tool lists make the attack surface small
