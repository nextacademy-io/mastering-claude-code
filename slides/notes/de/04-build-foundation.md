<!-- @note: build-clash -->
> Tun:
> - Divider für Teil II
> - Auf die vier Module dieses Teils zeigen

Sagen:
- "Ab jetzt baust du. Ich zeige einen Schritt, du machst ihn auf deiner
Maschine. Die Spec ist docs/SPEC.md. Claude schreibt den Code. Du entscheidest, was gut ist."
- Jedes ist eine Task; jede Task hat einen Reset-Branch

<!-- @note: task-02-foundation -->
> Tun:
> - Branch: 02-start hat die Spec plus eine erste CLAUDE.md

Sagen:
- Vom Briefing zur laufenden App: Scaffold aufsetzen, Datenmodell planen, dann bauen

<!-- @note: a-brief-has-three-parts -->
> Tun:
> - Schritt 1-2 machen die Teilnehmenden selbst
> - Im Manual-Modus starten, die Gruppe die ersten zwei, drei Permission-Prompts sehen lassen
> - Das Repo ist absichtlich nicht leer. Darauf hinweisen, dass das Briefing die Workshop-Dateien vor create-next-app schützen lässt
> - Dann zu Auto wechseln — ein Next.js-Scaffold aufzusetzen ist Standard, geringes Risiko
> - Die drei Teile am echten Scaffold-Briefing aus Task 02 zeigen
> - Kontrastieren mit dem kalten Prompt "set up a Next.js app"

Sagen:
- Ein Prompt ist ein Wunsch; ein Briefing ist ein Vertrag
- [click:3] Kernpunkt: die "done when"-Zeile ist die, die Leute vergessen — genau sie hält Claude davon ab, abzuschweifen
- Funktioniert auch, aber niemand — weder du noch Claude — weiß, wann es fertig ist

<!-- @note: read-the-diff-not-the-summary -->
> Tun:
> - Schritt 3-4 machen die Teilnehmenden selbst
> - Nach `git status` fragen, dann `/diff` nach dem Scaffold live zeigen — nur Scaffold-Änderungen sollten da sein, bevor Plan Mode irgendwas anderes anfasst
> - Das Panel meldet manchmal, dass Dateien "not shown" sind, und brandneue Dateien aus einem Shell-Befehl können dazugehören — `git status` ist die vollständige Liste, deshalb kommt es zuerst
> - Claude bitten zu committen, die Commit-Message lesen, die Claude geschrieben hat

Sagen:
- Gewohnheit früh aufbauen: nach jedem Schritt `/diff` lesen — im Fullscreen bleibt das Panel offen und aktualisiert sich selbst, und `/diff` noch einmal schließt es
- Claudes Zusammenfassung liegt meistens richtig — der Diff liegt immer richtig
- Das ist eine gute erste Stelle, um Claude eine Routineaufgabe übernehmen zu lassen

<!-- @note: plan-mode-read-think-propose -->
> Tun:
> - Schritt 5, 7-8 machen die Teilnehmenden selbst — Schritt 6 (der eigentliche Prompt) kommt als Nächstes, auf seiner eigenen Live-Coding-Folie
> - Live demonstrieren: Shift+Tab, bis die Statusleiste "plan mode on" zeigt (zweimal ab Manual-Modus, dreimal ab Auto — ab v2.1.283 starten interaktive Sessions im Auto-Modus)
> - Den Plan erscheinen lassen, sobald der Prompt von der nächsten Folie geschickt ist
> - Einen Teil davon laut vorlesen, der Gruppe eine Frage stellen ("warum lib/generated/prisma?")
> - Zurückschalten und "do it" sagen

Sagen:
- [click] Punkt: das Datenmodell ist später schwer zu ändern — das ist der Moment, hinzuschauen, bevor Claude schreibt



<!-- @note: plan-the-data-model -->
> Tun:
> - Schritt 6 machen die Teilnehmenden selbst
> - Den Prompt mit den Regeln als Bullet Points einfügen — mit "\" am Zeilenende weiter in einer neuen Zeile, ohne abzuschicken

