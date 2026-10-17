<!-- @note: same-task-different-effort -->
> Tun:
> - Deep Dive im Anhang: Du kommst über den Chip auf "Flags change how a session starts" hierher
> - In einem neuen Ordner ausführen, der nur eine Kopie von workshop-artifacts/reasoning-lab/review.ts enthält, ausserhalb des Workshop-Repositorys und deines CLASH-Clones: kein Lösungsschlüssel, keine CLAUDE.md, keine Claude-Code-Hooks auf Projektebene
> - Prüfen, dass CLAUDE_CODE_EFFORT_LEVEL nicht gesetzt ist und keine maxEffortLevel-Obergrenze unter high liegt: beides kann beide Läufe auf dasselbe Level setzen
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer): claude -p --model sonnet --effort low --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
>   claude -p --model sonnet --effort high --output-format json "Read @review.ts. Find correctness bugs. Do not edit. For each finding: line, impact, proof."
> - Docs-Link: öffnen, bis "Set the effort level" scrollen, dann zurück zu den Folien

Sagen:
- Nur eine Variable ändert sich: Effort. Gezählt werden die Findings und usage.output_tokens, nicht Ton oder Länge — Thinking wird als Output abgerechnet
- total_cost_usd weglassen: Gecachter Input wird günstiger abgerechnet, und ob der zweite Lauf den Cache des ersten liest, hängt vom Modell und vom Provider ab, die zwei Zahlen sind also nicht vergleichbar
- Die vier Findings, erst nach beiden Läufen: cancelled liefert true; `null` als Kapazität heisst unbegrenzt, wird aber zu 0; die Voll-Prüfung nutzt > statt >=; sort verändert participantIds

<!-- @note: measure-the-extra-reasoning -->
> Tun:
> - Die Tabelle mit den Ergebnissen der zwei Live-Läufe füllen
> - Finden beide Läufe alle vier Fehler, das klar sagen: Diese Aufgabe hat den höheren Effort nicht verdient. Auch das ist ein nützliches Ergebnis
> - Danach führt der Zurück-Chip zu "Flags change how a session starts"; die nächste Folie ist "Print mode: no interaction, just an answer"

Sagen:
- Reasoning hat nur Wert, wenn es bessere Entscheidungen oder weniger Nacharbeit bringt
- Der nützliche Vergleich ist der gesamte Engineering-Aufwand: Reasoning plus Umsetzung plus Nacharbeit plus Verifikation
- Den Vergleich an einer echten Aufgabe wiederholen, bevor du den Default-Effort eines Teams änderst
