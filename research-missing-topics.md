# Research: missing topics

> Part of the planning set: `research-missing-topics.md` · `research-quick-vs-deep-dive.md` · `decision-navigation-spike.md` · `handoff-restructure.md`.
> This file: which Claude Code topics the workshop misses, checked against the official docs index. Adversarially verified — every gap below survived an independent re-check with fresh search patterns (see the Verification log).

## Method

- **Sweep scope.** All 221 pages in the Claude Code docs index (`https://code.claude.com/docs/llms.txt`), swept in eight batches. Every page got its own grep pass plus a shared pattern set per batch.
- **Status definitions.**
  - **covered** — the mechanism has a slide, a task step, or both; a docs link alone also counts when the mechanism itself is taught under it.
  - **marginal** — the mechanism is named only in presenter notes, FACILITATOR.md, docs/SETUP.md, one clause on another mechanism's slide, or a graphic column; nothing teaches it.
  - **missing** — no trace of the page's own mechanism anywhere in teaching material.
  - **out-of-scope** — no trace, and the page is enterprise/admin/reference/release-notes material that neither workshop persona operates.
- **Synonym convention.** Each page was grepped under its own terms plus the deck's words for the same idea. Example: scheduling is taught as "routines" and "/schedule", so the absent literal word "cron" is not a gap (see Verified negatives). Conversely, a shared word is not coverage: "artifact" hits are all the `workshop-artifacts/` folder, never the Claude Code feature.
- **Grep scope.** `slides/sections/`, `slides/notes/en/`, `slides/notes/de/`, `tasks/`, `docs/`, `README.md`, `FACILITATOR.md`, `workshop-artifacts/`, `scripts/`, plus `slides/components/` where graphics carry teaching text. Build output (`slides/generated/`, `slides/dist/`) ignored. All file work via Read/Grep/Glob; raw docs pages fetched as `.md` where the mechanism was unclear.
- **Personas.** "Beginner" = Parts I–II (builds CLASH). "Practitioner" = Parts III–IV (controls and orchestrates). Relevance is judged per persona.
- **Trainer hints.** The named deep-dive candidate buckets (agent teams, scheduling/automation, MCP servers) were used only to weight adjacent gaps; all three buckets themselves are covered (see Verified negatives).
- **Adversarial pass.** A second agent re-derived fresh synonym patterns (command names, flags, UI words, German words in the de notes) for every gap below and re-grepped the full scope; none produced an instructional hit, so every gap stands. Details in the Verification log.

## Gaps

Ranked by workshop value. Buckets: quick-dive candidate | deep-dive candidate | mention-only | out-of-scope.

### Code intelligence plugins (LSP)

Official-marketplace plugins (`typescript-lsp@claude-plugins-official` and siblings) connect Claude Code to a language server: diagnostics after each edit, symbol lookup instead of grep-scanning.
- Relevance: beginner — medium (CLASH is TypeScript; one install gives visible type-error feedback while building). Practitioner — high (fewer file reads, tighter feedback loops — the Part III story).
- Bucket: quick-dive candidate.
- Placement: Part III, skills section, near "A plugin bundles your setup" (or the task 08 plugin-install step).
- Extent: 1 slide.
- Evidence: https://code.claude.com/docs/en/plugins/code-intelligence + greps `code intelligence`, `LSP|language server`, `typescript-lsp` → 0 hits. Re-verified: fresh greps `LSP|language server|typescript-lsp|code intelligence|Sprachserver|go to definition|diagnostics` → only lockfile noise. Raw page fetch confirms the claim (official marketplace table incl. `typescript-lsp`, diagnostics after edits, read-only `LSP` symbol tool).

### Choose a sandbox environment

A comparison of isolation levels — built-in sandboxed Bash, sandbox-runtime, dev containers, VMs, cloud sessions — and how to pick one by threat model, especially for unattended runs.
- Relevance: beginner — low. Practitioner — high: Part IV is "letting go", and the close's rule "more freedom needs stronger evidence, isolation and limits" has no one-slide answer for which isolation boundary to use.
- Bucket: quick-dive candidate.
- Placement: Part IV, near "The sandbox limits what a command touches" (section 15) or as a debrief before the close.
- Extent: 1 slide.
- Evidence: https://code.claude.com/docs/en/sandbox-environments + greps `sandbox-environments|dev container|devcontainer|VM|virtual machine|unattended` → 0 relevant hits ("isolation" in the repo means subagent/worktree isolation). Re-verified: fresh greps `sandbox-runtime|dev container|devcontainer|virtual machine|virtuelle Maschine|isolation level|Isolationsstufe|Docker|WSL2|Isolation|isolier` → every hit is subagent/worktree isolation or the WSL2 lines on the existing sandbox slide and notes. Raw page fetch confirms the claim (comparison table of six approaches, "Choose an approach" by threat model, unattended-run guidance).

### Cloud sessions (web quickstart + cloud environments)

Claude Code running in Anthropic's cloud: connect GitHub at claude.ai/code (or `/web-setup`), submit a task, review the diff, open a PR; the environment (network level, env vars, setup scripts) is configurable and is what every routine runs in.
- Relevance: beginner — medium (zero-local-setup entry, but the workshop is local-first by design). Practitioner — medium-high: it is the substrate of the taught routines, and the trainer did this setup off-stage for task 18.
- Bucket: deep-dive candidate (scheduling/automation bucket).
- Placement: Part IV, near "Routines: the cloud runs it" (section 19). If split proposal 2 in `research-quick-vs-deep-dive.md` moves `19-automate.md` into the appendix, these slides join that deep-dive block. At minimum a presenter-note line "the routine's clone, env vars and network policy come from the cloud environment".
- Extent: 1–2 slides.
- Evidence: https://code.claude.com/docs/en/web-quickstart and https://code.claude.com/docs/en/cloud-environments + greps `cloud session|/web-setup|--cloud|claude.ai/code` → only routines/remote-control hits, 0 hits for the setup flow or environment config. Re-verified: fresh grep `web-setup|cloud session|Cloud-Session|claude.ai/code|cloud environment|Cloud-Umgebung|Cloud-Sitzung` → every hit is `claude.ai/code/routines` or the remote-control slide; nothing teaches the setup flow or environment configuration.

### Structured outputs from SDK agents

`outputFormat: { type: "json_schema", schema }` on `query()`: the agent works freely, the SDK validates the final answer against a schema and returns typed JSON.
- Relevance: beginner — none. Practitioner — high: one option turns ask-clash.mts's prose answer into typed JSON for the `/api/ask` endpoint task 16 already proposes.
- Bucket: quick-dive candidate.
- Placement: Part IV, near "ask-clash.mts" (section 17) or as a task 16 "Go further".
- Extent: 1 slide (or 0 as a Go further line).
- Evidence: https://code.claude.com/docs/en/agent-sdk/structured-outputs + greps `structured|outputFormat|json_schema|structured_output` → 0 relevant hits. Re-verified: fresh grep `outputFormat|json_schema|structured output|strukturierte Ausgabe|typed JSON|typisiertes JSON` → 0 hits. Raw page fetch confirms the claim verbatim (`outputFormat: { type: "json_schema", schema }` on `query()`, validated `structured_output` on the result message).

### The security-guidance plugin

