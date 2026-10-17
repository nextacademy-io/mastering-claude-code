<!-- @note: two-kinds-of-boundary -->
> Tun:
> - Deep Dive im Anhang: Du kommst über den Chip auf "Choose the sandbox by what you risk" hierher
> - Docs-Link: öffnen, zur Vergleichstabelle scrollen, dann zurück zu den Folien
> - Selbststudium: den Block von oben nach unten lesen, jeden Docs-Link öffnen

Sagen:
- Jede Sandbox-Frage fängt hier an: Was ist innerhalb der Grenze, und was nicht
- Die Bash-Sandbox ist eingebaut und günstig. Sie umschliesst jeden Shell-Befehl und die Prozesse, die er startet
- [click] Jeder andere Ansatz umschliesst den ganzen Claude-Code-Prozess, also sind auch Datei-Tools, MCP-Server und Hooks drin
- Warum das zählt: Eine Prompt Injection, die Read oder einen MCP-Server erreicht, hält eine Sandbox pro Befehl nicht auf

<!-- @note: what-the-bash-sandbox-leaves-outside -->
> Tun:
> - Docs-Link: landet bei "What runs outside the sandbox"

Sagen:
- Read, Edit, Write, WebFetch laufen in Claude Code selbst. Permission-Regeln steuern sie, nicht die Sandbox — ein denyRead-Eintrag stoppt das Read-Tool nicht
- [click] Hooks, lokale MCP-Server, Language Server, deine Statuszeile: eigene Prozesse mit deinen vollen Rechten
- [click] Drei Arten von Shell-Befehlen laufen ebenfalls ohne Sandbox: Befehle in excludedCommands, Befehle, die du nach ! tippst, und ein Retry, um den Claude bittet
- Warum das zählt: "Die Sandbox ist an" heisst nicht "diese Session ist eingeschlossen"

<!-- @note: the-escape-hatch-an-unsandboxed-retry -->
> Tun:
> - Docs-Link: landet bei "The unsandboxed retry escape hatch"
> - [click] Auf den letzten Schlüssel zeigen

Sagen:
- Wenn ein Tool in der Sandbox scheitert, sieht Claude den Fehler und versucht es womöglich erneut mit dangerouslyDisableSandbox
- Wer den Retry freigibt, hängt vom Modus ab: Manual und acceptEdits fragen dich, bypassPermissions führt ihn aus, Auto Mode fragt einen Classifier, dontAsk lehnt ihn ab
- Eine Allow-Regel, die auf den Befehl passt, gibt auch seinen Retry frei — leicht zu übersehen
- [click] allowUnsandboxedCommands: false ist der strikte Sandbox-Modus: Der Retry wird ignoriert. In Managed Settings oder per --settings gesetzt, verhindert er auch, dass ein Repository die Sandbox lockert
- Warum das zählt: Ein Notausgang, den du nie konfiguriert hast, steht trotzdem offen

<!-- @note: sandbox-runtime-all-of-claude-code -->
> Tun:
> - Docs-Link: landet bei "Sandbox runtime"
> - Nur Trainer, bei Demo: zuerst ~/.srt-settings.json schreiben, dann den Befehl ausführen

Sagen:
- Dieselbe Seatbelt- oder bubblewrap-Isolation wie die Bash-Sandbox, aber um den ganzen Prozess: auch Tools, Hooks und MCP-Server
- Sie ist eine Beta-Research-Preview, das Konfigurationsformat kann sich ändern
- Schreibrechte für dein Projekt, ~/.claude und ~/.claude.json und den Temp-Ordner erlauben; api.anthropic.com erlauben, dazu claude.ai und platform.claude.com, wenn du dich per OAuth anmeldest
- Die Falle: Ohne Settings-Datei startet sie trotzdem — mit gesperrtem Netzwerk und eingeschränkten Schreibrechten. Ein sauberer Start beweist nicht, dass deine Settings geladen sind
- Warum das zählt: Es ist der leichteste Weg, MCP-Server und Hooks ohne Docker einzuschliessen

<!-- @note: dev-container-one-box-for-the-team -->
> Tun:
> - Docs-Link: öffnen, bis "Run without permission prompts" scrollen, dann zurück zu den Folien
> - [click] Die Firewall-Karte

