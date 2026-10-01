<script setup lang="ts">
// G13 — CLASH request architecture. Real names throughout: lib/data/*,
// app/actions/*, requireUser, revalidatePath. Sets up G14's point that the
// layout guard and an action's own check are different things.
// The drawing is bound by width on its slide (1030 units → 852 px), so the
// 17 px text renders at about 14 px. The dashed revalidatePath arrow runs
// straight up from the Server Action into the RSC page: the action calls it
// after its write, and Next.js re-renders the page in the same response
// (Next.js docs: revalidatePath "can be called in Server Functions and Route
// Handlers"; in a Server Function it "Updates the UI immediately").
const ROW = { y: 40, h: 62 }
const nodes = [
  { x: 10, w: 150, label: 'Browser' },
  { x: 195, w: 160, label: 'RSC page' },
  { x: 390, w: 190, label: 'lib/data/*.ts', mono: true },
  { x: 615, w: 240, label: 'Prisma Client', sub: 'lib/generated/prisma' },
  { x: 890, w: 130, label: 'SQLite', sub: 'dev.db' },
]
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 1030 258" width="1030" height="258" class="w-full max-w-5xl h-auto max-h-full" role="img" aria-label="CLASH read and write paths">
      <defs>
        <marker id="a13" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="var(--na-fg-muted)" />
        </marker>
      </defs>

      <text x="10" y="28" font-weight="700" fill="var(--na-fg-muted)" style="font-size:17px">READ PATH</text>
      <!-- read path, stage 1 -->
      <g v-click="1" font-family="Inter, sans-serif">
        <g v-for="n in nodes" :key="n.label">
          <rect :x="n.x" :y="ROW.y" :width="n.w" :height="ROW.h" rx="8" fill="var(--na-bg-raised)" stroke="var(--na-primary-500)" stroke-width="2" />
          <text :x="n.x + n.w / 2" :y="n.sub ? ROW.y + 25 : ROW.y + ROW.h / 2 + 6" text-anchor="middle" fill="var(--na-fg)" :font-family="n.mono ? 'JetBrains Mono, monospace' : 'Inter, sans-serif'" style="font-size:17px">{{ n.label }}</text>
          <text v-if="n.sub" :x="n.x + n.w / 2" :y="ROW.y + 47" text-anchor="middle" fill="var(--na-fg-muted)" font-family="JetBrains Mono, monospace" style="font-size:17px">{{ n.sub }}</text>
        </g>
        <line v-for="(n, i) in nodes.slice(0, -1)" :key="'a' + i" :x1="n.x + n.w + 2" :y1="ROW.y + ROW.h / 2" :x2="nodes[i + 1].x - 4" :y2="ROW.y + ROW.h / 2" stroke="var(--na-fg-muted)" stroke-width="2" marker-end="url(#a13)" />
      </g>

      <text x="10" y="170" font-weight="700" fill="var(--na-fg-muted)" style="font-size:17px">WRITE PATH</text>
      <!-- write path up to Server Action, stage 2 -->
      <g v-click="2" font-family="Inter, sans-serif">
        <rect x="10" y="182" width="190" height="72" rx="8" fill="var(--na-bg-raised)" stroke="var(--na-secondary-500)" stroke-width="2" />
        <text x="105" y="224" text-anchor="middle" fill="var(--na-fg)" style="font-size:17px">Client (form submit)</text>

        <rect x="230" y="182" width="200" height="72" rx="8" fill="var(--na-bg-raised)" stroke="var(--na-secondary-500)" stroke-width="2" />
        <text x="330" y="212" text-anchor="middle" fill="var(--na-fg)" style="font-size:17px">Server Action</text>
        <text x="330" y="236" text-anchor="middle" fill="var(--na-fg-muted)" font-family="JetBrains Mono, monospace" style="font-size:17px">app/actions/*.ts</text>

        <line x1="202" y1="218" x2="226" y2="218" stroke="var(--na-fg-muted)" stroke-width="2" marker-end="url(#a13)" />
      </g>

      <!-- auth-check node, stage 3, accent -->
      <g v-click="3" font-family="Inter, sans-serif">
        <rect x="460" y="182" width="300" height="72" rx="8" fill="var(--na-bg)" stroke="var(--na-accent-500)" stroke-width="3" />
        <text x="610" y="212" text-anchor="middle" fill="var(--na-accent-500)" font-weight="700" style="font-size:17px">requireUser + creatorId check</text>
        <text x="610" y="236" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:17px">the action's OWN check</text>
        <line x1="432" y1="218" x2="456" y2="218" stroke="var(--na-fg-muted)" stroke-width="2" marker-end="url(#a13)" />
        <!-- from the top edge of the check box straight up to the bottom edge of the Prisma box -->
        <line x1="735" y1="180" x2="735" y2="108" stroke="var(--na-fg-muted)" stroke-width="2" marker-end="url(#a13)" />
      </g>

      <!-- revalidatePath, stage 4: from the top edge of the Server Action straight up into the RSC page
           (the two boxes share x 230-355); the label sits in the gap between the rows, clear of the line at x 735 -->
      <g v-click="4" font-family="Inter, sans-serif">
        <line x1="292" y1="180" x2="292" y2="106" stroke="var(--na-primary-400)" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#a13)" />
        <text x="306" y="147" fill="var(--na-primary-400)" font-family="JetBrains Mono, monospace" style="font-size:17px">revalidatePath &#8594; the RSC page refreshes</text>
      </g>
    </svg>
  </div>
</template>
