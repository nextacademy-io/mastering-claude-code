<script setup lang="ts">
// G20 — Spec Kit vs BMAD, positioned on ceremony (x) and org-role-fit (y).
// Ground truth: Spec Kit — GitHub, MIT, ~139k stars, agent-agnostic,
// `specify init` (Python/uv, not npm), low ceremony. BMAD v6 (v6.12.0) —
// 5 named agent personas (Analyst/Mary, PM/John, Architect/Winston,
// Developer/Amelia, UX/Sally) — NOT "12+ personas" (that's stale v4).
// Heavyweight, MIT, canonical repo bmad-code-org/BMAD-METHOD.
</script>

<template>
  <svg viewBox="0 0 1000 330" width="1000" height="330" class="w-full max-w-5xl h-auto max-h-full" font-family="Inter, sans-serif">
    <!-- axes -->
    <g v-click>
      <line x1="90" y1="296" x2="960" y2="296" stroke="var(--na-zinc-600)" stroke-width="2" />
      <line x1="90" y1="296" x2="90" y2="66" stroke="var(--na-zinc-600)" stroke-width="2" />
      <text x="525" y="322" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">ceremony → (low: specs as markdown · high: many artifacts, gated phases)</text>
      <text x="40" y="181" text-anchor="middle" fill="var(--na-fg-muted)" transform="rotate(-90 40 181)" style="font-size:16px">fit to existing roles →</text>
      <text x="100" y="288" fill="var(--na-fg-muted)" style="font-size:16px">generic</text>
      <text x="100" y="84" fill="var(--na-fg-muted)" style="font-size:16px">matches your org chart</text>
    </g>

    <!-- Spec Kit: low ceremony, generic fit -->
    <g v-click>
      <circle cx="220" cy="262" r="12" fill="var(--na-primary-400)" />
      <rect x="250" y="156" width="300" height="130" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-primary-400)" stroke-width="1.5" />
      <text x="400" y="180" text-anchor="middle" fill="var(--na-fg)" font-weight="700" style="font-size:18px">Spec Kit</text>
      <text x="400" y="204" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">GitHub · MIT · ~139k ★</text>
      <text x="400" y="226" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">agent-agnostic · specify init</text>
      <text x="400" y="248" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">Python / uv, not npm</text>
      <text x="400" y="272" text-anchor="middle" fill="var(--na-accent-500)" font-weight="600" style="font-size:16px">low ceremony</text>
    </g>

    <!-- BMAD: high ceremony, role fit -->
    <g v-click>
      <circle cx="940" cy="80" r="12" fill="var(--na-secondary-500)" />
      <rect x="560" y="62" width="360" height="136" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-secondary-500)" stroke-width="1.5" />
      <text x="740" y="86" text-anchor="middle" fill="var(--na-fg)" font-weight="700" style="font-size:18px">BMAD v6</text>
      <text x="740" y="110" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">bmad-code-org/BMAD-METHOD · MIT</text>
      <text x="740" y="132" text-anchor="middle" fill="var(--na-fg)" font-weight="600" style="font-size:16px">5 named agents (v4 had 12+)</text>
      <text x="740" y="156" text-anchor="middle" fill="var(--na-secondary-500)" font-weight="600" style="font-size:16px">heavyweight · fits real org roles</text>
      <text x="740" y="180" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">reproduces your process</text>
    </g>

    <!-- closing honesty banner -->
    <g v-click>
      <rect x="130" y="4" width="740" height="44" rx="10" fill="var(--na-accent-500)" />
      <text x="500" y="32" text-anchor="middle" fill="var(--na-zinc-950)" font-weight="700" style="font-size:18px">
        Both shine on greenfield, but not only there. CLASH is both.
      </text>
    </g>
  </svg>
</template>
