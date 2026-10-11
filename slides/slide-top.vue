<script setup lang="ts">
// Per-slide layer: Slidev mounts one instance inside every slide, above the layout, so the
// chip shows on every layout (task recaps and flow-ways slides included) without touching
// a layout file. useSlideContext() reads the frontmatter of the slide this instance belongs
// to — not $nav.currentFrontmatter, which is the active slide and differs in overview,
// presenter preview and export.
//   deepDive: <alias>   jump chip to the first slide of an optional block
//   backTo:   <alias>   back chip on the block's last slide, to the end of the quick dive
// slide-bottom.vue would sit under the layout's opaque background, hence slide-top.vue.
import { useSlideContext } from '@slidev/client'
import DeepLink from './components/DeepLink.vue'

const { $frontmatter } = useSlideContext()
</script>

<template>
  <DeepLink v-if="$frontmatter.backTo" mode="back" :to="$frontmatter.backTo" />
  <DeepLink v-else-if="$frontmatter.deepDive" mode="jump" :to="$frontmatter.deepDive" />
</template>
