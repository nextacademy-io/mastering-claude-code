<!-- @note: the-model-alone-is-a-function -->
Sagen:
- Modell = eine reine Funktion: eine Liste von Tokens rein, eine Liste von Tokens raus
- Keine Dateien, kein Terminal, kein eigenes Gedächtnis
- [click] Alles, was du als "Claude Code" erlebst — dein Repo lesen, Dateien bearbeiten, Tests laufen lassen, um Erlaubnis fragen, sich an deine Regeln erinnern — erledigt ein Programm, das um diese Funktion herumgebaut ist
- Wir nennen dieses Programm den Harness
- Dieser Abschnitt behandelt jeden Teil des Harness — jeder Teil ist ein Hebel, den du kontrollierst

<!-- @note: the-loop -->
> Tun:
> - Den Ring Klick für Klick durchgehen
> - Zweimal sagen
> - Docs-Link: öffnen, bis "The agentic loop" scrollen, dann zurück zu den Folien

Sagen:
- [click] du tippst "fix the bell" — der Harness baut den vollständigen Prompt (nächste Folie zeigt, was drinsteckt)
- [click] der Harness ruft das Modell auf; das Modell denkt nach, dann fragt es entweder nach einem Tool oder antwortet
- [click] die Tool-Anfrage trifft auf das Permission Gate
- [click] der Harness führt das Tool aus — das Modell führt nie selbst etwas aus
- [click] das Ergebnis wird an den Prompt angehängt, der Ring dreht sich wieder — Modell aufrufen
- [click] irgendwann antwortet das Modell mit Text statt einer Tool-Anfrage — das ist der Ausstieg, der Turn endet und du liest ihn
- Das Modell wählt, der Harness führt aus
- Jedes Ergebnis bleibt ab jetzt im Fenster

<!-- @note: what-is-in-the-prompt-every-turn -->
> Tun:
> - Die Box öffnen, ein Block pro Klick

Sagen:
- [click] der System-Prompt, den Claude Code schreibt
- [click] deine CLAUDE.md-Dateien — oft mehr als zwei: verwaltet (deine Firma), ~/.claude/CLAUDE.md, die CLAUDE.md des Projekts, CLAUDE.local.md; Dateien in Unterordnern kommen dazu, wenn Claude dort liest
- [click] die Liste der Tools mit ihren Beschreibungen
- [click] ein kurzer Index der Skills, eine Zeile pro Skill
- [click] die gesamte Historie dieser Session — jede gelesene Datei, jeder Command-Output — schon beim vorherigen Call geschickt, der Provider liefert es also aus dem Cache: viel günstiger und schneller
- [click] deine neueste Message und das neueste Tool-Ergebnis — nur dieser hintere Teil wird voll bezahlt
- Der Historie-Block ist der, der wächst
- Später zeigt /context diese Blöcke mit echten Zahlen

<!-- @note: the-tools -->
Sagen:
- Das Kern-Tool-Set ist absichtlich klein und langweilig
- Read, Edit, Write — für Dateien
- Bash — für alles, was ein Terminal kann: Tests, Builds, Git
- [click:2] Grep und Glob — zum Suchen
- [click] Agent — startet eine weitere Loop mit eigenem Context (Subagents, später)
- [click] WebFetch — holt eine Seite von einer URL. Es sucht nicht: Die Websuche ist ein zweites Tool, WebSearch
- MCP — fügt Tools von außen hinzu: einen Browser, eine Datenbank, dein Ticket-System
- Das Modell sieht Name, Beschreibung und Input-Schema jedes Tools; es wählt anhand der Beschreibung und füllt Argumente aus dem Schema
- Deshalb werden Tool-Beschreibungen und Skill-Beschreibungen so sorgfältig geschrieben

