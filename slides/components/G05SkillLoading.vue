<script setup lang="ts">
// G5 — Skill loading. Progressive disclosure: description scanned every
// session -> body loads on match or /name.
// Sized for its slide's graphic slot under a heading and three lines (about
// 852 × 268): the 1018 × 300 viewBox is bound by width there (0.84 px per
// unit), so the 16 px text renders at about 13.4 px. Every line is svg text.
const cards = [
  { name: 'clash-feature', desc: 'Add a feature: model → action → page.' },
  { name: 'code-review', desc: 'Review the current diff for bugs.' },
  { name: 'security-auditor', desc: 'Audit Server Actions for missing checks.' },
]
const cardW = 330
const cardH = 90
const gap = 12
const cardX = (i: number) => 2 + i * (cardW + gap)
const body = { x: 2, y: 130, w: 1014, h: 132 }
</script>

<template>
  <svg viewBox="0 0 1018 300" class="w-full h-auto max-h-full" font-family="Inter, sans-serif" role="img" aria-label="Skill descriptions are always in context; bodies load on a match or via /skill-name">
    <defs>
      <marker id="arrowG5" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="var(--na-accent-500)" />
      </marker>
    </defs>

    <!-- stage 1: description-only cards, always in context -->
    <g v-click>
      <g v-for="(c, i) in cards" :key="c.name">
        <rect :x="cardX(i)" y="2" :width="cardW" :height="cardH" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-zinc-700)" stroke-width="2" />
        <text :x="cardX(i) + 12" y="27" font-weight="600" fill="var(--na-fg)" style="font-size:16px">name: {{ c.name }}</text>
        <text :x="cardX(i) + 12" y="50" fill="var(--na-fg-muted)" style="font-size:16px">description:</text>
        <text :x="cardX(i) + 12" y="73" fill="var(--na-fg-muted)" style="font-size:16px">{{ c.desc }}</text>
      </g>
      <text x="509" y="116" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">always in context — cheap, scanned on every prompt</text>
    </g>

    <!-- stage 2: one card matches and expands -->
    <g v-click>
      <line :x1="cardX(0) + cardW / 2" y1="93" :x2="cardX(0) + cardW / 2" y2="120" stroke="var(--na-accent-500)" stroke-width="2" marker-end="url(#arrowG5)" />
      <rect :x="cardX(0)" y="2" :width="cardW" :height="cardH" rx="10" fill="none" stroke="var(--na-accent-500)" stroke-width="3" />
      <rect :x="body.x" :y="body.y" :width="body.w" :height="body.h" rx="12" fill="var(--na-primary-900)" stroke="var(--na-accent-500)" stroke-width="2" />
      <text x="22" y="158" font-weight="700" fill="var(--na-accent-500)" style="font-size:16px">SKILL.md body — loaded now (match found)</text>
      <!-- &#160; keeps a double space between the steps: Vue condenses template whitespace -->
      <text x="22" y="188" fill="var(--na-fg)" style="font-size:16px">1. Prisma model&#160; 2. Migration&#160; 3. Zod schema in lib/validation.ts&#160; 4. Read helper in lib/data/</text>
      <text x="22" y="212" fill="var(--na-fg)" style="font-size:16px">5. Server Action + its own auth check&#160; 6. RSC page&#160; 7. shadcn component&#160; 8. revalidatePath&#160; 9. notify</text>
      <text x="22" y="244" fill="var(--na-fg-muted)" style="font-size:16px">full checklist, examples, edge cases — only pulled in because this one matched</text>
    </g>

    <!-- stage 3: persists for the session -->
    <g v-click>
      <rect x="866" y="140" width="136" height="28" rx="14" fill="var(--na-success-500)" />
      <text x="934" y="159" text-anchor="middle" font-weight="600" fill="var(--na-zinc-950)" style="font-size:16px">stays loaded</text>
      <text x="509" y="292" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">the other two cards never expanded — their token cost stayed at one line each</text>
    </g>
  </svg>
</template>
