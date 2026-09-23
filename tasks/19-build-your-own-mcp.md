# Task 19 — Build your own MCP

> Part: Orchestrate and let go · Reset branch: `19-start`
> Slides: https://mastering-claude-code.vercel.app/task-19

## Theory

- [A server is three registered tools](https://mastering-claude-code.vercel.app/theory-mcp-server-anatomy)
- [Register it, then trust it selectively](https://mastering-claude-code.vercel.app/theory-mcp-json)
- [Another app, same server](https://mastering-claude-code.vercel.app/theory-mcp-from-sdk)

> **Reminder:** An MCP tool is a name, a description and a schema; the server does the work, and every caller still needs permission to use it.

## You will end up with

Your own MCP server, `mcp/server.ts` in your CLASH clone. It offers three tools over the
CLASH database: `list_upcoming_clashes`, `find_venue` and `create_clash`. Claude Code finds
it through `.mcp.json`. The two read tools run without asking. The write tool asks every time.

Then a second app, clash-conference, uses the same server through the Agent SDK. One click
turns a talk into a clash in CLASH.

## Why

In task 14 you used other people's MCP servers. In task 16 you put the agent loop inside
your own program. This task is the third side: your system as a tool.

A tool is small. A name, a description, a schema, a function. Claude reads the description
and decides when to call it. The server decides what it allows. It refuses an unknown host,
an unknown venue, a past date, a duplicate. That logic lives in one place and every caller
gets it: Claude Code at your keyboard, and a route in another app. One server, two hosts.

## Do this

**One tool, end to end**

1. In your CLASH clone, reset and install the server package. `zod` is already there.
   ```bash
   git checkout 19-start
   npm install @modelcontextprotocol/server
   ```
   `npm` adds one package. Nothing else changes.
2. Start `claude` in the clone. Ask for the server with one tool only.
   ```
   Create mcp/server.ts: an MCP server over stdio using McpServer from
   "@modelcontextprotocol/server", StdioServerTransport from
   "@modelcontextprotocol/server/stdio" and zod.
   Build the Prisma client like lib/prisma.ts, but resolve dev.db from import.meta.url,
   never process.cwd(). Add two helpers, reply(text) and refuse(text), where refuse sets
   isError. Name the server "clash". Register one tool, find_venue(query): at most 5
   venues whose title contains the query, case does not matter, with id, title, latitude
   and longitude; plain text when nothing matches. Add main() that connects a
   StdioServerTransport. Log with console.error, never console.log, because stdout
   carries the protocol.
   ```
   You see one new file, `mcp/server.ts`. Read it and find four things: the line that
   builds the path to `dev.db`, the single `registerTool` call, the `main()` that connects
   the transport, and no `console.log` anywhere.
3. Register the server. Create `.mcp.json` at the root of the clone with this content.
   ```json
   {
     "mcpServers": {
       "clash": {
         "type": "stdio",
         "command": "npx",
         "args": ["tsx", "mcp/server.ts"]
       }
     }
   }
   ```
   Exit Claude Code and start `claude` again. It reads `.mcp.json` at start and asks
   whether to use the `clash` server from this project. Say yes. Then check both views.
   ```
   /mcp
   ```
   The panel lists `clash`. Select it and you see one tool, `find_venue`. From a second
   terminal:
   ```bash
   claude mcp list
   ```
   You should see `clash: npx tsx mcp/server.ts - ✔ Connected`. Before you said yes, the
   same line ends with ``⏸ Pending approval (run `claude` to approve)``.
4. Ask the server something only the database can answer.
   ```
   Use the clash server: which venues match Holzmarkt?
   ```
   Claude calls `mcp__clash__find_venue` — the call is labeled with your server name — and
   answers with Holzmarkt 25 and its coordinates. Approve the call if Claude Code asks. You
   wrote that server, and it is answering from `dev.db`.

**Two more tools, fast**

5. Same file, one more tool.
   ```
   Add a second tool to mcp/server.ts: list_upcoming_clashes(area?). Future clashes
   only, earliest first, at most 20. area filters by title, description or venue
   title. One line per clash: ISO date-time, title, venue title, id. Plain text when
   the list is empty. Leave find_venue as it is.
   ```
   Restart the session and ask what is coming up at that venue.
   ```
   Use the clash server: what is coming up at Holzmarkt 25?
   ```
   Claude calls `mcp__clash__find_venue`, then `mcp__clash__list_upcoming_clashes`. The
   answer is "nothing": the only seeded clash at Holzmarkt 25 is in the past. That is the
   server talking, not Claude's memory.
6. The write tool. Every refusal is part of the contract.
   ```
   Add a third tool to mcp/server.ts: create_clash(title, description, dateTime,
   venueId, hostEmail). Refuse with refuse() and plain text when hostEmail is not a
   CLASH user, when venueId is unknown, when dateTime is not an ISO date-time in the
   future, and when a clash with the same title and the same dateTime already exists —
   that message starts with "Duplicate:". Otherwise create the clash with the venue's
   latitude and longitude and the host as creator. Leave the two read tools as they are.
   ```
   Restart the session, then write through the server.
   ```
   Create a clash "MCP Hacknight" at Holzmarkt 25, hosted by anna.schmidt@example.com. Pick any date and time in the future.
   ```
   A permission prompt appears for `mcp__clash__create_clash`. Approve this one call, not
   for good. The server answers `Created clash <id>: "MCP Hacknight" at <ISO date-time>.`
   Open `localhost:3000/clashes` in the running app (`npm run dev`). The new clash is on the
   list. Now ask for the same clash again, same title, same time.
   ```
   Create the clash "MCP Hacknight" at Holzmarkt 25 once more, at exactly the same date and time as before, hosted by anna.schmidt@example.com
   ```
   The server compares title and time and refuses:
   `Duplicate: "MCP Hacknight" already exists at <ISO date-time> (id <id>).` Nothing was
   written. The list still shows the clash once.
7. Trust it selectively. `.claude/settings.json` on this branch holds only `hooks`. Add a
   `permissions` key next to it.
   ```json
   {
     "permissions": {
       "allow": [
         "mcp__clash__find_venue",
         "mcp__clash__list_upcoming_clashes"
       ]
     }
   }
   ```
   Start a new session. Ask the question from step 5 again: no prompt, the read tools just
   run. Send the write prompt from step 6 again: the permission prompt is back, because
   `create_clash` is not on the list. Reads are free. Writes ask.

**The second app**

The rest of this task needs a server that answers. If yours does not, park your own work and
switch to the finished one, in your CLASH clone:

```bash
git stash -u                 # parks your mcp/, .mcp.json and settings change
git checkout 19-solution
npm install
```

`19-solution` is `19-start` plus `mcp/`, `.mcp.json` and the two allowed read tools. The stash
comes first because those same files are tracked on that branch, and git refuses to overwrite
your versions. `git stash pop` on `19-start` brings your own server back later.

8. Clone clash-conference next to your CLASH clone, so that the two folders are siblings,
   and check out its start branch. If you already cloned it during setup, skip the clone and
   only run `git checkout 19-start` inside it.
   ```bash
   cd ..                                                 # the folder that holds your clash clone
   git clone https://github.com/agilino/clash-conference.git
   cd clash-conference
   git checkout 19-start
   ```
   Create a `.env` file with one line, `CLASH_DIR=../clash`, pointing at your CLASH clone.
   Then `npm install` and `npm run dev`. The app runs on port 3001, so both apps can run at
   once. It shows a list of talks, each with a "Publish to CLASH" button, and settings for
   the CLASH venue name and the host email. The publish button does nothing yet: the file
   `app/api/publish/route.ts` is missing on `19-start`.
9. Write the route. Start `claude` in `clash-conference` and send this prompt.
   ```
   Create app/api/publish/route.ts: a POST route that takes a talk id and publishes that
   talk into CLASH through the Agent SDK. Load the talk, the CLASH venue name and the host
   email from this app's own data. Then call query() from @anthropic-ai/claude-agent-sdk
   with mcpServers: one stdio server named clash, command npx, args tsx and
   `${process.env.CLASH_DIR}/mcp/server.ts`; allowedTools: exactly mcp__clash__find_venue
   and mcp__clash__create_clash; maxTurns: 8. The prompt asks the agent to find that venue
   by name and create the clash there, and to answer with the new clash id or with the
   reason it could not. Read the run's first message, the system/init: when the clash
   server's status is failed or needs-auth, mark the talk failed with that status and stop
   reading the run. The route decides nothing else itself: store what the agent answers on
   the talk — published with the clash id, or failed with the message — and return that.
   ```
   You see one new file, `app/api/publish/route.ts`. Read it and find four things: the one
   `query()` call, the two `mcp__clash__…` names in `allowedTools`, the `maxTurns` ceiling,
   and the `system/init` check that ends the publish before any tool runs.
10. Pick a talk in `clash-conference` and click "Publish to CLASH". The talk turns
    `published` and carries a `clashId`. Open `localhost:3000/clashes` in CLASH: the talk is
    there as a clash, at the venue from the settings, hosted by the host email.
11. Now make it fail. Change the CLASH venue name in the settings to one CLASH does not know,
    then publish a second talk. It ends as `failed` and carries the agent's message: the
    server found no such venue, so `create_clash` was never called. Nothing was written to
    CLASH.

## Now you

- Add a fourth tool, `list_venues`, with no input. Restart the session and check that
  `/mcp` shows four tools.
- Point `ask-clash.mts` from task 16 at the server: `mcpServers` and `allowedTools` in its
  options. The question is now answered from the database, not from `prisma/seed.ts`.
- Pick one refusal message of the server and make it good enough that Claude can recover
  on its own, without asking you.

## Check

- [ ] `claude mcp list` prints `clash: npx tsx mcp/server.ts - ✔ Connected`.
- [ ] With one tool registered, `/mcp` listed `clash` with only `find_venue`.
- [ ] `find_venue` answered with a venue from `dev.db`, not from Claude's memory.
- [ ] `mcp/server.ts` now has exactly three `registerTool` calls and no `console.log`.
- [ ] `/mcp` lists `clash` with three tools.
- [ ] Every tool call in the session is labeled `mcp__clash__…`.
- [ ] "MCP Hacknight" is on `localhost:3000/clashes` once, not twice.
- [ ] The second create was refused with `Duplicate: …`.
- [ ] `.claude/settings.json` allows the two read tools. A write still asks.
- [ ] A talk published from clash-conference shows up in CLASH as a clash.
- [ ] A talk with an unknown venue ends as `failed` and CLASH is unchanged.

## Stuck?

`git checkout 19-start` in CLASH — identical to `14-start`: the reference CLASH with the
hook set, no `mcp/` folder, no `.mcp.json`. `git checkout 19-solution` is the same branch with
the finished server, for anyone who wants the second half of this task anyway — run
`git stash -u` first if you already wrote your own `mcp/server.ts`. In
clash-conference, `git checkout 19-start` is the app without `app/api/publish/route.ts`.
The finished server, `.mcp.json`, the settings fragment and a smoke test are in
`workshop-artifacts/19-build-mcp/` in the workshop repository. Its `README.md` says where
each file goes. The smoke test, `npx tsx mcp/smoke.ts`, calls every tool and every refusal
and cleans up after itself.

## Go further

Serve the same three tools over HTTP from a route inside CLASH instead of a stdio process,
so another machine can register it with `claude mcp add --transport http`.

## Links

- MCP — https://code.claude.com/docs/en/mcp
- Agent SDK: MCP — https://code.claude.com/docs/en/agent-sdk/mcp
- Build an MCP server — https://modelcontextprotocol.io/docs/develop/build-server
