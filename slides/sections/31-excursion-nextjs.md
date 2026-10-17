---
layout: concept
heading: "A Server Action is a public endpoint"
routeAlias: excursion-nextjs
lines:
  - "Next.js compiles each Server Action to a POST endpoint with a generated id."
  - "Anyone with a session cookie can call it directly, with any arguments."
  - "The layout guards the page. The action must check ownership itself."
---

<div class="flex gap-6 w-full max-w-3xl">
  <div class="na-card p-5 flex-1">
    <div class="font-mono text-sm font-semibold mb-2">browser → page</div>
    <div class="text-sm" style="color: var(--na-fg-muted)">requireUser() in app/(app)/layout.tsx runs</div>
  </div>
  <div class="na-card p-5 flex-1" v-click style="border-color: var(--na-accent-500)">
    <div class="font-mono text-sm font-semibold mb-2">POST → action id</div>
    <div class="text-sm" style="color: var(--na-fg-muted)">no page, no layout — only the action's own check</div>
  </div>
</div>

---
layout: concept
heading: "shadcn/ui: the code is yours"
lines:
  - "npx shadcn add copies a component's source into your project."
  - "No package to update. You and Claude edit it like your own code."
---

<div class="flex flex-col gap-3 w-full max-w-2xl font-mono text-sm">
  <div class="na-card px-4 py-3">npx shadcn@latest add button</div>
  <div class="na-card px-4 py-3" v-click style="border-color: var(--na-accent-500)">components/ui/button.tsx — now part of your repository</div>
</div>

---
layout: concept
heading: "Prisma 7: the choices in task 02"
lines:
  - "The client is generated into lib/generated/prisma. Import it from there."
  - "prisma7.config.ts or prisma.config.ts: follow the installed version."
  - "SQLite through the better-sqlite3 adapter. The seed runs through tsx."
---

<div class="grid grid-cols-3 gap-4 w-full max-w-4xl text-center">
  <div class="na-card p-4"><div class="font-mono text-sm font-semibold">lib/generated/prisma</div><div class="text-sm mt-1" style="color: var(--na-fg-muted)">the client</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold">prisma7.config.ts</div><div class="text-sm mt-1" style="color: var(--na-fg-muted)">the config</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold">tsx prisma/seed.ts</div><div class="text-sm mt-1" style="color: var(--na-fg-muted)">the seed</div></div>
</div>

---
layout: concept
heading: "Next.js 16: params are Promises"
lines:
  - "params and searchParams arrive as Promises. Always await them."
  - "Older examples read them directly. That is why the rule sits in CLAUDE.md."
---

<div class="na-card px-5 py-4 font-mono text-sm">const { id } = await params</div>

---
layout: concept
heading: "Why a base64 avatar costs payload"
backTo: theory-server-action-safety
lines:
  - "Base64 makes an image about a third bigger, and it travels as text."
  - "getCurrentUser() selects the avatar on every page, for one small icon."
  - "Select only what a page shows. Serve images as files."
---

<div class="flex items-center gap-4 w-full max-w-3xl justify-center text-sm">
  <div class="na-card px-4 py-3 font-mono">User.avatar · up to 1.5 MB</div><span>→</span>
  <div class="na-card px-4 py-3" style="border-color: var(--na-error-500)">every page load</div>
</div>
