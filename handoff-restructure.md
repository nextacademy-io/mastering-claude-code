# Handoff: restructure the deck into core, deep dives and excursions

> For a fresh Claude Code session in this repository. The steps run strictly in order, **one
> step per session with fresh context** — do only the next unticked step, then stop. This file is
> the progress anchor, not the session. Tick the step's box in the **Progress** list as part of
> its commit.

## Sources (read before step 1, in this order)

1. `decision-navigation-spike.md` — the tested navigation mechanism. **It alone decides HOW
   navigation works** (fields, components, alias naming, lint rules).
2. `research-quick-vs-deep-dive.md` — section **"Trainer decisions"** wins for all content
   questions; then **"Core share of the main flow"**; then the split proposals 1–9. The
   "Impact summary" at its end predates the decisions — ignore it where they differ.
3. `research-missing-topics.md` — the gaps, with docs URLs and evidence.

Read only the parts a step needs; do not re-run the research.

## The model in one paragraph

The main flow stays at least 80% Claude Code core (currently about 84%, after this restructure
about 94%). Optional material moves to an **appendix** at the end of `slides/slides.md`, in two
kinds: a **deep dive** goes deeper into a Claude Code mechanic (automate, effort lab, sandbox); an
**excursion** (German notes: *Exkurs*) covers a method or framework outside Claude Code (Example
Mapping, TDD, two coordination patterns, Spec Kit and BMAD, building an MCP server, Next.js).
Every optional block has three navigation roles — a **branch slide** in the main flow where the
group can jump in, an **entry slide** (the block's first slide), and a **resume slide** where the
trainer lands after the block: the **end of the quick dive**, never its start. Which slide plays
which role is a content decision and is fixed below. How a role is marked comes from step 1.
Deliberate repetition stays: never cut a slide only because another one repeats its point
(context management runs through the deck on purpose).

## What is fixed and what step 1 decides

**Fixed (verified or decided — do not change):**
- Slidev `routeAlias` exists and works as a URL route; the deck already relies on it
  (`/task-NN`, `/theory-*`, deployed through the Vercel SPA rewrite).
- A slide holds **one** `routeAlias`. Existing `task-NN` and `theory-*` aliases never change, and
  every `theory-*` alias a task file links keeps a carrier with the same heading.
- The navigation roles per block (table below) and the resume rule (end of the quick dive).

**Decided in step 1 from `decision-navigation-spike.md` — do not assume before:**
- how a branch slide offers the jump and how the last slide of a block offers the return
  (frontmatter fields, a chip component, or trainer-only via URL and `g`);
- whether entry and resume slides need new aliases, and their naming scheme;
- the chip wording for deep dive vs excursion;
- what the new lint check enforces.

Step 1 writes the result into the section **"Navigation mechanism"** below. Every later step
applies that section to the roles in the table — nothing else.

## Navigation mechanism

Written by step 1. The decision document's verdict: **"A2 with a per-slide layer —
`slide-top.vue`, not `slide-bottom.vue`."** — optional blocks sit in an appendix at the end of
the deck and are reached by chips rendered from frontmatter, never from tags in a slide body.

**Files (in the repo since step 1).** `slides/components/DeepLink.vue` (the chip) and
`slides/slide-top.vue` (Slidev's per-slide layer above the layout; reads each slide's own
frontmatter and draws the chip). No layout file changes.

**Branch slide → entry.** A main-line slide carries `deepDive: <entry alias>`. It shows a chip
top-right that jumps to the block's first slide. Several branch slides may point to the same
block (automate has two).

**Last slide → resume.** The block's last slide carries `backTo: <resume alias>`. Its chip lands
on the resume slide **fully revealed** (`DeepLink` adds `?clicks=99`, Slidev clamps it), so the
next → goes on with the main line. The resume slide is itself a branch slide: it carries
`deepDive:` to the same block. Browser back is not the return path — it goes to wherever the jump
started.

**Aliases.** The block's file name gives the slug: `3N-deep-<slug>.md` or
`3N-excursion-<slug>.md`. The entry slide carries `routeAlias: deep-<slug>` or
`excursion-<slug>`; the resume slide carries `routeAlias: quick-<slug>`. Values are bare aliases
(no `?`, no `/`). One slide holds one alias, so two exceptions keep the alias a slide already has:
- a **deep dive's** entry slide may keep its `theory-*` alias (effort lab: `theory-effort-lab`) —
  never an excursion's, because the chip label comes from the prefix;
- a resume slide may keep its `theory-*` or `task-NN` alias (Next.js: `theory-server-action-safety`;
  Spec Kit/BMAD: `task-17`).

**Chip wording** (English on the slides, also in German notes, which say *Exkurs* in prose):
`Deep dive →` for any target outside `excursion-*`, `Excursion →` for `excursion-*`,
`← Back to the main line` for both kinds. In the PDF Slidev keeps no link, so the chip prints as
a signpost with the target's slide number: `Deep dive → 229`, `← Back to 225`.

**Layouts.** `deepDive:` on `concept`, `code-live`, `task` and `task-intro`; `backTo:` on
`concept`, `code-live`, `task` and `flow-ways`. `task-intro` was checked in step 1 on the dev
server (task 17 intro, test chip): the chip sits in the empty top-right corner above the heading,
the `TASK 17` row stays clear, and the jump works. So the Spec Kit/BMAD branch and resume stay on
"Task 17 — Capstone". `section` stays unchecked — no role in the table needs a chip there (a
divider can be an *entry* slide, which carries only the alias).

**Lint (`slides/scripts/lint-slides.mjs`, `checkBranches`).** On the composed deck in
`slides/slides.md` order:
1. every `deepDive:`/`backTo:` value is a bare alias that exists exactly once;
2. a block file's first slide carries its entry alias (or a deep dive's `theory-*`), its last
   slide `backTo:`; no other slide in a block carries `deepDive:` or `backTo:`;
