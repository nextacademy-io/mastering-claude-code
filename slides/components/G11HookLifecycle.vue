<script setup lang="ts">
// G11 — the hook lifecycle. PreToolUse -> Tool -> PostToolUse -> Stop, with
// the exit-code branches. Only exit code 2 does anything special: before a
// tool it blocks the call; after a tool it cannot block (the tool already
// ran) and its stderr goes to the agent; on Stop it keeps the turn open.
// Exit-0 stdout on PreToolUse/PostToolUse never reaches the agent.
// Each exit-2 box sits under its own event, so the drawing stays short
// (896 × 266) and fits the graphic slot under a heading and three lines
// (about 852 × 268) at about 15 px text.
import { useId } from 'vue'

// Marker ids are unique per instance: other diagrams in the deck also define
// an "arrow" marker, and a url(#…) that resolves into another slide may not paint.
const uid = useId()
const arrowId = `g11-arrow-${uid}`
const errorId = `g11-arrow-error-${uid}`
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 896 266" width="896" height="266" class="w-full max-w-5xl h-auto max-h-full" role="img" aria-label="Hook lifecycle: PreToolUse, tool, PostToolUse, Stop and what exit code 2 does at each">
      <defs>
        <marker :id="arrowId" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="var(--na-fg-muted)" />
        </marker>
        <marker :id="errorId" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="var(--na-error-500)" />
        </marker>
      </defs>

      <g font-family="Inter, sans-serif">
        <!-- Agent -->
        <rect x="2" y="30" width="110" height="60" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-primary-500)" stroke-width="2" />
        <text x="57" y="66" text-anchor="middle" fill="var(--na-fg)" font-weight="600" style="font-size:18px">Agent</text>

        <!-- PreToolUse -->
        <rect x="170" y="30" width="140" height="60" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-zinc-600)" stroke-width="2" />
        <text x="240" y="66" text-anchor="middle" fill="var(--na-fg)" font-weight="600" style="font-size:17px">PreToolUse</text>

        <!-- Tool -->
        <rect x="346" y="30" width="80" height="60" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-zinc-600)" stroke-width="2" />
        <text x="386" y="66" text-anchor="middle" fill="var(--na-fg)" font-weight="600" style="font-size:18px">Tool</text>

        <!-- PostToolUse -->
        <rect x="462" y="30" width="150" height="60" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-zinc-600)" stroke-width="2" />
        <text x="537" y="66" text-anchor="middle" fill="var(--na-fg)" font-weight="600" style="font-size:17px">PostToolUse</text>

        <!-- Stop -->
        <rect x="736" y="30" width="90" height="60" rx="10" fill="var(--na-bg-raised)" stroke="var(--na-zinc-600)" stroke-width="2" />
        <text x="781" y="66" text-anchor="middle" fill="var(--na-fg)" font-weight="600" style="font-size:18px">Stop</text>

        <!-- connecting arrows, always visible -->
        <g stroke="var(--na-fg-muted)" stroke-width="2" :marker-end="`url(#${arrowId})`">
          <line x1="114" y1="60" x2="166" y2="60" />
          <line x1="312" y1="60" x2="342" y2="60" />
          <line x1="428" y1="60" x2="458" y2="60" />
          <line x1="614" y1="60" x2="732" y2="60" />
        </g>

        <!-- exit-0 continues labels, stage 1 -->
        <g v-click="1">
          <text x="240" y="18" text-anchor="middle" fill="var(--na-primary-400)" style="font-size:16px">exit 0 → continues</text>
          <text x="537" y="18" text-anchor="middle" fill="var(--na-primary-400)" style="font-size:16px">exit 0 → continues</text>
          <text x="240" y="112" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">stdout: debug log only</text>
          <text x="537" y="112" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">stdout: debug log only</text>
        </g>

        <!-- PreToolUse block branch, stage 2 -->
        <g v-click="2">
          <line x1="240" y1="122" x2="240" y2="152" stroke="var(--na-error-500)" stroke-width="2" :marker-end="`url(#${errorId})`" />
          <rect x="128" y="156" width="224" height="62" rx="8" fill="var(--na-bg)" stroke="var(--na-error-500)" stroke-width="2" />
          <text x="240" y="181" text-anchor="middle" fill="var(--na-error-500)" font-weight="700" style="font-size:16px">exit 2 → BLOCKS the call</text>
          <text x="240" y="204" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">stderr goes to the agent</text>
          <path d="M 128,187 C 80,187 57,150 57,95" fill="none" stroke="var(--na-error-500)" stroke-width="2" stroke-dasharray="5,4" :marker-end="`url(#${errorId})`" />
        </g>

        <!-- PostToolUse branch, stage 3: not blocking, tool already ran -->
        <g v-click="3">
          <line x1="537" y1="122" x2="537" y2="152" stroke="var(--na-error-500)" stroke-width="2" :marker-end="`url(#${errorId})`" />
          <rect x="425" y="156" width="224" height="106" rx="8" fill="var(--na-bg)" stroke="var(--na-error-500)" stroke-width="2" />
          <text x="537" y="181" text-anchor="middle" fill="var(--na-error-500)" font-weight="700" style="font-size:16px">exit 2 → does NOT block</text>
          <text x="537" y="204" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">the tool already ran</text>
          <text x="537" y="227" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">stderr goes to the agent</text>
          <text x="537" y="250" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">as a warning</text>
          <!-- back to the agent, under the PreToolUse box -->
          <path d="M 425,230 C 330,272 26,272 26,95" fill="none" stroke="var(--na-error-500)" stroke-width="2" stroke-dasharray="5,4" :marker-end="`url(#${errorId})`" />
        </g>

        <!-- Stop's own gate, stage 4 -->
        <g v-click="4">
          <line x1="781" y1="92" x2="781" y2="152" stroke="var(--na-error-500)" stroke-width="2" :marker-end="`url(#${errorId})`" />
          <rect x="669" y="156" width="224" height="62" rx="8" fill="var(--na-bg)" stroke="var(--na-accent-500)" stroke-width="2" />
          <text x="781" y="181" text-anchor="middle" fill="var(--na-accent-500)" font-weight="700" style="font-size:16px">exit 2 → turn stays open</text>
          <text x="781" y="204" text-anchor="middle" fill="var(--na-fg-muted)" style="font-size:16px">the agent keeps working</text>
        </g>
      </g>
    </svg>
  </div>
</template>
