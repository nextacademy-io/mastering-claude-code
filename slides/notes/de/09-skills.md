<!-- @note: skills -->
> Tun:
> - Divider, Skill-Zeile hervorgehoben

Sagen:
- "Auch hier startest du nicht bei null. CLASH bringt neun mitgelieferte Skills mit. Wir fügen einen eigenen hinzu."

<!-- @note: task-07-the-clash-feature-skill -->
> Tun:
> - Branch: 07-start hat schon die CLAUDE.md aus Task 06

Sagen:
- Drei Dinge baut dieser Block: den Skill selbst, ein Feature komplett darüber ausgeliefert, dann das Plugin drumherum

<!-- @note: loaded-only-when-needed -->
> Tun:
> - Auf die nächste Folie vorausweisen: dort läuft /skill-doctor live
> - Docs-Link: öffnen, bis "Skill content lifecycle" scrollen, dann zurück zu den Folien

Sagen:
- Macht Skills im großen Maßstab günstig
- [click] Die Beschreibung eines Skills liegt in jedem Turn im Context, benutzt oder nicht — es sei denn, disable-model-invocation ist gesetzt
- [click] Ein geladener Body bleibt normalerweise für die Session — nach einer Compaction können ältere Skill-Bodies wegfallen
- [click] Genau das misst /skill-doctor auf der nächsten Folie — wie viele Beschreibungen du bezahlst gegenüber wie viele Bodies überhaupt geladen werden



<!-- @note: skill-doctor-what-it-costs -->
> Tun:
> - Die Teilnehmenden machen das in Task 07, Schritt 2
> - Demo: `/skill-doctor` live ausführen, dann `.claude/skills/react-best-practices/AGENTS.md` und `.claude/skills/vercel-react-best-practices/AGENTS.md` nebeneinander öffnen
> - Kein `/skill-doctor` (braucht Claude Code v2.1.252 oder neuer)? Stattdessen die Skills-Zeile in `/context` lesen

Sagen:
- Der Bericht zeigt die Context-Kosten jedes Skills und wie oft er lief. Größe, Überschneidung oder Ladefehler zeigt er nicht: für die Größe die Ordner öffnen, mit /skills sehen, was geladen ist
- Wird ein Skill benutzt, lädt sein kurzes SKILL.md. Die ~100 KB große AGENTS.md lädt nur, wenn Claude sie öffnet
- Im Workshop wird nichts gelöscht: die Kosten zu sehen ist die Lektion

<!-- @note: commands-became-skills-nothing-broke -->
> Tun:
> - Zurückverweisen auf den /new-page-Command aus Task 04 — derselbe Mechanismus, das hier ist die Ordner-Version
> - Ein verbreitetes Missverständnis korrigieren
> - Optional: den Docs-Link öffnen, oben auf den Hinweis "Custom commands have been merged into skills" zeigen, dann zurück zu den Folien

