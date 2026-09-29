<script setup lang="ts">
// G16 — The verification loop: change -> browser -> observe -> fix, closed, no human inside it.
// The four steps sit on a wide ellipse, so the loop fits a concept slide's
// graphic slot even under three lines (about 852 × 268): the svg is the root,
// bound by height there, and the smallest text renders at about 13.7 px.
// Each arrow stops at the edge of the next circle, so its head stays visible.
import { useId } from 'vue'

// Marker ids are unique per instance: the deck shows this loop on two slides,
// and a url(#…) that resolves into a hidden slide paints no marker.
const markerId = `g16-arrow-${useId()}`

const CX = 350, CY = 166, RX = 300, RY = 116, R = 48
const steps = [
  { label: 'Change', x: CX, y: CY - RY },
  { label: 'Browser', x: CX + RX, y: CY },
  { label: 'Observe', x: CX, y: CY + RY },
  { label: 'Fix', x: CX - RX, y: CY },
]
// the arrow from step i to the next one, trimmed to the two circle edges
const arrow = (i: number) => {
  const a = steps[i], b = steps[(i + 1) % steps.length]
  const len = Math.hypot(b.x - a.x, b.y - a.y)
  const ux = (b.x - a.x) / len, uy = (b.y - a.y) / len
  return { x1: a.x + ux * (R + 6), y1: a.y + uy * (R + 6), x2: b.x - ux * (R + 10), y2: b.y - uy * (R + 10) }
}
</script>

<template>
  <svg viewBox="0 0 700 332" class="w-full h-auto max-h-full" role="img" aria-label="The verification loop">
    <defs>
      <marker :id="markerId" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 Z" fill="var(--na-primary-400)" />
      </marker>
    </defs>

    <ellipse :cx="CX" :cy="CY" :rx="RX" :ry="RY" fill="none" stroke="var(--na-border)" stroke-width="1" stroke-dasharray="4 4" />

    <g v-for="(s, i) in steps" :key="s.label" v-click>
      <line v-bind="arrow(i)" stroke="var(--na-primary-400)" stroke-width="2.5" :marker-end="`url(#${markerId})`" />
    </g>

    <g v-for="s in steps" :key="'n' + s.label">
      <circle :cx="s.x" :cy="s.y" :r="R" fill="var(--na-bg-raised)" stroke="var(--na-primary-400)" stroke-width="2" />
      <text :x="s.x" :y="s.y + 6" font-weight="600" fill="var(--na-fg)" text-anchor="middle" style="font-size:18px">{{ s.label }}</text>
    </g>

    <g v-click>
      <text :x="CX" :y="CY + 6" font-weight="700" fill="var(--na-accent-500)" text-anchor="middle" style="font-size:17px">no human in the loop</text>
    </g>
  </svg>
</template>
