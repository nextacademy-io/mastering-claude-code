<!-- @note: message-bus-publish-and-subscribe -->
> Do:
> - Excursion in the appendix: you got here from the chip on "Which pattern did we just run?"
> - Docs link: the blog post, scroll to "Pattern 4: Message bus"
> - Stress: not a Claude Code feature, even though teammates send messages

Say:
- [click] One alert source, five agents, and a bus in the middle
- [click] Every arrow goes through the bus: agents publish events and subscribe to topics
- [click] No agent talks to another directly — they stay decoupled
- Catch: hard to trace, and a wrongly routed event fails silently
- SendMessage goes to one agent by name — no topics, no router

<!-- @note: message-bus-publish-and-subscribe-2 -->
> Do:
> - No live demo: these are workarounds, not a feature
> - Watch for: rows 2–3 need your own sessions, started with `claude --name web` and `claude --name migration` — not teammates

Say:
- Row 1: no broadcast — to reach two teammates, send two messages
- Row 2: cross-session messaging: Claude messages another of your sessions by name
- Built in, no shared file: Claude lists your running sessions with ListAgents and sends with SendMessage. See them yourself with /list-agents. Needs Claude Code v2.1.224, on native Windows v2.1.234
- @web is a session name, not a path: type @ and the first letters of the name, then pick the session from the list that pops up (v2.1.232 or later). Set the name with --name or /rename
- Row 3: one notice when that session goes idle — not a lasting subscription
- No topics, no router: that's why the footnote says "closest ways"

<!-- @note: shared-state-one-store-no-coordinator -->
> Do:
> - Docs link: the blog post, scroll to "Pattern 5: Shared state"
> - Stress: no built-in feature; a shared file works, but a team keeps its lead

Say:
- [click] A shared store in the middle, four agents around it, no coordinator
- [click] Every agent reads from and writes to the store
- [click] A finding one agent writes is there for all the others at once
- Catch: agents can repeat work, or keep answering each other without end
- So give it a stop rule: no new findings for a few rounds, or a judge agent

<!-- @note: shared-state-one-store-no-coordinator-2 -->
> Do:
> - Optional live: start two sessions in your CLASH clone, send row 1 in each
> - Watch for: two writers on one file can overwrite each other — keep it append-only
> - Afterwards the back chip returns to "Which pattern did we just run?"; the next slide is "Reconcile, decide, merge"

Say:
- Row 1: no lead — two sessions you start yourself share one file
- Row 2: the stop rule — the /goal checker reads only the conversation, so Claude must show the file
- An agent team always keeps its lead, so it is not pure shared state