<!-- @note: permissions -->
Sagen:
- Ein Tool-Call kommt am Gate an
- [click] zuerst prüft der Harness deine Regeln in den Settings
- [click] eine Regel kann erlauben ("npm test ist immer okay") oder verbieten ("nie rm") — der Harness führt das Tool aus, oder es läuft nichts und dem Modell wird gesagt, warum
- [click] keine Regel? Der Permission-Prompt fragt dich — dein Ja oder Nein nimmt dieselben zwei Wege
- Die Modi, einer pro Klick:
  - [click] Manual — fragt vor Edits und Commands
  - [click] Accept Edits — Datei-Edits gehen durch, plus gängige Filesystem-Commands (mkdir, rm, mv, cp...); andere Shell-Commands fragen weiter
  - [click] Plan Mode — read-only: das Modell kann schauen, aber nicht anfassen; Edits bleiben blockiert, bis du den Plan freigibst — gut zum Nachdenken vor dem Bauen
  - [click] Auto — ein zweites Modell, der Classifier, prüft Aktionen statt dir und blockiert die riskanten. Ein Block oder kein Urteil heißt: abgelehnt, nicht gefragt; Prompts kommen erst nach 3 Blocks in Folge oder 20 in einer Session zurück
  - [click] Bypass — überspringt fast jeden Prompt (nur in einer Sandbox benutzen); ein paar Dinge fragen trotzdem, etwa rm -rf auf deinem Home- oder Projektordner
- Das Gate ist der Kern der Sache: nichts Gefährliches passiert ohne eine Entscheidung — sei es von einer Regel oder von dir

<!-- @note: hooks -->
Sagen:
- Derselbe Ring, jetzt mit drei Stellen, an denen dich der Harness reinlässt
- [click] PreToolUse — führt deinen Shell-Command vor dem Tool aus; Exit-Code 2 blockiert den Call, und was du nach stderr schreibst, bekommt das Modell als Begründung
  - Er läuft vor der Permission-Prüfung, in jedem Modus: sein Exit 2 blockiert auch, wenn eine Allow-Regel passt oder im Bypass-Modus, und sein Allow überspringt nie eine Deny- oder Ask-Regel
- [click] PostToolUse — läuft nach dem Tool; das Tool ist schon gelaufen, Exit 2 kann das also nicht rückgängig machen — stattdessen geht stderr ans Modell, das dann seine eigene Arbeit repariert
  - Beispiel: nach jedem Edit unter app/actions lässt ein Hook den Type-Checker laufen; er schlägt fehl; das Modell sieht den Fehler und repariert den Code
- [click] Stop — läuft, wenn das Modell den Turn beenden will; Exit-Code 2 verweigert, und das Modell arbeitet weiter
- Jeder andere Exit-Code loggt nur — nur Exit-Code 2 blockiert einen Hook
- Eine Regel in CLAUDE.md ist Ratschlag. Ein Hook ist Gesetz
- Teil vier baut diese Hooks

<!-- @note: subagents -->
Sagen:
- Erinnerung: jedes Tool-Ergebnis bleibt im Fenster — zwanzig Dateien lesen, um eine Frage zu beantworten, füllt das Hauptfenster mit zwanzig Dateien
- Ein Subagent ist der Harness, der eine zweite Loop mit eigenem Fenster startet
- [click] er liest und greppt dort drin — dieses Fenster füllt sich, deins bewegt sich kaum
- [click] nur sein Abschlussbericht kommt zurück — eine Message
- Du kannst einem Subagent weniger Tools geben, ein anderes Modell, eigene Instruktionen
- [click] ein Fork ist dieselbe Idee, startet aber mit einer Kopie deines bisherigen Gesprächs — günstiger, wenn er braucht, was du schon weißt
- Teil drei nutzt einen Subagent, um CLASH zu auditieren

<!-- @note: skills-and-mcp -->
Sagen:
- Zwei weitere Teile des Harness, beide werden in späteren Teilen gebaut
- Ein Skill ist ein Rezept, das du einmal schreibst: "wie wir in diesem Repo ein Feature hinzufügen"
- Nur Name und Beschreibung stecken in jedem Prompt; der volle Text lädt, wenn die Beschreibung zu deiner Anfrage passt — hält das Fenster günstig
- [click] MCP ist ein Standard für Tool-Server — Claude Code listet ihre Tool-Namen wie eigene, hält volle Schemas aber standardmäßig zurück, bis sie gebraucht werden
- Einen Browser-MCP-Server installieren, und das Modell kann sich durch deine App klicken
- Einen Datenbank-MCP-Server installieren, und es kann Produktion abfragen — genau deshalb zählen Permissions und Hooks

