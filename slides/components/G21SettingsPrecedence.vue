<script setup lang="ts">
// G21 — Settings precedence. Five levels, highest overrides the same key
// anywhere below it. Verified against code.claude.com/docs/en/settings —
// exact order and file names, do not reorder without re-checking the docs.
// Sized for the concept slot above two lines, about 852 x 300 px: the flat
// viewBox draws at about 0.94 px per unit, so the 15-unit labels stay over 13 px.
const levels = [
  { n: 1, name: 'Managed', file: 'managed-settings.json', who: 'your organization' },
  { n: 2, name: 'Command line', file: 'claude --settings', who: 'you, this session' },
  { n: 3, name: 'Project local', file: '.claude/settings.local.json', who: 'you, this project' },
  { n: 4, name: 'Shared project', file: '.claude/settings.json', who: 'everyone in the project' },
  { n: 5, name: 'User', file: '~/.claude/settings.json', who: 'you, every project' },
]
</script>

<template>
  <svg viewBox="0 0 900 318" class="w-full h-auto max-h-full" role="img" aria-label="Settings precedence, highest overrides lowest">
    <text x="450" y="16" text-anchor="middle" fill="var(--na-fg-muted)" font-weight="600" style="font-size: 15px">highest precedence</text>
    <g v-for="(l, i) in levels" :key="l.n" v-click="i + 1">
      <rect
        :x="450 - (320 - i * 22)" :y="26 + i * 55" :width="(320 - i * 22) * 2" height="48" rx="10"
        :fill="i === 0 ? 'var(--na-primary-900)' : 'var(--na-bg-raised)'"
        :stroke="i === 0 ? 'var(--na-accent-500)' : 'var(--na-zinc-600)'"
        :stroke-width="i === 0 ? 2.5 : 1.5"
      />
      <text :x="450 - (320 - i * 22) + 18" :y="26 + i * 55 + 21" fill="var(--na-fg)" font-weight="700" style="font-size: 17px">{{ l.n }}. {{ l.name }}</text>
      <text :x="450 - (320 - i * 22) + 18" :y="26 + i * 55 + 40" fill="var(--na-fg-muted)" font-family="var(--font-mono, monospace)" style="font-size: 15px">{{ l.file }}</text>
      <text :x="450 + (320 - i * 22) - 16" :y="26 + i * 55 + 21" text-anchor="end" fill="var(--na-fg-muted)" style="font-size: 15px">{{ l.who }}</text>
    </g>
    <text x="450" y="313" text-anchor="middle" fill="var(--na-fg-muted)" font-weight="600" style="font-size: 15px">lowest precedence</text>
  </svg>
</template>
