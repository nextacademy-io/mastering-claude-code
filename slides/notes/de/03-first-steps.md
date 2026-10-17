<!-- @note: task-01-setup-and-first-conversation -->
> Tun:
> - Branch: 01-start hat nur docs/SPEC.md, README.md und .gitignore — noch nichts gebaut

Sagen:
- Claude nach der Spec fragen, dann schreibt /init deine erste CLAUDE.md

<!-- @note: the-prompt-is-a-chat-in-your-terminal -->
> Tun:
> - Einen echten Claude-Turn in deinem CLASH-Clone vorführen; auf die Tool-Zeilen zeigen, während sie erscheinen
> - Die Tool-Wahl variiert von Durchlauf zu Durchlauf, wie bei "It picks from probabilities". Wählt es Bash, ist der Permission-Prompt live das Gate aus dem Harness-Abschnitt
> - Esc drücken, während es arbeitet — stoppt den Turn, das Gespräch bleibt erhalten
> - Esc zweimal bei leerem Prompt öffnet stattdessen das Rewind-Menü — nach dem Stoppen eines Turns nicht doppelt drücken
> - Ctrl+C zweimal an einem leeren Prompt beendet es — während etwas läuft, unterbricht der erste Druck stattdessen, wie Esc

Sagen:
- Was auch immer an Tools erscheint — Read, Glob, Grep, Bash — ist die Loop aus dem letzten Abschnitt, live

<!-- @note: point-at-files-with -->
> Tun:
> - Nimmt tasks/01-setup-first-conversation.md Schritt 6 vorweg

Sagen:
- @ tippen und einen Pfad; Tab vervollständigt ihn
- Die Datei geht direkt in den Prompt
- Kontrast: "find the spec and read it" — das Modell greppt herum, liest ein paar falsche Dateien, und das landet alles auch im Context
- Zeigen ist günstiger und präziser
- Erste Context-Engineering-Gewohnheit — beginnt sofort

<!-- @note: slash-commands -->
> Tun:
> - tasks/01-setup-first-conversation.md Schritte 9-10 zeigen /init, /clear, /context und /help — die Zeilen laut vorlesen, noch nicht ausführen
> - /context, /usage und /rewind werden hier nur genannt — /context wird später in dieser Aufgabe live gezeigt, /usage unter „Now you", /rewind in Task 03
> - Docs-Link: öffnen, bis "Commands across a typical workflow" scrollen, dann zurück zu den Folien

Sagen:
- Ein Slash-Command ist eine Anweisung an Claude Code selbst
- /help listet sie auf
- /init liest das Projekt und schreibt eine Start-CLAUDE.md
- /clear leert die Session
- [click] /context zeigt die Blöcke aus dem Harness-Abschnitt mit echten Zahlen
- [click] /usage zeigt, was diese Session gekostet hat
- [click] /rewind bringt Dateien und Gespräch zu einem früheren Punkt zurück — Claude Code setzt vor jeder Änderung einen Checkpoint

<!-- @note: the-permission-prompt -->
> Tun:
> - Einmal Shift+Tab drücken, um in den Manual-Modus zu kommen, dann live einen auslösen — es bitten, ein Paket zu installieren
> - Die drei Optionen lesen — benennen, nicht auswählen

Sagen:
- Im Auto-Modus entscheidet der Classifier statt dir; ein Prompt erscheint trotzdem bei Ask-Regeln, beim ersten Lesen außerhalb des Arbeitsordners oder nach wiederholten Blocks
- Option zwei schreibt eine Regel in die Settings — erlaubt diese Art von Befehl ab jetzt
- Option drei lässt dich eine Korrektur eintippen
- Bash-Prompts können eine weitere Option zeigen, "Yes, and switch to auto mode"
- Shift+Tab durchläuft die Modi: Auto → Manual → Accept-Edits → Plan → zurück zu Auto. Ohne gesetzten Modus und mit verfügbarem Auto-Modus startet jede interaktive Session im Auto-Modus (seit v2.1.283, davor nur Pro, Max und Team); claude -p startet im Manual-Modus — das kann auch die erste Session direkt nach der Installation
- Accept-Edits fragt bei Datei-Edits nicht mehr; Plan Mode ändert deinen Quellcode nicht
- Plan Mode wird ab dem nächsten Teil viel genutzt

<!-- @note: claude-md-is-your-standing-instruction -->
> Tun:
> - Die Datei öffnen, die /init erzeugt hat
> - Kurz halten — jede Zeile steckt in jedem Prompt
> - Docs-Link: öffnen, bis "CLAUDE.md files" scrollen, dann zurück zu den Folien

Sagen:
- Ausgangspunkt, nicht das letzte Wort
- Faustregel: du sagst Claude dasselbe in einer neuen Session noch mal → es gehört in die CLAUDE.md
- Im Build-Teil: eine Regel hinzufügen, jedes Mal wenn die App dir eine beibringt

<!-- @note: in-your-editor -->
> Tun:
> - Nur erwähnen, nicht ausführlich vorführen

