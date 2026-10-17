---
layout: code-live
heading: "Same task, different effort"
routeAlias: theory-effort-lab
docs: https://code.claude.com/docs/en/model-config
filePath: "terminal — an empty folder holding only a copy of review.ts"
success: "Both runs reviewed the same file with the same prompt and model; the group compares findings, false positives and output tokens, not tone."
---

```bash
# ⟵ LIVE: same file, same prompt, same model. Only the effort changes.
claude -p --model sonnet --effort low --output-format json "___"
claude -p --model sonnet --effort high --output-format json "___"
```

---
layout: concept
heading: "Measure the extra reasoning"
backTo: quick-effort-lab
lines:
  - "Score correct findings and false positives. Record the output tokens."
  - "Higher effort pays only when it prevents enough rework to cover its cost."
---

<div class="grid grid-cols-4 gap-2 w-full max-w-3xl text-sm">
  <div></div><div class="font-semibold text-center">correct</div><div class="font-semibold text-center">false +</div><div class="font-semibold text-center">output tokens</div>
  <div class="na-card p-3 font-mono">low</div><div class="na-card p-3 text-center">__/4</div><div class="na-card p-3 text-center">__</div><div class="na-card p-3 text-center">__</div>
  <div class="na-card p-3 font-mono">high</div><div class="na-card p-3 text-center">__/4</div><div class="na-card p-3 text-center">__</div><div class="na-card p-3 text-center">__</div>
</div>
