---
layout: concept
heading: "Two kinds of boundary"
routeAlias: deep-sandbox
docs: https://code.claude.com/docs/en/sandbox-environments#compare-sandboxing-approaches
lines:
  - "Per command: the Bash sandbox wraps each shell command and what it starts."
  - "Whole process: runtime, container, VM or cloud session wrap all of it."
---

<div class="flex gap-6 w-full max-w-3xl">
  <div class="na-card p-5 flex-1">
    <div class="font-semibold mb-2" style="color: var(--na-accent-500)">Bash sandbox</div>
    <div class="text-sm" style="color: var(--na-fg-muted)">inside: Bash, PowerShell, Monitor<br>outside: Read, Edit, MCP, hooks</div>
  </div>
  <div class="na-card p-5 flex-1" v-click style="border-color: var(--na-accent-500)">
    <div class="font-semibold mb-2" style="color: var(--na-accent-500)">Whole process</div>
    <div class="text-sm" style="color: var(--na-fg-muted)">inside: every tool, MCP server and hook</div>
  </div>
</div>

---
layout: concept
heading: "What the Bash sandbox leaves outside"
docs: https://code.claude.com/docs/en/sandboxing#what-runs-outside-the-sandbox
lines:
  - "File and web tools follow permission rules, not the sandbox."
  - "Hooks, MCP servers and language servers run with your full access."
  - "So do excluded commands, your own ! commands and unsandboxed retries."
---

<div class="grid grid-cols-3 gap-4 w-full max-w-4xl text-center">
  <div class="na-card p-4"><div class="font-mono text-sm font-semibold">Read · Edit · WebFetch</div><div class="text-sm mt-1" style="color: var(--na-fg-muted)">permission rules</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold">hooks · MCP · LSP</div><div class="text-sm mt-1" style="color: var(--na-fg-muted)">your full access</div></div>
  <div class="na-card p-4" v-click><div class="font-mono text-sm font-semibold">excludedCommands · ! · retry</div><div class="text-sm mt-1" style="color: var(--na-fg-muted)">unsandboxed</div></div>
</div>

---
layout: concept
heading: "The escape hatch: an unsandboxed retry"
docs: https://code.claude.com/docs/en/sandboxing#the-unsandboxed-retry-escape-hatch
lines:
  - "A command fails sandboxed. Claude may retry with dangerouslyDisableSandbox."
  - "Manual mode asks you first. Bypass mode does not."
  - "allowUnsandboxedCommands: false switches the retry off."
---

<div class="na-card p-5 font-mono text-sm w-full max-w-md">
  <div>{ "sandbox": {</div>
  <div>&nbsp;&nbsp;"enabled": true,</div>
  <div v-click style="color: var(--na-accent-500)">&nbsp;&nbsp;"allowUnsandboxedCommands": false</div>
  <div>} }</div>
</div>

---
layout: concept
heading: "Sandbox runtime: all of Claude Code"
docs: https://code.claude.com/docs/en/sandbox-environments#sandbox-runtime
lines:
  - "The same isolation as the Bash sandbox, around the whole process. Beta."
  - "Configure ~/.srt-settings.json first: project, ~/.claude, temp, the API host."
  - "No settings file? It starts anyway, network blocked. That is no proof."
---

<div class="na-card px-5 py-4 font-mono text-sm">npx @anthropic-ai/sandbox-runtime claude</div>

---
layout: concept
heading: "Dev container: one box for the team"
docs: https://code.claude.com/docs/en/devcontainer
lines:
  - "Claude Code runs inside Docker. Your project is mounted in."
  - "The reference container adds a default-deny firewall: init-firewall.sh."
  - "Trusted repositories only. A bypassed session can still leak ~/.claude."
---

<div class="flex items-center gap-4 w-full max-w-3xl justify-center text-sm">
  <div class="na-card px-4 py-3">your editor</div><span>→</span>
  <div class="na-card px-4 py-3" style="border-color: var(--na-accent-500)">container: claude, terminal, build tools</div><span>→</span>
  <div class="na-card px-4 py-3" v-click>firewall: allowed hosts only</div>
</div>

---
layout: concept
heading: "VM or cloud session: its own kernel"
docs: https://code.claude.com/docs/en/sandbox-environments#virtual-machine
lines:
  - "A virtual machine is the strongest separation. Use it for untrusted code."
  - "A cloud session is a VM Anthropic runs. A proxy keeps your GitHub token outside."
---

<div class="flex gap-6 w-full max-w-3xl">
  <div class="na-card p-5 flex-1"><div class="font-semibold mb-2">Your VM</div><div class="text-sm" style="color: var(--na-fg-muted)">cloud instance, local hypervisor, microVM</div></div>
  <div class="na-card p-5 flex-1" v-click><div class="font-semibold mb-2">Cloud session</div><div class="text-sm" style="color: var(--na-fg-muted)">no setup; needs a Claude subscription</div></div>
</div>

---
layout: concept
heading: "Unattended means an outer boundary"
docs: https://code.claude.com/docs/en/sandbox-environments#how-isolation-relates-to-permission-modes
lines:
  - "--dangerously-skip-permissions: always inside a container, a VM or the runtime."
  - "It refuses to start as root on Linux and macOS."
  - "Auto mode is a classifier per action, not a boundary."
---

<div class="flex items-center gap-4 w-full max-w-3xl justify-center text-sm">
  <div class="na-card px-4 py-3">permission mode: does it run?</div><span>+</span>
  <div class="na-card px-4 py-3" style="border-color: var(--na-accent-500)">isolation: what can it reach?</div>
</div>

---
layout: concept
heading: "What no sandbox fixes"
docs: https://code.claude.com/docs/en/sandbox-environments
lines:
  - "An open network route can still leak whatever Claude can read."
  - "A writable project can still be changed."
  - "What reaches the model stays the same, sandbox or not."
---

---
layout: concept
heading: "Enforce it for a team"
backTo: quick-sandbox
docs: https://code.claude.com/docs/en/sandbox-environments#enforce-isolation-across-an-organization
lines:
  - "Claude Code enforces only the Bash sandbox, through managed settings."
  - "A committed dev container is a convention, not a boundary."
  - "Containers and VMs: enforce them with device management."
---

<div class="na-card p-5 font-mono text-sm w-full max-w-md">
  <div>managed-settings.json</div>
  <div>{ "sandbox": { "enabled": true,</div>
  <div>&nbsp;&nbsp;"failIfUnavailable": true,</div>
  <div>&nbsp;&nbsp;"allowUnsandboxedCommands": false } }</div>
</div>
