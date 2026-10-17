# Decision: deep-dive navigation spike

> Result of `handoff-navigation-spike.md`, run in the spike copy on branch `spike/deep-dive-nav`
> (not pushed). Guide for the real restructure.
> Status: all tests passed. The automatic checks and T1–T13 were run by the spike session with
> agent-browser on the dev server; the trainer confirmed T12 (two real windows), T14 (PDF) and
> T15 (look and feel).

## 1. Verdict

**A2 with a per-slide layer — `slide-top.vue`, not `slide-bottom.vue`.** (A2 = optional blocks
in an appendix at the end of the deck, reached by chips rendered from frontmatter, never from
tags in a slide body.)

A per-slide layer reads the frontmatter of *its own* slide: `SlideWrapper.vue` in
`@slidev/client` (v52.20.1) provides each slide's frontmatter with `provideLocal`, and both
per-slide layers mount inside that wrapper, so `useSlideContext().$frontmatter` is the slide the
layer belongs to — also in overview thumbnails, the presenter preview and print. The per-layout
fallback is not needed. But `slide-bottom.vue` mounts *under* the layout, and `.slidev-layout`
paints an opaque background (`slides/styles/base.css`), so the chip there would be hidden.
`slide-top.vue` is the same mechanism one layer up. With it, jump, return to the end of the
quick dive, presenter sync and direct-URL entry all work on `concept`, `task` and `flow-ways`.
One fix was needed: the back chip lands fully revealed (see 3).

### Rejected options (from the research before the spike)

- **Slidev "2D navigation" (vertical sub-slides):** does not exist. Checked against the complete
  sli.dev docs index; navigation is strictly linear. "Navigation Direction Variants" only styles
  forward and backward moves.
- **A separate deep-dive deck:** conflicts with the repo rule "one Slidev project, one deck";
  a multi-entry build is not documented; `deck.mjs`, notes parity, lint and deploy would all
  have to fork.
- **`hide:`/`disabled:` or two compose variants:** the docs do not say whether hidden slides
  appear in `slidev export` or keep a route; two builds would mean two decks and two URLs.
- **Inline `<Link>` tags in slide bodies:** works, but breaks the deck's rule that affordances
  come from frontmatter (like `docs:` → `DocLink`, which lint bans in bodies).
- **Trainer-only navigation (alias URL or `g`):** stays as the zero-build fallback, not the
  answer — it gives a reader of the deployed deck no signpost. `g` accepts slide numbers only
  (T10).

## 2. Test results

`S` = run by the spike session (agent-browser, dev server, 1280×720). `T` = needs the trainer.

| # | Result | Remark |
|---|---|---|
| T1 | pass · S | Slide 224 "Automate with a stop rule", "Deep dive →" top-right, covers nothing. |
| T2 | pass · S | Lands on `/deep-automate`, slide 229 "Nobody at the keyboard". |
| T3 | pass · S | Recap "Automate" (slide 239, `task`) shows "← Back to the main line" above the `TASK 18` row, no overlap. 19 presses of → from 229. |
| T4 | pass · S | Lands on `/quick-automate`, slide 225 "Deep dive: automate". |
| T5 | pass · S | Slide 226 "Three levers, one responsibility". |
| T6 | pass · S | From 167 at click 2 of 3, the chip "Excursion →" jumps back to 157 "Message bus: publish and subscribe". |
| T7 | **fail, fixed** · S | First run: landed on 167 at click **0** of 3 (no cards). After the fix (back chip adds `?clicks=99`, Slidev clamps it): lands at click **3** of 3, all cards shown. Checked in one flow without reload, and on a fresh load. |
| T8 | **fail, fixed** · S | First run: → revealed card 1 instead of going on. After the fix: → goes to 168 "Reconcile, decide, merge". |
| T9 | pass · S | New tab on `/deep-automate` (`history.length` 1), → to the recap, back chip → 225 "Deep dive: automate". The chip is a link, not a history step. |
| T10 | partial · S | `g` + `225` works. `g` + `deep-automate` does **not**: the input turns red and Enter does nothing. Slidev's goto searches `no` and `title` only (`internals/Goto.vue`), and our slides have no `title` (it comes from a `# ` heading, our layouts use the `heading:` field). Not needed for A2: the chips and the alias URL (T9) carry navigation. |
| T11 | remark · S | Browser back after a chip jump returns to the slide the jump started from (here 224, the *start* of the quick dive), not to the resume slide. Expected for a router link; the trainer should use the back chip, not browser back. |
| T12 | pass · S, T | Presenter view (`/presenter/quick-automate`): the chip is shown and clickable on the current slide; its link resolves to `/presenter/deep-automate`. A second tab on the audience view followed both ways, including the click state (167 at 3 of 3). The trainer confirmed it with two real windows: the audience window follows the chip click. |
| T13 | pass · S | The automate block is the last row of the overview (229–239); the recap thumbnail shows the back chip. Clicking a chip inside a thumbnail opens that thumbnail's slide, not the chip target. Nothing marks where the appendix starts (→ appendix divider, see 7). |
| T14 | pass · S, T | The PDF has 239 pages; the automate block is at the end (229–239). It holds **no** link annotations at all — neither the chips nor the existing `docs` links (Slidev limitation, see 4). The chips therefore print as signposts with the target's slide number: "Deep dive → 229" on 224 and 225, "← Back to 225" on 239, "Excursion → 157" on 167, "← Back to 167" on 160 (checked in the print view). The trainer checked pages 224, 225 and 239 of the PDF: readable, covers nothing, fine on paper. |
| T15 | pass · T | The trainer accepts wording, position, size and colour as in 4. The chip is readable and clearly secondary to the heading; the back chip is muted (grey border), the jump chip uses the accent colour. |