Sagen:
- [click] Die IDE-Erweiterungen laufen mit demselben Claude Code, aber das VS-Code-Panel hat nur einen Teil der Commands und Skills, kein !-Kürzel und keine Tab-Vervollständigung. Für den Rest claude im integrierten Terminal von VS Code starten — das JetBrains-Plugin arbeitet immer so
- Edits erscheinen als Inline-Diffs; aktuelle Datei und Auswahl gehen als Context mit
- Jeder kann seine eigene Oberfläche wählen
- Workshop nutzt das Terminal — überall gleich
- Noch eine Oberfläche, derselbe Motor: Der Code-Tab der Desktop-App startet Claude Code lokal, in der Cloud oder per SSH, mit Diff-Ansicht und parallelen Sessions

<!-- @note: keys-worth-knowing -->
> Tun:
> - Der Gruppe eine Frage stellen: eher Tastatur- oder Maus-Typ? Die Antwort fürs Tempo der Shortcut-Demo nutzen
> - Demo: Esc während eines Turns, Shift+Tab für den Modus, Tab nach @ zum Vervollständigen eines Pfads
> - Docs-Link: öffnen, bis "Keyboard shortcuts" scrollen, dann zurück zu den Folien

Sagen:
- "?" bei leerer Prompt-Zeile zeigt den Rest der Shortcuts
- Kein Tastenkürzel schreibt direkt in die CLAUDE.md — das alte #-Kürzel dafür gibt es nicht mehr. Claude in Worten bitten, oder die Datei selbst bearbeiten
- Eine Taste passt dir nicht? /keybindings öffnet ~/.claude/keybindings.json. Änderungen gelten ohne Neustart

<!-- @note: your-first-conversation -->
> Tun:
> - VOLLSTÄNDIGER PROMPT (Trainer), drei getrennte Messages:
>   - Read @docs/SPEC.md. In one sentence, what does this app do?
>   - Which five kinds of records does the app need? Say how they connect to each other.
>   - Which screen looks hardest to build, and why?
> - Dann /init ausführen und die CLAUDE.md öffnen, die es schreibt
> - Keine genaue Länge versprechen — der /init-Output kann sich je nach Claude-Code-Version unterscheiden. Nützliche Repo-Hinweise und den Verweis auf die Spec zeigen
> - Dann /clear und /context: auf die CLAUDE.md-Zeile zeigen — erster Beweis, dass Conversation Context weg sein kann, während Repo-Guidance bleibt

Sagen:
- CLAUDE.md und die Spec-Zeile stecken schon in jedem Prompt — das Budget aus Teil I, jetzt mit echten Zahlen

<!-- @note: setup-and-first-conversation -->
> Tun:
> - Alle installieren, klonen pawsaw/clash und checken 01-start aus (nur die Spec drin), dann das erste Gespräch und /init
> - Den Chat beobachten und auf Leute achten, die nie Enter beim Permission-Prompt drücken, oder die im Terminal tippen, während Claude arbeitet
> - Übliche Blocker: Node-Version (CLASH braucht 20.19+, 22.12+ oder 24, nicht 21 oder 23), Login, `claude` direkt nach der nativen Installation nicht gefunden (neues Terminal öffnen). Eine EBADENGINE-Warnung, wenn jemand Claude Code mit npm installiert, ist harmlos — es läuft trotzdem
> - Niemand geht weiter, bevor Claude Code im eigenen CLASH-Clone läuft und CLAUDE.md existiert

Sagen:
- Installieren, klonen, erste Fragen zur Spec, dann /init
- Fertig, wenn: Claude Code in deinem CLASH-Clone läuft, es deine Fragen beantwortet hat und CLAUDE.md existiert

<!-- @note: flags-change-how-a-session-starts -->
> Tun:
> - Docs-Link: öffnen, bis "CLI flags" scrollen, dann zurück zu den Folien
> - Deep Dive, optional: Der Chip springt zum Effort-Lab "Same task, different effort"; der Zurück-Chip auf "Measure the extra reasoning" landet wieder hier
> - Überspringen und mit "Print mode: no interaction, just an answer" weitermachen

Sagen:
- Zwei verschiedene Arten von Flag: was eine Session darf, und welche Session sich öffnet
- [click] --settings stapelt sich über deinen eigenen Dateien, unter managed — gut für ein einmaliges Experiment
- [click] -p antwortet und beendet sich. Keine Conversation bleibt laufen
- [click] --resume und --continue bekommen eine eigene Folie, nach dem Print Mode
- Auch --effort ist ein einmaliger Override. Das Effort-Lab lässt dasselbe Review auf low und high laufen und zählt, was das zusätzliche Reasoning gefunden hat

<!-- @note: print-mode-no-interaction-just-an-answer -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer): claude -p "what does package.json say the app is called?"
>   claude -p "list every route under app/(app)/" --output-format json

Sagen:
- Das ist es, was ein Script oder ein anderes Programm aufruft — keine Terminal-UI, kein Hin und Her
- --output-format json gibt dir etwas, das du in ein anderes Tool pipen kannst
- --output-format stream-json gibt während des Laufs ein JSON-Event pro Zeile aus — für ein Skript, das Fortschritt will statt einer einzigen Antwort am Ende
- Die Regel "nie claude -p in CI" aus dem GitHub-Actions-Modul betrifft genau den einen YAML-Schritt, nicht das hier

<!-- @note: pick-up-where-you-left-off -->
Sagen:
- Meistens willst du --continue: gleicher Ordner, direkt weitermachen
- [click] --resume ist zum Auswählen da: eine andere Session, oder eine, die im Hintergrund weiterlief
