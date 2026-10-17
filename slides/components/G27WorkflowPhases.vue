<script setup lang="ts">
// G27 — Workflow phases. Left: the script's meta.phases list (one object per
// phase, each with a title) and its phase() calls. Right: the /workflows
// progress view, one row per phase with an agent count and its state (the
// real view also has a time column, and shows tokens per agent, not per
// phase; the deck never shows clock values). Agent counts mirror G09's six
// action files.
type Phase = 'Discover' | 'Review' | 'Verify'
type Line = { text: string; kind: 'code' | 'call' | 'comment' | 'gap'; indent?: 1 | 2; phase?: Phase }
const script: Line[] = [
  { text: 'export const meta = {', kind: 'code' },
  { text: "name: 'audit-actions', description: '…',", kind: 'code', indent: 1 },
  { text: "phases: [{ title: 'Discover' },", kind: 'code', indent: 1 },
  { text: "{ title: 'Review' },", kind: 'code', indent: 2 },
  { text: "{ title: 'Verify' }],", kind: 'code', indent: 2 },
  { text: '}', kind: 'code' },
  { text: '', kind: 'gap' },
  { text: "phase('Discover')", kind: 'call', phase: 'Discover' },
  { text: '// one agent lists app/actions/', kind: 'comment' },
  { text: "phase('Review')", kind: 'call', phase: 'Review' },
  { text: '// pipeline(): one agent per file', kind: 'comment' },
  { text: "phase('Verify')", kind: 'call', phase: 'Verify' },
  { text: '// parallel(): all refuters, wait for all', kind: 'comment' },
]
const phases: { title: Phase; agents: string; state: 'done' | 'running' }[] = [
  { title: 'Discover', agents: '1 agent', state: 'done' },
  { title: 'Review', agents: '6 agents', state: 'done' },
  { title: 'Verify', agents: '6 agents', state: 'running' },
]
const L = { x: 10, y: 10, w: 420, h: 380 }
const R = { x: 560, y: 10, w: 390, h: 380 }
const lineH = 24
const yOf = (i: number) => 82 + i * lineH
const rowH = 74
const rowY = (i: number) => 84 + i * (rowH + 14)
const callLine = (title: Phase) => script.findIndex((l) => l.phase === title)
const codeColor = (kind: Line['kind']) =>
  kind === 'call' ? 'var(--na-accent-500)' : kind === 'comment' ? 'var(--na-fg-muted)' : 'var(--na-fg)'
</script>

<template>
  <svg viewBox="0 0 960 400" width="960" height="400" class="w-full max-w-4xl h-auto max-h-full" font-family="Inter, sans-serif">
    <defs>
      <marker id="g27-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--na-accent-500)" />
      </marker>
    </defs>

    <!-- stage 1: the script — meta.phases and the phase() calls -->
    <g v-click>
      <rect :x="L.x" :y="L.y" :width="L.w" :height="L.h" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-zinc-700)" stroke-width="2" />
      <text :x="L.x + 20" :y="L.y + 32" fill="var(--na-fg)" font-weight="700" style="font-size:14px">script</text>
      <text :x="L.x + L.w - 20" :y="L.y + 32" text-anchor="end" fill="var(--na-fg-muted)" style="font-size:13px">Claude wrote it, you read it</text>
      <template v-for="(l, i) in script" :key="i">
        <text
          v-if="l.kind !== 'gap'"
          :x="L.x + 20 + (l.indent ?? 0) * 18"
          :y="yOf(i)"
          :fill="codeColor(l.kind)"
          :font-weight="l.kind === 'call' ? 700 : 400"
          font-family="'JetBrains Mono', monospace"
          style="font-size:13px"
        >{{ l.text }}</text>
      </template>
    </g>

    <!-- stage 2: the /workflows progress view, one row per phase -->
    <g v-click>
      <rect :x="R.x" :y="R.y" :width="R.w" :height="R.h" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-zinc-700)" stroke-width="2" />
      <text :x="R.x + 20" :y="R.y + 32" fill="var(--na-fg)" font-weight="700" font-family="'JetBrains Mono', monospace" style="font-size:14px">/workflows</text>
      <text :x="R.x + R.w - 20" :y="R.y + 32" text-anchor="end" fill="var(--na-fg-muted)" style="font-size:13px">progress view</text>
      <g v-for="(p, i) in phases" :key="p.title">
        <rect :x="R.x + 14" :y="rowY(i)" :width="R.w - 28" :height="rowH" rx="8" fill="var(--na-zinc-800)" stroke="var(--na-zinc-700)" />
        <circle :cx="R.x + 34" :cy="rowY(i) + 26" r="5" :fill="p.state === 'done' ? 'var(--na-success-500)' : 'var(--na-accent-500)'" />
        <text :x="R.x + 48" :y="rowY(i) + 31" fill="var(--na-fg)" font-weight="700" style="font-size:15px">{{ p.title }}</text>
        <text :x="R.x + 48" :y="rowY(i) + 56" fill="var(--na-fg-muted)" style="font-size:14px">{{ p.agents }} · {{ p.state }}</text>
      </g>
      <text :x="R.x + R.w / 2" :y="R.y + R.h - 18" text-anchor="middle" fill="var(--na-fg-muted)" font-family="'JetBrains Mono', monospace" style="font-size:13px">Enter tokens/agent · p pause · x stop · s save</text>
    </g>

    <!-- stage 3: one phase() call, one row -->
    <g v-click>
      <line
        v-for="(p, i) in phases"
        :key="p.title"
        :x1="L.x + L.w" :y1="yOf(callLine(p.title)) - 5"
        :x2="R.x + 14" :y2="rowY(i) + rowH / 2"
        stroke="var(--na-accent-500)" stroke-width="2.5" marker-end="url(#g27-arrow)"
      />
    </g>
  </svg>
</template>
