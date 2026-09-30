<!-- @note: hooks-rules-the-agent-cannot-cross -->
> Tun:
> - Davon ausgehen, dass noch niemand einen Hook geschrieben hat
> - Einen langsam aufbauen, dann drei schnell zeigen

Sagen:
- Namensfalle: CLASHs `hooks/`-Ordner sind React Hooks (eine Datei, `use-mobile.ts`)
- Claude Code Hooks liegen in `.claude/settings.json` — zwei verschiedene Dinge

<!-- @note: task-13-hooks -->
> Tun:
> - Branch: 13-start hat schon die Referenz-CLASH, die Skills und CLAUDE.md — noch keine Hooks

Sagen:
- Vier Hooks zu lernen, vier Hooks zu bauen — der erste wird absichtlich falsch geschrieben

<!-- @note: event-matcher-exit-code -->
> Tun:
> - `.claude/settings.json` öffnen
> - Nächste Folie macht daraus absichtlich eine Lektion
> - Docs-Link: öffnen, bis "How hooks work" scrollen, dann zurück zu den Folien

Sagen:
- Ein Hook braucht drei Dinge: das EVENT, der MATCHER (welches Tool), der EXIT CODE — der Rest ist Detail
- Kritische Regel: nur Exit-Code 2 blockiert
- [click] Bei PreToolUse/PostToolUse geht reines stdout bei Exit 0 nur ins Debug-Log — Claude sieht es nie
- [click] Was den Agent erreicht: stderr bei Exit 2, oder strukturiertes JSON auf stdout bei Exit 0
- Matcher matcht den TOOL-NAMEN, nicht einen Dateipfad

<!-- @note: one-hook-slowly -->
> Tun:
> - Den ABSICHTLICHEN Fehler genau so schreiben, wie gezeigt
> - Über Claude Code eine Datei unter `app/actions/` bearbeiten — nichts feuert. So stehen lassen. Nach dem Warum fragen.
> - Live fixen mit dem Geschwister-Feld "if":
>   "matcher": "Edit|Write",
>   "hooks": [{ "type": "command",
>     "if": "Edit(app/actions/**)",
>     "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/typecheck-actions.sh",
>     "timeout": 60 }]
> - Dann `.claude/hooks/typecheck-actions.sh` schreiben (Referenz: `workshop-artifacts/13-hooks/`)
> - Über Claude Code einen Typfehler in `app/actions/venues.ts` einbauen, damit der Hook feuert
> - Zuschauen, wie `tsc` scheitert, Claude den Fehler über stderr bekommt und seinen eigenen Code repariert — der Moment, den sich alle merken

Sagen:
- Antwort: der Matcher matcht den TOOL-NAMEN (Edit, Write, Bash), nicht einen Pfad — ein Pfad-Glob wird dort als unverankerter Regex gegen den Tool-Namen geparst und matcht nie
- `if` enthält genau eine Permission-Regel — kein `or`, keine Liste. Eine `Edit(...)`-Regel deckt jedes Datei-Edit-Tool ab, fängt also auch Write

<!-- @note: three-more-fast -->
> Tun:
> - Zügig weitermachen — die Idee sitzt schon

Sagen:
- [click:2] Output-Replacement: PostToolUse unterstützt `hookSpecificOutput.updatedToolOutput` für ALLE Tools, nicht nur MCP
- Damit das laute Log von `npm run build` auf eine Pass/Fail-Zeile eindampfen, bevor es den Context erreicht
- Der Ersatz braucht die Form des Tools. Bei Bash ist das ein Objekt mit stdout, stderr, interrupted und isImage; ein einfacher String wird ignoriert, und das volle Log kommt trotzdem an
- Dasselbe "Context ist ein Budget"-Argument, jetzt auf einen Hook angewendet statt auf eine CLAUDE.md-Regel

<!-- @note: pretooluse-deny-rules -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer): `workshop-artifacts/13-hooks/settings.json`
> - Versuchen, eine Datei unter `prisma/migrations/` zu bearbeiten, die Ablehnung auf dem Bildschirm beobachten

