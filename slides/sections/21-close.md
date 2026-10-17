---
layout: concept
heading: "Automate with a stop rule"
deepDive: deep-automate
lines:
  - "Automate work that repeats and has a check that proves it done."
  - "No check, no automation: nobody is there to catch the mistake."
---

<div class="flex gap-6 w-full max-w-4xl">
  <div class="na-card p-5 flex-1">
    <div class="text-sm font-semibold mb-2" style="color: var(--na-accent-500)">Voice</div>
    <div class="text-lg">An output style shapes every answer</div>
  </div>
  <div v-click class="na-card p-5 flex-1">
    <div class="text-sm font-semibold mb-2" style="color: var(--na-accent-500)">Stop</div>
    <div class="text-lg">/goal: a check, plus a turn clause to bound it</div>
  </div>
  <div v-click class="na-card p-5 flex-1">
    <div class="text-sm font-semibold mb-2" style="color: var(--na-accent-500)">Runner</div>
    <div class="text-lg">A background session or a routine</div>
  </div>
</div>

---
layout: concept
heading: "Deep dive: automate"
routeAlias: quick-automate
deepDive: deep-automate
docs: https://code.claude.com/docs/en/goal
lines:
  - "Optional, in the appendix: task 18 in your CLASH clone."
  - "Output styles, /goal, /loop, background sessions, routines, cloud sessions."
---

---
layout: concept
heading: "Three levers, one responsibility"
lines:
  - "Context decides what the agent knows. Reasoning decides how hard it thinks."
  - "Evidence decides when you should trust the result."
---

<div class="grid grid-cols-3 gap-5 w-full max-w-4xl text-center">
  <div class="na-card p-5"><div class="font-semibold">Context</div><div class="text-sm mt-2" style="color: var(--na-fg-muted)">right information</div></div>
  <div class="na-card p-5" v-click><div class="font-semibold">Reasoning</div><div class="text-sm mt-2" style="color: var(--na-fg-muted)">right effort</div></div>
  <div class="na-card p-5" v-click><div class="font-semibold">Evidence</div><div class="text-sm mt-2" style="color: var(--na-fg-muted)">right proof</div></div>
</div>

---
layout: concept
heading: "Autonomy is earned by verification"
lines:
  - "More freedom needs stronger evidence, isolation and limits."
  - "Do not scale autonomy beyond your ability to detect and contain errors."
  - "/goal is the first step up: a check decides when the run stops."
---

<div class="flex items-end gap-4 w-full max-w-4xl justify-center text-sm">
  <div class="na-card px-4 py-3">you watch</div>
  <div class="na-card px-4 py-5" v-click>goal + gates</div>
  <div class="na-card px-4 py-7" v-click>isolated agents</div>
  <div class="na-card px-4 py-9" v-click>background / batch</div>
  <div class="na-card px-4 py-11" v-click>CI / routine</div>
</div>

---
layout: concept
heading: "Context is king. You push it, you own it."
routeAlias: theory-context-is-king
---
