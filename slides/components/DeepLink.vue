<script setup lang="ts">
// The deck's one branch affordance: a small chip, top-right, that jumps into an optional
// block in the appendix or back to the main line. slides/slide-top.vue renders it from a
// slide's `deepDive:` or `backTo:` frontmatter field — like DocLink, it never goes in a
// slide body. Two kinds of block share it: a deep dive (a Claude Code mechanic, alias
// `deep-*`) and an excursion (a method outside Claude Code, alias `excursion-*`); the
// label follows the target's prefix. Wraps Slidev's built-in <Link>, so the target is a
// routeAlias and the jump works in play and presenter mode alike.
// In print (the PDF) Slidev keeps no link inside a slide, so the chip turns into a plain
// signpost that names the target's slide number instead.
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const props = defineProps<{ to: string; mode: 'jump' | 'back' }>()

const { isPrintMode, slides } = useNav()
const targetNo = computed(() => slides.value.find(s => s.meta.slide?.frontmatter.routeAlias === props.to)?.no)

// Back lands on the resume slide fully revealed — the end of the quick dive, so the next →
// goes on with the main line instead of replaying the slide's clicks. Slidev clamps the
// query to the slide's real click count.
const target = computed(() => (props.mode === 'back' ? `${props.to}?clicks=99` : props.to))

const label = computed(() => {
  if (props.mode === 'back') return '← Back to the main line'
  return props.to.startsWith('excursion-') ? 'Excursion →' : 'Deep dive →'
})

// "Deep dive → 229", "← Back to 225"
const printLabel = computed(() => {
  if (props.mode === 'back') return `← Back to ${targetNo.value}`
  return `${label.value} ${targetNo.value}`
})
</script>

<template>
  <span v-if="isPrintMode" class="na-deeplink" :class="`na-deeplink-${mode}`">{{ printLabel }}</span>
  <Link v-else :to="target" class="na-deeplink" :class="`na-deeplink-${mode}`">{{ label }}</Link>
</template>

<style scoped>
/* top-right, mirroring DocLink bottom-right: inside every layout's top padding, above the
   heading, away from Slidev's navigation bar bottom-left */
.na-deeplink {
  position: absolute;
  top: 0.75rem;
  right: 4rem;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  border: 1px solid var(--na-accent-500);
  color: var(--na-accent-400);
  background: var(--na-bg);
  opacity: 0.85;
  transition: opacity 0.15s, background 0.15s, color 0.15s;
}
.na-deeplink-back {
  border-color: var(--na-zinc-600);
  color: var(--na-fg-muted);
}
.na-deeplink:hover {
  opacity: 1;
  background: var(--na-accent-500);
  color: var(--na-zinc-950);
}
</style>
