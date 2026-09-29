<script setup lang="ts">
// G2 — Context window as a budget. A filling vertical bar, bottom to top:
// system prompt, CLAUDE.md, skill descriptions, tool results, conversation,
// free room, then the drift zone where things go wrong.
// The svg is the root and a direct child of a concept slide's graphic slot
// (about 852 × 300), where it is bound by height: the 740 × 370 viewBox then
// draws at about 0.8 px per unit, so the 18 px labels render at about 14 px.
const bands = [
  { key: 'system', label: 'System prompt', h: 32, color: 'var(--na-zinc-600)' },
  { key: 'claude-md', label: 'CLAUDE.md', h: 28, color: 'var(--na-zinc-500)' },
  { key: 'skills', label: 'Skill descriptions', h: 40, color: 'var(--na-primary-700)' },
  { key: 'tool-results', label: 'Tool results', h: 86, color: 'var(--na-primary-500)' },
  { key: 'conversation', label: 'Conversation', h: 100, color: 'var(--na-primary-400)' },
] as const
const barWidth = 240
const barX = 170
const topY = 2
const bottomY = 368
const driftH = 40
const filled = bands.reduce((s, b) => s + b.h, 0)
const freeTop = topY + driftH
const freeH = bottomY - filled - freeTop
const noteX = barX + barWidth + 24
</script>

<template>
  <svg viewBox="0 0 740 370" class="w-full h-auto max-h-full" role="img" aria-label="Context window as a budget">
    <!-- outer container -->
    <rect :x="barX" :y="topY" :width="barWidth" :height="bottomY - topY" fill="none" stroke="var(--na-zinc-700)" stroke-width="2" rx="6" />

    <!-- free room, labelled -->
    <text :x="barX + barWidth / 2" :y="freeTop + freeH / 2 + 6" text-anchor="middle" fill="var(--na-zinc-500)" style="font-size:18px">free</text>

    <!-- drift zone at the very top -->
    <g v-click="5">
      <rect :x="barX" :y="topY" :width="barWidth" :height="driftH" fill="var(--na-error-500)" opacity="0.85" rx="4" />
      <text :x="barX + barWidth / 2" :y="topY + driftH / 2 + 6" text-anchor="middle" font-weight="700" fill="white" style="font-size:18px">drift zone</text>
    </g>

    <!-- bands, bottom to top -->
    <g v-for="(band, i) in bands" :key="band.key" v-click="i + 1">
      <rect
        :x="barX"
        :y="bottomY - bands.slice(0, i + 1).reduce((s, b) => s + b.h, 0)"
        :width="barWidth"
        :height="band.h"
        :fill="band.color"
      />
      <text
        :x="barX - 16"
        :y="bottomY - bands.slice(0, i).reduce((s, b) => s + b.h, 0) - band.h / 2 + 6"
        text-anchor="end"
        fill="var(--na-fg)"
        style="font-size:18px"
      >{{ band.label }}</text>
    </g>

    <!-- variable-size callout next to the two growth bands -->
    <g v-click="5">
      <text :x="noteX" y="140" fill="var(--na-fg-muted)" style="font-size:18px">tool results and conversation grow.</text>
      <text :x="noteX" y="164" fill="var(--na-fg-muted)" style="font-size:18px">Everything else is fixed.</text>
      <text :x="noteX" y="204" fill="var(--na-error-500)" font-weight="700" style="font-size:18px">Uncontrolled, they push you</text>
      <text :x="noteX" y="228" fill="var(--na-error-500)" font-weight="700" style="font-size:18px">into the drift zone.</text>
    </g>
  </svg>
</template>
