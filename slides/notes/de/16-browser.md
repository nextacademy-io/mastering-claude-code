<!-- @note: the-browser-closes-the-loop -->
Sagen:
- MCP: dafür da, wenn der Agent über das Repo hinaus muss
- Browser ist der klarste Fall — kann einen User-Flow nicht durch Lesen des Quellcodes prüfen, muss ihn durchklicken
- Zwei Server, zwei Aufgaben: Playwright MCP für Korrektheit, Chrome DevTools MCP für Performance

<!-- @note: task-14-the-browser-closes-the-loop -->
> Tun:
> - Branch: 14-start hat schon die Skills, CLAUDE.md und das Hook-Set aus Task 13

Sagen:
- Vier Dinge zu lernen, drei zum Abschluss — eine Testsuite, ein kleinerer Payload, ein erster Remote-Server

<!-- @note: your-systems-as-tools -->
> Tun:
> - Vor dem Start mit `claude mcp list` bestätigen
> - Docs-Link: öffnen, bis "What you can do with MCP" scrollen, dann zurück zu den Folien

Sagen:
- Beide Server wurden schon beim Setup hinzugefügt (docs/SETUP.md)
- [click:2] Ein MCP-Server ist eine Brücke zwischen Claude Code und etwas Externem
- [click] Playwright MCP steuert einen echten Browser gegen localhost:3000
- Chrome DevTools MCP spricht das DevTools-Protokoll
- Keiner von beiden ist "das Tool" selbst

<!-- @note: register-the-servers -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer; sollte beim Setup schon erledigt sein):
>   claude mcp add playwright -- npx -y @playwright/mcp@latest
>   claude mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest
>   npx -y playwright install chromium
>   claude mcp list

Sagen:
- Die Registrierung ist meist ein einmaliger Terminal-Befehl — im Projekt-Scope geht es auch über eine `.mcp.json`-Datei, die man selbst bearbeitet und committet
- `/mcp` zeigt denselben Verbindungsstatus direkt in einer laufenden Session — kein Wechsel ins Terminal nötig

<!-- @note: drive-first-then-test -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer, wörtlich aus tasks/14-browser-loop.md):
> "Now write that flow as a Playwright test file: request to join, host accepts, joining user is
> notified. Add a second test for the host rejecting instead. Use the seeded accounts and passwords
> from docs/SETUP.md."
> - Erst von Hand durchklicken und dabei laut kommentieren: "Using the Playwright MCP tools, log in at localhost:3000 as anna.schmidt@example.com / test, open a clash she doesn't host, and request to join it…" Den Flow bestätigen, DANN nach der Testdatei fragen

Sagen:
- Testcode zu schreiben, bevor der Flow bestätigt ist, ist genau das blinde Generieren, das diese Schleife vermeidet

<!-- @note: measure-fix-measure-again -->
> Tun:
> - Den echten Bug vor dem Messen lesen: prisma/schema.prisma (User.avatar String?); app/actions/profile.ts (MAX_AVATAR_LENGTH = 1_500_000); lib/auth.ts (getCurrentUser selektiert avatar: true, eingepackt in cache()); app/(app)/layout.tsx (requireUser auf jeder Seite)
> - [click] Die Prompts stehen in tasks/14-browser-loop.md, Schritte 7 bis 9: mit Chrome DevTools MCP messen, fixen, noch einmal messen

Sagen:
- Bis zu 1,5 MB reisen bei jedem Seitenaufruf im Payload mit, für ein kleines Icon in der Sidebar
- Erst messen, dann Code anfassen

<!-- @note: the-loop-that-matters -->
> Tun:
> - Exkurs, optional: Der Chip springt zum Divider "TDD"; der Zurück-Chip auf dem Recap von Task 11 landet wieder hier
> - Überspringen und mit "A server offers three primitives, not one" weitermachen

Sagen:
- [click] Code ändern, in einem ECHTEN Browser verifizieren
- [click] Beobachten, was passiert ist: Screenshot, Payload, Konsole
- [click] Anhand der Evidenz fixen — die Schleife schliesst sich, ohne dass ein Mensch jeden Schritt erneut prüft
- [click:5] Genau das bringt "MCP reicht über das Repo hinaus"
- Dieselbe Schleife mit Tests hat eine Falle: Aufgefordert, einen Test grün zu machen, ändert ein Modell die Datei, die einfacher zu ändern ist — manchmal den Test. Die Spec bleibt der Massstab
- Task 11 im Exkurs TDD fährt den ganzen Zyklus aus red, green, stop

