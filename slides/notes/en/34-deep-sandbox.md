<!-- @note: two-kinds-of-boundary -->
> Do:
> - Deep dive in the appendix: you got here from the chip on "Choose the sandbox by what you risk"
> - Docs link: open it, scroll to the comparison table, then back to the slides
> - Self-study path: read this block top to bottom, open every docs link

Say:
- Every sandbox question starts here: what is inside the boundary, and what is not
- The Bash sandbox is built in and cheap. It wraps each shell command and the processes that command starts
- [click] Every other approach wraps the whole Claude Code process, so file tools, MCP servers and hooks are inside too
- Why it matters: a prompt injection that reaches Read or an MCP server is not stopped by a per-command sandbox

<!-- @note: what-the-bash-sandbox-leaves-outside -->
> Do:
> - Docs link: it lands on "What runs outside the sandbox"

Say:
- Read, Edit, Write, WebFetch run inside Claude Code itself. Permission rules gate them, not the sandbox — a denyRead entry does not stop the Read tool
- [click] Hooks, local MCP servers, language servers, your status line: separate processes with your full access
- [click] Three kinds of shell command also run unsandboxed: commands in excludedCommands, commands you type after !, and a retry Claude asks for
- Why it matters: "the sandbox is on" is not the same as "this session is contained"

<!-- @note: the-escape-hatch-an-unsandboxed-retry -->
> Do:
> - Docs link: it lands on "The unsandboxed retry escape hatch"
> - [click] Point at the last key

Say:
- When a tool breaks inside the sandbox, Claude sees the failure and may retry with dangerouslyDisableSandbox
- Who approves the retry depends on the mode: manual and acceptEdits prompt you, bypassPermissions runs it, auto mode asks a classifier, dontAsk denies it
- An allow rule that matches the command also approves its retry — easy to miss
- [click] allowUnsandboxedCommands: false is strict sandbox mode: the retry is ignored. Set in managed settings or --settings, it also stops a repository from loosening the sandbox
- Why it matters: an escape hatch you never configured is still open

<!-- @note: sandbox-runtime-all-of-claude-code -->
> Do:
> - Docs link: it lands on "Sandbox runtime"
> - Trainer only, if demoing: write ~/.srt-settings.json first, then run the command

Say:
- Same Seatbelt or bubblewrap isolation as the Bash sandbox, but around the whole process: tools, hooks and MCP servers too
- It is a beta research preview, and its config format may change
- Allow writes to your project, ~/.claude and ~/.claude.json, and the temp folder; allow api.anthropic.com, plus claude.ai and platform.claude.com if you sign in with OAuth
- The trap: without a settings file it still starts — with the network blocked and writes confined. A clean start does not prove your settings loaded
- Why it matters: it is the lightest way to contain MCP servers and hooks without Docker

<!-- @note: dev-container-one-box-for-the-team -->
> Do:
> - Docs link: open it, scroll to "Run without permission prompts", then back to the slides
> - [click] The firewall card

Say:
- A dev container runs Claude Code inside Docker; your editor connects to it. Edits still land in your repository on the host
- [click] The reference container in anthropics/claude-code adds init-firewall.sh: outbound traffic only to the hosts the script allows
- That firewall is why the docs allow --dangerously-skip-permissions in it — as a non-root user
- The warning: a malicious project can still exfiltrate anything inside the container, including the credentials in ~/.claude. Trusted repositories only, and no host secrets like ~/.ssh mounted in
- Why it matters: it is the easiest way to give a whole team the same box

<!-- @note: vm-or-cloud-session-its-own-kernel -->
> Do:
> - Docs link: it lands on "Virtual machine"; scroll down to "Cloud sessions"
> - [click] The cloud session card

Say:
- A VM has its own kernel. Use it for code you don't trust, or when policy demands kernel-level separation
- Options: a cloud instance, a local hypervisor, a microVM. Docker Sandboxes is one ready-made microVM
- [click] A cloud session is a VM that Anthropic runs. A proxy enforces an allowlist, and a second proxy keeps your GitHub token outside the sandbox
- Why it matters: for an untrusted repository, the boundary should be a machine, not a process

<!-- @note: unattended-means-an-outer-boundary -->
> Do:
> - Docs link: it lands on "How isolation relates to permission modes"

Say:
- Permission mode answers "does this run?". Isolation answers "what can it reach once it runs?"
- With --dangerously-skip-permissions nothing asks you, so the boundary is all that protects your machine. Always run it inside a container, a VM or the runtime
- On Linux and macOS it refuses to run as root, so the container or VM needs a normal user
- Auto mode is different: a classifier checks each action. A boundary is not required there, but it adds defense in depth
- The Bash sandbox alone is not enough for an unattended run in either mode

<!-- @note: what-no-sandbox-fixes -->
> Do:
> - Docs link: the warning box right under the comparison table

Say:
- Any route out to the network can leak data Claude can read. The allowlist is the real control
- A project mounted writable can still be changed — that is the point of letting Claude work
- And no sandbox changes what Claude sends to the model: your prompts and the files it reads go to the API either way
- Why it matters: a sandbox limits damage. It is not a substitute for deciding what Claude may read

<!-- @note: enforce-it-for-a-team -->
> Do:
> - Docs link: it lands on "Enforce isolation across an organization"
> - Afterwards the back chip returns to "Choose the sandbox by what you risk"; the next slide is "Your org can lock settings down"

Say:
- Claude Code enforces only the Bash sandbox. Deliver these keys through managed settings: enabled, failIfUnavailable, allowUnsandboxedCommands false
- failIfUnavailable: if bubblewrap is missing, Claude Code refuses to start instead of running unsandboxed
- A dev container in the repository is a convention. Anyone can run claude outside it
- Containers and VMs: enforce them with device management or software allowlisting — outside Claude Code
