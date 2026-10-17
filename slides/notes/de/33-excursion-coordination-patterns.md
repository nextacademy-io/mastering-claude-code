<!-- @note: message-bus-publish-and-subscribe -->
> Tun:
> - Exkurs im Anhang: Du kommst über den Chip auf "Which pattern did we just run?" hierher
> - Docs-Link: der Blogpost, bis "Pattern 4: Message bus" scrollen
> - Betonen: kein Claude-Code-Feature, obwohl Teammates sich Messages schicken

Sagen:
- [click] Eine Alert-Quelle, fünf Agents und in der Mitte ein Bus
- [click] Jeder Pfeil läuft über den Bus: Agents publizieren Events und abonnieren Topics
- [click] Kein Agent spricht direkt mit einem anderen — sie bleiben entkoppelt
- Haken: schwer nachzuverfolgen, und ein falsch geroutetes Event scheitert lautlos
- SendMessage geht per Name an einen Agent — keine Topics, kein Router

<!-- @note: message-bus-publish-and-subscribe-2 -->
> Tun:
> - Keine Live-Demo: das sind Umwege, kein Feature
> - Achten auf: Zeilen 2–3 brauchen eigene Sessions, gestartet mit `claude --name web` und `claude --name migration` — keine Teammates

Sagen:
- Zeile 1: kein Broadcast — um zwei Teammates zu erreichen, zwei Messages schicken
- Zeile 2: Cross-Session-Messaging: Claude schreibt einer anderen deiner Sessions per Name
- Eingebaut, ohne gemeinsame Datei: Claude listet deine laufenden Sessions mit ListAgents und schickt mit SendMessage. Selbst ansehen mit /list-agents. Braucht Claude Code v2.1.224, unter nativem Windows v2.1.234
- @web ist ein Session-Name, kein Pfad: @ und die ersten Buchstaben des Namens tippen, dann die Session aus der aufklappenden Liste wählen (ab v2.1.232). Den Namen setzt man mit --name oder /rename
- Zeile 3: eine Nachricht, wenn diese Session idle wird — kein dauerhaftes Abo
- Keine Topics, kein Router: darum sagt die Fußnote "closest ways"

<!-- @note: shared-state-one-store-no-coordinator -->
> Tun:
> - Docs-Link: der Blogpost, bis "Pattern 5: Shared state" scrollen
> - Betonen: kein eingebautes Feature; eine geteilte Datei geht, aber ein Team behält seinen Lead

Sagen:
- [click] In der Mitte ein geteilter Store, vier Agents drumherum, kein Coordinator
- [click] Jeder Agent liest aus dem Store und schreibt hinein
- [click] Ein Finding, das ein Agent schreibt, ist sofort für alle anderen da
- Haken: Agents machen Arbeit doppelt oder antworten einander ohne Ende
- Also eine Stopp-Regel setzen: ein paar Runden ohne neue Findings, oder ein Judge-Agent

<!-- @note: shared-state-one-store-no-coordinator-2 -->
> Tun:
> - Optional live: zwei Sessions in deinem CLASH-Clone starten, in jeder Zeile 1 schicken
> - Achten auf: zwei Schreiber in einer Datei können sich überschreiben — nur anhängen lassen
> - Danach führt der Zurück-Chip zu "Which pattern did we just run?"; die nächste Folie ist "Reconcile, decide, merge"

Sagen:
- Zeile 1: kein Lead — zwei Sessions, die du selbst startest, teilen eine Datei
- Zeile 2: die Stopp-Regel — der /goal-Prüfer liest nur das Gespräch, also muss Claude die Datei zeigen
- Ein Agent-Team behält immer seinen Lead, darum ist es kein reiner Shared State