Sagen:
- Drei getrennte Matcher-Blöcke, einer pro Tool: Edit/Write für Migrations, Bash für `rm`, Read für `.env`
- Decision-Werte für `hookSpecificOutput.permissionDecision`: allow/deny/ask, dazu defer im -p-Modus — die einfache Exit-2-Form funktioniert genauso wie deny

<!-- @note: gate-the-turn -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer): `workshop-artifacts/13-hooks/build-gate.sh`
> - Den Build kaputt machen, versuchen den Turn zu beenden, zuschauen, wie Stop verweigert und dem Agent das Ende des Fehler-Logs übergibt
> - Fixen, Turn beenden, zuschauen, wie es klappt — dann diesen Unterschied benennen

Sagen:
- Verdrahtet unter "Stop", ohne Matcher — Stop hat kein Tool, gegen das es matchen könnte
- Stop gatet das Ende eines TURNS, nicht einen Tool-Call
- Das Gate hat eine Grenze: nach acht Blockierungen in Folge beendet Claude Code den Turn trotzdem (`CLAUDE_CODE_STOP_HOOK_BLOCK_CAP` hebt sie an)
- `set -euo pipefail`: -e bricht beim ersten fehlgeschlagenen Befehl außerhalb eines if ab, -u bei einer nicht gesetzten Variable, pipefail lässt eine Pipeline wie a | b scheitern, sobald ein Teil scheitert. Ein Abbruch durch -e endet mit dem Code des fehlgeschlagenen Befehls, meist 1, nicht 2, und blockiert nicht: darum läuft der Build in einem if

<!-- @note: advice-vs-law -->
> Tun:
> - Das Vorausdeuten aus dem Skills-Teil zahlt sich jetzt aus
> - `hard_deny` nur kurz benennen, nicht konfigurieren

Sagen:
- Skills sind Ratschlag, Hooks sind Gesetz
- [click] Ein Skill ist, was du einem neuen Kollegen sagst; ein Hook ist, was die CI ablehnt
- Wenn eine Regel in CLAUDE.md immer wieder wiederholt wird und der Agent trotzdem daran vorbeidriftet, wollte diese Regel ein Hook sein
- Das Subsystem ist `settings.autoMode.hard_deny`, Teil vom Auto-Modus, wo ein Classifier Aktionen prüft statt du selbst — keine PreToolUse-Entscheidung
- Außerhalb des Auto-Modus bewirkt hard_deny nichts. Was in jedem Modus blockiert, auch in bypassPermissions, ist eine permissions.deny-Regel oder ein PreToolUse-Hook

<!-- @note: settings-override-each-other -->
> Tun:
> - Docs-Link: öffnen, bis "Settings precedence" scrollen, dann zurück zu den Folien

Sagen:
- Fünf Orte halten Einstellungen. Bei einem einfachen Schlüssel gewinnt der höchste. Listen wie permissions.allow und alle Hooks werden zusammengeführt: jede Datei fügt ihre Einträge hinzu
- [click] Managed — deine Organisation stellt es bereit, nichts überschreibt es
- [click] Command line — `claude --settings`, nur für eine Session
- [click] Project local — `.claude/settings.local.json`, deine eigene, nie committet
- [click] Shared project — `.claude/settings.json`, committet, das ganze Team bekommt es
- [click] User — `~/.claude/settings.json`, jedes Projekt auf deiner Maschine

<!-- @note: the-sandbox-limits-what-a-command-touches -->
> Tun:
> - Optional: `/sandbox` live ausführen, die Tabs Mode und Config zeigen
> - Mode-Tab: auto-allow führt Befehle in der Sandbox ohne Nachfrage aus; regular permissions fragt bei nicht erlaubten weiterhin nach. Beide halten dieselben Grenzen. Erlaubte Hosts sind kein Modus: sie stehen in der Netzwerk-Allowlist
> - Docs-Link: öffnen, bis "How sandboxing works" scrollen, dann zurück zu den Folien