Sagen:
- Ein Dev Container lässt Claude Code in Docker laufen; dein Editor verbindet sich damit. Änderungen landen trotzdem in deinem Repository auf dem Host
- [click] Der Referenz-Container in anthropics/claude-code bringt init-firewall.sh mit: ausgehender Verkehr nur zu den Hosts, die das Skript erlaubt
- Diese Firewall ist der Grund, warum die Doku darin --dangerously-skip-permissions erlaubt — als normaler Benutzer, nicht als root
- Die Warnung: Ein bösartiges Projekt kann trotzdem alles aus dem Container abziehen, auch die Zugangsdaten in ~/.claude. Nur vertrauenswürdige Repositories, und keine Host-Secrets wie ~/.ssh einhängen
- Warum das zählt: Es ist der einfachste Weg, einem ganzen Team dieselbe Umgebung zu geben

<!-- @note: vm-or-cloud-session-its-own-kernel -->
> Tun:
> - Docs-Link: landet bei "Virtual machine"; weiter nach unten zu "Cloud sessions" scrollen
> - [click] Die Karte zur Cloud-Session

Sagen:
- Eine VM hat ihren eigenen Kernel. Nimm sie für Code, dem du nicht traust, oder wenn eine Richtlinie Trennung auf Kernel-Ebene verlangt
- Möglichkeiten: eine Cloud-Instanz, ein lokaler Hypervisor, eine MicroVM. Docker Sandboxes ist eine fertige MicroVM
- [click] Eine Cloud-Session ist eine VM, die Anthropic betreibt. Ein Proxy setzt eine Allowlist durch, und ein zweiter Proxy hält dein GitHub-Token ausserhalb der Sandbox
- Warum das zählt: Bei einem Repository, dem du nicht traust, sollte die Grenze eine Maschine sein, kein Prozess

<!-- @note: unattended-means-an-outer-boundary -->
> Tun:
> - Docs-Link: landet bei "How isolation relates to permission modes"

Sagen:
- Der Permission-Modus beantwortet "Läuft das?". Isolation beantwortet "Was kann es erreichen, wenn es läuft?"
- Mit --dangerously-skip-permissions fragt dich niemand, also schützt nur die Grenze deinen Rechner. Immer in einem Container, einer VM oder der Runtime ausführen
- Unter Linux und macOS verweigert es den Start als root, also braucht der Container oder die VM einen normalen Benutzer
- Auto Mode ist anders: Ein Classifier prüft jede Aktion. Eine Grenze ist dort nicht vorgeschrieben, bringt aber zusätzliche Tiefe
- Die Bash-Sandbox allein reicht für einen unbeaufsichtigten Lauf in keinem der beiden Modi

<!-- @note: what-no-sandbox-fixes -->
> Tun:
> - Docs-Link: der Warnkasten direkt unter der Vergleichstabelle

Sagen:
- Jeder Weg ins Netzwerk kann Daten abfliessen lassen, die Claude lesen kann. Die Allowlist ist die eigentliche Kontrolle
- Ein beschreibbar eingehängtes Projekt kann trotzdem verändert werden — genau dafür lässt man Claude ja arbeiten
- Und keine Sandbox ändert, was Claude ans Modell schickt: deine Prompts und die Dateien, die es liest, gehen so oder so an die API
- Warum das zählt: Eine Sandbox begrenzt Schaden. Sie ersetzt nicht die Entscheidung, was Claude lesen darf

<!-- @note: enforce-it-for-a-team -->
> Tun:
> - Docs-Link: landet bei "Enforce isolation across an organization"
> - Danach führt der Zurück-Chip zu "Choose the sandbox by what you risk"; die nächste Folie ist "Your org can lock settings down"

Sagen:
- Claude Code setzt nur die Bash-Sandbox selbst durch. Diese Schlüssel über Managed Settings ausliefern: enabled, failIfUnavailable, allowUnsandboxedCommands false
- failIfUnavailable: Fehlt bubblewrap, startet Claude Code gar nicht, statt ohne Sandbox zu laufen
- Ein Dev Container im Repository ist eine Konvention. Jeder kann claude ausserhalb davon starten
- Container und VMs: über Geräteverwaltung oder Software-Allowlisting durchsetzen — ausserhalb von Claude Code
