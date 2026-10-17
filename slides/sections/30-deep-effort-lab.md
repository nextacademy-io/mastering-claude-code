---
layout: concept
heading: "Effort: what the extra reasoning buys"
routeAlias: deep-effort-lab
lines:
  - "A level sets how much the model thinks on each step."
  - "Turn it up, and every step costs more tokens."
  - "This block measures what that buys, on one small file."
---

---
layout: task-intro
number: "20"
routeAlias: task-20
heading: "Task 20 — Effort lab"
learn:
  - "Read the effort levels and the default per model"
  - "Know which setting wins: variable, flag, settings, default"
  - "Run the same review twice in one session: low, /clear, high"
  - "Score findings against the four bugs, not tone"
outcome:
  - "Two reviews: same prompt, same file, same model, one session"
  - "A filled score table: correct and false positives per level"
  - "One sentence: did the extra reasoning find more?"
---

---
layout: concept
heading: "Five levels, one default per model"
routeAlias: theory-effort-levels
docs: https://code.claude.com/docs/en/model-config#adjust-effort-level
lines:
  - "low, medium, high, xhigh, max. A level the model lacks rounds down."
  - "The default is high. Opus 5.5 and Sonnet 5.5 start at medium."
  - "max is the deepest, prone to overthinking, this session only."
---

<div class="grid grid-cols-5 gap-3 w-full max-w-4xl">
  <div class="na-card p-3"><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">low</div><div class="text-sm" style="color: var(--na-fg-muted)">quick exchanges you review each time</div></div>
  <div class="na-card p-3" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">medium</div><div class="text-sm" style="color: var(--na-fg-muted)">day-to-day work with a clear scope</div></div>
  <div class="na-card p-3" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">high</div><div class="text-sm" style="color: var(--na-fg-muted)">verification matters, edge cases likely</div></div>
  <div class="na-card p-3" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">xhigh</div><div class="text-sm" style="color: var(--na-fg-muted)">deeper reasoning, higher token spend</div></div>
  <div class="na-card p-3" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">max</div><div class="text-sm" style="color: var(--na-fg-muted)">hard problems, no one watching; test first</div></div>
</div>

---
layout: concept
heading: "Where effort is set, who wins"
routeAlias: theory-effort-precedence
docs: https://code.claude.com/docs/en/model-config#set-the-effort-level
lines:
  - "First an explicit choice: CLAUDE_CODE_EFFORT_LEVEL, --effort, /effort."
  - "Then your saved settings. Then the model's default."
  - "A skill or subagent sets its own in frontmatter. maxEffortLevel caps all."
---

<div class="flex flex-col gap-4 w-full max-w-3xl">
  <div class="flex items-center gap-3 w-full">
    <div class="na-card p-4 flex-1"><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">1 · explicit</div><div class="text-sm" style="color: var(--na-fg-muted)">variable, flag, /effort</div></div>
    <span style="color: var(--na-fg-muted)">→</span>
    <div class="na-card p-4 flex-1" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">2 · settings</div><div class="text-sm" style="color: var(--na-fg-muted)">modelSettings, effortLevel</div></div>
    <span style="color: var(--na-fg-muted)">→</span>
    <div class="na-card p-4 flex-1" v-click><div class="font-mono text-sm font-semibold mb-1" style="color: var(--na-accent-500)">3 · default</div><div class="text-sm" style="color: var(--na-fg-muted)">high, or medium on 5.5</div></div>
  </div>
  <div class="text-sm" style="color: var(--na-fg-muted)" v-click>In the /effort slider: <span class="font-mono">Enter</span> saves it as your default, <span class="font-mono">s</span> applies it to this session only.</div>
</div>

---
layout: code-live
heading: "Same task, different effort"
routeAlias: theory-effort-lab
docs: https://code.claude.com/docs/en/model-config
filePath: "terminal — an empty folder holding only a copy of review.ts"
success: "Both runs reviewed the same file with the same prompt and model; the group compares findings, false positives and output_tokens, not tone."
---

```bash
# ⟵ LIVE: same file, same prompt, same model. Only the effort changes.
claude -p --model sonnet --effort low --output-format json "___"
claude -p --model sonnet --effort high --output-format json "___"
```

---
layout: concept
heading: "Measure the extra reasoning"
lines:
  - "You score correct findings and false positives. The trainer adds the tokens."
  - "Higher effort pays only when it prevents enough rework to cover its cost."
---

<div class="grid grid-cols-4 gap-2 w-full max-w-3xl text-sm">
  <div></div><div class="font-semibold text-center">correct</div><div class="font-semibold text-center">false +</div><div class="font-semibold text-center">output tokens</div>
  <div class="na-card p-3 font-mono">low</div><div class="na-card p-3 text-center">__/4</div><div class="na-card p-3 text-center">__</div><div class="na-card p-3 text-center">__</div>
  <div class="na-card p-3 font-mono">high</div><div class="na-card p-3 text-center">__/4</div><div class="na-card p-3 text-center">__</div><div class="na-card p-3 text-center">__</div>
</div>

---
layout: task
number: "20"
heading: "Effort lab"
goal: "Run the same review at low and high effort, score findings against the four bugs, say whether high found more."
mode: "you do"
success: "Two reviews, a filled score table and one sentence on whether high effort found more."
---

---
layout: concept
heading: "Ten runs per level end in a tie"
backTo: quick-effort-lab
lines:
  - "Sonnet, print mode, the same prompt: ten runs at low, ten at high."
  - "Every run found all four bugs. Not one false positive."
  - "High spent about a fifth more output tokens, on longer proofs."
---

<div class="grid grid-cols-4 gap-2 w-full max-w-3xl text-sm">
  <div></div><div class="font-semibold text-center">correct</div><div class="font-semibold text-center">false +</div><div class="font-semibold text-center">median output tokens</div>
  <div class="na-card p-3 font-mono">low</div><div class="na-card p-3 text-center">4/4 in 10 of 10</div><div class="na-card p-3 text-center">0</div><div class="na-card p-3 text-center">1366 (1210 to 1532)</div>
  <div class="na-card p-3 font-mono" v-click="1">high</div><div class="na-card p-3 text-center" v-click="1">4/4 in 10 of 10</div><div class="na-card p-3 text-center" v-click="1">0</div><div class="na-card p-3 text-center" v-click="1">1658 (1568 to 1811)</div>
</div>