Sagen:
- Ein sandboxed Bash-Befehl läuft trotzdem — das Betriebssystem erzwingt die Grenze, kein Prompt
- [click] Dateisystem: Schreibzugriff bleibt im Projekt und in einem Temp-Ordner pro Nutzer. Lesezugriff ist weit, minus was du verbietest
- Netzwerk: nichts ist erreichbar, bis du einen Host einmal erlaubst — danach wird er gemerkt
- Windows hat keine native Sandbox — Claude Code in WSL2 laufen lassen, um eine zu bekommen

<!-- @note: your-org-can-lock-settings-down -->
> Tun:
> - Docs-Link: öffnen, bis "Read the source in /status" scrollen, dann zurück zu den Folien

Sagen:
- `managed-settings.json`, MDM, oder die claude.ai-Konsole — ein Admin stellt es bereit, nicht du
- Es steht über jeder anderen Datei. Nichts, was du setzt, überschreibt es
- `/status` nennt die aktive Managed-Quelle, du weißt also immer, was gilt

<!-- @note: hooks -->
> Tun:
> - Bestätigen, dass die Leute den kaputten Matcher nachgebaut haben, bevor es weitergeht
> - Der "warum hat's nicht gefeuert"-Moment funktioniert nur, wenn sie die Stille selbst erlebt haben
> - Mit `/hooks` live abschließen: ein Read-only-Browser, gruppiert nach Event — eins auswählen, um die gerade geschriebenen Hooks zu sehen


<!-- @note: ignored-by-git-is-not-hidden -->
> Tun:
> - Auf Task 02 zurückverweisen: dass .env in git status fehlte, war nützlich, aber nie eine Security-Grenze
> - Docs-Link: öffnen, auf `CLAUDE_CODE_GLOB_NO_IGNORE` und `CLAUDE_CODE_GLOB_HIDDEN` zeigen (beide nehmen die Dateien standardmäßig mit), dann zurück zu den Folien
> - Achten auf: unter macOS, Linux und WSL sucht Claude mit find über Bash, nicht mit Glob — die beiden Variablen ändern nur Glob

Sagen:
- .gitignore beantwortet eine Frage: Soll Git diesen Pfad tracken?
- [click] Was Claudes Tools sehen, ist eine andere Frage: Glob findet Dateien aus .gitignore und Dotfiles standardmäßig trotzdem
- [click] Unser .env-Hook beobachtet nur das Read-Tool. Eine Permission-Deny-Regel auf Read stoppt auch cat, head und tail; nur die Sandbox (macOS, Linux, WSL2) stoppt grep -r und Skripte

<!-- @note: tool-output-becomes-local-history -->
> Tun:
> - Kein echtes Credential vorführen. Nur den Weg zeigen
> - Auf den .env-Hook zeigen, den sie gerade gebaut haben: er blockt das Read-Tool, aber kein cat in Bash
> - Docs-Link: öffnen, bis "Plaintext storage" scrollen, dann zurück zu den Folien

Sagen:
- Tool-Eingaben und -Ergebnisse landen im Klartext in lokalen Session-Transcripts
- Gibt ein Befehl ein Token aus oder öffnet Read ein Secret, kann der Wert im Transcript stehen, auch wenn die Datei selbst gitignored ist
- Credential-Reads verbieten und kürzer halten, wie lange Transcripts bleiben: das regelt cleanupPeriodDays


<!-- @note: security-three-rules -->
> Tun:
> - Optional: auf "Protect against prompt injection" zeigen — die eingebauten Schutzmechanismen von Claude Code; die drei Regeln der Folie kommen von dir obendrauf

Sagen:
- Prompt Injection in einem Satz: ein Modell kann Daten und Anweisungen nicht durch Hinsehen unterscheiden
- CLASH steckt voller nutzergenerierter Titel und Bios — klassische Angriffsfläche für Injection
- Der Workflow aus Task 12 hat die Regel schon angewendet: Leser nicht vertrauenswürdiger Inhalte bekommen keine Schreib-Tools
- Hooks machen diese Regel zum Gesetz
- Subagent-Tool-Listen machen die Angriffsfläche klein
