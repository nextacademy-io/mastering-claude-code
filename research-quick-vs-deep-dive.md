# Research: quick dive vs deep dive

> Part of the planning set: `research-missing-topics.md` · `research-quick-vs-deep-dive.md` · `decision-navigation-spike.md` · `handoff-restructure.md`.
> Navigation: `decision-navigation-spike.md` (tested) wins. Navigation details in the proposals
> below (`deepDive:`/`backTo:` names, `deep-*`/`quick-*` aliases) predate the spike.
> This file: every slide classified core / quick / deep / mention, plus one concrete split proposal per deep-dive topic.

Merged from two blind lens classifications (a beginner lens and a practitioner lens, neither given
the trainer's candidate list) over a full deck inventory and dependency map. Merge rule: identical
labels are final; on disagreement the higher rule wins (R1 > R2 > R3 > R4 > R5 > R6 > R7 —
mechanical rules beat persona judgment). Every disagreement is logged under **Borderline calls**.
Citations of `inventory.json` and `dep-map.json` refer to intermediate analysis artifacts of this
research; every load-bearing fact is also cited with a repo path. A mechanical audit ran against
the repo afterwards; its two findings are applied in this document (see the Audit note at the end).

## Trainer decisions

- **Course mix:** at least 80% of the main flow teaches Claude Code core mechanics. Method topics
  outside Claude Code are side topics.
- **Two kinds of optional block.** A **deep dive** goes deeper into a Claude Code mechanic
  (proposals 1, 2, 3, 5, 7). An **excursion** (German notes: *Exkurs*) covers a method that is
  not a Claude Code feature: Example Mapping for business analysis and requirements engineering
  (proposal 4, task 09) and TDD (proposal 6, task 11) — both **confirmed** as excursions. Same
  appendix mechanics (`decision-navigation-spike.md`); only the label differs, e.g.
  pointer headings "Excursion: Example Mapping" / "Excursion: TDD" instead of "Deep dive: …".
- **Mechanics that must not leave with the excursions.** Both tasks carry Claude Code mechanics
  that belong to the core and need a main-flow carrier:
  - progressive disclosure in a skill (`references/`, `templates/`) — already kept as a bullet on
    "Loaded only when needed" (proposal 4);
  - `disable-model-invocation: true` (a skill only `/name` can start) — currently taught only on
    "A skill that stops itself" in the TDD block; add one bullet to "A skill is advice"
    (`09-skills.md`), which already contrasts advice and control;
  - the AskUserQuestion interview tool — currently taught only in task 09; needs one core carrier,
    e.g. a line in the task 07 skill demo or the plan-mode slides (trainer's choice).
- **Building an MCP server is an excursion** (proposal 3, task 19): server code, tool design and
  the clash-conference SDK side are MCP development, not Claude Code. **Core stays core:** what MCP
  is, `claude mcp add`, the three primitives, stdio vs http and the remote login all already live
  in `16-browser.md` (core task 14). **Rescue before moving:** "Register it, then trust it
  selectively" (`20-build-mcp.md`) teaches a Claude Code mechanic the core lacks — project scope
  via a checked-in `.mcp.json`, the one-time approval (`claude mcp list` shows Pending approval),
  and allowing single `mcp__server__tool` names in `permissions.allow`. Give it one carrier in
  `16-browser.md` (a card on "A remote server needs its own login" or one new concept slide).
- **Spec Kit and BMAD are an excursion** (proposal 8). No task depends on them — only
  `tasks/17-capstone.md` links them, and FACILITATOR.md:392 already calls them further reading.
- **Coordination patterns: proposal 1 confirmed.** Message bus and shared state (not built into
  Claude Code) become an excursion; the three patterns Claude Code can run stay core, because
  their flow-ways slides map each pattern to a Claude Code way.
- **All of `01-llm.md` stays core**, including the model internals ("One token at a time",
  "It picks from probabilities", "Why it reads everything at once", "Where the knowledge comes
  from"). Reason: how a model turns context into output is how every Claude Code mechanic works —
  what is in the context shapes the answer.
- **Borderline calls resolved.** All five stay core. "Print mode: no interaction, just an
  answer" stays in Part I and is repeated in task 15 next to "Headless in CI" — if task 15 ever
  becomes an excursion, `-p` is still taught. **Repetition is deliberate:** context management
  runs through many slides on purpose because it is the central idea; never cut a slide only
  because another one repeats its point.
- **Path-scoped rules are absolute core** — proposal 5 is rejected; task 10 and `12-rules.md` stay
  in the main flow. The current block is too short (5 slides, 2 learn items): it needs more
  content in the restructure, e.g. rules vs CLAUDE.md vs skills, the `paths` glob, and when a
  scoped rule actually loads (only when Claude's Read tool matches the glob).
- **Automate: quick dive plus deep dive** — proposal 2 confirmed.
- **Effort lab: deep dive** — proposal 7 confirmed.
- **"Claude Code is not the only harness" keeps its own slide** — the mention fold is rejected;
  `02-harness.md` stays as it is.
- **Rescued mechanics, carriers decided:** AskUserQuestion → one line in the task 07 skill demo
  ("Write the clash-feature skill"); `disable-model-invocation: true` → one bullet on "A skill is
  advice"; MCP scope and trust (`.mcp.json` project scope, one-time approval, single
  `mcp__server__tool` names in `permissions.allow`) → **one new concept slide** in
  `16-browser.md`, with notes in both locales.
- **Gaps that get slides** (from `research-missing-topics.md`): LSP code-intelligence plugins
  (core, near "A plugin bundles your setup"); the security-guidance plugin (core, hooks
  section); cloud sessions (inside the automate deep dive); **sandbox environments as core AND
  deep dive** — a core quick-dive slide next to "The sandbox limits what a command touches",
  plus a sandbox deep dive (sandboxed Bash, sandbox runtime, dev containers, VMs, cloud
  sessions, choosing by threat model). The trainer wants to build his own competence here, so
  the deep dive should also work as a self-study path.
- **All one-line gaps** (fast mode, stream-json, keybindings, `/terminal-setup`, data usage,
  advisor, structured outputs as a task 16 "Go further", and the rest of the mention-only list)
  are implemented in one batch; the trainer reviews the diff.
- **Path-scoped rules expansion — content decided:** rule vs CLAUDE.md vs skill (always loaded /
  loaded on a matching path / loaded on demand); how the `paths` glob works (only `paths` is
  read, other frontmatter is ignored without an error); when a scoped rule really loads (only
  when Claude's Read tool matches the glob — demo with `/context` before and after); a rule
  without `paths` loads at launch like `.claude/CLAUDE.md`. That last point is already taught on
  "Personal rules follow you" (`08-context.md`): the old and new rule slides must stand **close
  together** — e.g. open the expanded rules block with the without-`paths` contrast, or place the
  block so it follows the context section directly (task order 06 → 10 must still read
  sensibly; task numbers stay fixed).
- **Next.js excursion — topics decided:** Server Actions (public POST endpoint, layout guard vs
  check in the action), shadcn/ui (components copied into the project, not a package), the
  Prisma 7 setup choices plus "params and searchParams are Promises", and the base64-avatar
  payload.
- **JourneyMap shows deep dives and excursions dimmed** at the edge of their part; the main-flow
  modules stay highlighted.
- **Way of working:** no heavy parallel work. Once `decision-navigation-spike.md` is back, the
  research files, the handoff and the decision document go into one **local commit on a feature
  branch**; the restructure then runs on its own implementation branch.
- **Next.js specifics become an excursion; the general lessons stay core** (proposal 9). The
  deck teaches the transferable lesson and leaves framework detail to a "Next.js" excursion, and
  the task files get softer framing for framework-heavy prompts.

## Core share of the main flow

Counted on the decisions above. The **Impact summary** at the end predates them; where they
differ, this section wins.

- **Denominator:** every slide in the main flow, the welcome and organisation slides included.
- **Core:** Claude Code mechanics, the LLM foundations (all of `01-llm.md`), prompting craft
  (briefs, plan mode), and the structure slides of core blocks (dividers, task-intro, recap).
  General lessons taught on a framework example ("The safety moment") count as core.
- **Not core:** the welcome/organisation slides (all 10 of `00-welcome.md`, counted
  conservatively) and pointer slides that lead into an excursion.

| | main-flow slides | not core | core share |
|---|---|---|---|
| Current deck | 237 | 39 — welcome 10, Example Mapping 6, TDD block 7, Spec Kit/BMAD 3, two coordination patterns 4, MCP server build 9 (all of `20-build-mcp.md` except "Register it, then trust it selectively") | about 84% |
| After the decided moves | 198 (237 − 43 moved + 4 new: two automate quick-dive slides, the Example Mapping and MCP-server pointers) | 12 — welcome 10, two excursion pointers | about 94% |

The 43 moved slides: effort lab 2 (proposal 7, deep dive, not yet confirmed — it changes only
the denominator), Example Mapping 6, TDD 7, coordination patterns 4, Spec Kit/BMAD 3, automate 11,
MCP server 10. "Claude Code is not the only harness" (`02-harness.md`) is still counted as a
main-flow slide; its fold into the next slide is not decided.

**Tasks (second view — practice next to theory):** currently 16 of 19 tasks practise a Claude Code
mechanic (09 Example Mapping, 11 TDD and 19 MCP-server build do not). After the moves the main
flow holds 15 tasks — 01–08, 10, 12–17 — and all 15 do. Core topics keep both a theory slide and
a task.

## Rubric

The rules below are stated as both lenses applied them (the rule IDs and their application are
taken from the two lens files; both used them identically).

- **R1 — Parts I and II are core.** Every slide in section files 00–07 is core by default. A lens
  may list an exception, but an exception is persona judgment and loses to R1 on disagreement.
- **R2 — A task block inherits its task.** Every slide inside a task block (task-intro through
  recap, plus that block's stop and debrief slides) takes its task's status from the dependency
  map: core task → core slide, optional-candidate task → deep.
- **R3 — A task-linked alias never drops silently.** A slide carrying a `theory-*` alias that a
  core task file links must keep a main-flow carrier; the alias may move only to a named new
  carrier.
- **R4 — Structure inherits.** A section divider, stop slide or debrief takes the label of the
  block it opens or closes.
- **R5 — flow-ways pairs move together.** A `flow-ways` slide takes its partner slide's label and
  stays adjacent to it, repeating its heading.
- **R6 — Outside any block, persona judgment.** A slide in no task block is labeled by what the
  persona needs in the main flow: core if the flow needs it as is, quick if a short treatment
  suffices, deep or mention otherwise.
- **R7 — What-and-why stays, how-in-detail moves.** When a topic splits, the mental model and the
  when-to-use decision stay in the quick dive; mechanics, labs and catalog detail go to the deep
  dive.

Precedence: **R1 > R2 > R3 > R4 > R5 > R6 > R7.**

**Artifact definitions** (verbatim from the merge brief):

> a quick dive is 1-3 main-flow slides per topic - a mental-model slide, a when-to-reach-for-it
> slide, a pointer slide to the deep dive carrying the moved theory aliases and the docs: link

> a deep-dive block is the rest of the topic in one piece, including the INTACT task block when
> its task goes optional

One carrier note on the alias half of that definition, used by every split proposal below: this
deck gives each slide at most one `routeAlias` (no slide in `inventory.json` carries two), and the
repo rule keeps a task file's Theory link text identical to its carrier's heading. So where a
topic moves with three task-linked aliases, one pointer slide cannot carry them all. Every moved
slide stays in the deck (appendix blocks are still built), so the merged plan keeps each moved
alias on its own slide — the alias still resolves, and no task-file link text changes. The pointer
slide carries the onward link and, where useful, the topic's `docs:` link. Each alias plan states
this per alias.

**How a quick dive jumps:** the jump-and-return mechanism is specified in
`decision-navigation-spike.md` (tested in the spike) — a `deepDive: deep-<slug>` frontmatter
field on the quick-dive slides (several slides of one topic may carry it, so the group can branch
early) and a `backTo: <resume alias>` field on the dive's last slide, rendered by the layouts
through a new `DeepLink.vue`; each deep-dive block's first slide gets `routeAlias: deep-<slug>`.
The resume alias marks the END of the topic's quick dive — the last quick-dive slide for a
replacement dive, the branch slide itself for a pure insertion — so a finished deep dive
continues the main line without replaying quick-dive slides. Each split proposal below names its
resume point. Never an inline tag in a slide body.

**Labels:** `core` = stays in the main flow as is · `quick` = stays in the main flow, short form ·
`deep` = moves to a deep-dive appendix block · `mention` = shrinks to one bullet on a named slide,
own slide removed.

## Task classification

Status comes from the dependency map (tasks array); each dependency test was spot-checked against
the task files, cited as `file:line`.

| Task | Status | Dependency test (one line) | Source |
|---|---|---|---|
| 01 | core | Every later task assumes the install, login, clone; agent-browser returns in 04, 05, 14, 17. | dep-map.json task 1; tasks/14-browser-loop.md:110 |
| 02 | core | The seed is load-bearing later: task 19's smoke test counts on it, task 16 reads `prisma/seed.ts`. | tasks/19-build-your-own-mcp.md:61; tasks/16-agent-sdk.md:37 |
| 03 | core | Builds `deleteClash` and the ownership rule that 08, 10, 12 and 17 audit, restate and restore. | tasks/10-path-scoped-rules.md:15; dep-map.json task 3 |
| 04 | core | `deleteVenue` is the second audit target; the join/accept/reject flow is what task 14 tests; `new-page.md` anchors task 07. | tasks/14-browser-loop.md:17; dep-map.json task 4 |
| 05 | core | Ships the base64 avatar task 14 measures and fixes, and moves everyone onto the 06-start reference. | tasks/14-browser-loop.md:66–83; dep-map.json task 5 |
| 06 | core | Its CLAUDE.md rides on every later NN-start branch. | tasks/07-clash-feature-skill.md:114 ("the task 06 `CLAUDE.md`") |
| 07 | core | The capstone builds its feature with `/clash-feature`; task 08 leans on the plugin concept. | tasks/17-capstone.md:36; tasks/08-subagent-audit.md:118 |
| 08 | core | The capstone reruns the auditor verbatim; the seeded bug is deferred to task 12. | tasks/17-capstone.md:41; tasks/08-subagent-audit.md:105 ("Do not fix the bug yet. Task 12 does that.") |
| 09 | **optional** | Only consumer is optional task 11, and 11-start carries the task 09 spec file on the branch anyway. | tasks/11-tdd-inner-loop.md:139; dep-map.json task 9 |
| 10 | **optional** | No later task reads `server-actions.md` or the `paths:` mechanism; later branches merely carry the file. | dep-map.json task 10; tasks/11-tdd-inner-loop.md:139 (carried, not used) |
| 11 | **optional** | Nothing after it uses `lib/capacity.ts` or the tdd skill; the capstone names skill, subagent, hooks, browser — not TDD. | dep-map.json task 11; tasks/17-capstone.md:36–41 |
| 12 | core | 13-start is defined by its merged fix; task 15's extension reuses the saved workflow script. | tasks/13-hooks.md:131; tasks/15-letting-go.md:92 |
| 13 | core | Task 14 leans on its hooks; task 18's loop is paced by its Stop gate. | tasks/14-browser-loop.md:91; tasks/18-automate.md:41 |
| 14 | core | Introduces MCP, which task 19 builds on; the capstone requires the real-browser check. | tasks/19-build-your-own-mcp.md:27; dep-map.json task 14 |
| 15 | core | The capstone starts in a worktree; task 18's background session needs the worktree isolation taught here. | tasks/17-capstone.md:31 (`claude --worktree capstone`); dep-map.json task 15 |
| 16 | core | Task 19's publish route in clash-conference is a `query()` call built on this task's loop. | tasks/19-build-your-own-mcp.md:27 ("In task 16 you put the agent loop inside your own program") |
| 17 | core | The convergence point: consumes the skill (07), the subagent (08), the hooks (13), the browser check (14), the worktree (15). | tasks/17-capstone.md:31, 36, 41; dep-map.json task 17 |
| 18 | **optional** | Post-capstone plus-one: it consumes task 13's Stop gate, but nothing consumes it; task 19 depends on 14 and 16, not 18. | tasks/18-automate.md:41; dep-map.json task 18 |
| 19 | **optional** | Terminal task: nothing depends on it downstream; it names only 14 and 16 as inputs and lives partly in clash-conference. | tasks/19-build-your-own-mcp.md:27; dep-map.json task 19 |

## Per-slide classification

Block membership below comes from the dependency map (`slides[].taskBlock`), which is derived from
each task-intro's `number` frontmatter in `slides/sections/*.md`. Task status comes from the table
above. Where both lenses agreed on a label but cited different rules, the higher-precedence rule
is shown.

**Files 00–07 (collapsed):**

- `00-welcome.md`: all 10 slides core (R1).
- `01-llm.md`: all 14 slides core (R1). One lens exception on #4 overruled — see Borderline calls.
- `02-harness.md`: 15 of 16 slides core (R1). Exception (both lenses): #15 "Claude Code is not the
  only harness" → **mention** — one bullet on #16 "The model is the same for everyone. The harness
  is where you win."; slide removed, note key removed from both locale files.
- `03-first-steps.md`: 13 of 15 slides core (R1). Task-linked aliases `theory-slash-commands` (#4)
  and `theory-claude-md` (#6) keep their main-flow carriers unchanged. Exceptions (both lenses):
  #13 "Same task, different effort" → **deep** and #14 "Measure the extra reasoning" → **deep**,
  as a pair (alias `theory-effort-lab` is linked from no task file — dep-map.json aliases). #11
  and #12 disputed, resolved core — see Borderline calls.
- `04-build-foundation.md`: all 11 slides core (R1). Task-linked aliases `theory-briefs` (#3),
  `theory-plan-mode` (#5) and `theory-plan-quality` (#8) all keep their main-flow carriers unchanged.
- `05-build-auth-clashes.md`: all 7 slides core (R1). Task-linked aliases `theory-rewind` (#3),
  `theory-context-window` (#4) and `theory-server-action-safety` (#5) all keep their main-flow carriers unchanged.
- `06-build-venues-map-people.md`: all 8 slides core (R1). Task-linked aliases `theory-custom-command` (#3),
  `theory-error-feedback` (#4) and `theory-browser-feedback` (#5) all keep their main-flow carriers unchanged.
- `07-build-finish-ship.md`: all 7 slides core (R1). Task-linked aliases `theory-batching` (#2),
  `theory-memory` (#4) and `theory-code-review` (#5) all keep their main-flow carriers unchanged.

### 08-context.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Control the context | section | core | R4 | Part III divider; opens the core task 06 block |
| Eight tools, one constraint | concept | core | R6 | ToolkitMap orientation both lenses keep; parts III–IV build on it |
| Context | section | core | R4 | Divider of the core task 06 block |
| Task 06 — Context and CLAUDE.md | task-intro | core | R2 | Task 06 core (tasks/07-clash-feature-skill.md:114) |
| /context is an instrument | concept | core | R2 | Carries `theory-context-instrument`, linked from tasks/06-context-and-claude-md.md |
| Budget, or dumping ground? | concept | core | R2 | In core task 06 block |
| The shape underneath the rules | concept | core | R2 | In core task 06 block |
| CLAUDE.md from real rules | code-live | core | R2 | The block's central live demo |
| Plan mode: review first | concept | core | R2 | Carries `theory-plan-review`, linked from tasks/06 |
| A reviewed plan is not a guarantee | concept | core | R2 | In core task 06 block |
| CLAUDE.md files add up | concept | core | R2 | In core task 06 block |
| Personal rules follow you | concept | core | R2 | In block; quick-dive host for split proposal 5 (path-scoped rules) |
| @-references beat grep-and-guess | concept | core | R2 | Stop slide of the block, before the recap |
| Context and CLAUDE.md | task | core | R2 | Recap of core task 06 |

### 09-skills.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Skills | section | core | R4 | Divider of the core task 07 block |
| Task 07 — The clash-feature skill | task-intro | core | R2 | Task 07 core (tasks/17-capstone.md:36) |
| Loaded only when needed | concept | core | R2 | Carries `theory-skills` (tasks/07); gains the progressive-disclosure bullet in split proposal 4 |
| /skill-doctor: what it costs | concept | core | R2 | Carries `theory-skill-doctor` (tasks/07) |
| Commands became skills. Nothing broke. | concept | core | R2 | Resolves the task 04 slash-command carryover (dep-map.json task 4) |
| Write the clash-feature skill | code-live | core | R2 | The block's central live demo |
| A skill is advice | concept | core | R2 | Carries `theory-skill-advice` (tasks/07); sets up task 13's advice-vs-law |
| Ship something small, end to end | concept | core | R2 | Names the task's deliverable |
| Where Claude Code looks for skills | concept | core | R2 | Carries `theory-skill-install` (no task link); install mechanics the task uses |
| A plugin bundles your setup | concept | core | R2 | Task 08 leans on the plugin concept (tasks/08-subagent-audit.md:118) |
| Install from a marketplace | code-live | core | R2 | Live demo paired with the plugin slide |
| The clash-feature skill | task | core | R2 | Recap of core task 07 |

### 10-subagents.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Subagents | section | core | R4 | Divider of the core task 08 block |
| Task 08 — Subagent audit | task-intro | core | R2 | Task 08 core (tasks/17-capstone.md:41; tasks/08-subagent-audit.md:105) |
| Page guard, action guard? | code-live | core | R2 | The safety realization that motivates the audit |
| The attack surface | concept | core | R2 | Carries `theory-attack-surface` (tasks/08) |
| Find it | concept | core | R2 | Frames the seeded flaw task 12 later fixes |
| The auditor subagent | code-live | core | R2 | Carries `theory-auditor-subagent` (no task link); rerun verbatim in the capstone |
| Agent, subagent, fork: which is which | concept | core | R2 | Carries `theory-agent-subagent-fork` (tasks/08) |
| Two ways to isolate | concept | core | R2 | Carries `theory-subagents` (tasks/08) |
| Six agents ship with Claude Code | concept | core | R2 | In core task 08 block |
| Or install one that exists | concept | core | R2 | The OWASP plugin comparison; read-what-you-install safety point |
| One subagent, or read it yourself? | concept | core | R2 | Stop slide of the block |
| Subagent audit | task | core | R2 | Recap of core task 08 |

### 11-discover.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Example Mapping | section | deep | R4 | Divider of the optional task 09 block |
| Task 09 — Example Mapping and the `discover` skill | task-intro | deep | R2 | Task 09 optional (tasks/11-tdd-inner-loop.md:139) |
| Story, rule, example, question | concept | deep | R2 | Carries `theory-example-mapping`, linked only from tasks/09 — moves with the block |
| Progressive disclosure in a skill | concept | deep | R2 | Carries `theory-skill-references`, linked only from tasks/09 |
| Anatomy of /discover | code-live | deep | R2 | Live demo of the optional skill |
| The `discover` skill | task | deep | R2 | Recap of optional task 09 |

### 12-rules.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Path-scoped rules | section | deep | R4 | Divider of the optional task 10 block |
| Task 10 — Path-scoped rules | task-intro | deep | R2 | Task 10 optional (dep-map.json task 10) |
| Rules scoped to a path | concept | deep | R2 | Carries `theory-path-scoped-rules`, linked only from tasks/10 |
| A rule that only loads when it matters | code-live | deep | R2 | Live demo of the `paths:` mechanism |
| The ownership rule | task | deep | R2 | Recap of optional task 10; the rule's source (task 08's finding) stays core — tasks/10-path-scoped-rules.md:15 |

### 13-tdd.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Orchestrate and let go | section | **core** | R4 | Part IV divider — opens the part holding core tasks 12–17, not the TDD block; stays even when the block moves |
| TDD | section | deep | R4 | Divider of the optional task 11 block |
| Task 11 — The TDD inner loop | task-intro | deep | R2 | Task 11 optional (dep-map.json task 11) |
| A skill that stops itself | concept | deep | R2 | Carries `theory-tdd-cycle`, linked only from tasks/11 |
| The spec is the goalpost | concept | deep | R2 | Carries `theory-goalpost-not-target` (tasks/11); its reward-hacking warning survives as a main-flow bullet (split proposal 6) |
| One cycle: red, green, stop | code-live | deep | R2 | Live demo of the tdd skill |
| Update the test, or fix the code? | concept | deep | R2 | Stop slide of the optional block |
| The TDD inner loop | task | deep | R2 | Recap of optional task 11 |

### 14-teams-workflows.md

All 24 slides are in the core task 12 block (tasks/13-hooks.md:131; tasks/15-letting-go.md:92), so
every merged label is core. Both lenses flag the two patterns the task does not run as the only
defensible R7 moves if the trainer takes split proposal 1.

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Strategy two: agent teams | section | core | R4 | Carries `theory-agent-teams` (no task link); opens the core task 12 block |
| Task 12 — Team and workflow audit | task-intro | core | R2 | Task 12 core (tasks/13-hooks.md:131) |
| Describe the audit team | code-live | core | R2 | The task's first live step |
| Lead, peers, and a disagreement | concept | core | R2 | The topology the demo exhibits |
| Lead, peers, and a disagreement | flow-ways | core | R5 | Pairs with the slide above |
| Generator-verifier: make, then check | concept | core | R2 | Carries `theory-coordination-patterns` (tasks/12) |
| Generator-verifier: make, then check | flow-ways | core | R5 | Pairs with the slide above |
| Orchestrator-subagent: lead, helpers | concept | core | R2 | Names the pattern task 08 already ran; "Which pattern did we just run?" depends on it |
| Orchestrator-subagent: lead, helpers | flow-ways | core | R5 | Pairs with the slide above |
| The blog's agent teams: a task queue | concept | core | R2 | The pattern the task's team run approximates |
| The blog's agent teams: a task queue | flow-ways | core | R5 | Pairs with the slide above |
| Message bus: publish and subscribe | concept | core | R2 | Both lenses: the R7 move if the block is split (not built into Claude Code; not run by the task) |
| Message bus: publish and subscribe | flow-ways | core | R5 | Pairs with the slide above; moves with it in proposal 1 |
| Shared state: one store, no coordinator | concept | core | R2 | Both lenses: the other R7 move if the block is split |
| Shared state: one store, no coordinator | flow-ways | core | R5 | Pairs with the slide above; moves with it in proposal 1 |
| Strategy three: dynamic workflows | section | core | R2 | Divider inside the block; carries `theory-dynamic-workflows` (no task link) |
| Four ways to start a workflow | concept | core | R2 | Carries `theory-start-a-workflow` (no task link); how the workflow is triggered |
| Describe the fan-out | code-live | core | R2 | Live workflow prompt; carries the quarantine safety rule |
| One script, many agents | concept | core | R2 | The fan-out mental model |
| Phases: the plan you can watch | concept | core | R2 | Carries `theory-workflow-phases` (tasks/12) |
| Read the generated script | code-live | core | R2 | The task's read-the-script success criterion |
| Which pattern did we just run? | concept | core | R2 | Maps the three runs onto the patterns; gains the pointer line in proposal 1 |
| Reconcile, decide, merge | concept | core | R2 | Carries `theory-reconcile` (tasks/12) |
| Team and workflow audit | task | core | R2 | Recap of core task 12; task 15 reuses the saved script (tasks/15-letting-go.md:92) |

### 15-hooks.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Hooks: rules the agent cannot cross | section | core | R3 | Carries `theory-hooks`, linked from tasks/13-hooks.md (core) |
| Task 13 — Hooks | task-intro | core | R2 | Task 13 core (tasks/14-browser-loop.md:91; tasks/18-automate.md:41) |
| Event · matcher · exit code | concept | core | R2 | Carries `theory-hook-events` (tasks/13) |
| One hook, slowly | code-live | core | R2 | The deliberate wrong-matcher demo |
| Three more, fast | concept | core | R2 | The remaining hooks the task builds |
| PreToolUse deny rules | code-live | core | R2 | The deny set, a safety outcome of the task |
| Gate the turn | code-live | core | R2 | The Stop gate task 18 is paced by (tasks/18-automate.md:41) |
| Advice vs. law | concept | core | R2 | Carries `theory-advice-vs-law` (tasks/13) |
| Settings override each other | concept | core | R2 | Precedence once hooks live in settings files |
| The sandbox limits what a command touches | concept | core | R2 | In core task 13 block (practitioner noted an R7 reservation; R2 wins) |
| Your org can lock settings down | concept | core | R2 | In core task 13 block (same reservation; R2 wins) |
| Hooks | task | core | R2 | Recap of core task 13 |
| Ignored by Git is not hidden | concept | core | R4 | Debrief of the core block; secrets safety |
| Tool output becomes local history | concept | core | R4 | Debrief of the core block; transcript-leak awareness |
| Security: three rules | concept | core | R3 | Carries `theory-security-rules`, linked from tasks/17-capstone.md (core) |

### 16-browser.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| The browser closes the loop | section | core | R4 | Divider of the core task 14 block |
| Task 14 — The browser closes the loop | task-intro | core | R2 | Task 14 core (tasks/19-build-your-own-mcp.md:27) |
| Your systems, as tools | concept | core | R2 | Carries `theory-mcp-tools` (tasks/14); MCP's first introduction — the quick-dive mental model for proposal 3 |
| Register the servers | code-live | core | R2 | The `claude mcp add` live step |
| Drive first, then test | code-live | core | R2 | Carries `theory-browser-drive` (tasks/14) |
| Measure, fix, measure again | concept | core | R2 | Carries `theory-measure-fix` (tasks/14); measures the task 05 avatar (tasks/14-browser-loop.md:66–83) |
| The loop that matters | concept | core | R2 | Verification-loop mental model; quick-dive host for proposal 6 |
| A server offers three primitives, not one | concept | core | R2 | In core block (practitioner R7 reservation; R2 wins) — the when-to-reach slide for proposal 3 |
| A remote server needs its own login | concept | core | R2 | The task's remote MCP login step |
| The browser closes the loop | task | core | R2 | Recap of core task 14 |
| Four browser tools, one comparison | concept | core | R4 | Debrief of the core block; decision table |

### 17-letting-go.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Letting go of the wheel | concept | **quick** | R6 | Agreed by both lenses: short preview; the task-intro right after carries the same information |
| Task 15 — Letting go | task-intro | core | R2 | Task 15 core (tasks/17-capstone.md:31) |
| One repo, N isolated agents | concept | core | R2 | Carries `theory-worktrees` (tasks/15); the capstone starts in a worktree |
| /batch: many independent pull requests | concept | core | R2 | In core block (practitioner R7 reservation; R2 wins) |
| Pick the parallelism primitive | concept | core | R2 | The decision table across subagent/team/workflow/worktree/batch |
| Headless in CI | concept | core | R2 | Carries `theory-headless-ci` (tasks/15) |
| Audit on every PR | code-live | core | R2 | The `claude-code-action@v1` live skeleton |
| Drive a session from your phone | concept | core | R2 | In core block (practitioner mention-only reservation; R2 wins) |
| Letting go | task | core | R2 | Recap of core task 15 |
| Task 16 — The Agent SDK | task-intro | core | R2 | Task 16 core (tasks/19-build-your-own-mcp.md:27) |
| Same loop, inside your program | concept | core | R2 | Carries `theory-agent-sdk-loop` (tasks/16) |
| ask-clash.mts | code-live | core | R2 | The program the task builds; reads `prisma/seed.ts` (tasks/16-agent-sdk.md:37) |
| The Agent SDK | task | core | R2 | Recap of core task 16 |

### 18-capstone-close.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Task 17 — Capstone | task-intro | core | R2 | The convergence point (tasks/17-capstone.md:31, 36, 41) |
| Spec Kit: six steps, one constitution | concept | core | R2 | In core block (practitioner R7 reservation; R2 wins) |
| BMAD: five agents, one Party Mode | concept | core | R2 | Same pairing; R2 wins |
| Spec Kit vs BMAD | concept | core | R2 | The contrast slide of the methodology pair |
| Capstone | task | core | R2 | Recap of core task 17 |

### 19-automate.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Nobody at the keyboard | concept | deep | R4 | Opener of the optional task 18 block; moves with it |
| Task 18 — Automate | task-intro | deep | R2 | Task 18 optional (dep-map.json task 18) |
| An output style sets the voice | concept | deep | R2 | Carries `theory-output-styles`, linked only from tasks/18 |
| host-notes.md | code-live | deep | R2 | Live output-style demo |
| /goal: evidence decides when to stop | concept | deep | R2 | Carries `theory-goal`, linked only from tasks/18; the block's strongest keeper — mention bullet lands on 21-close.md#2 |
| Bound the work | code-live | deep | R2 | Live /goal demo |
| /loop: the prompt comes back | concept | deep | R2 | Carries `theory-loop` (no task link) |
| Background: the session keeps working | concept | deep | R2 | Carries `theory-background-sessions`, linked only from tasks/18 |
| Routines: the cloud runs it | concept | deep | R2 | Carries `theory-routines` (no task link) |
| The spec-drift routine | code-live | deep | R2 | Trainer-demo routine |
| Automate | task | deep | R2 | Recap of optional task 18; consumes task 13's Stop gate (tasks/18-automate.md:41) |

### 20-build-mcp.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Build your own MCP | section | deep | R4 | Divider of the optional task 19 block |
| Task 19 — Build your own MCP | task-intro | deep | R2 | Task 19 optional, terminal (tasks/19-build-your-own-mcp.md:27) |
| A server is four registered tools | concept | deep | R2 | Carries `theory-mcp-server-anatomy`, linked only from tasks/19 |
| Five decisions behind a good tool server | concept | deep | R2 | Carries `theory-mcp-design` (no task link) |
| mcp/server.ts | code-live | deep | R2 | The live server build |
| Register it, then trust it selectively | concept | deep | R2 | Carries `theory-mcp-json`, linked only from tasks/19; registration basics stay core on 16-browser.md#4/#9 |
| Every tool, or two named tools? | concept | deep | R2 | Stop slide of the optional block |
| Another app, same server | concept | deep | R2 | Carries `theory-mcp-from-sdk`, linked only from tasks/19; the clash-conference side |
| route.ts | code-live | deep | R2 | The clash-conference live skeleton |
| Build your own MCP | task | deep | R2 | Recap of optional task 19 |

### 21-close.md

| Heading | Layout | Label | Rule | Dependency note |
|---|---|---|---|---|
| Three levers, one responsibility | concept | core | R6 | Disagreement resolved core — see Borderline calls |
| Autonomy is earned by verification | concept | core | R6 | Disagreement resolved core; hosts the automate mention bullet (proposal 2) |
| Context is king. You push it, you own it. | concept | core | R3 | Carries `theory-context-is-king`, linked from tasks/17-capstone.md (core) |

## Split proposals

Mechanics shared by all proposals: `slides/slides.md` is a pure `src:` manifest, so a whole
section file becomes an appendix block by moving its `src:` line to the end — no new file, no
notes change. Only slides that leave a file they share with core content need a **new** section
file, and a new section file needs complete notes files in **both** locales
(`slides/notes/en/<file>.md` and `slides/notes/de/<file>.md`) or the build throws. Proposed
appendix order at the end of `slides/slides.md`: `22-deep-effort-lab.md`, `11-discover.md`,
`12-rules.md`, `23-deep-tdd.md`, `24-deep-coordination-patterns.md`, `19-automate.md`,
`20-build-mcp.md`. The jump-and-return affordance per block (first dive slide gets
`routeAlias: deep-<slug>`, the quick-dive slides get `deepDive:`, the last dive slide gets
`backTo: <resume alias>` — the end of the topic's quick dive, so the return never replays it) is
specified in `decision-navigation-spike.md`; each proposal names its resume point.

### Proposal 1 — Agent teams, coordination patterns and dynamic workflows (14-teams-workflows.md) [confirmed by trainer: the two moved patterns are an excursion]

Task 12 is **core**, so the merged labels keep the whole block in the main flow. A split here can
only come from R7 inside the block, overriding R2 for four slides at the trainer's call — both
lenses independently flagged exactly these two patterns (not built into Claude Code, not run by
the task) as the R7 move. This proposal is the trainer-mandated option; the trainer veto decides.

**KEEP** (the quick dive — the thinned core block, in `14-teams-workflows.md`, this order):
1. Strategy two: agent teams
2. Task 12 — Team and workflow audit
3. Describe the audit team
4. Lead, peers, and a disagreement (concept)
5. Lead, peers, and a disagreement (flow-ways)
6. Generator-verifier: make, then check (concept)
7. Generator-verifier: make, then check (flow-ways)
8. Orchestrator-subagent: lead, helpers (concept)
9. Orchestrator-subagent: lead, helpers (flow-ways)
10. The blog's agent teams: a task queue (concept)
11. The blog's agent teams: a task queue (flow-ways)
12. Strategy three: dynamic workflows
13. Four ways to start a workflow
14. Describe the fan-out
15. One script, many agents
16. Phases: the plan you can watch
17. Read the generated script
18. Which pattern did we just run? ← gains one pointer line to the deep dive (the two patterns not run); no new slide needed, body stays within the 40-word budget
19. Reconcile, decide, merge
20. Team and workflow audit

**MOVE** (the deep dive — new file `slides/sections/24-deep-coordination-patterns.md`, this order):
1. Message bus: publish and subscribe (concept)
2. Message bus: publish and subscribe (flow-ways)
3. Shared state: one store, no coordinator (concept)
4. Shared state: one store, no coordinator (flow-ways)

**Alias plan:** no `routeAlias` moves — none of the four moved slides carries one
(inventory.json). `theory-agent-teams`, `theory-coordination-patterns`,
`theory-dynamic-workflows`, `theory-start-a-workflow`, `theory-workflow-phases` and
`theory-reconcile` all stay on kept slides. No tasks/NN-*.md link text changes.

**Resume point (backTo target):** "Which pattern did we just run?" — the branch slide itself:
this dive is a pure insertion, and the slides after it ("Reconcile, decide, merge", the recap)
are not covered by the dive. The slide carries no alias yet and gets `quick-coordination-patterns`.

**Notes plan** (per moved slide; en and de in the same step, same order):
- `message-bus-publish-and-subscribe` — out of `slides/notes/en/14-teams-workflows.md` and `slides/notes/de/14-teams-workflows.md`, into new `slides/notes/en/24-deep-coordination-patterns.md` and `slides/notes/de/24-deep-coordination-patterns.md`, position 1.
- `message-bus-publish-and-subscribe-2` — same files, position 2.
- `shared-state-one-store-no-coordinator` — same files, position 3.
- `shared-state-one-store-no-coordinator-2` — same files, position 4.
- The pointer line added to "Which pattern did we just run?" also updates key `which-pattern-did-we-just-run` in both locale files (content edit, no key change).

**Task fate:** task 12 **stays core**; `tasks/12-team-and-workflow-audit.md` is unchanged — its
three Theory links (`theory-coordination-patterns`, `theory-workflow-phases`, `theory-reconcile`)
all keep main-flow carriers.

**Constraint checklist:**
- [x] Task block atomic in ONE section file, intro before recap — intro and recap both stay in `14-teams-workflows.md`; only mid-block concept pairs leave, order preserved.
- [x] Every flow-ways slide stays adjacent to its partner and repeats its heading — both moved pairs move together; kept pairs untouched.
- [x] Every task-linked alias keeps a carrier — no alias moves.
- [x] Notes key set AND order stay consistent in en and de — the same four keys leave both files; the new notes files hold the same keys in the same order in both locales.
- [x] KNOWN_LAYOUTS in slides/scripts/lint-slides.mjs untouched — only existing `concept` and `flow-ways` layouts move.
- [x] docs: only on concept, code-live or section layouts — the moved concept slides keep their blog `docs:` link (allowlisted); the flow-ways slides carry none.

### Proposal 2 — Scheduling and automation (19-automate.md) [confirmed by trainer: quick dive + deep dive]

Task 18 goes **optional**; all 11 slides are deep. The whole file moves intact: its `src:` line in
`slides/slides.md` moves after `21-close.md`. No new section file for the block itself.

**KEEP** (the quick dive — nothing from `19-automate.md` survives in the main flow; two new slides
go into `21-close.md`, before "Three levers, one responsibility"):
1. *(new, concept)* "Automate with a stop rule" — mental model plus when-to-reach: an output style sets the voice, /goal sets an evidence-based stop, a background session or routine runs it.
2. *(new, concept)* "Deep dive: automate" — pointer to the appendix block and optional task 18; carries `docs: https://code.claude.com/docs/en/goal` (first-party, allowed). Per the carrier note in the Rubric, this pointer does not take over the three task-linked aliases — they stay resolvable on their own slides in the appendix.
Also: one mention bullet lands on the existing "Autonomy is earned by verification"
(21-close.md#2), as the practitioner lens proposed for /goal.

**MOVE** (the deep dive — `19-automate.md` intact, as one appendix block, this order):
1. Nobody at the keyboard
2. Task 18 — Automate
3. An output style sets the voice
4. host-notes.md
5. /goal: evidence decides when to stop
6. Bound the work
7. /loop: the prompt comes back
8. Background: the session keeps working
9. Routines: the cloud runs it
10. The spec-drift routine
11. Automate

**Alias plan** (per moved alias):
- `theory-output-styles` — current carrier `19-automate.md#3` "An output style sets the voice"; new carrier: the same slide, file now an appendix block; tasks/18-automate.md link text: **unchanged** (heading unchanged).
- `theory-goal` — current carrier `19-automate.md#5`; new carrier: same slide in the appendix; tasks/18-automate.md link text: **unchanged**.
- `theory-background-sessions` — current carrier `19-automate.md#8`; new carrier: same slide in the appendix; tasks/18-automate.md link text: **unchanged**.
- `theory-loop` (#7) and `theory-routines` (#9) — linked from no task file (dep-map.json aliases); move with their slides, nothing to change.

**Resume point (backTo target):** the pointer slide "Deep dive: automate" — the last quick-dive
slide; it gets `quick-automate`. Returning lands there, and next continues with "Three levers,
one responsibility". A jump from "Automate with a stop rule" (both new slides carry `deepDive:`)
skips the pointer on the way out; the return lands on the pointer — the end of the quick
dive — so nothing before it replays.

**Notes plan:** the block's notes files `slides/notes/en/19-automate.md` and
`slides/notes/de/19-automate.md` move with the file **unchanged** — every key
(`nobody-at-the-keyboard` through `automate`) keeps its file, order and [click] markers. New keys
for the two new slides (`automate-with-a-stop-rule`, `deep-dive-automate`) are added at the **top**
of `slides/notes/en/21-close.md` and `slides/notes/de/21-close.md`, same order in both locales,
before `three-levers-one-responsibility`.

**Task fate:** task 18 goes **optional**. `tasks/18-automate.md` keeps its fixed slug and
template; `tasks/README.md` and FACILITATOR.md mark it as an optional deep-dive task; its three
Theory links keep working because every alias keeps its carrier.

**Constraint checklist:**
- [x] Task block atomic in ONE section file, intro before recap — the whole block moves as one file; intro (#2) stays before recap (#11).
- [x] Every flow-ways slide stays adjacent to its partner — no flow-ways slides in this file.
- [x] Every task-linked alias keeps a carrier — see alias plan; zero link-text changes.
- [x] Notes key set AND order stay consistent in en and de — block notes untouched; the two new keys are added at the same position in both locales.
- [x] KNOWN_LAYOUTS untouched — new slides use the existing `concept` layout.
- [x] docs: only on concept, code-live or section layouts — the pointer is a concept slide with a first-party docs URL.

### Proposal 3 — Build your own MCP server (20-build-mcp.md) [confirmed by trainer: excursion]

Task 19 goes **optional**; all 10 slides are deep. The whole file moves intact: its `src:` line
moves after `21-close.md` (after the automate block, keeping original relative order).

**KEEP** (the quick dive — the mental-model and when-to-reach slides already exist in the core
flow, so only the pointer is new):
1. Your systems, as tools — existing, core, `16-browser.md#3` (the MCP mental model).
2. A server offers three primitives, not one — existing, core, `16-browser.md#8` (what a server is).
3. *(new, concept)* "Build your own server" — pointer at the end of `16-browser.md`, after "Four browser tools, one comparison" (debrief position); points at optional task 19 and the appendix block; carries `docs: https://modelcontextprotocol.io/docs/develop/build-server` — already a deliberate allowlist entry (it is the `docs:` of `20-build-mcp.md#3`), so no lint change.

**MOVE** (the deep dive — `20-build-mcp.md` intact, as one appendix block, this order):
1. Build your own MCP
2. Task 19 — Build your own MCP
3. A server is four registered tools
4. Five decisions behind a good tool server
5. mcp/server.ts
6. Register it, then trust it selectively
7. Every tool, or two named tools?
8. Another app, same server
9. route.ts
10. Build your own MCP (recap)

**Alias plan** (per moved alias):
- `theory-mcp-server-anatomy` — carrier `20-build-mcp.md#3`; new carrier: same slide in the appendix; tasks/19-build-your-own-mcp.md link text: **unchanged**.
- `theory-mcp-json` — carrier `20-build-mcp.md#6`; new carrier: same slide in the appendix; tasks/19 link text: **unchanged**.
- `theory-mcp-from-sdk` — carrier `20-build-mcp.md#8`; new carrier: same slide in the appendix; tasks/19 link text: **unchanged**.
- `theory-mcp-design` (#4) — linked from no task file; moves with its slide.

**Resume point (backTo target):** the pointer slide "Build your own server" (gets
`quick-mcp-server`); next continues into `17-letting-go.md`. The two existing core slides
(`16-browser.md#3`/#8) may also carry `deepDive:` for an early branch.

**Notes plan:** `slides/notes/en/20-build-mcp.md` and `slides/notes/de/20-build-mcp.md` move with
the file **unchanged** (all keys, `build-your-own-mcp` through `build-your-own-mcp-2`, keep file
and order). New key `build-your-own-server` for the pointer slide is appended at the **end** of
`slides/notes/en/16-browser.md` and `slides/notes/de/16-browser.md`, after
`four-browser-tools-one-comparison`, in both locales.

**Task fate:** task 19 goes **optional** (it already is the "+1"). `tasks/19-build-your-own-mcp.md`
is unchanged beyond the optional marking in the index; the two-clone naming rules (your CLASH
clone vs clash-conference) stay inside the task file and the moved block.

**Constraint checklist:**
- [x] Task block atomic in ONE section file, intro before recap — whole file moves; intro (#2) before recap (#10).
- [x] flow-ways adjacency — no flow-ways slides in this file.
- [x] Every task-linked alias keeps a carrier — see alias plan; zero link-text changes.
- [x] Notes key set AND order consistent in en and de — block notes untouched; one new key added at the same position in both locales.
- [x] KNOWN_LAYOUTS untouched — pointer uses `concept`.
- [x] docs: only on concept, code-live or section layouts — pointer is concept; its third-party URL is already on the lint allowlist, so no extension needed.

### Proposal 4 — Example Mapping and the discover skill (11-discover.md) [confirmed by trainer: excursion]

Task 09 goes **optional**; all 6 slides are deep. Whole-file move: the `src:` line of
`11-discover.md` moves to the appendix region (first of the moved task blocks).

**KEEP** (the quick dive):
1. One bullet on "Loaded only when needed" (`09-skills.md#3`, core): the `references/` and `templates/` progressive-disclosure split — the practitioner lens asked for exactly this if the block moves.
2. *(new, concept)* "Deep dive: Example Mapping" — pointer at the end of `09-skills.md`, after the task 07 recap (debrief position); points at optional task 09 and the appendix block. No `docs:` on the pointer — the topic's docs URL (`https://code.claude.com/docs/en/skills`) already sits on `09-skills.md#3`, and docs links are used sparingly, where a mechanism is first explained.

**MOVE** (the deep dive — `11-discover.md` intact, this order):
1. Example Mapping
2. Task 09 — Example Mapping and the `discover` skill
3. Story, rule, example, question
4. Progressive disclosure in a skill
5. Anatomy of /discover
6. The `discover` skill

**Alias plan:**
- `theory-example-mapping` — carrier `11-discover.md#3`; new carrier: same slide in the appendix; tasks/09-example-mapping.md link text: **unchanged**.
- `theory-skill-references` — carrier `11-discover.md#4`; new carrier: same slide in the appendix; tasks/09 link text: **unchanged**.

**Resume point (backTo target):** the pointer slide "Deep dive: Example Mapping" (gets
`quick-example-mapping`); it sits after the task 07 recap, so next continues into the subagents
section.

**Notes plan:** `slides/notes/en/11-discover.md` and `slides/notes/de/11-discover.md` move with
the file **unchanged**. New key `deep-dive-example-mapping` appended at the **end** of
`slides/notes/en/09-skills.md` and `slides/notes/de/09-skills.md`, in both locales; the bullet on
`09-skills.md#3` also updates key `loaded-only-when-needed` in both locales (content edit, no key
change).

**Task fate:** task 09 goes **optional**. Its artifact (`docs/specs/clash-capacity.md`) still
reaches optional task 11 via the 11-start branch (tasks/11-tdd-inner-loop.md:139), so no core
task loses an input.

**Constraint checklist:**
- [x] Task block atomic in ONE section file, intro before recap — whole file moves; intro (#2) before recap (#6).
- [x] flow-ways adjacency — none in this file.
- [x] Every task-linked alias keeps a carrier — see alias plan.
- [x] Notes key set AND order consistent in en and de — block notes untouched; one new key at the same position in both locales.
- [x] KNOWN_LAYOUTS untouched.
- [x] docs: only on concept, code-live or section layouts — pointer carries no docs link; moved slides keep theirs.

### Proposal 5 — Path-scoped rules (12-rules.md) [REJECTED by trainer: absolute core, and the block needs more content]

Kept below only as a record of the mechanical analysis.

Task 10 goes **optional**; all 5 slides are deep. Whole-file move of the `src:` line to the
appendix region. Both lenses converged on the same quick-dive host, so **no new slide is needed**.

**KEEP** (the quick dive):
1. Personal rules follow you (`08-context.md#12`, core) — gains one bullet (a project rule can be scoped to matching files with `paths:` frontmatter) and one pointer line to optional task 10 and the appendix block. The mental model (rules in `.claude/rules/`, project vs personal) already lives on this slide; body stays within the 40-word budget by trimming, or the pointer goes to the presenter note if it does not fit. Note: the slide's existing body line "Path-scoped rules come in task 10" must be reworded by this same edit to point at the optional task and the appendix block.

**MOVE** (the deep dive — `12-rules.md` intact, this order):
1. Path-scoped rules
2. Task 10 — Path-scoped rules
3. Rules scoped to a path
4. A rule that only loads when it matters
5. The ownership rule

**Alias plan:**
- `theory-path-scoped-rules` — carrier `12-rules.md#3`; new carrier: same slide in the appendix; tasks/10-path-scoped-rules.md link text: **unchanged**.

**Resume point (backTo target):** "Personal rules follow you" — the single-slide quick dive is
its own resume point (gets `quick-rules`); next continues with the block's stop slide.

**Notes plan:** `slides/notes/en/12-rules.md` and `slides/notes/de/12-rules.md` move with the file
**unchanged**. The bullet and pointer on `08-context.md#12` update key
`personal-rules-follow-you` in `slides/notes/en/08-context.md` and `slides/notes/de/08-context.md`
(content edit, no key change).

**Task fate:** task 10 goes **optional**. The ownership rule it restates originates in task 08's
finding (tasks/10-path-scoped-rules.md:15), which stays core, so the rule itself is not lost; the
12-start branch reseeds the audit bug independently of task 10's file (dep-map.json task 10).

**Constraint checklist:**
- [x] Task block atomic in ONE section file, intro before recap — whole file moves; intro (#2) before recap (#5).
- [x] flow-ways adjacency — none in this file.
- [x] Every task-linked alias keeps a carrier — see alias plan.
- [x] Notes key set AND order consistent in en and de — no key changes anywhere.
- [x] KNOWN_LAYOUTS untouched — no new slides at all.
- [x] docs: only on concept, code-live or section layouts — nothing changes; moved slides keep theirs.

### Proposal 6 — TDD inner loop (13-tdd.md, slides 2–8) [confirmed by trainer: excursion]

Task 11 goes **optional**; slides #2–#8 are deep, but #1 "Orchestrate and let go" is the Part IV
divider (it opens the part holding core tasks 12–17) and **stays core in place**. Because core and
deep content share this file, the block needs a **new** appendix section file.

**KEEP** (the quick dive):
1. Orchestrate and let go (`13-tdd.md#1`, core) — unchanged; `13-tdd.md` keeps only this slide. (Alternative, if the trainer prefers: move this divider to the top of `14-teams-workflows.md` and retire `13-tdd.md`; that touches 14's notes files in both locales instead.)
2. One bullet plus pointer line on "The loop that matters" (`16-browser.md#7`, core): told to pass a test, the model edits whichever file is easier — keep the spec the goalpost; deep dive and optional task 11 teach the full red-green-stop loop. Both lenses asked for exactly this bullet to survive.

**MOVE** (the deep dive — new file `slides/sections/23-deep-tdd.md`, this order):
1. TDD
2. Task 11 — The TDD inner loop
3. A skill that stops itself
4. The spec is the goalpost
5. One cycle: red, green, stop
6. Update the test, or fix the code?
7. The TDD inner loop

**Alias plan:**
- `theory-tdd-cycle` — carrier `13-tdd.md#4` "A skill that stops itself"; new carrier: same slide, now in `23-deep-tdd.md`; tasks/11-tdd-inner-loop.md link text: **unchanged**.
- `theory-goalpost-not-target` — carrier `13-tdd.md#5` "The spec is the goalpost"; new carrier: same slide in `23-deep-tdd.md`; tasks/11 link text: **unchanged**.

**Resume point (backTo target):** "The loop that matters" (`16-browser.md#7`) — the single-slide
host is its own resume point (gets `quick-tdd`).

**Notes plan** (per moved slide; same order in both locales): keys `tdd`,
`task-11-the-tdd-inner-loop`, `a-skill-that-stops-itself`, `the-spec-is-the-goalpost`,
`one-cycle-red-green-stop`, `update-the-test-or-fix-the-code`, `the-tdd-inner-loop` move out of
`slides/notes/en/13-tdd.md` and `slides/notes/de/13-tdd.md` into new
`slides/notes/en/23-deep-tdd.md` and `slides/notes/de/23-deep-tdd.md`, positions 1–7. Both
`13-tdd.md` notes files keep only `orchestrate-and-let-go`. The bullet on `16-browser.md#7`
updates key `the-loop-that-matters` in both locales (content edit).

**Task fate:** task 11 goes **optional**. Cutting it orphans only task 09's spec, itself optional
(dep-map.json task 11); the capstone's gates name the skill, subagent, hooks and browser, not TDD
(tasks/17-capstone.md:36–41).

**Constraint checklist:**
- [x] Task block atomic in ONE section file, intro before recap — the whole task 11 block (its own "TDD" divider through its recap) lands in ONE new file, intro before recap; the Part IV divider was never part of the task 11 block.
- [x] flow-ways adjacency — none in this file.
- [x] Every task-linked alias keeps a carrier — see alias plan.
- [x] Notes key set AND order consistent in en and de — the same seven keys move in both locales, same order; `13-tdd.md` notes keep the same single key in both.
- [x] KNOWN_LAYOUTS untouched — only existing layouts move; the code-live slide keeps its LIVE markers.
- [x] docs: only on concept, code-live or section layouts — moved slides keep their links unchanged.

### Proposal 7 — Effort lab (03-first-steps.md, slides 13–14) [implied by merged labels]

Both lenses label this debrief pair deep (the only agreed deep content in Parts I–II). It is not a
task block — two debrief-after-recap slides inside core task 01's block, which stays whole.

**KEEP** (the quick dive — all three roles already exist or cost one line):
1. Model and effort are separate (`01-llm.md#6`, core) — the mental model, with the `docs:` link (model-config) already on it.
2. Spend effort where it matters (`01-llm.md#7`, core) — the when-to-reach slide.
3. One pointer line on "Flags change how a session starts" (`03-first-steps.md#11`, core, the debrief that stays): the measured effort lab lives in the appendix.

**MOVE** (the deep dive — new file `slides/sections/22-deep-effort-lab.md`, this order):
1. Same task, different effort (code-live)
2. Measure the extra reasoning (concept)

**Alias plan:**
- `theory-effort-lab` — carrier `03-first-steps.md#13` "Same task, different effort"; linked from **no** task file (dep-map.json aliases, linkedFrom empty); new carrier: same slide in `22-deep-effort-lab.md`; no task-file link text changes anywhere.

**Resume point (backTo target):** "Flags change how a session starts" (`03-first-steps.md#11`) —
the single-slide host is its own resume point (gets `quick-effort-lab`). Dive entry: the moved
slide already carries `theory-effort-lab` and a slide holds only one alias, so the host's
`deepDive:` targets `theory-effort-lab` — no `deep-effort-lab` alias.

**Notes plan:** keys `same-task-different-effort` and `measure-the-extra-reasoning` move out of
`slides/notes/en/03-first-steps.md` and `slides/notes/de/03-first-steps.md` into new
`slides/notes/en/22-deep-effort-lab.md` and `slides/notes/de/22-deep-effort-lab.md`, positions
1–2, both locales. The pointer line updates key `flags-change-how-a-session-starts` in both
locales (content edit).

**Task fate:** task 01 **stays core and untouched** — the lab is slide-side debrief material;
`tasks/01-setup-first-conversation.md` links only `theory-slash-commands` and `theory-claude-md`
(dep-map.json task 1 theory list), so no task file changes.

**Constraint checklist:**
- [x] Task block atomic in ONE section file, intro before recap — task 01's intro and recap stay in `03-first-steps.md`; only two optional debrief slides leave, after the recap.
- [x] flow-ways adjacency — none involved.
- [x] Every task-linked alias keeps a carrier — `theory-effort-lab` is task-linked by no file and keeps its slide.
- [x] Notes key set AND order consistent in en and de — the same two keys move in both locales, same order.
- [x] KNOWN_LAYOUTS untouched — existing `code-live` and `concept` layouts move; LIVE markers travel with the skeleton.
- [x] docs: only on concept, code-live or section layouts — the moved code-live slide keeps its model-config docs link, which that layout draws.

### Proposal 8 — Spec Kit and BMAD (18-capstone-close.md, slides 2–4) [confirmed by trainer: excursion]

The three method slides sit inside core task 17's block, between the intro and the recap. No task
step uses them: `tasks/17-capstone.md` only lists them under Links, and FACILITATOR.md:392 calls
them further reading.

**KEEP** (main flow): "Task 17 — Capstone" (intro) → "Capstone" (recap). The intro is the branch
slide: it gets `deepDive: excursion-spec-kit-bmad` (the per-slide layer renders the chip on the
`task-intro` layout too).

**MOVE** (excursion — new file `slides/sections/25-excursion-spec-kit-bmad.md`, this order):
1. Spec Kit: six steps, one constitution
2. BMAD: five agents, one Party Mode
3. Spec Kit vs BMAD

**Alias plan:** none of the three slides carries an alias. The first moved slide gets
`routeAlias: excursion-spec-kit-bmad`. Resume point (backTo target): the intro, which already
carries `task-17` — a pure insertion, so the return lands on the intro and next goes to the recap.
No task-file link text changes.

**Notes plan:** keys `spec-kit-six-steps-one-constitution`, `bmad-five-agents-one-party-mode`,
`spec-kit-vs-bmad` move out of `slides/notes/en/18-capstone-close.md` and
`slides/notes/de/18-capstone-close.md` into new `slides/notes/en/25-excursion-spec-kit-bmad.md`
and `slides/notes/de/25-excursion-spec-kit-bmad.md`, positions 1–3, both locales. The
`18-capstone-close.md` notes keep the intro and recap keys in order.

**Task fate:** task 17 stays core and unchanged; its Links keep the Spec Kit and BMAD pages.
FACILITATOR.md:392 changes "sit between the task intro and the recap" to the excursion.

**Constraint checklist:**
- [x] Task block atomic, intro before recap — both stay in `18-capstone-close.md`; only the middle leaves.
- [x] flow-ways adjacency — none involved.
- [x] Every task-linked alias keeps a carrier — no alias moves.
- [x] Notes key set AND order consistent in en and de — the same three keys move in both locales.
- [x] KNOWN_LAYOUTS untouched — `concept` slides only.
- [x] docs: rules — the BMAD slide keeps its allowlisted GitHub `docs:` link.

### Proposal 9 — Next.js specifics (new excursion + softer task framing) [confirmed by trainer]

Unlike proposals 1–8, this one mostly adds content: the deck keeps the transferable lesson on
the main slides and gathers framework detail in a new excursion.

**Stays core (the general lesson):**
- "The safety moment" (`05-build-auth-clashes.md`, carries `theory-server-action-safety`, linked
  from tasks/03): every entry point needs its own check — a guarded page does not guard what the
  page calls. Keep the slide; drop Next.js explanation from its notes into the excursion.
- "Page guard, action guard?" and "The attack surface" (`10-subagents.md`): the audit target —
  same lesson, seen from the auditor.
- "Measure, fix, measure again" (`16-browser.md`, carries `theory-measure-fix`): measure before
  and after a fix. The base64 avatar is the example, not the lesson.

**Moves to a new excursion `slides/sections/26-excursion-nextjs.md`** (new slides; content to
write, so each needs notes in both locales from the start):
- what a Server Action is and why it is a public POST endpoint (`requireUser()` in the layout vs
  a check in the action);
- shadcn/ui: components copied into the project, not a package dependency;
- the Prisma 7 choices in task 02 (client in `lib/generated/prisma`, the config file name, seed
  through `tsx`) and "params and searchParams are Promises" in Next.js 16;
- why a base64 avatar on every page costs payload.
Branch slide: "The safety moment" is the natural `deepDive: excursion-nextjs` carrier; resume
point: the same slide (pure insertion). Further `deepDive:` carriers are optional.

**Task framing (task files, hard rule 5 kept — prompts stay verbatim):**
- Framework-heavy prompts in tasks 02, 03 and 07 (the most Next.js/Prisma/shadcn terms: 19, 8 and
  14 hits) get one framing line before the prompt: "This is what an experienced Next.js developer
  would ask for. You do not need every term — Claude Code knows them, and you can ask."
- One general note, once (task 02 "Why" or README): every developer brings their own languages
  and frameworks; in your own stack your prompts name your conventions, the Claude Code
  mechanics stay the same.
- Links to Next.js, Prisma and shadcn docs stay in the task files' Links sections.

**Constraint checklist:** no slide moves, no alias moves; one new section file with notes in both
locales; KNOWN_LAYOUTS untouched; any `docs:` on the excursion slides must be a
code.claude.com page or a new, deliberate allowlist entry in `slides/scripts/lint-slides.mjs`
(framework docs are better kept in the task files' Links).

## Borderline calls

Every label disagreement between the two lenses, with both labels, the merged decision and the
reason. This is the trainer veto list.

1. **01-llm.md#4 "Why it reads everything at once"** — beginner: mention (fold into #10 "The
   context window is a budget"); practitioner: core (not listed as an exception, so the R1
   baseline holds). **Decision: core.** R1 is mechanical and beats the beginner's persona
   suggestion. Veto note: folding it into #10 stays a cheap later cut.
2. **03-first-steps.md#11 "Flags change how a session starts"** — beginner: quick; practitioner:
   core. **Decision: core.** R1 (and R2 — it is a debrief of core task 01's block) beats the
   persona judgment.
3. **03-first-steps.md#12 "Print mode: no interaction, just an answer"** — beginner: deep (reteach
   it next to headless CI, task 15); practitioner: core. **Decision: core.** R1/R2 beat the
   R7-style judgment. Veto note: "Headless in CI" (`17-letting-go.md#6`) does reteach `-p` in
   context, so moving this slide is a defensible veto.
4. **21-close.md#1 "Three levers, one responsibility"** — beginner: core (R6); practitioner: quick
   (R6). **Decision: core.** Same rule on both sides, so precedence cannot split them; the merge
   keeps the label that changes nothing, and both lenses keep the slide in the main flow either
   way — nothing would move to a deep dive under either label.
5. **21-close.md#2 "Autonomy is earned by verification"** — beginner: core (R6); practitioner:
   quick (R6). **Decision: core.** Same reasoning as #4, plus this slide is where the automate
   quick dive lands its /goal mention bullet (proposal 2), so it should stay a full main-flow
   slide.

Agreed-with-reservations (not disagreements, listed for the veto pass): the practitioner lens
recorded R7 reservations on `14-teams-workflows.md#12/#14` (taken up by proposal 1),
`15-hooks.md#10/#11`, `16-browser.md#8`, `17-letting-go.md#4/#8` and
`18-capstone-close.md#2/#3` — all resolved core by R2 in both lenses' own labels.

## Impact summary

**Counts** (237 slides across the 22 section files):
- **core: 194** — including all of files 04–10, 14–16, 18 and 21 after the merge;
  `17-letting-go.md` is all core except #1 (quick).
- **quick: 1** — `17-letting-go.md#1` "Letting go of the wheel" (stays, short form).
- **deep: 41** — `03-first-steps.md#13–14` (2), `11-discover.md` (6), `12-rules.md` (5),
  `13-tdd.md#2–8` (7), `19-automate.md` (11), `20-build-mcp.md` (10). Proposal 1 would move 4 more
  (the two pattern pairs in `14-teams-workflows.md`), labeled core by the merge — that move is R7
  over R2 under the trainer's mandate, trainer veto decides.
- **mention: 1** — `02-harness.md#15` (one bullet on #16; slide and note key removed in both
  locales).

**Moved aliases: 15**, all riding their own slides into the appendix, zero task-file link-text
changes: `theory-effort-lab`, `theory-example-mapping`, `theory-skill-references`,
`theory-path-scoped-rules`, `theory-tdd-cycle`, `theory-goalpost-not-target`,
`theory-output-styles`, `theory-goal`, `theory-loop`, `theory-background-sessions`,
`theory-routines`, `theory-mcp-server-anatomy`, `theory-mcp-design`, `theory-mcp-json`,
`theory-mcp-from-sdk`. None is linked from a core task file (dep-map.json aliases), so R3 is never
triggered. Every alias linked from a core task file keeps a main-flow carrier untouched
(`theory-security-rules` on `15-hooks.md#15`, `theory-context-is-king` on `21-close.md#3`, and all
others per the tables above).

**Tasks going optional: 5** — 09, 10, 11, 18, 19. Task 12 stays core even though its section is a
trainer-named split candidate.

**Build implications:**
- A **new section file requires complete notes files in BOTH locales** (`slides/notes/en/…` and
  `slides/notes/de/…`) **or the build throws**. The proposals create three new files
  (`22-deep-effort-lab.md`, `23-deep-tdd.md`, `24-deep-coordination-patterns.md`), so six new
  notes files, each holding exactly the moved keys in the moved order;
  `check-notes-parity.mjs` then enforces identical key sets, order and [click] markers across
  locales.
- **`JourneyMap.vue` and `ToolkitMap.vue` hardcode part/module data and must be touched**: five
  task blocks leave the main flow and an appendix region appears, so the part/module data no
  longer matches the main flow without an update. Every moved `section`-layout divider renders
  these maps, so the appendix dividers show whatever the updated data says.
- **`slides/slides.md` is a pure `src:` manifest — appendix files are new blocks at its end.**
  Four existing files (`11-discover.md`, `12-rules.md`, `19-automate.md`, `20-build-mcp.md`)
  become appendix blocks by moving their `src:` lines to the end; the three new files are added
  there as new blocks. Proposed end order: `21-close.md`, then `22-deep-effort-lab.md`,
  `11-discover.md`, `12-rules.md`, `23-deep-tdd.md`, `24-deep-coordination-patterns.md`,
  `19-automate.md`, `20-build-mcp.md`.
- **The jump affordance comes from `decision-navigation-spike.md`**:
  `deepDive:`/`backTo:` frontmatter, `DeepLink.vue`, `routeAlias: deep-<slug>` on each block's
  first slide, and one named lint extension. The quick-dive slides named in the proposals above
  are the `deepDive:` carriers; each proposal's named resume point is the `backTo:` target (the
  end of the quick dive), so a finished dive continues the main line without replaying it. Seven
  new `quick-*` resume aliases accompany the seven `deep-*` dive aliases.
- `KNOWN_LAYOUTS` in `slides/scripts/lint-slides.mjs` stays untouched: every kept, moved and new
  slide uses an existing layout. No new docs URL enters the deck, so the docs allowlist also
  stays untouched (the MCP pointer reuses an already-allowlisted URL; the automate pointer uses a
  first-party `code.claude.com` URL).
- Route aliases (`task-NN` and `theory-*`) resolve wherever their slides live, because appendix
  blocks are still built — task files and the `/task-NN` habit keep working for optional tasks.

## Audit note

A mechanical audit checked this document against the repo: (i) every task-linked theory alias has
a named carrier — fixed here by naming the twelve Part I/II aliases in the collapsed per-file
lines (they were previously only implied by "all slides core"); (ii) no task block is torn across
files — pass; (iii) flow-ways pairs stay adjacent in every KEEP/MOVE list — pass; (iv) the notes
plans cover every moved slide in both locales, verified against the real `@note:` keys — pass;
(v) a sample of 25 slides re-read against their recorded rationale — all match; (vi) the counts
add up (237 = 194 + 1 + 41 + 1), and the core-files prose was corrected here to exempt
`17-letting-go.md#1` (quick).
