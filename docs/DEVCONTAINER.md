# Dev container: Claude in a box

A dev container is a Docker container your editor connects to. This one is for this workshop
repository, with Claude Code and Node inside. It is a trainer tool: you use it to show what a
boundary around Claude Code looks like. Participants do not need it, and no task depends on it.

Commands Claude runs execute in the container, not on your machine. The files of this workshop
repository stay on your machine and are mounted in. Your CLASH clone is not part of it.

Only use a dev container with repositories you trust. With `--dangerously-skip-permissions`, the
box does not stop a malicious project from taking what is in it, including the sign-in in
`~/.claude`. This container has no firewall, and the docs pair the flag with one, so do not use the flag here. See [Development containers](https://code.claude.com/docs/en/devcontainer).

## You need

- Docker. On Windows: Docker Desktop with the WSL2 backend.
- Node.js on your machine. The container start runs one `node` command there.
- VS Code with the Dev Containers extension, or the Dev Containers CLI (below).

## Start it

Signing in with a token? Do steps 1 and 2 of "Sign in" first. Docker reads the token only when it
creates the container.

In VS Code:

1. Open this workshop repository.
2. Run **Dev Containers: Reopen in Container** from the Command Palette (`Ctrl+Shift+P`, on a Mac
   `Cmd+Shift+P`).
3. Wait until the setup in the terminal panel has finished: it installs `bubblewrap` and `socat`
   and copies the managed settings. Then open a new terminal in the container and run `claude`.

Without VS Code, from the root of this workshop repository:

```bash
npx @devcontainers/cli up --workspace-folder .
npx @devcontainers/cli exec --workspace-folder . claude
```

## Sign in

The container has no browser. The reliable way is a token from your machine:

1. Run `claude setup-token` on your machine, not in the container.
2. Put the token into `.devcontainer/.env` as `CLAUDE_CODE_OAUTH_TOKEN=…`. The file is git-ignored
   and created empty when missing. The token uses your Claude subscription.
3. Docker reads `.devcontainer/.env` only when it creates the container, not when it starts it
   again. If the container exists already, run **Dev Containers: Rebuild Container**, or with the
   CLI `npx @devcontainers/cli up --workspace-folder . --remove-existing-container`.

You can also run `claude` in the container and sign in there. In a dev container on Docker Desktop
(WSL2 kernel), Claude Code 2.1.322, a browser sign-in went through on the host but never reached
Claude Code in the container. The docs' way out, not tried here: copy the login URL shown above
the paste prompt into your browser, sign in, and paste the code it shows into that prompt. A
Docker volume keeps that sign-in, also across rebuilds.

## Three layers

| Layer | Where | What it does |
|---|---|---|
| Token hidden | `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1` in `.devcontainer/devcontainer.json` | Removes credentials such as the token from the environment of the Bash commands, hooks and local MCP servers Claude Code starts. `GITHUB_TOKEN` stays. Claude Code keeps the token for its own calls. |
| No reading secrets | `permissions.deny` in `.devcontainer/managed-settings.json` | Claude may not read `.env*`, `~/.claude/.credentials.json`, `~/.ssh` or `~/.aws`. |
| Sandbox on | `sandbox.enabled` and `sandbox.allowUnsandboxedCommands: false` in `.devcontainer/managed-settings.json` | Bash commands run in the sandbox, in strict mode: Claude cannot retry a command outside it. The sandbox stops a script from reading what the deny rules protect. |

On every start the container copies `.devcontainer/managed-settings.json` to
`/etc/claude-code/managed-settings.json`. Claude Code reads that file above every other settings
file, so the layers hold for every session in the container. The managed file comes from this
workshop repository: anyone who can edit it can change the rules for the next start. The docs: a policy your team cannot change by editing repository files comes from server-managed settings or MDM instead. Strict mode in
that file also makes the sandbox admin-required: a repository's `.claude/settings.json` and
`.claude/settings.local.json` cannot loosen it
([docs](https://code.claude.com/docs/en/sandboxing#turn-off-the-retry-with-strict-sandbox-mode)).
The `.claude/settings.json` of this workshop repository stays as it is.

Keep `sandbox.enabled` in `.devcontainer/managed-settings.json`. With
`CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1` and without `sandbox.enabled`, every Bash command failed. The
variable also forced a requested permission mode, such as `plan`, back to default. Both were seen
with `claude -p` in a dev container on Docker Desktop (WSL2 kernel), Claude Code 2.1.322; an
interactive session was not checked.

The sandbox runs on macOS, Linux and WSL2, not on native Windows. In the container it needs
`bubblewrap` and `socat`, which the container installs.

## Check each layer

Ask Claude in the container. Checks 1, 3 and 4 must end in an error; in check 2 the token must be
missing.

This container was built and started on Docker Desktop (WSL2 kernel), Claude Code 2.1.323. It was
never started on macOS. The four checks have not been run in it yet. The expected results of the
last three come from `claude -p` runs in another Linux dev container on Docker Desktop (WSL2
kernel), Claude Code 2.1.322. Those runs had the same deny rules and `sandbox.enabled` in a
project settings file, but not strict mode. An interactive session was not checked. The first
comes from the docs. Run all four once before you show them, alone: checks 2 to 4 target your real token, and a layer that does not
hold puts it on the screen.

| Layer | Ask Claude | Expected |
|---|---|---|
| Sandbox on: writes | Run `touch ~/sandbox-probe`. | Fails with "Read-only file system", after a permission prompt if one comes. Strict mode is on, so Claude cannot retry it outside the sandbox. |
| Token hidden | Run plain `env`, without a pipe, and tell me whether `CLAUDE_CODE_OAUTH_TOKEN` is in it. | Claude asks for permission first. After a yes: not in it. Only meaningful with a token in `.devcontainer/.env`. |
| No reading secrets | Read `.devcontainer/.env`. | Refused by a deny rule. |
| Sandbox on: reads | Run `node -e "console.log(require('fs').readFileSync('.devcontainer/.env', 'utf8'))"` | Claude asks for permission first. After a yes the command fails with "permission denied". Only meaningful with a line in `.devcontainer/.env`: from an empty file a working read also prints nothing. |

`/sandbox` opens no panel here. It prints `Error: Sandbox settings are overridden by a
higher-priority configuration and cannot be changed locally.` That error shows the managed
settings are in place (docs).

## When it gets stuck

- **Empty files such as `.npmrc` or `bunfig.toml` appear** in the folder where Claude ran
  commands. The sandbox leaves them as placeholders. Do not commit them; delete them when you are
  done.
- **The sign-in is not saved.** The volume is created owned by root; the start commands hand it to
  the user `node`. If you signed in before they finished, run this in the container's terminal,
  then sign in again (not seen in a run):

  ```bash
  sudo chown -R node:node /home/node/.claude
  ```
- **Start from scratch.** A rebuild keeps the volume and the sign-in. To remove them too, delete
  the volume whose name starts with `claude-code-config-`: find it with `docker volume ls`, remove
  the container, then run `docker volume rm <name>`.
- **Every Bash command fails with
  `bwrap: cannot open /proc/sys/user/max_user_namespaces: Read-only file system`.** It was seen
  with `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1` and without `sandbox.enabled`, in a dev container on
  Docker Desktop (WSL2 kernel), Claude Code 2.1.322. This container turns the sandbox on only
  through `/etc/claude-code/managed-settings.json`. Check that the file exists in the container.
  If it is missing, run the copy from `postStartCommand` in the container's terminal, at the root
  of this workshop repository, then start `claude` again:

  ```bash
  sudo mkdir -p /etc/claude-code && sudo cp .devcontainer/managed-settings.json /etc/claude-code/managed-settings.json
  ```
- **Sandboxed commands fail with `Can't mount proc on /newroot/proc: Operation not permitted`.**
  The docs name this error for unprivileged containers. In a dev container on Docker Desktop (WSL2
  kernel), Claude Code 2.1.322, it did not appear. The docs' fix, not tried here: set
  `enableWeakerNestedSandbox` to `true` under `sandbox`. It weakens the sandbox: sandboxed
  commands then see the container's process information. Put it in `~/.claude/settings.json` in
  the container, never in this workshop repository's `.claude/settings.json`, which also applies
  outside the container.
- **Claude cannot search this workshop repository.** In the container (Linux) the default tool
  set has no Grep or Glob, and the Claude Code hook `no-shell-file-reads` of this workshop
  repository (wired in `.claude/settings.json`, logic in `.claude/hooks/no-shell-file-reads.mjs`)
  blocks `grep`, `find` and `rg` in Bash. Start Claude
  with `claude --allowedTools Grep`: it brings Grep and Glob back and keeps Bash. Seen in another
  dev container on Docker Desktop (WSL2 kernel), Claude Code 2.1.322; not run in this container.
  What the hook blocks is read from its code.