The official `security-guidance@claude-plugins-official` plugin reviews Claude's own code changes at three hook points (per-edit, end-of-turn, commit/push) and feeds findings back into the same session.
- Relevance: beginner — high conceptual fit (a free safety net while building, nothing to invoke). Practitioner — strong: the docs present it as a worked example of hooks running a separate model call — exactly the deck's hook story.
- Bucket: quick-dive candidate.
- Placement: Part IV hooks section, near "Event · matcher · exit code", or as the official alternative in task 08's plugin-install step.
- Extent: 1 slide.
- Evidence: https://code.claude.com/docs/en/security-guidance + greps `security-guidance`, `/plugin` (content-checked) → 0 hits; existing security content is other mechanisms. Re-verified: fresh grep `security-guidance|vulnerability scan|Schwachstellen|security plugin|Sicherheits-Plugin` → 0 hits.

### /claude-security codebase scan

The official `claude-security` plugin: a multi-agent vulnerability scan built on dynamic workflows, with verified findings and reviewed patches that are never auto-applied.
- Relevance: beginner — low (heavy, token-costly). Practitioner — medium-high: a shipping, real-world use of the exact orchestration pattern section 14 teaches.
- Bucket: mention-only.
- Placement: one line in the section 14 debrief ("Which pattern did we just run?") or FACILITATOR.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/claude-security + greps `claude-security|/security|scan` → 0 hits. Re-verified: fresh grep `claude-security|Schwachstellen` → 0 hits.

### Advisor

Experimental `/advisor` (or `advisorModel`): pairs the session with a stronger model consulted at decision points — before committing to a plan, on recurring errors, before declaring done. The docs compare it directly with opusplan and subagents, both taught.
- Relevance: beginner — low (experimental). Practitioner — medium-high: completes the "model supplies capability" framing.
- Bucket: mention-only (quick-dive if it leaves experimental status).
- Placement: Part II, near "Upgrade the planner, not the run".
- Extent: 0–1 slides.
- Evidence: https://code.claude.com/docs/en/advisor + greps `advisor|second opinion|escalat` → 0 hits. Re-verified: fresh grep `advisor|zweites Modell|second opinion|Zweitmeinung|stronger model|stärkeres Modell` → one "zweites Modell" hit in the de notes, which is the auto-mode classifier, not the advisor. Raw page fetch confirms every claim (experimental, `/advisor`/`advisorModel`/`--advisor`, the three decision-point moments, the "Compare with related features" table naming opusplan and subagents).

### Fast mode

A research-preview `/fast` toggle: Opus up to 2.5x faster at higher per-token cost, same quality, separate rate limits — the natural contrast to effort level.
- Relevance: beginner — low (costs extra). Practitioner — medium (completes the effort-vs-speed table next to the effort lab).
- Bucket: mention-only.
- Placement: Part I, near "Model and effort are separate" or the "Same task, different effort" lab.
- Extent: 0 slides (one line on an existing slide).
- Evidence: https://code.claude.com/docs/en/fast-mode + greps `fast mode|fast-mode|/fast` → 0 mechanism hits, only incidental prose "fast" (hard-gap confirmed). Re-verified: fresh grep `fast.?mode|/fast|2.5x|schneller als Opus|Fast-Modus` → only lockfile noise. Raw page fetch confirms every claim (research preview, `/fast`, up to 2.5x faster Opus, higher per-token price, identical quality, separate fast-mode rate-limit pool), and the page itself carries a "Fast mode vs effort level" table — the contrast this entry proposes.

### Artifacts

Publish a session's output as a live web page on claude.ai: `/artifacts` lists them, versioned republish to one URL, sharing and comments.
- Relevance: beginner — medium (a wow moment, but another surface and a plan dependency). Practitioner — medium: dashboards and reports from background runs fit the automate story.
- Bucket: mention-only.
- Placement: Part IV, near "Background: the session keeps working", or add to the close's "what we left out" note (which names only Channels and Computer use).
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/artifacts + greps `/artifacts|claude.ai/code/artifact|publish` → 0 hits; every "artifact" match is the `workshop-artifacts/` folder. Re-verified: fresh greps `/artifacts|claude.ai/artifact|Artefakt|live web page` and a full `publish|veröffentlich` sweep → every "publish" hit is clash-conference's publish route (`app/api/publish/route.ts`), never the Claude Code feature.

### Claude Projects

A Projects sidebar at claude.ai/code: one ongoing conversation that coordinates a stream of related tasks, one cloud-session thread per task, shared repos and memory. Public beta, gradual rollout.
- Relevance: beginner — low (beta, needs cloud setup). Practitioner — medium-high in idea (the cloud counterpart to Part IV teams/workflows) but demo-fragile while in rollout.
- Bucket: mention-only.
- Placement: Part IV, near "Pick the parallelism primitive" — the docs' own parallel-work comparison lists it and it is the only row the deck skips.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/claude-projects + greps `Projects|claude-projects|thread` → 0 hits. Re-verified: fresh grep `Claude Projects|claude-projects|Projects sidebar|Projekte-Seitenleiste` → 0 hits; the claude.ai/code sweep above surfaced only routines.

### Development containers

Claude Code inside a dev container (devcontainer feature, auth volume, egress-allowlist firewall): the canonical answer to "where do I safely run bypass/unattended sessions".
- Relevance: beginner — low (Docker setup would hurt task 01). Practitioner — moderate: the notes already say "use only in a sandbox" and "Windows: run inside WSL2", where one pointer fits.
- Bucket: mention-only (rides along if the sandbox-environments slide is added).
- Placement: Part IV, the sandbox slide's presenter note.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/devcontainer + greps `devcontainer|dev container|docker` → 0 relevant hits (hard-gap confirmed). Re-verified: fresh grep `Docker|WSL2|devcontainer` → only lockfile noise and the WSL2-as-sandbox lines in notes (`slides/notes/en/15-hooks.md:113`), which are the sandbox slide's existing caveat, not dev-container teaching.

### Large codebases / monorepo scoping

Per-directory CLAUDE.md layering, `claudeMdExcludes`, Read deny rules for generated code, sparse worktrees, `--add-dir`/`additionalDirectories`, per-package skills.
- Relevance: beginner — low (CLASH is small). Practitioner — medium-high: the natural "where Part III scales" coda, but CLASH gives nothing to demo it on.
- Bucket: mention-only.
- Placement: Part III, near "CLAUDE.md files add up".
- Extent: 0 slides (one line plus a docs link).
- Evidence: https://code.claude.com/docs/en/large-codebases + greps `monorepo|claudeMdExcludes|add-dir|additionalDirectories|sparse` → 0 hits (hard gap `additionalDirectories` confirmed). Re-verified: fresh grep `monorepo|claudeMdExcludes|additionalDirectories|add-dir|sparse|large codebase|große Codebasis|per-directory CLAUDE` → 0 relevant hits (one unrelated comment in the hook test file).

### stream-json output format

`--output-format stream-json` in print mode: one JSON event per line as the run progresses, the machine-readable form of headless runs.
- Relevance: beginner — low. Practitioner — medium: the missing half of the taught `claude -p` / `--output-format json` pair, needed the moment a script wants progress rather than one final blob.
- Bucket: mention-only.
- Placement: Part I debrief, "Print mode: no interaction, just an answer" (one extra card), or the "Headless in CI" slide note.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/headless + grep `stream-json|stream json` → 0 hits; the headless page is otherwise covered (`claude -p`, `--output-format json` taught). Re-verified: fresh grep `stream-json|stream_json|ndjson|jsonl|zeilenweise JSON` → one `.jsonl` hit (`slides/sections/15-hooks.md:220`), which is the local-history transcript path, a different mechanism. A full `--output-format` sweep confirms only `json` is taught (`slides/sections/03-first-steps.md:175,189-190` and notes).

### Data usage policy

