---
layout: concept
heading: "Why it reads everything at once"
lines:
  - "Older models read left to right, one word affecting the next."
  - "A transformer looks at the whole input together, all at once."
---

<div class="flex gap-6 w-full max-w-3xl">
  <div class="na-card p-5 flex-1">
    <div class="font-semibold mb-2" style="color: var(--na-fg-muted)">before</div>
    <div class="text-base">One direction, one word at a time. Early words fade as the input grows.</div>
  </div>
  <div class="na-card p-5 flex-1" v-click style="border-color: var(--na-accent-500)">
    <div class="font-semibold mb-2" style="color: var(--na-accent-500)">transformer: attention</div>
    <div class="text-base">Every token is weighed against every other token, at every step.</div>
  </div>
</div>

---
layout: concept
heading: "Four sizes, four jobs"
lines:
  - "Haiku: fast and cheap. Sonnet: daily coding. Opus: complex reasoning."
  - "Fable: long, autonomous investigation — the hardest tasks here."
---

<div class="grid grid-cols-4 gap-3 w-full max-w-4xl">
  <div class="na-card p-4"><div class="font-semibold mb-1">Haiku</div><div class="text-sm" style="color: var(--na-fg-muted)">fast, simple tasks</div></div>
  <div class="na-card p-4" v-click><div class="font-semibold mb-1">Sonnet</div><div class="text-sm" style="color: var(--na-fg-muted)">daily coding, the default</div></div>
  <div class="na-card p-4" v-click><div class="font-semibold mb-1">Opus</div><div class="text-sm" style="color: var(--na-fg-muted)">complex reasoning</div></div>
  <div class="na-card p-4" v-click style="border-color: var(--na-accent-500)"><div class="font-semibold mb-1">Fable</div><div class="text-sm" style="color: var(--na-fg-muted)">long, autonomous sessions</div></div>
</div>
