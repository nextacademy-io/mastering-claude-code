<!-- @note: path-scoped-rules -->
> Do:
> - Divider: rule row highlighted — a new row on the map
> - Keep the beat short

Say:
- "A rule that only shows up when it's actually relevant."

<!-- @note: task-10-path-scoped-rules -->
> Do:
> - Branch: 10-start already has the discover skill from task 09 — whether or not the group took that excursion

Say:
- Four things to learn, one thing to end up with

<!-- @note: a-rule-without-paths-always-loads -->
> Do:
> - Repeat on purpose: "Personal rules follow you" in task 06 already said this
> - [click] Point at the second card: the project sibling

Say:
- Start from what you already have: tone.md in ~/.claude/rules/ has no paths field, so it loads at launch, in every project
- User rules load before project rules; neither overrides the other — if they conflict, Claude may follow either
- [click] A project rule without paths loads at launch too, with the same priority as .claude/CLAUDE.md
- So a rule without paths is just CLAUDE.md in a separate file. The paths field is what makes it different

<!-- @note: rule-claude-md-or-skill -->
> Do:
> - Ask the group first: where would they put the ownership check from task 08?

Say:
- Always: CLAUDE.md and rules without paths — facts every session needs
- [click] On a matching file: a rule with paths — a convention for one part of the codebase
- [click] On demand: a skill's body loads when its description matches, or on /name. The description itself loads every session — unless disable-model-invocation is set
- The ownership check is about app/actions/ only, so it becomes a scoped rule

<!-- @note: rules-scoped-to-a-path -->
> Do:
> - Point back at task 06's ~/.claude/rules/tone.md — that one had no paths: field
> - Docs link: open it, scroll to "Path-specific rules", point at the glob table, then back to the slides
> - [click] Point at the brace pattern

Say:
- paths is the only field Claude Code reads from a rule file — everything else in the frontmatter is ignored without an error
- A glob matches by folder or by extension: app/actions/** is everything under app/actions/, **/*.ts every TypeScript file
- [click] Braces expand: lib/**/*.{ts,tsx} is two patterns. A list matches if any one pattern does
- The trap: if the YAML between the --- markers doesn't parse, Claude Code ignores the frontmatter and loads the rule everywhere. claude --debug shows the parse error

<!-- @note: when-a-scoped-rule-really-loads -->
> Do:
> - This is the demo you are about to run on the next slide — name the two /context readings now
> - [click] The after card

Say:
- A scoped rule loads when Claude reads, writes or edits a matching file — or views one with a Bash read like cat or head
- Not at launch, and not on every tool use. Once loaded, it stays for the session; after /compact it loads again on demand
- [click] So the proof is two /context readings: before any matching read, then after one
- Check the negative case first. A later unrelated read won't unload the rule

<!-- @note: a-rule-that-only-loads-when-it-matters -->
> Do:
> - Live-build reference — the exact body is in tasks/10-path-scoped-rules.md step 1
> - Demo, in this order: /context (absent), read lib/data/venues.ts, /context again (still
>   absent) — then read app/actions/venues.ts, /context once more (now listed)

Say:
- Outside app/actions/ first — the rule stays absent, it hasn't loaded yet. Once it has, a
  later unrelated read won't unload it, so this check only proves anything done first
- Then the matching read — the rule appears: the ownership check from task 08's audit, now
  standing, not a one-off

<!-- @note: the-ownership-rule -->
> Do:
> - Recap: tie this rule to task 08's subagent finding

Say:
- "Same finding, surfaced every time now, not just the one time someone thought to audit — still guidance, not enforcement"
