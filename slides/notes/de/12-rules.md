<!-- @note: path-scoped-rules -->
> Tun:
> - Divider: Rule-Zeile hervorgehoben — eine neue Zeile auf der Karte
> - Den Moment kurz halten

Sagen:
- "Eine Regel, die nur auftaucht, wenn sie wirklich relevant ist."

<!-- @note: task-10-path-scoped-rules -->
> Tun:
> - Branch: 10-start hat den discover-Skill aus Task 09 schon — egal, ob die Gruppe diesen Exkurs gemacht hat

Sagen:
- Vier Dinge zu lernen, ein Ding, mit dem man rauskommt

<!-- @note: a-rule-without-paths-always-loads -->
> Tun:
> - Bewusst wiederholen: "Personal rules follow you" in Task 06 hat das schon gesagt
> - [click] Auf die zweite Karte zeigen: das Gegenstück im Projekt

Sagen:
- Bei dem anfangen, was schon da ist: tone.md in ~/.claude/rules/ hat kein paths-Feld, also lädt sie beim Start, in jedem Projekt
- User-Rules laden vor Projekt-Rules; keine überschreibt die andere — widersprechen sie sich, folgt Claude womöglich einer von beiden
- [click] Eine Projekt-Rule ohne paths lädt ebenfalls beim Start, mit derselben Priorität wie .claude/CLAUDE.md
- Eine Rule ohne paths ist also einfach CLAUDE.md in einer eigenen Datei. Erst das paths-Feld macht den Unterschied

<!-- @note: rule-claude-md-or-skill -->
> Tun:
> - Zuerst die Gruppe fragen: Wohin würden sie den Ownership-Check aus Task 08 legen?

Sagen:
- Immer: CLAUDE.md und Rules ohne paths — Fakten, die jede Session braucht
- [click] Bei einer passenden Datei: eine Rule mit paths — eine Konvention für einen Teil der Codebasis
- [click] Bei Bedarf: der Body eines Skills lädt, wenn seine Beschreibung passt, oder mit /name. Die Beschreibung selbst lädt jede Session — ausser disable-model-invocation ist gesetzt
- Der Ownership-Check betrifft nur app/actions/, also wird er eine Scoped Rule

<!-- @note: rules-scoped-to-a-path -->
> Tun:
> - Zurück auf ~/.claude/rules/tone.md aus Task 06 verweisen — die hatte kein paths:-Feld
> - Docs-Link: öffnen, bis "Path-specific rules" scrollen, auf die Glob-Tabelle zeigen, dann zurück zu den Folien
> - [click] Auf das Muster mit den geschweiften Klammern zeigen

Sagen:
- paths ist das einzige Feld, das Claude Code aus einer Rule-Datei liest — alles andere im Frontmatter wird ohne Fehlermeldung ignoriert
- Ein Glob trifft nach Ordner oder nach Endung: app/actions/** ist alles unter app/actions/, **/*.ts jede TypeScript-Datei
- [click] Klammern werden ausgeklappt: lib/**/*.{ts,tsx} sind zwei Muster. Eine Liste trifft, wenn irgendein Muster trifft
- Die Falle: Lässt sich das YAML zwischen den Markern --- nicht parsen, ignoriert Claude Code das Frontmatter und lädt die Rule überall. claude --debug zeigt den Parse-Fehler

<!-- @note: when-a-scoped-rule-really-loads -->
> Tun:
> - Das ist die Demo auf der nächsten Folie — die zwei /context-Werte jetzt schon benennen
> - [click] Die Karte für danach

Sagen:
- Eine Scoped Rule lädt, wenn Claude eine passende Datei liest, schreibt oder bearbeitet — oder sie mit einem Bash-Read wie cat oder head ansieht
- Nicht beim Start, und nicht bei jedem Tool-Aufruf. Einmal geladen, bleibt sie für die Session; nach /compact lädt sie bei Bedarf wieder
- [click] Der Beweis sind also zwei /context-Werte: vor jedem passenden Read, dann nach einem
- Den negativen Fall zuerst prüfen. Ein späterer themenfremder Read lädt die Rule nicht wieder aus

<!-- @note: a-rule-that-only-loads-when-it-matters -->
> Tun:
> - Live-Bau-Referenz — der genaue Body steht in tasks/10-path-scoped-rules.md, Schritt 1
> - Demo, in dieser Reihenfolge: /context (abwesend), lib/data/venues.ts lesen, /context
>   erneut (immer noch abwesend) — dann app/actions/venues.ts lesen, /context noch einmal
>   (jetzt gelistet)

Sagen:
- Zuerst ausserhalb von app/actions/ — die Regel bleibt abwesend, sie ist noch nicht geladen.
  Ist sie einmal geladen, macht ein späterer themenfremder Read sie nicht wieder rückgängig —
  dieser Check beweist also nur etwas, wenn er zuerst kommt
- Dann der passende Read — die Regel erscheint: der Ownership-Check aus dem Audit von Task 08,
  jetzt dauerhaft, kein Einzelfall mehr

<!-- @note: the-ownership-rule -->
> Tun:
> - Recap: diese Regel mit dem Befund des Subagents aus Task 08 verbinden

Sagen:
- "Derselbe Befund, jetzt jedes Mal sichtbar, nicht nur das eine Mal, als jemand daran gedacht hat zu auditieren — weiterhin Hinweis, keine Durchsetzung"