<!-- @note: where-cost-and-control-come-from -->
> Tun:
> - Alles zusammenführen

Sagen:
- Kosten sind Tokens
- Input-Tokens bei jedem Call, Output-Tokens bei jeder Antwort
- Der gecachte vordere Teil ist viel günstiger als der Rest — lange Sessions mit stabilem vorderem Teil und kurzem hinterem Teil sind die günstigen
- [click:5] Kontrolle sind drei Fragen, die du dir immer wieder stellst:
  - Was ist gerade im Fenster?
  - Welche Tools kann das Modell aufrufen?
  - Welche Regeln werden von einem Hook erzwungen statt in einem Prompt erhofft?
- Das rote Band oben ist die Drift-Zone: Nahe am Limit verwirft Claude Code zuerst alte Tool-Outputs und fasst dann das Gespräch zusammen. Nichts wird zufällig abgeschnitten, aber frühe Anweisungen können verloren gehen — dauerhafte Regeln gehören in die CLAUDE.md
- Die nächsten zwei Folien: was den Tank teuer macht. Danach: was passiert, wenn er voll wird



<!-- @note: cost-multiplies-quietly -->
> Tun:
> - Die Multiplikation eine Review-Heuristik nennen, keine Abrechnungsformel
> - Jeden Faktor mit etwas verbinden, das die Gruppe schon gesehen hat: Context, Turns, Subagents, Effort
> - Docs-Link: öffnen, bis "Why usage climbs in a long session" scrollen, dann zurück zu den Folien

Sagen:
- Thinking-Tokens werden als Output abgerechnet. Parallele Worker haben je ihren eigenen Context. Lange Sessions machen spätere Turns schwerer
- Die Falle ist selten ein einzelner teurer Befehl — teuer wird die Multiplikation über mehrere Dimensionen
- Zuerst die Form der Arbeit optimieren: kleinerer Context, weniger unnötige Turns, weniger Worker, passender Effort

<!-- @note: keep-deterministic-work-deterministic -->
> Tun:
> - Fragen, wer die Fehler in einem Log zählen soll. Antwort: ein Script
> - [click] Fragen, wer entscheiden soll, ob sich zwei Architektur-Regeln widersprechen. Antwort: das Modell

Sagen:
- Keine Reasoning-Tokens für Arbeit, die ein Befehl fehlerfrei erledigt: ein riesiges Log kürzen, bevor es ins Fenster kommt
- Claude Code kürzt es nicht für dich: Bis etwa 30.000 Zeichen der Ausgabe eines Befehls landen unverändert im Fenster. Darüber speichert es die Ausgabe in einer Datei und zeigt die ersten 2.000; ein fehlgeschlagener Befehl liefert einen Auszug aus Anfang und Ende von etwa 10.000
- Gates, die jede Aufgabe wiederholt, in ein Script packen, damit Menschen, Agents und CI dasselbe prüfen
- Zurück zur ersten Kontrollfrage, was im Fenster ist: was passiert, wenn es voll wird

<!-- @note: when-the-window-fills-compact-or-clear -->
> Tun:
> - Noch läuft keine Live-Session — die Commands nennen, nicht ausführen
> - Klar sagen, dass die Live-Version später in Task 01 kommt, sobald es ein echtes Gespräch zum Kürzen oder Leeren gibt

Sagen:
- Drei Tanks — der erste ist eine Session nahe am Limit: gelesene Dateien, Tool-Output, Chat
- [click] /compact — bittet das Modell, das Gespräch zusammenzufassen, und ersetzt dann die Historie durch diese Zusammenfassung
  - Claude Code macht das von selbst nahe am Limit: erst verwirft es alte Tool-Outputs, dann fasst es zusammen
  - Es funktioniert, und es verliert Details; Compacting selbst ist ein großer Request, weil das Modell alles liest, was es zusammenfasst
