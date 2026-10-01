<!-- @note: task-17-capstone -->
> Tun:
> - Branch: 17-start hat bereits CLAUDE.md, die Skills, den Ownership-Fix und das Hook-Set

Sagen:
- Ein frei gewähltes Briefing, Ende-zu-Ende ausgeliefert mit jedem Werkzeug aus dem Workshop

<!-- @note: spec-kit-six-steps-one-constitution -->
> Tun:
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer, bei Demo installieren):
>   uv tool install specify-cli
>   specify init my-project
> - Implement -> converge wiederholen, bis convergence "Converged" meldet

Sagen:
- Das eigene Tool von GitHub, MIT, agent-agnostisch — nicht an Claude Code gebunden
- Auf Claude Code installiert sich jeder Schritt als namensraumgetrennter Skill: speckit-constitution, nicht ein blankes /constitution
- [click] /speckit-specify — eine Feature-Beschreibung in normaler Sprache
- [click] /speckit-plan — ein technischer Plan aus der Spec
- [click] /speckit-tasks — der Plan aufgeteilt in eine Checkliste
- [click] /speckit-implement — gegen die Task-Liste bauen
- [click] /speckit-converge — prüft den Build gegen die Spec und hängt fehlende Arbeit als neue Tasks an; implement erneut laufen lassen, bis Converged gemeldet wird
- [click] Die Constitution läuft einmal — Prinzipien, die jeder spätere Schritt liest

<!-- @note: bmad-five-agents-one-party-mode -->
> Tun:
> - Docs-Link: BMADs GitHub-README — auf die Delivery-Loop-Grafik und die Install-Zeile unter "Start Building" zeigen, dann zurück
> - VOLLSTÄNDIGE LÖSUNG (nur für Trainer, bei Demo installieren):
>   npx skills add bmad-code-org/BMAD-METHOD

Sagen:
- Die Delivery-Loop: clarify, plan, build and verify, learn and adjust — zurück zu plan
- [click] PM = Product Manager, John: schreibt das PRD (das Produkt-Anforderungsdokument), setzt Prioritäten und Scope. Kein Projektmanager
- [click] Architect — die technische Form der Lösung
- [click] Developer — die Umsetzung
- [click] UX — die Oberfläche und das Erlebnis
- [click] Party Mode: jeder installierte Agent in einem Gespräch, in character
- [click] bmad-build: der Skill, der aus einer Story Code macht — er klärt die Absicht, plant, implementiert, dann reviewt er; der Link öffnet "Build a Change" bei "Run bmad-build"

<!-- @note: spec-kit-vs-bmad -->
> Tun:
> - Echte Voraussetzung, falls jemand nur Node hat

Sagen:
- [click:2] Spec Kit — GitHub, MIT, agent-agnostisch, `specify init`, wenig Zeremonie
- Specs als versionierte Markdown-Dateien, die jeder Agent lesen kann
- Python/uv-Tool, kein npm: `uv tool install specify-cli`
- [click] BMAD v6 liefert fünf benannte Agents (Analyst, PM, Architect, Developer, UX Designer) — nicht "12+ Personas" (das ist eine v4-Zahl)
- Schwergewichtig: standardmäßig mehrere Reviewer pro Änderung — die Token-Kosten summieren sich
- Repo: bmad-code-org/BMAD-METHOD
- Faustregel: Spec Kit, wenn du Spec-Disziplin willst, ohne Prozess-Overhead; BMAD, wenn die Organisation diese Rollen schon hat
- BMAD zaubert dir keinen Prozess herbei, den du nicht hast
- [click] Ehrliche Einordnung: beide glänzen auf der grünen Wiese, taugen aber auch für bestehenden Code. CLASH ist beides — Greenfield in Teil II, seitdem Brownfield — und clash-conference war ein Greenfield-Bau mit BMAD

<!-- @note: capstone -->
> Tun:
> - Herumgehen, sich die /context-Werte ansehen
> - Leute fragen, wohin ihr Budget gegangen ist

Sagen:
- Drei Briefings in workshop-artifacts/17-capstone/README.md: Clash-Kommentare, Venue-Favoriten richtig umgesetzt, wöchentlicher Digest
- Keine Prompts vorgegeben — die Checkliste ist das Ergebnis