## 3. Resume semantics

**Confirmed: "end of the quick dive" — and that end is the resume slide *fully revealed*.**

Landing at click 0 replays the slide's reveals and makes the next → reveal a card instead of
going on (T7/T8). `DeepLink` in back mode therefore links to `<backTo>?clicks=99`. Slidev
clamps the query to the slide's real click count (3 on "Which pattern did we just run?", 0 on
"Deep dive: automate", where the URL stays clean). In presenter mode the clamped value syncs to
the audience window. No frontmatter change: `backTo:` stays a bare alias.

## 4. Chip design

- **Jump, deep dive:** `Deep dive →` — target alias starts with `deep-`.
- **Jump, excursion:** `Excursion →` — target alias starts with `excursion-`. German notes say
  *Exkurs*; the chip text stays English like the rest of the deck.
- **Back:** `← Back to the main line` — the same for both kinds.
- **In print (PDF):** not a link but a signpost with the target's slide number —
  `Deep dive → 229`, `Excursion → 157`, `← Back to 225`. Same pill, same place. Why: Slidev
  (v52.20.1) drops every link inside a slide when it prints, so no link — chip or `docs` —
  is clickable in the PDF. Chromium and the `pdf-lib` re-save keep links on a plain page;
  the loss is in Slidev's print page.
- **Position:** top-right, `top: 0.75rem; right: 4rem` — inside the layouts' top padding, above
  the heading, mirroring `DocLink` bottom-right and away from Slidev's navigation bar
  bottom-left.
- **Look:** a small pill, `0.875rem`, weight 600. Jump: accent border and text. Back: muted
  border and text. Hover: accent fill. `z-index: 10`, opaque deck background behind the text.
- The label comes from the target's prefix, so frontmatter needs no `kind:` field.

## 5. Files of the base

Two new files; no layout file changed. `slides/components/DeepLink.vue`:

```vue
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
```

`slides/slide-top.vue`:

```vue
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
```

## 6. Requirements for the lint extension

`slides/scripts/lint-slides.mjs` should check:

1. **Targets resolve.** Every `deepDive:` and `backTo:` value is a `routeAlias` that exists
   exactly once in the composed deck.
2. **Prefixes match the field.** `deepDive:` points to `deep-*` or `excursion-*`. `backTo:`
   points to `quick-*`. `deep-*` and `excursion-*` sit only on the first slide of a block;
   `quick-*` sits only on a resume slide that also carries `deepDive:` to the same block.
3. **Every block closes.** Each `deep-*`/`excursion-*` block has exactly one slide with
   `backTo:`, its last slide, and that `backTo:` names the `quick-*` slide whose `deepDive:`
   points to this block.
4. **Placement.** `deep-*`/`excursion-*` blocks only in the appendix (after `21-close.md`
   and the appendix divider, see 7); `quick-*` slides only in the main line. A block left in the main line shows its back chip
   during a linear run, and the chip skips whatever lies between the block and its resume
   slide.
5. **One chip per slide.** Never `deepDive:` and `backTo:` on the same slide —
   `slide-top.vue` would show only the back chip.
6. **Allowed layouts.** `deepDive:` on `concept`, `code-live` and `task`; `backTo:` on
   `concept`, `code-live`, `task` and `flow-ways` — all four checked in the spike, the chip
   covers nothing (on `code-live` it sits 14 px above the `LIVE` badge). Not on `section` and
   `task-intro` until their top-right corner is checked.
7. **Frontmatter only.** No `<Link` and no `<DeepLink` in a slide body.
8. **Bare aliases.** No `?` or `/` in `deepDive:`/`backTo:` values — `DeepLink` adds
   `?clicks=` itself.
9. Keep the existing rule that the `theory-*` and `task-NN` aliases stay untouched.

Any automated check that clicks or counts chips (for example `slides/scripts/check-slides.sh`)
selects `[data-slidev-no="N"] .na-deeplink`, never the chip text: Slidev keeps visited slides
mounted and hidden, so the same chip text is in the page several times.

## 7. Open issues for the restructure

None open. One decision from the review that the restructure carries out:

- **Appendix divider.** One `section` slide between the close ("Context is king. You push it,
  you own it.") and the first appendix block, with `JourneyMap`, and a note in EN and DE. The
  `JourneyMap.vue`/`ToolkitMap.vue` data change it needs is already required by the research.
  Why: in the overview and the PDF the close otherwise runs straight into the first block; a
  reader alone needs the signal "the course ends here, everything after is optional". The
  trainer is not affected — the chips jump straight into the blocks.
