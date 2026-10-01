<script setup lang="ts">
// D10 — Subagents: a second loop with its own window. The noisy work fills
// the subagent's window; only one message crosses back. A fork starts with
// a copy of the main window instead of an empty one.
// Layout: each window bar sits on the outer side of its loop, so the spawn
// arrow (top) and the report (bottom) run straight between the two loops and
// never cross a bar. The viewBox is cropped to the drawing and fits a concept
// slide's graphic slot (about 852 × 300), so the smallest text renders at 14 px.
const chips = ['read', 'grep', 'read', 'read', 'edit', 'read']
</script>

<template>
  <svg viewBox="0 0 852 276" class="w-full h-auto max-h-full" role="img" aria-label="Subagents">
    <defs>
      <marker id="d10-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="var(--na-zinc-400)" />
      </marker>
      <marker id="d10-arrow-accent" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="var(--na-accent-500)" />
      </marker>
    </defs>

    <!-- main loop, its window bar on the left -->
    <g>
      <text x="50" y="16" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size: 15px">window</text>
      <text x="50" y="34" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size: 15px">barely moves</text>
      <rect x="30" y="44" width="40" height="160" rx="8" fill="none" stroke="var(--na-zinc-600)" stroke-width="2" />
      <rect x="30" y="180" width="40" height="24" rx="6" fill="var(--na-primary-600)" />
      <circle cx="160" cy="124" r="56" fill="none" stroke="var(--na-primary-400)" stroke-width="4" stroke-dasharray="262 35" />
      <path d="M 203.8 89 L 212.5 99.5 L 198.5 103 z" fill="var(--na-primary-400)" />
      <text x="160" y="120" text-anchor="middle" fill="var(--na-fg)" font-weight="700" style="font-size: 18px">Main</text>
      <text x="160" y="140" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size: 14px">loop</text>
    </g>

    <!-- spawn arrow -->
    <line x1="220" y1="104" x2="464" y2="104" stroke="var(--na-zinc-400)" stroke-width="2" marker-end="url(#d10-arrow)" />
    <text x="342" y="92" text-anchor="middle" fill="var(--na-fg)" font-weight="600" style="font-size: 16px">Agent: "audit app/actions"</text>

    <!-- subagent loop, its window bar on the right -->
    <g>
      <circle cx="520" cy="124" r="56" fill="none" stroke="var(--na-accent-500)" stroke-width="4" stroke-dasharray="262 35" />
      <path d="M 563.8 89 L 572.5 99.5 L 558.5 103 z" fill="var(--na-accent-500)" />
      <text x="520" y="120" text-anchor="middle" fill="var(--na-fg)" font-weight="700" style="font-size: 18px">Subagent</text>
      <text x="520" y="140" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size: 14px">own loop</text>
      <text x="624" y="34" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size: 15px">own window</text>
      <rect x="604" y="44" width="40" height="160" rx="8" fill="none" stroke="var(--na-zinc-600)" stroke-width="2" />
    </g>
    <!-- window fills with noisy work -->
    <g v-click="1">
      <rect x="604" y="58" width="40" height="146" rx="6" fill="var(--na-secondary-600)" opacity="0.85" />
      <g v-for="(c, i) in chips" :key="i">
        <rect :x="668 + (i % 2) * 88" :y="46 + Math.floor(i / 2) * 46" width="76" height="34" rx="6" fill="var(--na-bg-raised)" stroke="var(--na-secondary-500)" stroke-width="1.5" />
        <text :x="706 + (i % 2) * 88" :y="68 + Math.floor(i / 2) * 46" text-anchor="middle" fill="var(--na-fg)" style="font-size: 15px">{{ c }}</text>
      </g>
      <text x="750" y="200" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size: 15px">stays here</text>
    </g>

    <!-- one message back -->
    <g v-click="2">
      <line x1="466" y1="146" x2="216" y2="146" stroke="var(--na-accent-500)" stroke-width="2" marker-end="url(#d10-arrow-accent)" />
      <text x="342" y="170" text-anchor="middle" fill="var(--na-accent-500)" font-weight="700" style="font-size: 16px">one message: the report</text>
    </g>

    <!-- fork note -->
    <g v-click="3">
      <rect x="4" y="226" width="844" height="46" rx="8" fill="var(--na-bg-raised)" stroke="var(--na-zinc-700)" stroke-width="1.5" />
      <text x="426" y="254" text-anchor="middle" fill="var(--na-fg)" style="font-size: 15px">A fork is the same, but its window starts as a copy of yours — cheaper when it needs what you already know.</text>
    </g>
  </svg>
</template>
