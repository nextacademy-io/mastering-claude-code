<!-- @note: effort-what-the-extra-reasoning-buys -->
> Tun:
> - Opener für den Block. Noch keine Demo
> - Deep Dive im Anhang: Du kommst über den Chip auf "Flags change how a session starts" hierher

Sagen:
- Die Hauptlinie hat gesagt, was Effort ist: Reasoning für diese Aufgabe, nie ein Ersatz für fehlenden Context
- Hier siehst du, was ein Level kostet und was es findet, an einer Datei mit vier bekannten Fehlern
- Zuerst zwei Konzeptfolien, dann die zwei Live-Läufe, dann die Tabelle

<!-- @note: task-20-effort-lab -->
> Tun:
> - Kein Reset-Branch: Das Labor läuft in einem leeren Ordner ausserhalb deines CLASH-Clones, der nur eine Kopie von workshop-artifacts/20-reasoning-lab/review.ts enthält
> - Sagen, dass die vier Fehler in workshop-artifacts/20-reasoning-lab/FINDINGS.md stehen, erst nach beiden Läufen öffnen, nicht vorher

Sagen:
- Gleiche Datei, gleicher Prompt, gleiches Modell. Eines ändert sich: /effort auf low, dann /clear und /effort auf high, jeweils mit s bestätigt
- Gezählt werden die Findings gegen die vier Fehler, nicht Ton oder Länge. Die Output-Tokens kommen aus meinen Print-Mode-Läufen
- Ein Unentschieden ist ein gültiges Ergebnis: Diese Aufgabe hat das zusätzliche Reasoning nicht verdient

<!-- @note: five-levels-one-default-per-model -->
> Tun:
> - Docs-Link: öffnen, bis "Adjust effort level" scrollen, auf die Tabelle der Levels pro Modell zeigen, dann zurück zu den Folien
> - Live: /effort ohne Argument öffnet den Slider; Esc schliesst ihn ohne Änderung

Sagen:
- Fünf Levels auf aktuellen Modellen; Opus 4.6 und Sonnet 4.6 haben kein xhigh, und ein Level, das das Modell nicht kennt, läuft als das nächste darunter
- [click] Standard ist high auf jedem Modell mit Effort, ausser Opus 5.5 und Sonnet 5.5, die mit medium starten
- [click] [click] Die Skala ist pro Modell kalibriert: Derselbe Name heisst auf zwei Modellen nicht dieselbe Menge Denken
- [click] max: am tiefsten, neigt zum Überdenken, und Claude Code wendet es nur auf diese Session an, ausser die Umgebungsvariable setzt es

<!-- @note: where-effort-is-set-who-wins -->
> Tun:
> - Docs-Link: bis "Set the effort level" scrollen, auf die Liste der Wege und den Frontmatter-Absatz zeigen, dann zurück
> - Live, falls eine Session offen ist: /effort, Slider auf low, s — der Session-Header sagt jetzt "with low effort". Ein Level direkt hinter /effort getippt würde als Default gespeichert

Sagen:
- Zuerst eine explizite Wahl: die Variable CLAUDE_CODE_EFFORT_LEVEL, das Flag --effort oder /effort in der Session
- [click] Dann deine Settings: ein pro Modell gespeichertes Level unter modelSettings oder ein effortLevel-Key
- [click] Dann der Standard des Modells
- [click] Enter speichert das Level als deinen Standard, s wendet es nur auf diese Session an; max gilt immer nur für diese Session
- Ein Skill oder Subagent kann ein effort-Feld im Frontmatter tragen: Es überschreibt das Session-Level, solange er läuft, nicht die Variable. maxEffortLevel in Managed Settings deckelt jede Quelle

<!-- @note: same-task-different-effort -->
> Tun:
> - In einem neuen Ordner ausführen, der nur eine Kopie von workshop-artifacts/20-reasoning-lab/review.ts enthält, ausserhalb des Workshop-Repositorys und deines CLASH-Clones: kein Lösungsschlüssel, keine CLAUDE.md, keine Claude-Code-Hooks auf Projektebene
> - Prüfen, dass CLAUDE_CODE_EFFORT_LEVEL nicht gesetzt ist und keine maxEffortLevel-Obergrenze unter high liegt: beides kann beide Läufe auf dasselbe Level setzen
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer): claude -p --model sonnet --effort low --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
>   claude -p --model sonnet --effort high --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
> - Die Teilnehmenden machen dasselbe in einer Session: /effort, Slider auf low, s, der Prompt, eine Auswertung, /clear, Slider auf high, derselbe Prompt. Der Print Mode gehört dir: Eine Session im Abo zeigt keine Token-Zahl pro Lauf
> - Docs-Link: öffnen, bis "Set the effort level" scrollen, dann zurück zu den Folien

