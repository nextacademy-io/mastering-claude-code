<!-- @note: skills -->
> Do:
> - Divider, Skill row highlighted

Say:
- "You do not start cold here either. CLASH ships nine vendored skills. We add one that is ours."

<!-- @note: task-07-the-clash-feature-skill -->
> Do:
> - Branch: 07-start already has the task 06 CLAUDE.md

Say:
- Three things this block builds: the skill itself, one feature shipped through it, then the plugin around it

<!-- @note: loaded-only-when-needed -->
> Do:
> - Point ahead: the next slide runs /skill-doctor live
> - Docs link: open it, scroll to "Skill content lifecycle", then back to the slides

Say:
- Makes skills cheap at scale
- [click] A skill's description sits in context every turn, used or not — unless disable-model-invocation is set
- [click] A loaded body normally stays for the session — after a compaction, older skill bodies can be dropped
- [click] That is what /skill-doctor, on the next slide, measures — how many descriptions you pay for versus how many bodies ever get pulled in



<!-- @note: skill-doctor-what-it-costs -->
> Do:
> - Participants do this in task 07, step 2
> - Demo: run `/skill-doctor` live, then open `.claude/skills/react-best-practices/AGENTS.md` and `.claude/skills/vercel-react-best-practices/AGENTS.md` side by side
> - No `/skill-doctor` (it needs Claude Code v2.1.252 or later)? Read the Skills row in `/context` instead

Say:
- The report shows each skill's context cost and how often it ran. It does not show size, overlap or load errors: open the folders for size, run /skills to see what loaded
- Using a skill loads its short SKILL.md. The ~100 KB AGENTS.md loads only when Claude opens it
- Nobody deletes them in the workshop: seeing the cost is the lesson

<!-- @note: commands-became-skills-nothing-broke -->
> Do:
> - Point back at Task 04's /new-page command: same mechanism, this is the folder version
> - Correct a common misconception
> - Optional: open the docs link, point at the top note "Custom commands have been merged into skills", then back to the slides

Say:
- Commands merging into skills does not break .claude/commands/*.md files
- They still produce the same /command
- Prefer skills for new work: a skill is a folder, so it can carry supporting files. Command files take the same frontmatter — allowed-tools, context: fork — except name and paths

<!-- @note: write-the-clash-feature-skill -->
> Do:
> - Full working solution (trainer only): workshop-artifacts/07-clash-feature-skill/SKILL.md
> - Build it on screen step by step, not pasted whole
> - At the Server Action step, stop and explain: the skill's most important sentence. Task 08 teaches it properly
> - Task step 5 hands participants the reason and one verbatim edit prompt: they add the note without having to work out why

Say:
- It insists on its own ownership check even though requireUser() runs in the layout
- Why: a Server Action is a public POST endpoint with a generated id — the layout guard never sees a direct call
- Why write the reason into the skill: a bare rule gets skipped when a case looks different. A rule with its reason lets Claude decide the new case correctly

<!-- @note: a-skill-is-advice -->
> Do:
> - Foreshadow only

Say:
- [click] "a skill is what you would tell a new colleague. It is advice, not law."

<!-- @note: ship-something-small-end-to-end -->
> Do:
> - Invoke the skill for real
> - Let it run
> - When done, run /context and put the two numbers side by side

Say:
- "/clash-feature Add venue favourites: a user can favourite a venue from its detail page and see a list of their favourites on their profile."
- Feature touched maybe six files
- Contrast is the whole pitch for skills, made visible

<!-- @note: where-claude-code-looks-for-skills -->
> Do:
> - Run /skills anywhere — agent-browser is listed, from the personal install in task 01
> - Point at skills-lock.json — the installer's record of what came from where
> - Docs link: open it, show the live agent-browser skill page, then back to the slides

Say:
- Claude Code reads your skills from two folders. .agents/skills/ is not one of them
- [click] npx skills add vercel-labs/agent-browser -g puts the real copy in ~/.agents/skills/
- [click] Then it links that folder into ~/.claude/skills/ — a skill entry is allowed to be a symlink
- [click] Without the link the skill is simply absent. No error, no warning — /skills is how you check

<!-- @note: a-plugin-bundles-your-setup -->
> Do:
> - Docs link: open it, scroll to "Plugin layout", then back to the slides

Say:
- A skill or a hook alone lives in .claude/ and serves one project or only you
- A plugin is the packaged, shareable version of the same idea
- [click] skills/ — one SKILL.md per skill, same as .claude/skills/
- [click] agents/ — subagent files, same shape as .claude/agents/
- [click] hooks/ — one hooks.json instead of settings.json entries
- [click] .mcp.json — the plugin can ship its own MCP servers
- [click] Every skill is namespaced by the plugin name, so two plugins never collide

<!-- @note: install-from-a-marketplace -->
> Do:
> - FULL WORKING SOLUTION (trainer only): /plugin marketplace add anthropics/claude-plugins-community
>   then /plugin install <a small plugin from the list>@claude-community
> - Run /plugin afterward to show the Installed tab

Say:
- A marketplace is just a catalog — add one, then install by name
- The install summary says whether the plugin is active now or needs /reload-plugins

<!-- @note: the-clash-feature-skill -->
> Do:
> - Task 07 recap
> - Hand off to tasks/07-clash-feature-skill.md, full 9 steps — no more slides until Task 08
> - Watch the chat while they work

Say:
- Reset branch 07-start already has the task 06 CLAUDE.md — nobody restarts from zero
- Done when: one feature ships end to end through the skill, and tsc, lint and build pass