3. the slide `backTo:` names is in the main line, carries `deepDive:` to that block, and carries
   `quick-<slug>` (or its `theory-*`/`task-NN`);
4. block files (`NN-deep-*`, `NN-excursion-*`, NN 30+) only after `29-appendix.md`, nothing else
   after it, and section file numbers rise in deck order; `deep-*`/`excursion-*` aliases only on
   entry slides, `quick-*` only on resume slides; `backTo:` never in the main line;
5. never `deepDive:` and `backTo:` on one slide;
6. the layouts above;
7. no `<Link` and no `<DeepLink` in a slide body;
8. the existing `task-NN` and `theory-*` checks are unchanged.

A check that clicks or counts chips selects `[data-slidev-no="N"] .na-deeplink`, never the chip
text — Slidev keeps visited slides mounted, so the same text is in the page several times.

**Testing a block (steps 3–10).** On the dev server: open the branch slide, click the chip, land
on the entry slide; go → to the last slide, click the back chip, land on the resume slide with
every click revealed; one more → goes to the next main-line slide.

## Navigation roles per block

| Appendix file (step 2) | Kind | Branch slide(s) in the main flow | Entry slide · alias | Resume slide · alias |
|---|---|---|---|---|
| `30-deep-effort-lab.md` | deep dive | "Flags change how a session starts" | "Same task, different effort" · `theory-effort-lab` (kept — it cannot take a second alias) | "Flags change how a session starts" · `quick-effort-lab` |
| `31-excursion-nextjs.md` | excursion | "The safety moment" | first slide of the new excursion · `excursion-nextjs` | "The safety moment" · `theory-server-action-safety` (kept) |
| `32-excursion-example-mapping.md` | excursion | new pointer slide after the task 07 recap | "Example Mapping" (divider) · `excursion-example-mapping` | the new pointer slide · `quick-example-mapping` |
| `33-excursion-coordination-patterns.md` | excursion | "Which pattern did we just run?" | "Message bus: publish and subscribe" (concept) · `excursion-coordination-patterns` | "Which pattern did we just run?" · `quick-coordination-patterns` |
| `34-deep-sandbox.md` | deep dive | the new sandbox core slide (step 9) | first slide of the new deep dive · `deep-sandbox` | the new sandbox core slide · `quick-sandbox` |
| `35-excursion-tdd.md` | excursion | "The loop that matters" | "TDD" (divider) · `excursion-tdd` | "The loop that matters" · `quick-tdd` |
| `36-excursion-mcp-server.md` | excursion | new pointer slide after the task 16 recap in `17-letting-go.md` (moved there from the end of `16-browser.md` after the PR #30 review: the excursion needs the Agent SDK from task 16) | "Build your own MCP" (divider) · `excursion-mcp-server` | the new pointer slide · `quick-mcp-server` |
| `37-excursion-spec-kit-bmad.md` | excursion | "Task 17 — Capstone" (`task-intro`, checked in step 1) | "Spec Kit: six steps, one constitution" · `excursion-spec-kit-bmad` | "Task 17 — Capstone" · `task-17` (kept) |
| `38-deep-automate.md` | deep dive | both new quick-dive slides at the top of `21-close.md` | "Nobody at the keyboard" · `deep-automate` | the second new quick-dive slide (the end of the quick dive) · `quick-automate` |

A block's **last slide** offers the return — for most blocks that is a `task` recap or, for the
coordination patterns, a `flow-ways` slide; for the effort lab and Spec Kit/BMAD a `concept`
slide. All three layouts carry `backTo:` (see "Navigation mechanism").

Step 1 changed no role. It fixed the aliases (columns above) and kept the Spec Kit/BMAD branch and
resume on the `task-intro` "Task 17 — Capstone", because the chip covers nothing there.

## Ground rules

- work on the current feature branch. One commit per major step, short messages. No push and no PR until last step.
- **Review gate before every commit:** when the step's work and checks are done, stage the
  changes (`git add` the step's files only), report the check results and a short summary of what
  changed, then **stop and wait**. The trainer reviews `git diff --staged` and either asks for
  changes or approves. Commit only after the approval.
- CLAUDE.md applies in full: hard rules 1–10, the task template, the slide rules. In particular:
  - every new or moved slide has a note block in BOTH `slides/notes/en/` and `slides/notes/de/`,
    key = `slugify(heading)`, same keys and order in both locales — or the build throws;
    German notes use `> Tun:` / `Sagen:`, English notes `> Do:` / `Say:`;
  - concept slides ≤ 40 words of body, headings ≤ 8 words, `code-live` slides are skeletons with
    `⟵ LIVE` markers;
  - a task block (task-intro → recap) stays in ONE section file, intro first; a `flow-ways` slide
    moves with the slide before it and repeats its heading.
- Appendix section files get the prefix `30`+ so the file number still matches deck order
  (step 2).
- Before renaming or moving any file, grep the old name across the repo (scripts, docs,
  `scripts/prepare-branches.sh`, `scripts/checkpoints/`) and update every hit.

## Checks after every step

```bash
node slides/scripts/lint-slides.mjs
node slides/scripts/check-notes-parity.mjs
cd slides && npm run build        # also exports dist/mastering-claude-code.pdf
```

When a step adds a `docs:` link or a task Links entry: `node slides/scripts/check-doc-links.mjs`
(needs network). For new or changed slides, a short visual check with the `deck.mjs` dev server
(`cd slides && npm run dev`) and agent-browser — keep each check short, the browser session
drifts after many navigations. Do not use `npx slidev` directly on this machine. From step 3 on,
also test each new block's jump and return with the method from "Navigation mechanism".

## Progress

- [x] 1. Navigation mechanism and lint extension
- [x] 2. Appendix frame: divider, file numbering, manifest order
- [x] 3. Automate: quick dive + deep dive (incl. cloud sessions)
- [x] 4. MCP server excursion + the MCP scope-and-trust slide
- [x] 5. Example Mapping excursion + rescued mechanics
- [x] 6. TDD excursion + rescued mechanics
- [x] 7. Effort lab deep dive, coordination-patterns excursion, Spec Kit/BMAD excursion
- [x] 8. Path-scoped rules: expand the core block
- [x] 9. New core slides from the gaps + sandbox deep dive
- [x] 10. Next.js excursion + softer task framing
- [x] 11. One-line gaps, maps and documentation
- [x] 12. Full check, PR, merge

## Steps

### 1. Navigation mechanism and lint extension

Read `decision-navigation-spike.md` completely. Then:
1. Write the section **"Navigation mechanism"** of this file: how a branch slide offers the jump,
   how a block's last slide offers the return, how entry and resume slides are addressed
   (aliases and their naming, if any), the chip wording for deep dive vs excursion, and what lint
   must check. Quote the decision document's verdict.
2. Carry the working files from its "Files of the base" section into the repo, if the verdict
   uses any.
3. Add the lint check it asks for in `slides/scripts/lint-slides.mjs`.
4. Check the roles table above against the mechanism. If the decision document changes a role
   (e.g. where the trainer lands after a block), update the table here and note why.
5. **Known conflicts to resolve here** (the spike's lint rules 2 and 6 meet the one-alias-per-slide
   fact): rule 2 wants `deepDive:` → `deep-*`/`excursion-*` and `backTo:` → `quick-*`, but
   - the effort-lab entry slide already carries `theory-effort-lab`;
   - the Next.js resume slide "The safety moment" already carries `theory-server-action-safety`;
   - the Spec Kit/BMAD resume slide "Task 17 — Capstone" already carries `task-17` — and rule 6
     does not yet allow a jump chip on `task-intro` ("until their top-right corner is checked").
   Recommended resolution: relax rule 2 so an existing `theory-*`/`task-*` alias may serve as an
   entry or resume target (the chip label already defaults to "Deep dive →" for any prefix other
   than `excursion-`, which fits the effort lab); check the `task-intro` top-right corner on the
   dev server and allow it if the chip covers nothing — otherwise move the Spec Kit/BMAD branch
   and resume to the recap "Capstone" (`task`, already allowed). Record the choice in
   "Navigation mechanism" and the table.

No content moves in this step. Commit this file together with the code.

### 2. Appendix frame

- Add `slides/sections/29-appendix.md`: one `section` divider ("Appendix: deep dives and
  excursions") with `JourneyMap`, notes in both locales. Its `src:` block goes after
  `21-close.md`. Purpose (decision document, section 7): in the overview and the PDF the close
  must not run straight into the first block — a reader alone needs the signal "the course ends
  here, everything after is optional".
- Appendix files are numbered 30+ **in the order the main line branches into them**, so the
  appendix reads in deck order (see the roles table). Each later step creates or renames its file
  — renaming the matching notes files in `slides/notes/en/` and `slides/notes/de/` with it — and
  adds its `src:` line in this order.

### 3. Automate — proposal 2

Rename `19-automate.md` → `38-deep-automate.md` (and both notes files); move its `src:` line into
the appendix. Add two quick-dive slides at the top of `21-close.md` (the spike built them only in
its copied folder — take their wording from `decision-navigation-spike.md` if it records it,
otherwise write them fresh): "Automate with a stop rule" (mental model and when to reach for it)
and "Deep dive: automate" (pointer to the block and optional task 18,
`docs: https://code.claude.com/docs/en/goal`). Add one mention bullet for `/goal` on "Autonomy is
earned by verification". Add the **cloud sessions** slide inside the deep dive, near "Routines:
the cloud runs it" (web setup, cloud environment as what a routine runs in —
`research-missing-topics.md`, "Cloud sessions"). Apply the navigation mechanism to the roles in
the table. `tasks/18-automate.md` keeps its slug; it is marked as a deep-dive task in step 11.

### 4. MCP server — proposal 3

**First** write the rescued core slide in `16-browser.md`: MCP scope and trust — `.mcp.json` as
project scope checked into the repo, the one-time approval (`claude mcp list` shows pending
approval), single `mcp__server__tool` names in `permissions.allow` (source: "Register it, then
trust it selectively"). Then rename `20-build-mcp.md` → `36-excursion-mcp-server.md` (and notes),
move its `src:` line, and add the pointer slide at the end of `16-browser.md` ("Excursion: build
your own MCP server", `docs: https://modelcontextprotocol.io/docs/develop/build-server`). Apply
the navigation mechanism. Core stays core: what MCP is, `claude mcp add`, the three primitives,
stdio vs http — all already in `16-browser.md`. Task 19 keeps its two-clone naming (your CLASH
clone, clash-conference).

### 5. Example Mapping — proposal 4

Rescue first: one bullet on "Loaded only when needed" (`references/` for the method,
`templates/` for the format); one line in the task 07 skill demo "Write the clash-feature skill"
for the AskUserQuestion interview tool (and the matching line in `tasks/07-clash-feature-skill.md`
if the demo prompt changes). Then rename `11-discover.md` → `32-excursion-example-mapping.md` (and
notes), move its `src:` line, and add the pointer slide "Excursion: Example Mapping" after the
task 07 recap. Apply the navigation mechanism. Aliases `theory-example-mapping` and
`theory-skill-references` ride along unchanged.

### 6. TDD — proposal 6

Rescue first: one bullet `disable-model-invocation: true` on "A skill is advice" (a skill only
`/name` can start) — **done in step 5**: "Loaded only when needed" had no free fourth line (the
`concept` layout shows three), so its `disable-model-invocation` line moved to "A skill is advice"
and made room for the `references/`/`templates/` line; one bullet plus pointer on "The loop that matters": told to make a test pass,
a model edits whichever file is easier — keep the spec the goalpost. Then move `13-tdd.md` slides
#2–8 into new `35-excursion-tdd.md` (notes keys move in both locales, same order); `13-tdd.md`
keeps only "Orchestrate and let go". Apply the navigation mechanism.

### 7. Effort lab, coordination patterns, Spec Kit/BMAD — proposals 7, 1, 8

- **Effort lab:** move "Same task, different effort" and "Measure the extra reasoning" into
  `30-deep-effort-lab.md`; one pointer line on "Flags change how a session starts". The entry
  slide keeps `theory-effort-lab` — if the mechanism addresses entry slides by alias, this block
  uses that one.
- **Coordination patterns:** move the two pairs "Message bus" and "Shared state" (concept +
  flow-ways each, pairs intact) into `33-excursion-coordination-patterns.md`; one pointer line on
  "Which pattern did we just run?" (a pure insertion: branch and resume are the same slide) —
  **done in step 7 as a note line**: the slide already shows three lines, the `concept` maximum,
  so the chip is the visible pointer and the line went into its notes.
- **Spec Kit/BMAD:** move the three slides into `37-excursion-spec-kit-bmad.md`; update
  FACILITATOR.md:392.
- Apply the navigation mechanism to all three.

### 8. Path-scoped rules — absolute core, expand

`12-rules.md` and task 10 stay in the main flow. Add, in this order and close together:
1. open the block with the contrast already taught on "Personal rules follow you": a rule
   without `paths` loads at launch like `.claude/CLAUDE.md` (repeat it here deliberately);
2. rule vs CLAUDE.md vs skill — always loaded / loaded on a matching path / loaded on demand;
3. how the `paths` glob works — only `paths` is read, anything else in the frontmatter is
   ignored without an error;
4. when a scoped rule really loads — only when Claude's Read tool matches the glob, not on every
   tool use; a `/context` before-and-after demo.
Every fact is hard rule 7 in CLAUDE.md — use it verbatim in substance. **Corrected in step 8**:
the memory docs now say a scoped rule loads on Read, Write or Edit of a matching file, or a Bash
read such as `cat` — not only on Read. Hard rule 7, task 10 and the slides now say so. Update task 10's
`learn:` items, its Do this / Check where the new demo fits, and reword the line "Path-scoped
rules come in task 10" on "Personal rules follow you" only if it no longer reads right.

### 9. New core slides from the gaps + sandbox deep dive

Source: `research-missing-topics.md`, each entry's placement and docs URL.
- **LSP code-intelligence plugins** — core, next to "A plugin bundles your setup".
- **The security-guidance plugin** — core, hooks section near "Event · matcher · exit code".
  **Done in step 9 right after "Advice vs. law"**: between "Event" and "One hook, slowly" it
  would split the live build, and after "Advice vs. law" it lands as the counter-example — built
  only on hooks, yet none of them blocks.
- **Choosing a sandbox environment** — core quick dive next to "The sandbox limits what a command
  touches"; it is the branch and resume slide of the sandbox deep dive.
- **Sandbox deep dive** `34-deep-sandbox.md` — sandboxed Bash, sandbox runtime, dev containers,
  VMs, cloud sessions, choosing by threat model, unattended runs. The trainer wants to build his
  own competence here: write it so it also works as a self-study path (docs links on every slide
  that explains a mechanism, notes that explain the why).
- Apply the navigation mechanism to the sandbox block.

### 10. Next.js excursion + softer task framing — proposal 9

- `31-excursion-nextjs.md` with four topics: Server Actions (a public POST endpoint; the layout
  guards the page, not the action), shadcn/ui (components copied into the project, not a package
  dependency), the Prisma 7 setup choices plus "params and searchParams are Promises" in
  Next.js 16, the base64-avatar payload. Move the Next.js explanation out of the core slides'
  notes into the excursion; the transferable lesson stays on the core slides. Apply the
  navigation mechanism ("The safety moment" is branch and resume slide).
- Task files 02, 03 and 07: one framing line before each framework-heavy prompt — "This is what
  an experienced Next.js developer would ask for. You do not need every term." Prompts stay
  verbatim (hard rule 5).
- Once, in task 02 "Why" or the README: every developer brings their own languages and
  frameworks; in your own stack your prompts name your conventions — the Claude Code mechanics
  stay the same.

### 11. One-line gaps, maps and documentation

- All mention-only gaps from `research-missing-topics.md` in one batch (fast mode, stream-json,
  keybindings, `/terminal-setup`, data usage, advisor, structured outputs as a task 16
  "Go further", and the rest of that list) — each at its stated placement.
- Print mode is repeated in task 15 next to "Headless in CI" (a `claude -p` step or Check item).
- `slides/components/JourneyMap.vue`: main-flow modules highlighted, deep dives and excursions
  **dimmed** at the edge of their part. `ToolkitMap.vue` only if a row's text no longer fits.
- `tasks/README.md`: mark tasks 09, 11, 19 as excursion tasks and 18 as a deep-dive task (slugs
  and numbers stay fixed). README.md and FACILITATOR.md: describe the appendix and how the
  trainer jumps in and out. CLAUDE.md: add the appendix convention (two kinds, file numbering
  30+, the navigation mechanism from step 1, the new lint check) to "Layout" and "Slide rules".

### 12. Full check, PR, merge

Run every command under "Build and check" in CLAUDE.md, including `check-doc-links.mjs` and the
overflow check. Then push the branch to `origin` (nextacademy-io/mastering-claude-code — the only remote) and
open the PR with the `pr-review-loop` skill. After the merge to `main`, the deck is deployed by
Pawel; afterwards open the
entry and resume slide of one deep dive and one excursion on the live deck — the way the
navigation mechanism addresses them — to confirm the Vercel rewrite serves them.