Sagen:
- Nur eine Variable ändert sich: Effort. Gezählt werden die Findings und usage.output_tokens, nicht Ton oder Länge — Thinking wird als Output abgerechnet
- total_cost_usd weglassen: Gecachter Input wird günstiger abgerechnet, und ob der zweite Lauf den Cache des ersten liest, hängt vom Modell und vom Provider ab, die zwei Zahlen sind also nicht vergleichbar
- Die vier Findings, erst nach beiden Läufen: cancelled liefert true; `null` als Kapazität heisst unbegrenzt, wird aber zu 0; die Voll-Prüfung nutzt > statt >=; sort verändert participantIds

<!-- @note: measure-the-extra-reasoning -->
> Tun:
> - Die Tabelle mit den Ergebnissen der zwei Live-Läufe füllen
> - Finden beide Läufe alle vier Fehler, das klar sagen: Diese Aufgabe hat den höheren Effort nicht verdient. Auch das ist ein nützliches Ergebnis

Sagen:
- Reasoning hat nur Wert, wenn es bessere Entscheidungen oder weniger Nacharbeit bringt
- Der nützliche Vergleich ist der gesamte Engineering-Aufwand: Reasoning plus Umsetzung plus Nacharbeit plus Verifikation
- Den Vergleich an einer echten Aufgabe wiederholen, bevor du den Default-Effort eines Teams änderst

<!-- @note: effort-lab -->
> Tun:
> - Die Teilnehmenden führen beide Reviews in der eigenen Session aus, zählen gegen workshop-artifacts/20-reasoning-lab/FINDINGS.md, füllen ihre Tabelle
> - Die Sätze einsammeln: Wie viele sagen, high hat sich gelohnt, wie viele sagen unentschieden
> - Danach kommt der Debrief "Ten runs per level end in a tie"; sein Zurück-Chip führt zu "Flags change how a session starts", und die Folie danach ist "Print mode: no interaction, just an answer"

Sagen:
- Fertig, wenn: zwei Reviews, vier Zahlen in der Tabelle, ein Satz
- Now you: dieselbe Messung an einer echten Funktion in deinem CLASH-Clone, aus dessen Root, diesmal mit geladener CLAUDE.md und Hooks

<!-- @note: ten-runs-per-level-end-in-a-tie -->
> Tun:
> - Zeigen, nachdem die Sätze eingesammelt sind, neben den Tabellen der Gruppe
> - Letzte Folie des Blocks: Der Zurück-Chip führt zu "Flags change how a session starts"
> - Die Rohdaten: zwanzig claude -p-Aufrufe auf Sonnet 5.5 mit dem Labor-Prompt, je ein Turn, mit measure.mjs ausgewertet und von Hand gegengelesen. Die Tabelle steht in workshop-artifacts/20-reasoning-lab/README.md

Sagen:
- Zwanzig Läufe, zwanzigmal alle vier Fehler, null falsche Treffer: Auf dieser Datei ist low schon gesättigt
- [click] Was high gekauft hat: etwa ein Fünftel mehr Output-Tokens, ausgegeben für längere Beweise und zusätzliche Randfälle wie Kapazität 0 oder ein eingefrorenes Array
- Das ist das Unentschieden, vor dem der Task gewarnt hat. Die Datei ist zu klein, um das Reasoning zu brauchen; eine echte Aufgabe mit versteckter Kopplung kann anders aussehen, also dort nachmessen, bevor ein Default geändert wird
- Die Kostenzeile ist die Falle: Der erste Lauf jedes Levels hat den Prompt-Cache geschrieben und meldet etwa das Fünffache an total_cost_usd des nächsten Laufs bei gleichem Output. output_tokens vergleichen