Anthropic's data policies: training policy by plan, retention periods, what `/feedback` sends, opt-out env vars.
- Relevance: beginner — the one question every corporate participant asks ("does Anthropic train on my code?"). Practitioner — same, plus the opt-outs.
- Bucket: mention-only.
- Placement: one FACILITATOR talking point, or one line on "Tool output becomes local history" (which covers the local side only).
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/data-usage + greps `retention|training data|DISABLE_TELEMETRY|/feedback` → 0 hits for the page's mechanisms. Re-verified: fresh grep `trainier|training data|Trainingsdaten|retention|Aufbewahrung|Datennutzung|Datenschutz|privacy|train on` → only the GDPR anecdote in the context-section notes and "trainieren" meaning model training / trainer work, never the data policy.

### Mods

A mod is a plugin of JS/TS handlers running inside Claude Code's own process: draw panes, restyle UI, intercept tool calls, add instant commands. Distinct from settings hooks (external shell commands).
- Relevance: beginner — none. Practitioner — medium: completes the hooks-vs-skills-vs-MCP comparison and matches the "read what you install" trust line. A whole feature family absent from the deck.
- Bucket: mention-only.
- Placement: Part III, one line on "A plugin bundles your setup" ("a plugin can also ship mods — code inside the interface itself").
- Extent: 0 slides (1 slide only if the toolkit map grows a row).
- Evidence: https://code.claude.com/docs/en/plugins/mods/overview + greps `\bmods?\b|ui.render|register.js` → 0 relevant hits (the eight downstream mods pages stand or fall with this one). Re-verified: fresh grep `\bmods?\b|register\.js|ui\.render|pane|inside the interface` → every "panel/pane" hit is the subagent panel or the CLASH app's People panel; no mods teaching.

### Plugin distribution (publish, marketplaces, dependencies, evals)

Sharing the plugin task 07 builds: `marketplace.json` catalogs (create/host), directory submission, `dependencies` in plugin.json, `claude plugin eval` test suites.
- Relevance: beginner — none. Practitioner — low-medium: the missing last step after "package it as a plugin"; evals are "evidence decides when you trust it" applied to the task 07 skill.
- Bucket: mention-only.
- Placement: task 07 "Go further" (one line: "list it in a marketplace.json so your team installs it by name; test it with claude plugin eval").
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/plugins/publish, /plugins/create-marketplace, /plugins/host-marketplace, /plugins/dependencies, /plugin-evals + greps `marketplace\.json|publish|plugin.{0,30}depend|plugin eval` → 0 authoring hits; all marketplace hits are the consume side. Re-verified: fresh grep `marketplace\.json|plugin eval|create-marketplace|eigenen Marktplatz` → only lockfile noise; the consume side (`/plugin marketplace add`, `/plugin install`) is confirmed taught at `slides/sections/09-skills.md:146-150`.

### Ultrareview

`/code-review ultra`: a deep multi-agent review run as a cloud session, every finding independently verified; priced per run.
- Relevance: beginner — low (paid research preview). Practitioner — medium: the natural next step after the deck's `/code-review` pointer, hampered by per-run cost in a workshop group.
- Bucket: mention-only.
- Placement: task 05 "Go further", next to the existing `/code-review` line.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/ultrareview + greps `ultrareview|code-review ultra` → 0 hits; `/code-review` itself is mentioned (tasks/05-finish-and-ship.md:140). Re-verified: fresh grep `ultra` → every hit is `ultracode`/`ultrathink` (FACILITATOR.md, section 14, notes), never ultrareview; tasks/05-finish-and-ship.md:140 re-read and does mention `/code-review` without the ultra tier.

### Terminal setup (incl. vim mode)

Symptom-driven terminal fixes: `/terminal-setup` for Shift+Enter newlines, Option-as-Meta, notification bell, vim editing mode, theme matching.
- Relevance: beginner — medium (multiline prompts are early friction; belongs in pre-flight, not slides). Practitioner — low.
- Bucket: mention-only.
- Placement: docs/SETUP.md, one line.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/terminal-config + greps `terminal-config|/terminal-setup|Shift+Enter|vim` → 0 hits (hard gap "vim mode" confirmed inside this page). Re-verified: fresh grep `terminal-setup|Shift\+Enter|vim|Option.?as.?Meta|notification bell|multiline` → the only "notification bell" hits are CLASH's in-app bell feature, a different thing.

### Keybindings

`/keybindings` creates `~/.claude/keybindings.json`: rebind keys, chords, unbind defaults, applied live.
- Relevance: beginner — low. Practitioner — low-medium (personalization; nothing in the workshop depends on it).
- Bucket: mention-only.
- Placement: one line on "Keys worth knowing" (Part I).
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/keybindings + greps `keybinding|keybindings.json|rebind` → 0 hits. Re-verified: fresh grep `keybinding|rebind|chord|Tastenbelegung` → only lockfile noise (d3-chord).

### Deep links

A `claude-cli://` URL scheme that opens a local session in the right repo with a prompt pre-filled but not sent; meant for runbooks, alerts, READMEs.
- Relevance: beginner — low. Practitioner — medium (one-click investigation entry points fit the automate story).
- Bucket: mention-only.
- Placement: one line on an automate slide (section 19) at most.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/deep-links + greps `deep.?link|claude-cli` → 0 hits. Re-verified: fresh grep `deep.?link|claude-cli://` → one prose use of "deep link" in CLAUDE.md about theory route aliases, unrelated to the URL scheme.

### SDK production concerns (streaming I/O, approvals, session storage, hosting)

Streaming input/output modes, the `canUseTool` approval callback, `SessionStore` adapters, and subprocess hosting patterns — everything between "one script" and "a shipped SDK product".
- Relevance: beginner — none. Practitioner — moderate, and only after task 16; the workshop's SDK agents are deliberately read-only one-shot scripts.
- Bucket: mention-only (collectively).
- Placement: task 16 "Go further" or FACILITATOR ("when this becomes a product, read these four pages").
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/agent-sdk/streaming-vs-single-mode, /streaming-output, /user-input, /session-storage, /hosting + greps `includePartialMessages|canUseTool|SessionStore|hosting` → 0 hits each. Re-verified: fresh grep `canUseTool|SessionStore|includePartialMessages|streaming input` → 0 hits.

### Telemetry / OpenTelemetry

`CLAUDE_CODE_ENABLE_TELEMETRY=1` + `OTEL_*_EXPORTER` export usage, cost and tool-activity metrics to any collector; same mechanism from the SDK via `options.env`.
- Relevance: beginner — none. Practitioner — moderate for team leads, but the deck measures cost at the individual level (`/usage`, `/cost`, `total_cost_usd` — all covered), which serves both personas.
- Bucket: mention-only (FACILITATOR), borderline out-of-scope.
- Placement: FACILITATOR "beyond the workshop" line.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/monitoring-usage and /agent-sdk/observability + greps `OpenTelemetry|otel|telemetry|CLAUDE_CODE_ENABLE_TELEMETRY` → 0 hits (hard-gap confirmed). Re-verified: fresh grep `OTEL|OpenTelemetry|telemetr|Telemetrie` → 0 hits.

### Voice dictation

`/voice`: hold-to-record dictation tuned for coding vocabulary; needs claude.ai sign-in and a microphone.
- Relevance: beginner — low (demo garnish). Practitioner — low.
- Bucket: mention-only.
- Placement: a "what else exists" line at most.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/voice-dictation + greps `voice|dictat|/voice` → 0 mechanism hits ("voice" appears only as a prose metaphor in output-styles material). Re-verified: fresh grep `voice|dictat|Diktat|Mikrofon|microphone` → confirms: every "voice" hit is the output-style metaphor ("An output style sets the voice").

