<!-- @note: control-the-context -->
> Tun:
> - Hier beginnt Teil III — alle wechseln zur Referenz-CLASH: `git checkout 06-start`
> - Einmal klar sagen

Sagen:
- Nicht mehr bauen, jetzt kontrollieren
- Fünf Tasks: Context, Skills, Subagents, Example Mapping, Path-scoped rules
- Jede ist eine andere Art zu entscheiden, was ins Fenster kommt

<!-- @note: eight-tools-one-constraint -->
> Tun:
> - Karte vor Gelände — die acht Zeilen von oben nach unten durchgehen
> - Die Karte stehen lassen — sie kommt bei jedem Divider wieder, mit der aktuellen Zeile hervorgehoben

Sagen:
- Die eine Randbedingung: das Context Window. Jede Zeile dieser Tabelle ist eine andere Art, zu steuern, was hineinkommt
- [click] Context: immer an, die Randbedingung, um die alles andere herumarbeitet
- [click] Skill: für wiederholbare Arbeit, die du immer wieder neu erklärst
- [click] Projektregel: für eine Konvention, die nur in einem Teil der Codebasis gilt
- [click] Subagent: für laute Arbeit, die deinen Thread verschmutzen würde
- [click] Agent-Team: wenn Worker miteinander reden müssen
- [click] Workflow: wenn der Fan-out größer ist, als ein Gespräch steuern kann
- [click] Hook: wenn eine Regel gelten muss, egal ob der Agent zustimmt oder nicht
- [click] MCP: wenn der Agent über das Repo hinaus muss

<!-- @note: context -->
> Tun:
> - Divider: Context-Zeile hervorgehoben
> - Den Moment kurz halten

Sagen:
- "Wir starten hier, weil das die Zeile ist, die immer im Spiel ist."

<!-- @note: task-06-context-and-claude-md -->
> Tun:
> - Branch: 06-start ist die Referenz-CLASH, geseedet, CLAUDE.md ist noch immer nur `@AGENTS.md`

Sagen:
- Vier Dinge zu lernen, vier Ergebnisse — ausgehend von einer CLAUDE.md mit 11 Byte

<!-- @note: context-is-an-instrument -->
> Tun:
> - Demo: `/context` live in einer frischen Session auf der Referenz-CLASH ausführen
> - Die Zeilen laut vorlesen — echte Zahlen, keine Zusammenfassung
> - Docs-Link: öffnen, oben die Timeline abspielen, bis "What the timeline shows" scrollen, dann zurück zu den Folien

Sagen:
- Ab jetzt nach jeder Task auf genau diesen Befehl zurückkommen
- [click:5] Das Diagramm ist dasselbe Bild, das der Befehl als Text zeichnet

<!-- @note: budget-or-dumping-ground -->
> Tun:
> - Demo: beide Dateien live öffnen
> - Klar sagen
> - Den Import in der CLAUDE.md behalten, die wir schreiben

Sagen:
- Das ist der gesamte Inhalt, nichts versteckt
- Es gibt nichts zu kürzen
- Die Übung: eine gute Context-Datei aus dem Nichts schreiben, verankert in echten Regeln
- Das ist die schwierigere, nützlichere Fähigkeit
- Die meisten Repos, die du anfasst, sehen so aus: nichts, oder fast nichts
- Gut zu wissen: seit Claude Code v2.1.277 liest Claude AGENTS.md von selbst — aber standardmäßig nur, wenn ein Repository keine CLAUDE.md hat. CLASH hat eine, also lädt weiterhin der @AGENTS.md-Import die AGENTS.md.

<!-- @note: the-shape-underneath-the-rules -->
> Tun:
> - Die Struktur zeigen, bevor eine einzige Regel geschrieben wird
> - Falls nicht alle Next.js kennen: eine "RSC page" holt ihre Daten selbst auf dem Server, kein separater API-Call
> - In Task 08 findet das Audit, dass diese Struktur in deleteClash und deleteVenue fehlt — jetzt richtig zeigen, damit die Leute sie auf den ersten Blick erkennen

Sagen:
- Dieselbe Fünf-Boxen-Struktur steckt hinter jedem Feature in CLASH — einmal verstehen, überall wiedererkennen
- [click] Reads: Browser → Page → Helper in lib/data → Prisma → SQLite
- [click] Writes: Client → eine Server Action — sieht aus wie ein normaler Funktionsaufruf, ist aber ein öffentlicher Server-Endpoint
- [click] requireUser() plus ein Ownership-Check, dann zurück durch denselben Prisma Client — hervorgehoben, weil genau dieser Knoten in Task 08 an zwei Stellen fehlt
- [click] Die gestrichelte Linie ist der letzte Schritt der Action: Nach dem Schreiben ruft sie revalidatePath auf. Next.js rendert die Page mit den neuen Daten neu und schickt sie in derselben Antwort zurück

<!-- @note: claude-md-from-real-rules -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer — nicht zeigen, bevor die Leute ihre eigene geschrieben haben): `workshop-artifacts/06-context-and-claude-md/CLAUDE.md` im Workshop-Repository
> - Beim Aufbauen auf dem Bildschirm auf den Ownership-Check in `app/actions/clashes.ts` zeigen: `if (clash.creatorId !== user.id)`
> - Wenn ein Entwurf vor allem aus Prosa und Bauchgefühl besteht, dagegenhalten — das ist die Saat für Task 13

