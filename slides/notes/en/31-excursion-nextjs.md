<!-- @note: a-server-action-is-a-public-endpoint -->
> Do:
> - Excursion in the appendix: you got here from the chip on "The safety moment"
> - Say up front: this block is Next.js, not Claude Code. Skip any slide the group already knows
> - [click] The direct call

Say:
- A function marked 'use server' becomes a POST endpoint. Next.js gives it a generated id; the form only knows that id
- Anyone with a session cookie can call the endpoint directly, with any arguments, without loading the page
- [click] So requireUser() in the layout never runs on a direct call. The action has to load the row and check that the current user owns it
- That is why tasks 03, 07, 08 and 10 keep coming back to this one check

<!-- @note: shadcn-ui-the-code-is-yours -->
> Do:
> - [click] The file it writes

Say:
- shadcn/ui is not a library you install and import. The CLI copies each component's source into your project
- [click] After npx shadcn@latest add button, components/ui/button.tsx is your file. No package version to bump
- For Claude this means: the component is code in the repository it can read and change, like any other file

<!-- @note: prisma-7-the-choices-in-task-02 -->
> Do:
> - [click] The config card
> - [click] The seed card

Say:
- The Prisma 7 client is generated into lib/generated/prisma, and the code imports it from there — that is the first rule task 02 writes into CLAUDE.md
- [click] Prisma 7.10 and later creates prisma7.config.ts; earlier Prisma 7 projects have prisma.config.ts. The CLI accepts either, so follow what is installed
- [click] SQLite through the better-sqlite3 adapter, and prisma/seed.ts runs through tsx
- Every one of these is a convention Claude cannot guess from older examples, so each one goes into CLAUDE.md or the prompt

<!-- @note: next-js-16-params-are-promises -->
> Do:
> - Point at the third rule task 02 adds to CLAUDE.md

Say:
- In Next.js 16, a page gets params and searchParams as Promises. Await them before you read a field
- Much older Next.js code reads them directly, and that code is in the model's training data
- A one-line rule in CLAUDE.md fixes the default for every session — the Claude Code lesson inside the framework detail

<!-- @note: why-a-base64-avatar-costs-payload -->
> Do:
> - Ties to "Measure, fix, measure again" in task 14
> - Afterwards the back chip returns to "The safety moment"; the next slide is "Point, don't let it guess"

Say:
- Base64 turns every three bytes into four characters, so the image grows by about a third, and it travels as text
- CLASH stores the avatar as a base64 string, up to 1.5 MB, and getCurrentUser() selects it on every page for one small icon
- The fix in task 14: stop selecting the avatar in the session check. In general: select only what a page shows, and serve images as files
