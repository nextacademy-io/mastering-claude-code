---
layout: section
heading: "Skills"
---

<template #map>
  <ToolkitMap current="skill" />
</template>

---
layout: task-intro
number: "07"
routeAlias: task-07
heading: "Task 07 — The clash-feature skill"
branch: "07-start"
learn:
  - "Package a repeatable recipe as a skill"
  - "Skills load on demand, by description or /skill-name"
  - "Inspect loaded skill cost with /skill-doctor"
  - "A skill is advice — easy to skip"
outcome:
  - "clash-feature skill: Prisma to page, one recipe"
  - "Venue favourites, shipped end to end through it"
  - "One duplicate vendored skill pair identified"
  - "The skill packaged as a plugin"
---

---
layout: concept
heading: "Loaded only when needed"
routeAlias: theory-skills
docs: https://code.claude.com/docs/en/skills
lines:
  - "Skill names and descriptions load into context every session. Cheap."
  - "The body loads when the description matches — or right away via /skill-name."
  - "references/ for the method, templates/ for the format: opened only when needed."
---

<G05SkillLoading />



---
layout: concept
heading: "/skill-doctor: what it costs"
routeAlias: theory-skill-doctor
lines:
  - "CLASH ships nine vendored skills in .agents/skills/."
  - "Eight copied into .claude/skills/ — agent-browser stays personal."
  - "Two ~100 KB near-duplicates — only their descriptions scan every session."
---

---
layout: concept
heading: "Commands became skills. Nothing broke."
routeAlias: theory-commands-and-skills
docs: https://code.claude.com/docs/en/skills
lines:
  - ".claude/commands/deploy.md → /deploy"
  - ".claude/skills/deploy/SKILL.md → /deploy"
  - "Old command files keep working. Same fields: allowed-tools, context: fork."
---


---
layout: code-live
heading: "Write the clash-feature skill"
filePath: ".claude/skills/clash-feature/SKILL.md"
success: "Every step of the skill points at a real CLASH file. No invented paths."
---

```md
---
name: clash-feature
description: ⟵ LIVE: one sentence, specific enough that Claude's matching
  has something real to key off — /skill-doctor shows if it ever fires
allowed-tools: Read, Edit, Write, Grep, Glob, Bash(npm run *), Bash(npx prisma *), Bash(npx tsc *)
---

## Steps

⟵ LIVE: the eleven-step recipe — Prisma model, migration, constants,
     Zod schema, lib/data/ read helper, Server Action WITH ITS OWN
     OWNERSHIP CHECK AND THE REASON FOR IT, page, shadcn component,
     revalidatePath, notification, then verify
```

---
layout: concept
heading: "A skill is advice"
routeAlias: theory-skill-advice
lines:
  - "Nothing stops an agent from skipping a step in a skill."
  - "disable-model-invocation: true — only an explicit /name can start it."
---

<G12SkillsVsHooks />

---
layout: concept
heading: "Ship something small, end to end"
lines:
  - "Venue favourites: model, toggle action, profile list."
  - "Then /context. Compare with task 06."
---


---
layout: concept
heading: "Where Claude Code looks for skills"
routeAlias: theory-skill-install
docs: https://www.skills.sh/vercel-labs/agent-browser/agent-browser
lines:
  - "Your own skills: ~/.claude/skills/ (personal) and .claude/skills/ (project)."
  - "npx skills add writes to .agents/skills/, then symlinks it in."
  - "No link, no skill — and no error. /skills shows what loaded."
---

<G23SkillSymlink />

---
layout: concept
heading: "A plugin bundles your setup"
docs: https://code.claude.com/docs/en/plugins/create
lines:
  - "One folder: skills, agents, hooks, an MCP server — one shared name."
  - "commands/ became skills/. Old command files still work."
---

<div class="grid grid-cols-3 gap-4 w-full max-w-3xl">
  <div class="na-card p-4"><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">.claude-plugin/</div><div class="text-sm" style="color: var(--na-fg-muted)">plugin.json — name, version</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">skills/</div><div class="text-sm" style="color: var(--na-fg-muted)">one SKILL.md per skill</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">agents/</div><div class="text-sm" style="color: var(--na-fg-muted)">subagent definitions</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">hooks/</div><div class="text-sm" style="color: var(--na-fg-muted)">hooks.json</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">.mcp.json</div><div class="text-sm" style="color: var(--na-fg-muted)">MCP servers the plugin ships</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">/plugin-name:skill</div><div class="text-sm" style="color: var(--na-fg-muted)">namespaced, so plugins never collide</div></div>
</div>

---
layout: concept
heading: "A language server catches type errors"
docs: https://code.claude.com/docs/en/plugins/code-intelligence
lines:
  - "After each edit, Claude sees the type errors it just introduced."
  - "Install the language server first, then the plugin."
---

<div class="flex flex-col gap-3 w-full max-w-3xl font-mono text-sm">
  <div class="na-card px-4 py-3">npm install -g typescript-language-server typescript</div>
  <div class="na-card px-4 py-3" v-click>/plugin install typescript-lsp@claude-plugins-official</div>
  <div class="na-card px-4 py-3" v-click style="border-color: var(--na-accent-500)">Found 2 new diagnostic issues in 1 file (ctrl+o to expand)</div>
</div>

---
layout: code-live
heading: "Install from a marketplace"
filePath: "inside a running claude session"
success: "/plugin lists the installed plugin, and its skill runs namespaced."
---

```bash
# ⟵ LIVE: add a marketplace, then install one plugin from it.
/plugin marketplace add ___
/plugin install ___
```

---
layout: task
number: "07"
heading: "The clash-feature skill"
goal: "Write a skill that holds CLASH's end-to-end feature recipe, then use it to ship venue favourites."
mode: "you do"
success: "One feature ships end to end through the skill, and tsc, lint and build pass."
branch: "07-start"
---

---
layout: concept
heading: "Excursion: Example Mapping"
routeAlias: quick-example-mapping
deepDive: excursion-example-mapping
lines:
  - "Optional: task 09 turns a story into rules and examples."
  - "The discover skill interviews you with AskUserQuestion."
---