### Screen reader support

`claude --ax-screen-reader` replaces the TUI with labeled linear text; plus reduced motion and daltonized themes.
- Relevance: beginner — low-medium (matters a lot to affected participants, nothing to the rest). Practitioner — low.
- Bucket: mention-only.
- Placement: docs/SETUP.md, one line.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/accessibility + greps `accessibility|screen reader` → only agent-browser "accessibility-tree" hits, unrelated. Re-verified: fresh grep `screen.?reader|Screenreader|ax-screen|barrierefrei|reduced motion` → 0 hits.

### Desktop app (Code tab)

Claude Code with a GUI: Local/Cloud/SSH/WSL targets, diff view with inline comments, parallel sessions, scheduled tasks — the gentlest on-ramp for non-terminal people.
- Relevance: beginner — medium-high in principle, but the workshop deliberately chose the terminal. Practitioner — low (the deck's mechanisms are CLI-first).
- Bucket: mention-only.
- Placement: one "same engine, other surface" line on "In your editor" (Part I).
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/desktop-quickstart + greps `desktop|Cowork|Code tab` → 0 hits in sections/tasks; the Desktop surfaces only as a scheduled-task column (see Marginal). Re-verified: fresh grep `desktop` (case-insensitive, whole repo) → exactly four hits: `slides/components/G25ScheduleOptions.vue:2,8` ("Desktop task" column) and `slides/notes/en|de/19-automate.md:116` — the marginal spots named below, nothing instructional.

### Slack integration

@Claude in a Slack channel spins up a cloud session under your own account; mid-migration to the org-level Claude Tag.
- Relevance: beginner — low. Practitioner — low-medium (a "letting go" anecdote), but it needs cloud sessions plus a Slack workspace and the feature is mid-migration — poor workshop material.
- Bucket: out-of-scope (revisit when the Claude Tag migration settles).
- Placement: none.
- Extent: 0 slides.
- Evidence: https://code.claude.com/docs/en/slack + grep `Slack|@Claude` → 0 hits. Re-verified: fresh case-insensitive grep `Slack` across the repo → 0 hits of any kind.

## Marginal coverage

Each: where it appears, promote-or-leave, evidence.

- **Desktop app** (`desktop`, `desktop-scheduled-tasks`) — appears only as the "Desktop task" column in `slides/components/G25ScheduleOptions.vue:8` and the note line `slides/notes/en/19-automate.md:116`. Leave: the contrast column does its one job (where automation runs); teaching the surface would fork the CLI-first design. Evidence: greps `desktop` → those two spots only (re-verified, see Verification log).
- **/doctor and troubleshooting** (`troubleshoot-install`, `troubleshooting`, `debug-your-config`) — docs/SETUP.md:240 (`/doctor` row) and the SETUP troubleshooting table. Leave: pre-flight is the right altitude for install problems. One cheap promote: the "why didn't my config load" method (settings precedence + `/status` + safe mode) could be one FACILITATOR line, since its pieces (/context, /hooks, /mcp, /skill-doctor) are all taught separately. Evidence: grep `/doctor` → SETUP.md only.
- **Statusline** (`statusline`) — named only as the trigger of the built-in `statusline-setup` subagent (`slides/sections/10-subagents.md:129`). Leave: configuring a status line teaches no workshop mechanism; the subagent card already uses it as an example. Evidence: grep `statusline|status line` → that card and its note only (hard-gap check resolved to marginal, not missing; re-read confirmed the card at 10-subagents.md:129).
- **Cloud sessions page** (`claude-code-on-the-web`) — notes only (`slides/notes/en/19-automate.md:115-117`, `notes/en/17-letting-go.md:88`), as the substrate of routines and the contrast to Remote Control. Promote if the cloud-sessions gap above is taken; otherwise leave.
- **Mobile** (`mobile`) — one clause on the remote-control slide (`slides/sections/17-letting-go.md:124`). Leave: the clause places it correctly; its own mechanisms need cloud setup. Re-verified: line 124 reads "/remote-control connects claude.ai/code or the mobile app to this session".
- **Computer use** (`computer-use`) — named as a deliberate omission (`slides/notes/en/21-close.md:26`, FACILITATOR.md:496). Leave: parked on purpose.
- **Channels** (`channels`, `channels-reference`) — same deliberate-omission line (FACILITATOR.md:495, notes/en/21-close.md:26). Leave: parked on purpose.
- **Local /code-review** (`code-review`) — one-line pointers (`slides/sections/07-build-finish-ship.md:76`, `tasks/05-finish-and-ship.md:140`); the page's managed PR-review product has no trace. Leave the pointer; the PR-time story is the self-built action in task 15. Re-verified: tasks/05:140 is a one-line "Go further" pointer, not teaching.
- **Anthropic's marketplaces** (`plugins/anthropic-marketplaces`) — trainer-only note (`slides/notes/en/09-skills.md:107-108`). Leave: the OWASP marketplace serves the teaching job.
- **Plugin cost measurement** (`plugins/measure`) — the adjacent `/skill-doctor` has its own slide (`slides/sections/09-skills.md:45`) and task step; plugin-specific tools untaught. Leave: the core idea (what an installed extension costs) is taught.
- **Server-managed settings** (`server-managed-settings`) — one clause on the managed-settings slide (`slides/sections/15-hooks.md:173`). Leave: deeper is admin territory.
- **Fullscreen rendering** (`fullscreen`) — a parenthetical `/tui fullscreen` caveat inside task 02 step 4 (`tasks/02-foundation.md:71`). Leave: a rendering caveat, not a mechanism the course needs. Re-verified: tasks/02-foundation.md:72-74 is the /diff panel caveat.
- **Tool search** (`agent-sdk/tool-search`) — presenter note only (`slides/notes/en/16-browser.md:99`). Leave, or promote one clause to the slide body when the MCP-schema-cost slide is next touched: the deck already teaches why schemas cost context.
- **Todo tracking** (`agent-sdk/todo-tracking`) — presenter note only (`slides/notes/en/14-teams-workflows.md:115`, the `CLAUDE_CODE_ENABLE_TODO_TOOLS=1` line). Leave: an env-var footnote for one demo.

## Verified negatives

Candidates that turned out covered — do not re-flag.

- **Headless / print mode** — own slides: "Print mode: no interaction, just an answer" (`slides/sections/03-first-steps.md:165-176`, `claude -p`, `--output-format json`; the effort lab reuses both at :187-191) and "Headless in CI" (`slides/sections/17-letting-go.md:75-81`, routeAlias theory-headless-ci, plus the `anthropics/claude-code-action@v1` code-live at :95-117). Re-read and confirmed instructional. Only the `stream-json` format is a sub-gap (see Gaps).
- **"cron"** — the literal word has 0 hits, and that is correct: the idea is taught as routines and `/schedule` ("Routines: the cloud runs it", `slides/sections/19-automate.md:156-167`; `/loop` slide at :114-121; task 18 steps). Re-read :156-167: full concept slide with routeAlias theory-routines, docs link, trigger list, `/schedule` and claude.ai/code/routines. No fix needed.
- **Agent teams** (trainer bucket hint) — covered: section 14 "Strategy two: agent teams" + task 12 (`tasks/12-team-and-workflow-audit.md:44-45` SendMessage by name, no @-mentions — re-read and confirmed).
- **Scheduling/automation** (trainer bucket hint) — covered: `/loop`, `/goal`, background sessions, routines all have slides and task 18 steps (`slides/sections/19-automate.md`, `tasks/18-automate.md`). The only adjacent gap is the cloud-environment substrate (see Gaps).
- **MCP servers** (trainer bucket hint) — covered on both sides: client (task 14, `claude mcp add`, `/mcp`) and server (task 19 builds one; section 20).
- **Cross-session messaging** — covered as flow-ways rows with full trainer script (`slides/sections/14-teams-workflows.md:170-171`, `slides/notes/en/14-teams-workflows.md:142-143`).
- **auto mode / hard_deny** — covered: task 13 Check item and Go further (`tasks/13-hooks.md:125-126,136-137` — re-read and confirmed: the Check item explains hard_deny as `settings.autoMode.hard_deny`, the Go further sends participants to the auto-mode docs), auto mode as a step in task 02.
- **Prompt caching** — covered as the slide body of "What is in the prompt, every turn" (`slides/sections/02-harness.md:34-38` — re-read and confirmed: "The cached part was sent last time already. Only the new tail costs full price") plus the fork graphic.
- **Sandboxed Bash** — covered: own slide (`slides/sections/15-hooks.md:148-166`, docs: sandboxing — re-read and confirmed: filesystem and network cards, WSL2 caveat). The gap is choosing an environment, not the sandbox itself.
- **Plugin manifest and /plugin commands** — covered: task 07 writes `plugin.json` (`tasks/07-clash-feature-skill.md:85-88` — re-read and confirmed: the file's JSON is given verbatim and loaded with `--plugin-dir`), the code-live slide runs `/plugin marketplace add` + `/plugin install` (`slides/sections/09-skills.md:140-150` — re-read and confirmed).

## Out of scope by design

Enterprise or niche pages, left out because neither persona (a beginner building CLASH, a practitioner controlling a session fleet of their own) operates them. Full list with statuses in the appendix.

- **Gateway family** (gateways, claude-apps-gateway ×6, llm-gateway ×4) — platform teams route fleets through gateways; the workshop runs on claude.ai subscription logins (`tasks/18-automate.md:179` makes that explicit).
- **Provider deployments** (amazon-bedrock, claude-platform-on-aws, google-vertex-ai, microsoft-foundry, github-actions-cloud-providers, github-enterprise-server, gitlab-ci-cd) — IT-admin wiring of a provider the participant never chooses; the taught CI path is GitHub with an Anthropic key. Hard gaps "Bedrock"/"Vertex" confirmed: 0 hits, correctly so.
- **Org administration** (admin-setup, managed-mcp, analytics, zero-data-retention, hipaa-setup, communications-kit, champion-kit, network-config, corporate-launcher, third-party-integrations, feature-availability, server-managed depth, plugins/relevance, plugins/org, mods/admin) — fleet policy and rollout collateral; no participant plays the admin.
- **Self-hosted environments** (7 pages) — runner-fleet infrastructure for platform engineers.
- **Reference duplicates** (errors, glossary, settings-reference, settings-example, marketplace-reference, plugins/loading, plugins/troubleshooting, plugins/cli-hints, mods reference family ×7, agent-sdk examples/migration-guide/troubleshooting/typescript-v2-preview/python) — lookup tables or removed/other-language duplicates of taught mechanisms.
- **Release notes** (changelog, whats-new index + 24 weekly digest pages) — dated digests; teaching them would violate hard rule 1, and each announced feature has its own page assessed above.
- **Index/landing pages** (overview-adjacent: features-overview, platforms, common-workflows, prompt-library) — hubs whose contents are taught individually; prompt-library competes with the workshop's own verbatim prompts (hard rule 5).
- **Desktop platform variants** (desktop-linux, desktop-wsl, desktop-ios-simulator) — install variants of a surface the workshop does not teach.
- **Slack / Claude Tag** (claude-tag; slack argued under Gaps) — org chat identity, mid-migration.
- **Legal and compliance** (legal-and-compliance) — license and policy reference, not a mechanism.

## Appendix: full coverage map

Status key: covered · marginal · missing · out-of-scope (oos). Grouped as in the docs index. Evidence is one anchor or the decisive zero-hit pattern.

### Getting started and core concepts

| page | status | evidence or pattern |
|---|---|---|
| overview | covered | substance spread across sections 01–03; "The loop" slide |
| quickstart | covered | tasks/01:129 Links; SETUP.md:38 |
| changelog | oos | 0 hits `changelog`; release notes |
| how-claude-code-works | covered | slides/sections/02-harness.md:24 docs link (re-read: "The loop" slide carries it) |
| features-overview | oos | 0 hits; hub page, contents taught individually |
| claude-directory | covered | slides/sections/15-hooks.md:210 docs link; tasks/13:149 |
| context-window | covered | slides/sections/08-context.md:48 "/context is an instrument" (re-read: own concept slide, routeAlias theory-context-instrument, docs link) |
| prompt-caching | covered | slides/sections/02-harness.md:34-38 slide body (re-read, confirmed) |
| memory | covered | slides/sections/08-context.md:125 "CLAUDE.md files add up" |
| sessions | covered | slides/sections/03-first-steps.md:211 --continue/--resume (flags card also at :162) |
| common-workflows | oos | linked as reference (06-build:69); grab-bag, workflows taught per task |
| prompt-library | oos | 0 hits; competes with hard rule 5 verbatim prompts |
| best-practices | covered | slides/sections/04-build-foundation.md:138 docs link |

### Surfaces and platforms

| page | status | evidence or pattern |
|---|---|---|
| platforms | oos | 0 hits; index page |
| remote-control | covered | slides/sections/17-letting-go.md:120 "Drive a session from your phone" |
| claude-projects | missing | 0 hits `Projects|claude-projects|thread` (re-verified) |
| mobile | marginal | one clause, 17-letting-go.md:124 (re-read, confirmed) |
| chrome | covered | slides/sections/16-browser.md:154 four-tool comparison |
| computer-use | marginal | notes/en/21-close.md:26 deliberate omission |
| vs-code | covered | slides/sections/03-first-steps.md:101 "In your editor" |
| jetbrains | covered | same slide, :104 |
| slack | missing | 0 hits `Slack` (re-verified, zero of any kind) |
| claude-tag | oos | 0 hits; org-admin page, redirects off Claude Code docs |
| web-quickstart | missing | 0 hits `/web-setup|--cloud`; claude.ai/code hits are routines only (re-verified) |
| claude-code-on-the-web | marginal | notes/en/19-automate.md:115-117 only |
| routines | covered | slides/sections/19-automate.md:158; tasks/18:175 (re-read, confirmed) |
| ultrareview | missing | 0 hits `ultrareview`; /code-review mentioned without it (re-verified: all `ultra` hits are ultracode/ultrathink) |

### Desktop

| page | status | evidence or pattern |
|---|---|---|
| desktop-quickstart | missing | 0 hits `desktop app|Code tab` in sections/tasks (re-verified: 4 marginal hits repo-wide, none instructional) |
| desktop | marginal | G25ScheduleOptions.vue:8 column; notes/en/19-automate.md:116 (re-verified) |
| desktop-linux | oos | 0 hits; platform variant |
| desktop-wsl | oos | WSL hits are sandbox/CLI, not Desktop (re-verified) |
| desktop-scheduled-tasks | marginal | same graphic column + note line |
| desktop-ios-simulator | oos | 0 hits `iOS|simulator` |

### Security scanning and CI

| page | status | evidence or pattern |
|---|---|---|
| security-guidance | missing | 0 hits; existing security content is other mechanisms (re-verified) |
| claude-security | missing | 0 hits `claude-security|/security scan` (re-verified) |
| code-review | marginal | one-line pointers 07-build:76, tasks/05:140 (re-read); managed PR product untraced |
| github-actions | covered | slides/sections/17-letting-go.md:75-113 (re-read: concept slide + code-live with claude-code-action@v1); tasks/15:62 |
| github-actions-cloud-providers | oos | 0 hits `Bedrock|Vertex`; task 15 uses an Anthropic key |
| github-enterprise-server | oos | 0 hits; self-hosted GitHub variant |
| gitlab-ci-cd | oos | 0 hits `GitLab`; GitHub path chosen by design |

### Agents and orchestration

| page | status | evidence or pattern |
|---|---|---|
| agents | covered | slides/sections/17-letting-go.md:59 "Pick the parallelism primitive" |
| sub-agents | covered | section 10 + tasks/08:78 |
| agent-view | covered | slides/sections/19-automate.md:140; tasks/18:137 |
| agent-teams | covered | section 14 + tasks/12:45 (re-read, confirmed) |
| cross-session-messaging | covered | flow-ways rows 14-teams:170 + notes:142 |
| workflows | covered | second half of section 14 + task 12 |
| worktrees | covered | slides/sections/17-letting-go.md:39; tasks/15:15 |

### MCP, skills, hooks, automation

| page | status | evidence or pattern |
|---|---|---|
| mcp-quickstart | covered | tasks/14:37-41 `claude mcp add` steps |
| mcp | covered | slides/sections/16-browser.md:31; tasks/19:62 |
| skills | covered | section 09 + task 07 |
| artifacts | missing | 0 hits; all "artifact" matches are workshop-artifacts/ (re-verified incl. `publish` sweep) |
| hooks-guide | covered | section 15 + task 13 |
| channels | marginal | FACILITATOR.md:495 deliberate omission |
| scheduled-tasks | covered | slides/sections/19-automate.md:114 /loop slide + routines |
| goal | covered | slides/sections/19-automate.md:84; tasks/18:102 |
| headless | covered | print-mode slide 03-first-steps:167; headless-in-CI 17-letting-go:75 (both re-read; stream-json sub-gap) |
| deep-links | missing | 0 hits `deep.?link|claude-cli` (re-verified) |
| large-codebases | missing | 0 hits `monorepo|claudeMdExcludes|additionalDirectories` (re-verified) |

### Troubleshooting

| page | status | evidence or pattern |
|---|---|---|
| troubleshoot-install | marginal | docs/SETUP.md:240 /doctor row |
| troubleshooting | marginal | SETUP.md troubleshooting table |
| debug-your-config | marginal | /doctor only; constituent commands taught separately |
| errors | oos | 0 hits; lookup index |

### Plugins

| page | status | evidence or pattern |
|---|---|---|
| plugins/overview | covered | slides/sections/09-skills.md:123; tasks/07:80-94 (re-read, confirmed) |
| plugins/install | covered | 09-skills:141 code-live (re-read, confirmed); tasks/08:122-129 |
| plugins/anthropic-marketplaces | marginal | notes/en/09-skills.md:107 trainer-only |
| plugins/code-intelligence | missing | 0 hits `LSP|language server|typescript-lsp` (re-verified + raw page fetched) |
| plugins/security | covered | tasks/08:118 "read what you install" |
| plugins/create | covered | tasks/07:85 plugin.json step (re-read, confirmed) |
| plugins/components | covered | 09-skills:130-137 six component cards |
| plugins/dependencies | missing | 0 hits `plugin.{0,30}depend` (re-verified) |
| plugin-evals | missing | 0 hits `plugin eval` (re-verified) |
| plugins/publish | missing | 0 hits `marketplace\.json` authoring (re-verified) |
| plugins/measure | marginal | /skill-doctor slide covers skill cost, not plugin cost |
| plugins/cli-hints | oos | 0 hits; CLI-vendor feature |
| plugins/create-marketplace | missing | 0 authoring hits; consume side only (re-verified) |
| plugins/host-marketplace | missing | 0 hosting hits (re-verified) |
| plugins/relevance | oos | org-admin suggestion feature |
| plugins/org | oos | enterprise fleet administration |
| plugins/troubleshooting | oos | error lookup |
| plugins/loading | oos | reference; namespacing card already on slide |
| plugins/manifest-reference | covered | manifest authored in tasks/07:85 (re-read, confirmed) |
| plugins/marketplace-reference | oos | field reference, no catalog authored |
| plugins/cli-reference | covered | the /plugin commands taught on code-live slide |

### Mods

| page | status | evidence or pattern |
|---|---|---|
| plugins/mods/overview | missing | 0 hits `\bmods?\b` (relevant) (re-verified: all pane/panel hits are the subagent panel or CLASH UI) |
| plugins/mods/create | missing | 0 hits; downstream of overview |
| plugins/mods/reference | oos | reference of untaught family |
| plugins/mods/interface | oos | downstream how-to |
| plugins/mods/gallery | oos | screenshot catalog |
| plugins/mods/events | oos | downstream how-to |
| plugins/mods/api | oos | API reference |
| plugins/mods/test | oos | author maintenance |
| plugins/mods/troubleshoot | oos | author maintenance |
| plugins/mods/admin | oos | org-admin control |

### Admin and enterprise deployment

| page | status | evidence or pattern |
|---|---|---|
| admin-setup | oos | 0 hits; org rollout planning |
| setup | covered | tasks/01:31 install step; :133 Links |
| authentication | covered | tasks/01:47 login step; tasks/18:179 API-key contrast |
| managed-settings | covered | slides/sections/15-hooks.md:171 own slide (re-read: "Your org can lock settings down") |
| server-managed-settings | marginal | one clause 15-hooks:173 |
| managed-mcp | oos | org allowlisting |
| auto-mode-config | covered | tasks/13:125 hard_deny Check item (re-read, confirmed) |
| third-party-integrations | oos | landing page |
| feature-availability | oos | availability matrix |
| amazon-bedrock | oos | 0 hits `bedrock` |
| claude-platform-on-aws | oos | 0 hits |
| google-vertex-ai | oos | 0 hits `vertex` |
| microsoft-foundry | oos | 0 hits `foundry` |
| network-config | oos | corporate proxy setup |
| corporate-launcher | oos | enterprise launcher |
| devcontainer | missing | 0 hits `devcontainer|dev container` (re-verified) |

### Gateways

| page | status | evidence or pattern |
|---|---|---|
| gateways | oos | 0 hits `gateway` |
| claude-apps-gateway | oos | enterprise product page |
| claude-apps-gateway-config | oos | config reference |
| claude-apps-gateway-spend-limits | oos | admin API |
| claude-apps-gateway-deploy | oos | ops guide |
| claude-apps-gateway-on-aws | oos | install recipe |
| claude-apps-gateway-on-gcp | oos | install recipe |
| llm-gateway | oos | org infrastructure |
| llm-gateway-connect | oos | only meaningful where an org gateway exists |
| llm-gateway-rollout | oos | admin checklist |
| llm-gateway-protocol | oos | wire-protocol reference |

### Monitoring, costs, security, compliance

| page | status | evidence or pattern |
|---|---|---|
| monitoring-usage | missing | 0 hits `OpenTelemetry|telemetry|otel` (re-verified) |
| costs | covered | slides/sections/02-harness.md:125 own slide; tasks/05:53 |
| analytics | oos | org Owner/Admin dashboard |
| security | covered | 15-hooks:224 "Security: three rules" |
| data-usage | missing | 0 hits `retention|training data|/feedback` mechanisms (re-verified incl. German synonyms) |
| zero-data-retention | oos | contractual enterprise feature |
| hipaa-setup | oos | compliance deployment |
| communications-kit | oos | rollout collateral |
| champion-kit | oos | adoption playbook |

### Settings, permissions, sandboxing, environments

| page | status | evidence or pattern |
|---|---|---|
| settings | covered | 15-hooks:138 "Settings override each other" + G21 graphic |
| settings-reference | oos | README.md:171 reference link only |
| settings-example | oos | duplicate examples of covered pages |
| permissions | covered | 02-harness:64 slide; 15-hooks:92 deny rules |
| permission-modes | covered | 03-first-steps:71 Shift+Tab; plan-mode slides |
| sandboxing | covered | 15-hooks:148 own slide (re-read, confirmed) |
| sandbox-environments | missing | 0 relevant hits; "isolation" means subagents/worktrees in repo (re-verified + raw page fetched) |
| cloud-environments | missing | 0 config hits; cloud hits are routines prose (re-verified) |
| self-hosted-environments | oos | runner-fleet infrastructure |
| self-hosted-environments-quickstart | oos | same |
| self-hosted-environments-deploy | oos | same |
| self-hosted-environments-configuration | oos | platform-engineer page |
| self-hosted-environments-testing | oos | same |
| self-hosted-environments-reference | oos | same |
| self-hosted-environments-identity | oos | same |

### Model and interface configuration

| page | status | evidence or pattern |
|---|---|---|
| model-config | covered | 03-first-steps:180 effort lab (re-read, confirmed); 01-llm:72 |
| fast-mode | missing | 0 hits `fast mode|/fast` mechanism (re-verified + raw page fetched) |
| advisor | missing | 0 hits `advisor` (re-verified + raw page fetched) |
| output-styles | covered | tasks/18:44-94 whole step block; 19-automate:31 |
| terminal-config | missing | 0 hits `/terminal-setup|Shift+Enter|vim` (re-verified) |
| fullscreen | marginal | tasks/02:71 parenthetical /tui caveat (re-read, confirmed) |
| accessibility | missing | 0 relevant hits `screen reader` (re-verified) |
| voice-dictation | missing | 0 hits `/voice|dictat` (re-verified: "voice" is the output-style metaphor only) |
| statusline | marginal | 10-subagents:129 subagent-trigger card only (re-read, confirmed) |
| keybindings | missing | 0 hits `keybindings.json|rebind` (re-verified) |

### CLI and references

| page | status | evidence or pattern |
|---|---|---|
| cli-reference | covered | 03-first-steps:150 flags slide (re-read: the flags card grid at :160-163) |
| commands | covered | 03-first-steps:49 slash-commands slide |
| env-vars | covered | 15-hooks:195 docs link; env vars used in task steps |
| tools-reference | covered | 02-harness:45 "The tools"; 08-context:12 |
| interactive-mode | covered | 03-first-steps:114 "Keys worth knowing" |
| checkpointing | covered | 05-build:47 /rewind slide; tasks/03:61 |
| hooks (reference) | covered | task 13 end to end; Links carry both hook pages |
| channels-reference | marginal | FACILITATOR.md:495 omission line |
| glossary | oos | definitions list; hard rule 2 explains terms inline |

### Agent SDK

| page | status | evidence or pattern |
|---|---|---|
| agent-sdk/overview | covered | 17-letting-go:166 docs link; tasks/16:90 |
| agent-sdk/quickstart | covered | tasks/16:26-56 quickstart in miniature |
| agent-sdk/migration-guide | oos | rename migration; participants start fresh |
| agent-sdk/troubleshooting | oos | error-keyed reference |
| agent-sdk/configuration | covered | tasks/16:36-44 options block |
| agent-sdk/examples | oos | example gallery |
| agent-sdk/agent-loop | covered | 02-harness "The loop"; 17-letting-go:165 |
| agent-sdk/claude-code-features | covered | tasks/19:223 settingSources/strictMcpConfig |
| agent-sdk/sessions | covered | CLI-side --continue/--resume; SDK resume untaught |
| agent-sdk/session-storage | missing | 0 hits `SessionStore` (re-verified) |
| agent-sdk/streaming-vs-single-mode | missing | 0 hits `SDKUserMessage` (re-verified via `streaming input`) |
| agent-sdk/user-input | missing | 0 hits `canUseTool` (re-verified) |
| agent-sdk/streaming-output | missing | 0 hits `includePartialMessages` (re-verified) |
| agent-sdk/structured-outputs | missing | 0 hits `outputFormat|json_schema` (re-verified + raw page fetched) |
| agent-sdk/custom-tools | covered | task 19 tools; in-process helper untaught |
| agent-sdk/mcp | covered | tasks/19:221 mcpServers step |
| agent-sdk/tool-search | marginal | notes/en/16-browser.md:99 only |
| agent-sdk/subagents | covered | CLI-side task 08; SDK agents option untaught |
| agent-sdk/modifying-system-prompts | covered | tasks/16:68 Now-you exercise (thin) |
| agent-sdk/skills | covered | CLI-side task 07 |
| agent-sdk/plugins | covered | CLI-side task 07 --plugin-dir |
| agent-sdk/permissions | covered | tasks/16:40-42 allowed/disallowedTools |
| agent-sdk/hooks | covered | tasks/16:57-62 PreToolUse hook step |
| agent-sdk/file-checkpointing | covered | CLI-side /rewind task 03 |
| agent-sdk/cost-tracking | covered | tasks/16:49 total_cost_usd printed |
| agent-sdk/observability | missing | 0 hits `otel|telemetry` (re-verified) |
| agent-sdk/todo-tracking | marginal | notes/en/14-teams-workflows.md:115 env var |
| agent-sdk/hosting | missing | 0 hits `hosting|Kubernetes` relevant (re-verified) |
| agent-sdk/secure-deployment | covered | 15-hooks:231 quarantine/least-privilege lines |
| agent-sdk/typescript | covered | tasks/16:31-52 the taught API's reference |
| agent-sdk/typescript-v2-preview | oos | removed API |
| agent-sdk/python | oos | other-language duplicate; workshop is TypeScript |

### What's new and legal

| page | status | evidence or pattern |
|---|---|---|
| whats-new (index + 24 weekly digest pages) | oos | release-notes digests; dated material conflicts with hard rule 1, and each announced feature has its own page assessed above |
| legal-and-compliance | oos | license/policy reference |

Totals across all 221 swept pages: covered 73 · marginal 18 · missing 36 · out-of-scope 94.

## Verification log

Adversarial re-check of the draft by an independent pass. Method: fresh synonym patterns per gap (command names, flags, UI words, German words for the de notes), case-insensitive, grepped across `slides/`, `tasks/`, `docs/`, `README.md`, `FACILITATOR.md`, `workshop-artifacts/`, `scripts/` (lockfiles and build output discounted); llms-index cross-check for every cited URL; five raw docs fetches (`.md` appended); twelve evidence citations re-read in full context.

### Gaps re-attacked (26 of 26) — all stood, 0 overturned

| Gap | Fresh patterns tried | Result |
|---|---|---|
| LSP plugins | `LSP\|language server\|typescript-lsp\|code intelligence\|Sprachserver\|go to definition\|diagnostics` | lockfile noise only — stands |
| Sandbox environments | `sandbox-runtime\|dev container\|virtuelle Maschine\|isolation level\|Isolationsstufe\|Docker\|WSL2\|Isolation\|isolier` | all hits are subagent/worktree isolation or the existing sandbox slide's WSL2 caveat — stands |
| Cloud sessions | `web-setup\|cloud session\|Cloud-Session\|claude\.ai/code\|cloud environment\|Cloud-Umgebung\|Cloud-Sitzung` | only `claude.ai/code/routines` and remote-control hits — stands |
| Structured outputs | `outputFormat\|json_schema\|structured output\|strukturierte Ausgabe\|typed JSON` | 0 — stands |
| security-guidance | `security-guidance\|vulnerability scan\|Schwachstellen\|security plugin` | 0 — stands |
| claude-security | same sweep | 0 — stands |
| Advisor | `advisor\|zweites Modell\|second opinion\|Zweitmeinung\|stronger model` | one "zweites Modell" = the auto-mode classifier — stands |
| Fast mode | `fast.?mode\|/fast\|2\.5x\|schneller als Opus\|Fast-Modus` | lockfile noise only — stands |
| Artifacts | `/artifacts\|claude\.ai/artifact\|Artefakt\|live web page` + full `publish\|veröffentlich` sweep | all "publish" is clash-conference's publish route — stands |
| Claude Projects | `Claude Projects\|claude-projects\|Projects sidebar\|Projekte-Seitenleiste` | 0 — stands |
| Dev containers | `Docker\|devcontainer\|WSL2` | WSL2-as-sandbox note lines only — stands |
| Large codebases | `monorepo\|claudeMdExcludes\|additionalDirectories\|add-dir\|sparse\|große Codebasis\|per-directory CLAUDE` | 0 relevant — stands |
| stream-json | `stream-json\|stream_json\|ndjson\|jsonl\|zeilenweise JSON` + `--output-format` sweep | one `.jsonl` = local transcript path; only `--output-format json` taught — stands |
| Data usage | `trainier\|Trainingsdaten\|retention\|Aufbewahrung\|Datennutzung\|Datenschutz\|privacy\|train on\|DISABLE_TELEMETRY\|/feedback` | GDPR anecdote and "train the team" prose only — stands |
| Mods | `\bmods?\b\|register\.js\|ui\.render\|pane\|inside the interface` | all pane/panel hits are the subagent panel or CLASH UI — stands |
| Plugin distribution | `marketplace\.json\|plugin eval\|create-marketplace\|eigenen Marktplatz` | lockfile noise only; consume side confirmed taught — stands |
| Ultrareview | `ultra` (broad) | all hits ultracode/ultrathink — stands |
| Terminal setup | `terminal-setup\|Shift\+Enter\|vim\|Option.?as.?Meta\|notification bell\|multiline` | "notification bell" = CLASH's in-app bell — stands |
| Keybindings | `keybinding\|rebind\|chord\|Tastenbelegung` | lockfile noise (d3-chord) only — stands |
| Deep links | `deep.?link\|claude-cli://` | one prose "deep link" in CLAUDE.md about theory aliases — stands |
| SDK production | `canUseTool\|SessionStore\|includePartialMessages\|streaming input` | 0 — stands |
| Telemetry | `OTEL\|OpenTelemetry\|telemetr\|Telemetrie` | 0 — stands |
| Voice dictation | `voice\|dictat\|Diktat\|Mikrofon\|microphone` | output-style "voice" metaphor only — stands |
| Screen reader | `screen.?reader\|Screenreader\|ax-screen\|barrierefrei\|reduced motion` | 0 — stands |
| Desktop app | bare `desktop` repo-wide | exactly the 4 marginal spots (G25 column + note line, en/de) — stands |
| Slack | bare `Slack` repo-wide | 0 hits of any kind — stands (evidence parenthetical corrected, see below) |

### Cited docs URLs

Every docs URL cited under ## Gaps (36 distinct pages, including the five-page plugin-distribution and five-page SDK-production bundles) was matched against the llms.txt index; all 36 appear in the index with matching titles. None broken, none removed.

Five fetched raw (`.md` appended) and checked against the draft's claims:
1. `plugins/code-intelligence.md` — confirms official-marketplace LSP plugins (`typescript-lsp@claude-plugins-official` in the table), diagnostics after each edit, read-only `LSP` symbol-lookup tool. Claim accurate.
2. `sandbox-environments.md` — confirms the comparison table (sandboxed Bash tool, sandbox runtime, dev container, custom container, VM, cloud sessions) and threat-model/unattended guidance. Claim accurate.
3. `agent-sdk/structured-outputs.md` — confirms `outputFormat: { type: "json_schema", schema }` on `query()` with validated `structured_output`. Claim accurate.
4. `fast-mode.md` — confirms research preview, `/fast`, up to 2.5x faster Opus, higher per-token price, identical quality, separate rate limits; the page even has its own "Fast mode vs effort level" table. Claim accurate.
5. `advisor.md` — confirms experimental status, `/advisor`/`advisorModel`, the three decision-point moments, and the comparison table with opusplan and subagents. Claim accurate.

### Evidence citations re-read (12)

1. `slides/sections/03-first-steps.md:165-191` — print-mode and effort-lab code-live slides with `claude -p` and `--output-format json`: real teaching. Confirmed.
2. `slides/sections/19-automate.md:156-167` — "Routines: the cloud runs it" concept slide, routeAlias theory-routines, docs link, `/schedule`. Confirmed.
3. `tasks/12-team-and-workflow-audit.md:44-45` — SendMessage by name, "no @-mention between peers", in a numbered Do-this step. Confirmed.
4. `tasks/13-hooks.md:125-126,136-137` — hard_deny Check item (names `settings.autoMode.hard_deny`) and Go further to the auto-mode docs. Confirmed.
5. `slides/sections/02-harness.md:34-38` — prompt-caching slide body ("The cached part was sent last time already. Only the new tail costs full price"). Confirmed.
6. `slides/sections/15-hooks.md:148-166` — sandbox slide with docs link, filesystem/network cards, WSL2 caveat. Confirmed.
7. `tasks/07-clash-feature-skill.md:80-95` — plugin.json authored verbatim, loaded with `--plugin-dir`, skill run namespaced. Confirmed.
8. `slides/sections/09-skills.md:140-150` — "Install from a marketplace" code-live (`/plugin marketplace add`, `/plugin install`). Confirmed.
9. `slides/sections/08-context.md:46-54` — "/context is an instrument" concept slide, routeAlias, docs link to context-window. Confirmed.
10. `slides/sections/17-letting-go.md:73-117` — "Headless in CI" concept slide + "Audit on every PR" code-live with `anthropics/claude-code-action@v1`. Confirmed.
11. `tasks/05-finish-and-ship.md:140` — `/code-review` one-line Go-further pointer, correctly rated marginal, no ultra tier. Confirmed.
12. `slides/sections/10-subagents.md:129` — `statusline-setup` named only as a built-in subagent card, correctly rated marginal. Confirmed.

### Corrections applied

- **Slack gap evidence**: the draft's parenthetical about false matches could not be reproduced — a fresh case-insensitive `Slack` grep returns zero hits of any kind. The parenthetical was replaced with "0 hits"; the gap's status is unchanged.
- **Minor line-range tightening**: print-mode slide is :165-176 (an earlier notation spanned into the effort lab, which is a second slide reusing the same flags); routines slide block is :156-167. Both notations in Verified negatives were adjusted. No status changed.
- Everything else republished verbatim: 0 gaps overturned, 0 URLs broken, all re-read citations genuinely teach their mechanism.