- [click] /clear — leert das Fenster und startet eine neue Session mit derselben CLAUDE.md; das alte Gespräch bleibt auf der Platte, /resume öffnet es wieder
- Für einen neuen Job ist /clear meistens besser: nichts vom alten Job sickert rein
- Gewohnheit aufbauen: ein Job pro Session

<!-- @note: a-question-that-skips-the-loop -->
> Tun:
> - Noch läuft keine Live-Session — beschreiben, nicht ausführen
> - Gleiches „das machen wir später in Task 01 live" wie bei der letzten Folie

Sagen:
- Derselbe Loop wie vorhin — daran ändert sich nichts
- [click] Eine Zwischenfrage geht direkt ans Modell — ein /btw-Quadrat neben You, eine direkte Linie zu Model, keine Runde über den Ring
- Eine Zwischenfrage wird nur aus dem beantwortet, was schon im Gespräch steht: deine Nachrichten, Claudes Antworten, bereits gesammelte Tool-Ergebnisse
- Keine Tools, kein Permission-Gate, kein neuer Turn — sie kann keine neue Datei lesen oder einen Befehl ausführen
- Läuft gerade ein Turn, läuft er darunter einfach weiter — eine Zwischenfrage unterbricht ihn nicht
- Gut für: "wie hieß noch mal diese Config-Datei?" — ohne den Faden zu verlieren

<!-- @note: install-and-log-in -->
> Tun:
> - Den Install-Link oben auf der Folie in den Teams-Chat einfügen, damit alle ihn direkt anklicken können
> - Alle haben das vor dem Workshop installiert (docs/SETUP.md) — klar sagen, das ist ein Rückblick, keine neue Installation
> - Das eigene Terminal live in einem leeren Ordner öffnen und Claude Code starten — das war's.
>   Ein leerer Ordner zeigt bei /context, /btw oder /clear noch fast nichts; das kommt später,
>   am Ende von Task 01
> - Mit "The model is the same for everyone" zwei Folien weiter schließen, nach "Claude Code is not the only harness"

Sagen:
- Eine globale Installation, ein Befehl zum Starten
- Die Docs beginnen mit einem nativen Installer (curl- oder PowerShell-Einzeiler) — das ist der Link auf der Folie, und das, was das Pre-Flight in docs/SETUP.md nutzt. npm installiert dasselbe native Binary und läuft auf jedem OS — das ist die Alternative, die darunter steht
- Erster Start öffnet einen Login im Browser
- Claude Code läuft in deinem Terminal, innerhalb des Ordners, in dem du es startest
- Dieser Ordner ist seine Welt — dort liest und bearbeitet es
- CLAUDE.md-Dateien in diesem Ordner werden automatisch erkannt

<!-- @note: claude-code-is-not-the-only-harness -->
Sagen:
- Gleiche Idee, andere Namen: IDE-eingebettete Assistenten, Terminal-Agenten, autonome Coding-Services
- Vier Fragen gelten für jeden von ihnen, nicht nur für Claude Code
- [click] Autonomie: interaktiv, headless in CI, oder komplett unbeaufsichtigt — dieser Workshop deckt alle drei ab
- [click] Transparenz: kannst du den Plan lesen, bevor er läuft, und den Diff danach?
- In Claude Code: Ctrl+O öffnet den Transcript-Viewer mit jedem Tool-Aufruf. Laufende Subagents stehen in einem Panel unter dem Prompt, und /tasks öffnet das eigene Transcript jedes Subagents
- [click] Erweiterbarkeit: Hooks, Skills, MCP, Subagents — hier zahlt sich Claude Codes Toolkit aus

<!-- @note: the-model-is-the-same-for-everyone-the-harness-is-where-you-win -->
> Tun:
> - Für einen Moment stehen lassen

Sagen:
- Jeder in diesem Workshop kann aus denselben Modellen wählen — niemand bekommt heimlich ein schlaueres
- Der Unterschied zwischen "es ist vom Kurs abgedriftet" und "es hat das Feature mit Tests ausgeliefert" liegt komplett im Harness: der Context, den du ihm gegeben hast, die Tools, die du erlaubt hast, die Regeln, die du erzwungen hast
- Genau das lehrt der Rest des Workshops
