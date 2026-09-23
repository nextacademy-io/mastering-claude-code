# Task 19 answer key — the CLASH MCP server

`server.ts` is an MCP server. It offers three tools over the CLASH database and talks to Claude Code over stdio.
Claude Code starts it, asks it for its tool list, and calls a tool when it needs one.

| Tool | Input | What it does |
|---|---|---|
| `list_upcoming_clashes` | `area?` | Upcoming clashes, earliest first, at most 20. `area` filters by title, description or venue name. |
| `find_venue` | `query` | Venues whose title contains the query, case does not matter, at most 5. |
| `create_clash` | `title`, `description`, `dateTime`, `venueId`, `hostEmail` | Creates a clash. Refuses an unknown host, an unknown venue, a past or invalid date, and a duplicate (same title, same time). |

Inside Claude Code the tools are named `mcp__clash__list_upcoming_clashes`, `mcp__clash__find_venue` and `mcp__clash__create_clash`.

## Where each file goes

| This folder | Your CLASH clone |
|---|---|
| `server.ts` | `mcp/server.ts` |
| `smoke.ts` | `mcp/smoke.ts` |
| `.mcp.json` | `.mcp.json` (repo root) |
| `settings.allow.json` | merge the `permissions.allow` list into `.claude/settings.json` |

## Install

```bash
cd clash                                     # your CLASH clone, on 19-start
git checkout 19-start
npm install @modelcontextprotocol/server     # the server SDK; zod is already there
npm install --save-dev @modelcontextprotocol/client   # only the smoke test needs this
mkdir mcp
cp <this folder>/server.ts mcp/server.ts
cp <this folder>/smoke.ts mcp/smoke.ts
cp <this folder>/.mcp.json .mcp.json
```

The answer key was built with `@modelcontextprotocol/server` 2.1.0 and `@modelcontextprotocol/client` 2.1.0.

## Run the smoke test

The server reads the real database, so `dev.db` has to exist, be migrated and hold the seed data:

```bash
npx prisma migrate deploy
npx prisma db seed
npx tsx mcp/smoke.ts
```

It starts the server, lists the tools, calls each one, and prints `PASS` or `FAIL` per check. The last line must be `All checks passed.`
It creates one clash, "MCP Hacknight", and removes it again at the end. Your seed data stays as it was.

## Connect it to Claude Code

1. Start `claude` in the clone. Claude Code finds `.mcp.json` and asks whether to use the `clash` server. Say yes.
2. In the session, `/mcp` lists the server and its three tools.
3. From the shell, check the health:

```bash
claude mcp list
```

Expected line:

```txt
clash: npx tsx mcp/server.ts - ✔ Connected
```

Before you approve the server the same line ends with `⏸ Pending approval (run \`claude\` to approve)`.

## Least privilege

`settings.allow.json` allows only the two read tools. `create_clash` stays behind a permission prompt.
Merge the list into `.claude/settings.json`:

```json
{
  "permissions": {
    "allow": ["mcp__clash__find_venue", "mcp__clash__list_upcoming_clashes"]
  }
}
```

## What to look at in `server.ts`

- `registerTool(name, { description, inputSchema }, handler)` — the whole tool contract in one call. The description is what Claude reads.
- `dbFile` is built from `import.meta.url`, not from `process.cwd()`. Another app can start this server from its own folder and still hit the same `dev.db`.
- `log()` writes to `stderr`. `stdout` carries the protocol. One `console.log` breaks the connection.
- `refuse()` returns text with `isError: true`. The model sees why, and nothing was written.
- The duplicate check: same title and same `dateTime` means the clash already exists. The server says so instead of creating it twice.
