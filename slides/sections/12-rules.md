---
layout: section
heading: "Path-scoped rules"
---

<template #map>
  <ToolkitMap current="rule" />
</template>

---
layout: task-intro
number: "10"
routeAlias: task-10
heading: "Task 10 — Path-scoped rules"
branch: "10-start"
learn:
  - "Scope a project rule to matching files with paths: frontmatter"
  - "Tell a project rule apart from a personal, unconditional one"
  - "Pick CLAUDE.md, a rule or a skill by when each one loads"
  - "Prove with /context when a scoped rule loads"
outcome:
  - "A project rule: .claude/rules/server-actions.md"
---

---
layout: concept
heading: "A rule without paths always loads"
lines:
  - "No paths field: the rule loads at launch, every session."
  - "A project rule like that has the same priority as .claude/CLAUDE.md."
---

<div class="flex gap-6 w-full max-w-3xl">
  <div class="na-card p-5 flex-1">
    <div class="font-mono text-sm font-semibold mb-2" style="color: var(--na-accent-500)">~/.claude/rules/tone.md</div>
    <div class="text-sm" style="color: var(--na-fg-muted)">task 06 · no paths · loads first</div>
  </div>
  <div class="na-card p-5 flex-1" v-click>
    <div class="font-mono text-sm font-semibold mb-2" style="color: var(--na-accent-500)">.claude/rules/*.md</div>
    <div class="text-sm" style="color: var(--na-fg-muted)">no paths · like .claude/CLAUDE.md</div>
  </div>
</div>

---
layout: concept
heading: "Rule, CLAUDE.md or skill?"
routeAlias: theory-rule-claude-md-skill
lines:
  - "Ask when it must be in context, not where it fits."
---

<div class="grid grid-cols-3 gap-4 w-full max-w-4xl">
  <div class="na-card p-4"><div class="font-semibold mb-1">Always</div><div class="text-sm" style="color: var(--na-fg-muted)">CLAUDE.md, rules without paths</div></div>
  <div class="na-card p-4" v-click style="border-color: var(--na-accent-500)"><div class="font-semibold mb-1">On a matching file</div><div class="text-sm" style="color: var(--na-fg-muted)">rules with paths</div></div>
  <div class="na-card p-4" v-click><div class="font-semibold mb-1">On demand</div><div class="text-sm" style="color: var(--na-fg-muted)">a skill's body; its description loads every session</div></div>
</div>

---
layout: concept
heading: "Rules scoped to a path"
routeAlias: theory-path-scoped-rules
docs: https://code.claude.com/docs/en/memory
lines:
  - "paths is the only field a rule's frontmatter reads — the rest is ignored."
  - "Globs match by folder or extension. A list matches if any pattern does."
  - "YAML that doesn't parse: the rule loads everywhere, as if it had no paths."
---

<div class="na-card p-5 font-mono text-sm w-full max-w-md">
  <div style="color: var(--na-fg-muted)">---</div>
  <div>paths:</div>
  <div>&nbsp;&nbsp;- "app/actions/**"</div>
  <div v-click>&nbsp;&nbsp;- "lib/**/*.{ts,tsx}"</div>
  <div style="color: var(--na-fg-muted)">---</div>
</div>

---
layout: concept
heading: "When a scoped rule really loads"
routeAlias: theory-when-a-rule-loads
lines:
  - "Claude reads, writes or edits a matching file. A cat on one counts too."
  - "Not at launch, not on every tool use. Once loaded, it stays until /compact."
---

<div class="flex gap-6 w-full max-w-3xl">
  <div class="na-card p-5 flex-1">
    <div class="font-mono text-sm font-semibold mb-2">/context</div>
    <div class="text-sm" style="color: var(--na-fg-muted)">Memory files: CLAUDE.md</div>
  </div>
  <div class="na-card p-5 flex-1" v-click style="border-color: var(--na-accent-500)">
    <div class="font-mono text-sm font-semibold mb-2">read app/actions/venues.ts → /context</div>
    <div class="text-sm" style="color: var(--na-fg-muted)">Memory files: CLAUDE.md, server-actions.md</div>
  </div>
</div>

---
layout: code-live
heading: "A rule that only loads when it matters"
filePath: ".claude/rules/server-actions.md"
success: "/context lists the rule only after Claude reads a file under app/actions/."
---

```markdown
---
paths:
  - "app/actions/**"
---

# Server Action rules

⟵ LIVE: state the rule from task 08's audit — every action that
     mutates an EXISTING row must check ownership, not just that
     requireUser() ran.
```

---
layout: task
number: "10"
heading: "The ownership rule"
goal: "Write a project rule scoped to app/actions/**, verify it loads only once Claude opens a matching file."
mode: "you do"
success: "/context shows the rule only after Claude reads a file under app/actions/, and a sketch cites it unprompted."
branch: "10-start"
---
