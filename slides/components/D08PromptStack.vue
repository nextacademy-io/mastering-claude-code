<script setup lang="ts">
// D08 — What is in the prompt, every call: a stack in send order. The top
// five blocks were already sent in the previous call and come from the
// cache; only the newest message is new and paid in full.
// The viewBox is cropped to the drawing and matches the height of a concept
// slide's graphic slot (about 852 × 300), so all text renders at about 15 px or more.
const blocks = [
  { label: 'system prompt', h: 38, click: 1, note: 'written by Claude Code' },
  { label: 'tool list', h: 34, click: 2, note: 'name + description of every tool' },
  { label: 'CLAUDE.md', h: 30, click: 3, note: 'your rules, project + personal' },
  { label: 'skills index', h: 28, click: 4, note: 'one line per skill' },
  { label: 'history + tool results', h: 92, click: 5, note: 'every file read, every output' },
]
const GAP = 6, X = 248, W = 290, TOP = 2, NEW_H = 40
let y = TOP
const placed = blocks.map((b) => { const r = { ...b, y }; y += b.h + GAP; return r })
const cachedEnd = y - GAP
const newY = cachedEnd + 10
</script>

<template>
  <svg viewBox="0 0 768 300" class="w-full h-auto max-h-full" role="img" aria-label="What is in the prompt">
    <g v-for="b in placed" :key="b.label" v-click="b.click">
      <rect :x="X" :y="b.y" :width="W" :height="b.h" rx="8" fill="var(--na-primary-800)" stroke="var(--na-primary-600)" stroke-width="1.5" />
      <text :x="X + W / 2" :y="b.y + b.h / 2 + 6" text-anchor="middle" fill="var(--na-fg)" font-weight="600" style="font-size: 17px">{{ b.label }}</text>
      <text :x="X - 14" :y="b.y + b.h / 2 + 5" text-anchor="end" fill="var(--na-fg-muted)" style="font-size: 15px">{{ b.note }}</text>
    </g>

    <!-- cached bracket -->
    <g v-click="5">
      <path :d="`M ${X + W + 14} ${TOP} h 12 V ${cachedEnd} h -12`" fill="none" stroke="var(--na-accent-500)" stroke-width="2.5" />
      <text :x="X + W + 36" :y="(TOP + cachedEnd) / 2 - 4" fill="var(--na-accent-500)" font-weight="700" style="font-size: 17px">cached</text>
      <text :x="X + W + 36" :y="(TOP + cachedEnd) / 2 + 16" fill="var(--na-fg-muted)" style="font-size: 15px">sent in the last call already</text>
    </g>

    <!-- the new tail -->
    <g v-click="6">
      <rect :x="X" :y="newY" :width="W" :height="NEW_H" rx="8" fill="var(--na-primary-500)" stroke="var(--na-primary-300)" stroke-width="2" />
      <text :x="X + W / 2" :y="newY + NEW_H / 2 + 6" text-anchor="middle" fill="var(--na-zinc-50)" font-weight="700" style="font-size: 17px">your message</text>
      <text :x="X - 14" :y="newY + NEW_H / 2 + 5" text-anchor="end" fill="var(--na-fg-muted)" style="font-size: 15px">and the newest tool result</text>
      <text :x="X + W + 16" :y="newY + 16" fill="var(--na-primary-300)" font-weight="700" style="font-size: 17px">new</text>
      <text :x="X + W + 16" :y="newY + 35" fill="var(--na-fg-muted)" style="font-size: 15px">paid in full</text>
    </g>
  </svg>
</template>