<!-- @note: a-server-offers-three-primitives-not-one -->
Sagen:
- Jeder MCP-Server, den wir bisher benutzt haben, hat nur Tools angeboten
- [click] Resources sind, wie ein Server Daten übergibt, ohne einen Tool-Call
- [click] Prompts sind ein vom Server vorgefertigter Ausgangspunkt für die Conversation
- Nichts davon ist Claude-Code-spezifisch — das ist der MCP-Standard, jeder Client bekommt dieselben drei

<!-- @note: a-remote-server-needs-its-own-login -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer): claude mcp add --transport http sentry https://mcp.sentry.dev/mcp
>   dann /mcp in einer Session, dem Browser-Prompt folgen
> - Docs-Link: öffnen, bis "Authenticate with remote MCP servers" scrollen, dann zurück zu den Folien

Sagen:
- stdio: Claude Code startet den Server als Kindprozess und spricht mit ihm über stdin und stdout. Der Browser ist Sache des Servers: jeder Browser-Server startet und steuert seinen eigenen Browser
- [click] http ist die Standardwahl für einen Server, den du nicht selbst betreibst
- [click] sse funktioniert noch, ist aber auf dem Weg raus
- Claude Code speichert den Token — du loggst dich nur einmal pro Server ein

<!-- @note: share-the-server-trust-tools-selectively -->
> Tun:
> - Docs-Link: bis "MCP installation scopes" scrollen, dann "Project scope"
> - Keine Live-Demo nötig; Task 19 im Anhang macht es mit einem eigenen Server von Anfang bis Ende

Sagen:
- Local- und User-Scope liegen in ~/.claude.json auf deinem Rechner; Project-Scope ist .mcp.json im Projekt-Root, mit dem Code eingecheckt
- [click] Ein Server, den jemand anders eingecheckt hat, könnte alles ausführen: Claude Code fragt einmal, bevor er startet. Bis dahin zeigt claude mcp list ⏸ Pending approval
- Aus Versehen Nein gesagt? claude mcp reset-project-choices
- [click] Ein Tool mit vollem Namen erlauben: mcp__server__tool. mcp__playwright allein würde jedes Tool dieses Servers erlauben
- Lesende Tools laufen frei; ein Tool, das schreibt, fragt weiter

<!-- @note: the-browser-closes-the-loop-2 -->
> Tun:
> - Startpunkt: 14-start, npm run dev läuft, acht geseedete Logins — Anna tritt bei, eine weitere Person hostet
> - Zwei Hälften: erst Tests, dann Performance
> - Übergabe an tasks/14-browser-loop.md — zwei Folien übrig, wenn sie zurück sind: der Browser-Vergleich, dann der Pointer auf den MCP-Exkurs

<!-- @note: four-browser-tools-one-comparison -->
> Tun:
> - Debrief, nach dem Rückblick — sie haben drei der vier selbst benutzt
> - Den Vorteil qualitativ benennen, ohne eine Prozentzahl zu nennen — die oft zitierten "90 % weniger Tokens" sind keine offizielle Angabe, Schätzungen Dritter widersprechen sich
> - Bei Zeit selbst messen

Sagen:
- Vier Tools, unterschiedliche Aufgaben
- [click:4] agent-browser (Vercel, Rust-CLI, Accessibility-Tree-Snapshots) — das, was die Gruppe beim Setup installiert und beim Bauen benutzt hat
- Kompakte Snapshots gegenüber den Tool-Schemas eines MCP-Servers plus vollständigen Accessibility-Trees — Tool Search verzögert das volle Laden der Schemas standardmässig

<!-- @note: excursion-build-your-own-mcp-server -->
> Tun:
> - Exkurs, optional: Der Chip springt zu "Build your own MCP"; der Zurück-Chip auf dem Recap von Task 19 landet wieder hier
> - Docs-Link: der TypeScript-Server aus dem MCP-Tutorial, auf dem Task 19 aufbaut
> - Überspringen und mit "Letting go of the wheel" weitermachen
> - Die zweite Hälfte ruft den Server über das Agent SDK auf, das erst Task 16 einführt. Den Chip hier also überspringen; nach dem Agent-SDK-Block /excursion-mcp-server direkt öffnen

Sagen:
- Bisher haben wir Server benutzt, die andere geschrieben haben
- Task 19 baut einen für CLASH, in deinem CLASH-Clone, und ruft ihn aus clash-conference auf
- Das ist MCP-Entwicklung, nicht Claude Code — was Claude Code von dir braucht, hast du schon gesehen: hinzufügen, teilen, einzelne Tools erlauben