Sagen:
- Die sechs Regeln:
  - Reads in `lib/data/*`
  - Writes in `app/actions/*`, und jede Action prüft die Autorisierung selbst noch einmal (eine Server Action ist ein öffentlicher POST-Endpoint mit einer generierten id; der Layout-Guard schützt die Page, nicht die Action)
  - `lib/validation.ts` ist der einzige Ort für Zod-Schemas
  - Prisma-Client wird nach `lib/generated/prisma` generiert
  - Status-Felder sind Strings mit Werten in `lib/constants.ts`
  - Next-16-`params` und -`searchParams` sind Promises
- "Könnte ein Hook das erzwingen? Wenn nicht, ist es eine Regel oder eine Präferenz?"

<!-- @note: plan-mode-review-first -->
> Tun:
> - Demo live: Shift+Tab drücken, bis plan dasteht, dann das nächste Feature beschreiben
> - Den Plan gemeinsam laut lesen, dann unter `docs/plans/realtime-notifications.md` speichern
> - Docs-Link: öffnen, bis "Analyze before you edit with plan mode" scrollen, dann zurück zu den Folien

Sagen:
- Echtzeit-Benachrichtigungen — laden aktuell beim Rendern über `getNotifications` und `getUnreadCount` in `lib/data/notifications.ts`
- "Don't write any code yet. Propose an approach and the files it touches."
- Plan Mode ist unter den Permission Modes dokumentiert
- Die Seite nennt sechs Modi: Manual, Accept Edits, Plan, Auto, dontAsk, Bypass Permissions. „Ask“ ist kein Modus, sondern eine Regelart neben allow und deny

<!-- @note: a-reviewed-plan-is-not-a-guarantee -->
> Tun:
> - Als echte Geschichte erzählen, locker im Ton — der Punkt dahinter ist ernst
> - Landen auf: jede Zeile lesen, nicht nur nach dem erwarteten Feature suchen

Sagen:
- Ein Kollege bat Claude einmal, eine BCC zu seinem eigenen E-Mail-Versand-Self-Service-Tool hinzuzufügen
- Der Plan schlug auch vor, die GDPR- und Privacy-Seiten umzuschreiben — mit einer Warnung, dass er die privaten E-Mails aller mitliest
- Offensichtlich Unsinn — aber genau so stand es im Plan
- Zum Glück hat er den Plan ganz gelesen und es vor dem Ausrollen abgefangen

<!-- @note: claude-md-files-add-up -->
> Tun:
> - Docs-Link: öffnen, bis "How CLAUDE.md files load" scrollen, dann zurück zu den Folien

Sagen:
- [click] ~/.claude/CLAUDE.md — deine persönlichen Instruktionen, jedes Projekt
- [click] CLAUDE.md im Root deines CLASH-Clones — wird zuerst gelesen, lädt beim Start
- [click] CLAUDE.local.md — deine persönlichen Vorlieben für deinen CLASH-Clone; CLAUDE.md wird über Git geteilt. Selbst in die .gitignore eintragen. Wird direkt nach CLAUDE.md auf derselben Ebene angehängt
- [click] Das CLAUDE.md eines Unterordners lädt, wenn Claude dort eine Datei liest — zuletzt gelesen, am nächsten an der Arbeit
- [click] .claude/rules/*.md — eine einfache Regel lädt beim Start, wie CLAUDE.md. Task 10 zeigt die Art, die auf eine passende Datei wartet
- [click] Alles landet in einem Context — nichts wird verworfen, nichts wird ausgewählt
- [click] Zwei Dateien widersprechen sich? Claude wählt womöglich irgendeine davon. Das ist ein Bug, den du gebaut hast, kein Feature

<!-- @note: personal-rules-follow-you -->
> Tun:
> - Schritt 9 nennen: dort legen die Teilnehmenden ~/.claude/rules/tone.md an
> - paths-Frontmatter hier nicht erklären: das ist Task 10

Sagen:
- ~/.claude/rules/ enthält, was dich betrifft, in jedem Projekt
- [click] CLAUDE.md enthält, was CLASH selbst betrifft, geteilt über Git
- Persönlich, aber nur für CLASH? Dann CLAUDE.local.md, nicht CLAUDE.md

<!-- @note: references-beat-grep-and-guess -->
> Tun:
> - Klar sagen

Sagen:
- Links (unachtsam), ein Schritt pro Klick:
  - [click] grep -r "notif" app/
  - [click] 40 Dateien lesen
  - [click] das Notification-Modell raten
  - [click] die Server-Action-Form raten
  - [click] Code schreiben, hoffen, dass er kompiliert
  - [click] Context-Balken: ~85 % verbraucht
- Rechts (gezielt), ein Schritt pro Klick:
  - [click] @lib/data/notifications.ts
  - [click] @app/actions/clashes.ts
  - [click] @prisma/schema.prisma
  - [click] Plan Mode: erst prüfen, bevor sich ein Byte bewegt
  - [click] Context-Balken: ~18 % verbraucht
- Der Unterschied zwischen den beiden Spalten ist kein schlaueres Modell — es ist dasselbe Modell, gezielt eingesetzt

<!-- @note: context-and-claude-md -->
> Tun:
> - Task-Folie: Reset-Branch nennen und wo die Task-Datei liegt
> - Alles hier stammt aus `tasks/06-context-and-claude-md.md`
> - Die Checkliste nicht anders umformulieren