Sagen:
- SQLite hat keine Enums
- der generierte Client-Pfad hält den Import stabil
- tsx macht den TypeScript-Seed über die im Workshop unterstützten Node-Versionen reproduzierbar
- Prisma 7.10+ kann prisma7.config.ts erzeugen; ältere 7.x-Projekte können weiterhin prisma.config.ts verwenden
- der Seed ist das, womit sich jede spätere Task einloggt

<!-- @note: when-a-plan-earns-its-cost -->
> Tun:
> - Der Plan fürs Datenmodell hat seinen Preis gerade verdient: ein Schema ist später schwer zu ändern
> - Die Gruppe nach einer Änderung fragen, die keinen Plan braucht. Danach entscheiden, wie unsicher der Ansatz ist, wie viel er kaputt machen kann und wie leicht er sich rückgängig machen lässt

Sagen:
- Ein Plan kostet Tokens und Review-Zeit: er liest Code und schreibt ein weiteres Dokument zum Prüfen
- [click] Lässt sich der Diff in einem Satz beschreiben und günstig prüfen, den Plan weglassen

<!-- @note: a-good-plan-has-an-exit -->
> Tun:
> - Auf den Datenmodell-Plan zurückkommen: welche der acht Felder hat er?
> - Docs-Link: öffnen, bis "Explore first, then plan, then code" scrollen, dann zurück zu den Folien

Sagen:
- Evidence heißt echte Dateien, Contracts und beobachtetes Verhalten, kein Rundgang durch deinen CLASH-Clone
- [click:2] Risks: was den Ansatz kippen würde
- [click] Verification: wie jeder riskante Schritt geprüft wird
- [click] Done ist beobachtbar. Ohne Done wächst ein Plan während der Umsetzung weiter

<!-- @note: plan-or-roadmap -->
> Tun:
> - Fragen: Ließen sich zwei mittlere Teile einzeln reviewen, mergen oder rückgängig machen? Wenn ja, sind es Work Packages

Sagen:
- Ein Plan umfasst eine Änderung, die sich als Ganzes prüfen lässt
- Lassen sich die Teile einzeln ausliefern oder rückgängig machen, braucht es eine Roadmap mit einem kleinen Plan pro Teil
- Kleinere Teile lassen sich günstiger reviewen, übergeben, rückgängig machen und prüfen

<!-- @note: upgrade-the-planner-not-the-run -->
> Tun:
> - Docs-Link: öffnen, bis "opusplan model setting" scrollen, dann zurück zu den Folien
> - Läuft eine Session schon auf Opus, ändert opusplan nur die Ausführung: sie wandert zu Sonnet

Sagen:
- Das teure Modell für die Entscheidung einsetzen; Routine-Ausführung braucht es selten
- [click] Der frische Reviewer kann ein Subagent sein, kein zweiter Anbieter, kein zweites Tool: er greift Annahmen, fehlende Constraints und Lücken in der Verifikation an
- [click] Die Lücken einmal schließen: ein Reviewer, der Lücken finden soll, meldet meistens welche
- [click] Das Work Package einfrieren, umsetzen, verifizieren

<!-- @note: foundation -->
> Tun:
> - Task-02-Rückblick
> - Übergabe an tasks/02-foundation.md, alle 11 Schritte — keine Folien mehr bis Task 03
> - Den Chat beobachten, während gearbeitet wird
> - Häufigster Stolperstein: create-next-app und lokale Package-Manager-Präferenzen. Das Briefing erzwingt npm, kein src/-Verzeichnis, nicht-interaktive Antworten und schützt die Workshop-Dateien

Sagen:
- 02-start ist die Spec plus eine erste CLAUDE.md; 03-start ist der Landepunkt, falls diese Task schiefgeht
- "antworte bei allem, wo du dir nicht sicher bist, mit Ja."