Sagen:
- Dass Commands in Skills aufgehen, macht .claude/commands/*.md-Dateien nicht kaputt
- Sie erzeugen weiterhin denselben /command
- Für neue Arbeit Skills bevorzugen: ein Skill ist ein Ordner, kann also Zusatzdateien mitbringen. Command-Dateien nehmen dasselbe Frontmatter — allowed-tools, context: fork — außer name und paths

<!-- @note: write-the-clash-feature-skill -->
> Tun:
> - Vollständige Lösung (nur für Trainer): workshop-artifacts/07-clash-feature-skill/SKILL.md
> - Auf dem Bildschirm Schritt für Schritt aufbauen, nicht komplett einfügen
> - Beim Server-Action-Schritt anhalten und erklären: der wichtigste Satz im Skill. Task 08 bringt das richtig bei
> - Task-Schritt 5 gibt den Teilnehmenden den Grund und einen wörtlichen Edit-Prompt: sie fügen die Notiz ein, ohne den Grund selbst herleiten zu müssen

Sagen:
- Er besteht auf einem eigenen Ownership-Check, obwohl requireUser() im Layout läuft
- Warum: eine Server Action ist ein öffentlicher POST-Endpoint mit einer generierten id — der Layout-Guard sieht einen direkten Aufruf nie
- Warum den Grund in den Skill schreiben: eine nackte Regel wird übersprungen, wenn ein Fall anders aussieht. Eine Regel mit ihrem Grund lässt Claude den neuen Fall richtig entscheiden

<!-- @note: a-skill-is-advice -->
> Tun:
> - Nur vorausdeuten

Sagen:
- [click] "Ein Skill ist das, was du einem neuen Kollegen erzählen würdest. Es ist ein Ratschlag, kein Gesetz."

<!-- @note: ship-something-small-end-to-end -->
> Tun:
> - Den Skill wirklich aufrufen
> - Laufen lassen
> - Wenn es fertig ist, /context ausführen und die zwei Zahlen nebeneinanderstellen

Sagen:
- "/clash-feature Add venue favourites: a user can favourite a venue from its detail page and see a list of their favourites on their profile."
- Das Feature hat vielleicht sechs Dateien angefasst
- Der Kontrast ist der ganze Pitch für Skills, sichtbar gemacht

<!-- @note: where-claude-code-looks-for-skills -->
> Tun:
> - /skills irgendwo ausführen — agent-browser ist gelistet, aus der persönlichen Installation in Task 01
> - Auf skills-lock.json zeigen — das Protokoll des Installers, was woher kam
> - Docs-Link: öffnen, die aktive agent-browser-Skill-Seite zeigen, dann zurück zu den Folien

Sagen:
- Claude Code liest deine Skills aus zwei Ordnern. .agents/skills/ gehört nicht dazu
- [click] npx skills add vercel-labs/agent-browser -g legt die echte Kopie in ~/.agents/skills/ ab
- [click] Danach verlinkt es diesen Ordner nach ~/.claude/skills/ — genau dort darf ein Symlink stehen
- [click] Ohne den Link ist der Skill schlicht nicht da. Kein Fehler, keine Warnung — /skills zeigt es dir

<!-- @note: a-plugin-bundles-your-setup -->
> Tun:
> - Docs-Link: öffnen, bis "Plugin layout" scrollen, dann zurück zu den Folien

Sagen:
- Ein einzelner Skill oder Hook lebt in .claude/ und dient einem Projekt oder nur dir
- Ein Plugin ist die verpackte, teilbare Version derselben Idee
- [click] skills/ — ein SKILL.md pro Skill, genau wie .claude/skills/
- [click] agents/ — Subagent-Dateien, gleiche Form wie .claude/agents/
- [click] hooks/ — eine hooks.json statt Einträgen in settings.json
- [click] .mcp.json — das Plugin kann eigene MCP-Server mitbringen
- [click] Jeder Skill ist mit dem Plugin-Namen namensraumgetrennt, zwei Plugins kollidieren nie

<!-- @note: install-from-a-marketplace -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer): /plugin marketplace add anthropics/claude-plugins-community
>   dann /plugin install <ein kleines Plugin aus der Liste>@claude-community
> - Danach /plugin ausführen, um den Tab Installed zu zeigen

Sagen:
- Ein Marketplace ist nur ein Katalog — einen hinzufügen, dann per Namen installieren
- Die Install-Zusammenfassung sagt, ob das Plugin schon aktiv ist oder /reload-plugins braucht

<!-- @note: the-clash-feature-skill -->
> Tun:
> - Task-07-Rückblick
> - Übergabe an tasks/07-clash-feature-skill.md, alle 9 Schritte — keine Folien mehr bis Task 08
> - Den Chat beobachten, während gearbeitet wird

Sagen:
- Reset-Branch 07-start hat schon die CLAUDE.md aus Task 06 — niemand fängt bei null an
- Fertig, wenn: ein Feature komplett über den Skill ausgeliefert ist und tsc, lint und build grün sind
