---
layout: concept
heading: "Message bus: publish and subscribe"
routeAlias: excursion-coordination-patterns
docs: https://claude.com/blog/multi-agent-coordination-patterns
lines:
  - "Agents publish events to a bus. Each one subscribes to the topics it needs."
  - "Use it when events drive the work and new agents keep joining."
  - "Hard to trace. A wrongly routed event fails silently."
---

<G28CoordinationPatterns pattern="message-bus" />

---
layout: flow-ways
heading: "Message bus: publish and subscribe"
ways:
  - way: "One message per name"
    prompt: "Spawn teammates schema, actions, ui. Have schema message the other two."
  - way: "Messages to your sessions"
    prompt: "Let @web know that prisma/schema.prisma changed."
  - way: "A one-time notice"
    prompt: "Tell me when the migration session finishes what it's working on."
footnote: "Not built into Claude Code. These are the closest ways."
---

<G28CoordinationPatterns pattern="message-bus" still />

---
layout: concept
heading: "Shared state: one store, no coordinator"
docs: https://claude.com/blog/multi-agent-coordination-patterns
lines:
  - "Agents read and write one shared store: a database, files, a document."
  - "Use it when agents should build on each other's findings right away."
  - "Agents may repeat work or keep replying to each other. Set a stop rule."
---

<G28CoordinationPatterns pattern="shared-state" />

---
layout: flow-ways
heading: "Shared state: one store, no coordinator"
backTo: quick-coordination-patterns
ways:
  - way: "Your own sessions, no lead"
    prompt: "Audit app/actions/. Read docs/audits/findings.md first, append your findings, and skip anything already listed."
  - way: "/goal as the stop rule"
    prompt: "/goal Claude has shown docs/audits/findings.md with a verdict per action, or stop after 15 turns"
footnote: "Not built into Claude Code. These are the closest ways."
---

<G28CoordinationPatterns pattern="shared-state" still />
