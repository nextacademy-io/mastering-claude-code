<!-- @note: a-server-action-is-a-public-endpoint -->
> Tun:
> - Exkurs im Anhang: Du kommst über den Chip auf "The safety moment" hierher
> - Gleich zu Beginn sagen: Dieser Block ist Next.js, nicht Claude Code. Jede Folie überspringen, die die Gruppe schon kennt
> - [click] Der direkte Aufruf

Sagen:
- Eine Funktion mit 'use server' wird zu einem POST-Endpoint. Next.js gibt ihr eine generierte id; das Formular kennt nur diese id
- Jeder mit einem Session-Cookie kann den Endpoint direkt aufrufen, mit beliebigen Argumenten, ohne die Seite zu laden
- [click] Also läuft requireUser() im Layout bei einem direkten Aufruf nie. Die Action muss die Zeile laden und selbst prüfen, ob sie dem aktuellen Benutzer gehört
- Darum kommen die Tasks 03, 07, 08 und 10 immer wieder auf diese eine Prüfung zurück

<!-- @note: shadcn-ui-the-code-is-yours -->
> Tun:
> - [click] Die Datei, die es schreibt

Sagen:
- shadcn/ui ist keine Bibliothek, die man installiert und importiert. Die CLI kopiert den Quellcode jeder Komponente in dein Projekt
- [click] Nach npx shadcn@latest add button ist components/ui/button.tsx deine Datei. Keine Paketversion zum Hochziehen
- Für Claude heisst das: Die Komponente ist Code im Repository, den es lesen und ändern kann wie jede andere Datei

<!-- @note: prisma-7-the-choices-in-task-02 -->
> Tun:
> - [click] Die Config-Karte
> - [click] Die Seed-Karte

Sagen:
- Der Prisma-7-Client wird nach lib/generated/prisma generiert, und der Code importiert ihn von dort — das ist die erste Regel, die Task 02 in CLAUDE.md schreibt
- [click] Prisma 7.10 und neuer legt prisma7.config.ts an; ältere Prisma-7-Projekte haben prisma.config.ts. Die CLI akzeptiert beides, also der installierten Version folgen
- [click] SQLite über den better-sqlite3-Adapter, und prisma/seed.ts läuft über tsx
- Jede dieser Konventionen kann Claude aus älteren Beispielen nicht erraten, also gehört jede in CLAUDE.md oder in den Prompt

<!-- @note: next-js-16-params-are-promises -->
> Tun:
> - Auf die dritte Regel zeigen, die Task 02 in CLAUDE.md einträgt

Sagen:
- In Next.js 16 bekommt eine Seite params und searchParams als Promises. Vor dem Lesen eines Felds awaiten
- Viel älterer Next.js-Code liest sie direkt, und dieser Code steckt in den Trainingsdaten des Modells
- Eine Regel in einer Zeile in CLAUDE.md korrigiert den Default für jede Session — die Claude-Code-Lektion im Framework-Detail

<!-- @note: why-a-base64-avatar-costs-payload -->
> Tun:
> - Verbindet sich mit "Measure, fix, measure again" in Task 14
> - Danach führt der Zurück-Chip zu "The safety moment"; die nächste Folie ist "Point, don't let it guess"

Sagen:
- Base64 macht aus je drei Bytes vier Zeichen, das Bild wächst also um etwa ein Drittel, und es reist als Text
- CLASH speichert den Avatar als Base64-String, bis 1,5 MB, und getCurrentUser() holt ihn auf jeder Seite für ein kleines Icon
- Der Fix in Task 14: den Avatar im Session-Check nicht mehr mitladen. Allgemein: nur auswählen, was eine Seite zeigt, und Bilder als Dateien ausliefern
