# Task 14 — The browser closes the loop

> Part: Orchestrate and let go · Reset branch: `14-start`
> Slides: https://mastering-claude-code.vercel.app/task-14

## Theory

- [Your systems, as tools](https://mastering-claude-code.vercel.app/theory-mcp-tools)
- [Drive first, then test](https://mastering-claude-code.vercel.app/theory-browser-drive)
- [Measure, fix, measure again](https://mastering-claude-code.vercel.app/theory-measure-fix)

> **Reminder:** Browser tools close the verification loop: observe first, then automate or optimize from measured evidence.

## You will end up with

A Playwright test file for the join flow (request, accept, reject, notification), and a
measured performance fix for avatars. Both verified by an agent in a real browser.

## Why

MCP lets Claude reach outside the repo. A browser is the clearest case. Claude cannot check
a user flow by reading source. It has to click through it. The loop is: change the code,
look in a real browser, fix, repeat. No human in between.

Two MCP servers, two jobs. Playwright MCP for correctness. Chrome DevTools MCP for performance.

## Do this

**Setup**

1. Both servers were added during setup (`docs/SETUP.md`). Check.
   ```bash
   claude mcp list
   ```
   You should see `playwright` and `chrome-devtools`. If not:
   ```bash
   claude mcp add playwright -- npx -y @playwright/mcp@latest
   claude mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest
   npx -y playwright install chromium
   ```
   Inside a running Claude Code session, `/mcp` shows the same connection status without
   leaving the prompt.
2. Start the app: `npm run dev`. Keep it running.

**Tests**

3. Drive the flow by hand first. No test code yet.
   ```
   Using the Playwright MCP tools, log in at localhost:3000 as
   anna.schmidt@example.com / test, open a clash she doesn't host, and request
   to join it. Then log in as the host in a second context, accept the request,
   and confirm the joining user sees a notification. Narrate each step before
   writing any test code.
   ```
4. Now write it down.
   ```
   Now write that flow as a Playwright test file: request to join, host accepts,
   joining user is notified. Add a second test for the host rejecting instead.
   Use the seeded accounts and passwords from docs/SETUP.md.
   ```
5. Run the tests. Fix timing and selector problems first. Only then believe a failure is an app bug.

**Performance — a second, separate problem**

6. Look at the dashboard before anything changes. In your browser, log in at `localhost:3000`
   as `anna.schmidt@example.com` / `test` and open the dashboard. Open DevTools, tab
   **Network**, click the filter **Doc** and reload. One request is left: the HTML document.
   Note its size.
7. Give Anna a photo. Open `/profile`, click **Upload photo**, pick a large photo from your
   phone or camera and click **Save photo**. You should see the photo in the sidebar, bottom left.
8. Look again. Back on the dashboard, same tab, same filter, reload.
   You should see the HTML document grow from a few dozen KB to several MB, from one photo.
   That is the smell.
9. Let Claude find the cause, measured.
   ```
   After Anna uploaded a profile photo, the dashboard HTML at localhost:3000
   grew many times over. Using the Chrome DevTools MCP tools, log in as
   anna.schmidt@example.com / test, load the dashboard and find out what makes
   the document so big. Capture the HTML size, transferred and decoded, before
   you look at any code.
   ```
   You should see the size in MB, and Anna's photo inside the HTML as a base64 data URL,
   more than once.
10. Read the cause in the code. Claude's finding should lead you here.
    - `prisma/schema.prisma`: `User.avatar` is a `String?`, a base64 data URL.
    - `lib/auth.ts`: `getCurrentUser()` selects `avatar: true` on every call.
    - `app/(app)/layout.tsx`: calls `requireUser()` on every page and hands the user to the sidebar.
    - `components/clashes/clash-card.tsx` and `components/venues/venue-card.tsx`: show the
      creator's avatar too.
    - `lib/data/notifications.ts`: `getNotifications()` selects the avatar of whoever caused a
      notification, and the layout loads it on every page.
    Together: the whole photo rides along as text in the HTML of every page, once for every
    place it shows, for a 32 px icon.
11. Fix.
   ```
   User.avatar is a base64 data URL, and CLASH puts it inline into the HTML of
   every page: getCurrentUser() in lib/auth.ts selects it for the sidebar on
   every page via app/(app)/layout.tsx, the clash and venue cards select the
   creator's avatar, and getNotifications() in lib/data/notifications.ts
   selects the actor's avatar. Serve avatars from their own URL instead: a route
   handler that returns the image bytes with an ETag, so the browser can cache
   them. Pass only that URL to components, and stop selecting avatar in the
   session check. Keep the profile upload and the initials fallback working.
   ```
12. Measure again.
    ```
    Re-measure the same dashboard load with Chrome DevTools MCP. Report the
    HTML size before and after, how many data URLs are left, and the size of
    the avatar request on the first and on the second load.
    ```
    You should see the HTML shrink back to a few dozen KB transferred, no data URL left, and
    the photo arrive once as its own request, then from the browser cache.
13. Run the three gates. The hooks from task 13 will help.

**A remote server**

14. Every server so far ran locally, as a process on your machine. Connect one that does not.
    ```bash
    claude mcp add --transport http sentry https://mcp.sentry.dev/mcp
    ```
    ```
    /mcp
    ```
    Pick `sentry` and follow the browser prompt. You do not need a Sentry account to see the
    flow: a local server just runs, a remote one needs to know who you are first.

## Now you

- Add a third test: a host tries to join their own clash. CLASH already refuses this in
  `joinClash` with "You host this clash — you're already in." The page itself shows the
  host no "Request to join" button. Check that.
- Use agent-browser instead of Playwright MCP for the same walkthrough. Compare the size
  of what lands in your context.
- The photo now has its own request, but the first load of it still weighs MB, for a 32 px
  icon. Find out why it is that big, make it small without losing the crop, and measure
  before and after.

## Check

- [ ] Playwright MCP drove a real browser before any test was written.
- [ ] A test covers request, accept and notification. A second one covers reject.
- [ ] Both pass against the seeded database.
- [ ] You saw the dashboard HTML in DevTools before and after Anna's upload.
- [ ] Chrome DevTools MCP captured a "before" number and named the cause before any code was read.
- [ ] The dashboard HTML holds no base64 data URL, and the photo still shows in the sidebar and on Anna's cards.
- [ ] Chrome DevTools MCP confirms the HTML shrank and the photo loads as its own request.
- [ ] `npx tsc --noEmit`, `npm run lint`, `npm run build` pass.
- [ ] You saw the `/mcp` authentication flow for a remote server, even without finishing the login.

## Stuck?

`git checkout 14-start` — the reference CLASH with the ownership fix, the skills, `CLAUDE.md` and the hook set.

## Go further

Four browser tools, four jobs: Playwright MCP for end-to-end tests, Chrome DevTools MCP for
performance and network, Claude in Chrome for checks in your own logged-in browser, agent-browser
for lean automation with accessibility-tree snapshots. Try the same login with each and compare.

## Links

- MCP — https://code.claude.com/docs/en/mcp
- Playwright MCP — https://github.com/microsoft/playwright-mcp
- Chrome DevTools MCP — https://github.com/ChromeDevTools/chrome-devtools-mcp
- Agent Browser — https://github.com/vercel-labs/agent-browser
