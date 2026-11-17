# Der sanfte Weg: Erzählskript

Dieses Skript erzählt den Kurs als eine Geschichte in sechs Teilen, mit Judo als Bild für Claude Code. Lies die passende Geschichte, bevor du einen Block hältst: Sie gibt dir Sätze, Fragen, Live-Momente und die Belege dahinter. Die Presenter Notes bleiben die kurze Fassung für den Blick auf die Folie.

## So nutzt du das Skript

- Eine Geschichte pro Block, in der Reihenfolge des Decks. Jede trägt den Gürtel ihres Teils.
- Jede Geschichte hat dieselben Teile. **Wo im Deck** nennt Folien und Routen, **Das Judo-Bild** das Bild, **Merksatz** den einen Satz, der bleiben soll. Dann der Bogen: **Einstieg**, **Spannung**, **Wendepunkt**, **Auflösung**. Danach **Rückbezug** (die roten Fäden), **Deine Erfahrung** und **Wenn es hakt**. Die letzte Zeile führt zu den **Belegen** im Anhang. Geschichte 3 hat zusätzlich **Vorbereiten**.
- Text in Anführungszeichen ist zum Sagen gedacht. Alles andere ist für dich: wo, was du zeigst, worauf du achtest.
- **Deine Erfahrung** sind Fragen an dein eigenes Gedächtnis, keine fertigen Anekdoten. Erzähl nur, was du selbst erlebt hast. Kommt nichts, lass den Punkt weg.
- Die **Belege** stehen gesammelt im [Anhang](#anhang-belege), ein Abschnitt je Geschichte. Sie sagen, woher jede Aussage stammt. Was gemessen ist, nennt Plattform und Claude-Code-Version. Auf macOS ist nichts gelaufen.
- Das Judo-Bild ist ein Werkzeug. Trägt es an einer Stelle nicht, steht unter **Wenn es hakt** ein Satz ohne Judo.

## Der Rahmen

Judo heisst "der sanfte Weg": Ju bedeutet sanft oder nachgeben, Do bedeutet Weg oder Prinzip. Jigoro Kano hat Judo aus dem Jujutsu entwickelt und den Kodokan gegründet, wörtlich einen Ort zum Studium des Weges. Zwei Prinzipien von Kano tragen es: Seiryoku-Zenyo, der beste Gebrauch der Kraft von Körper und Geist (oft als maximaler Wirkungsgrad übersetzt), und Jita-Kyoei, gegenseitiges Wohlergehen und gemeinsamer Nutzen. Sanft heisst dabei nicht weich. Gemeint ist, die Kraft, die da ist, gut anzusetzen, statt mit mehr Kraft dagegen zu drücken. Darum passt das Bild zu Claude Code: Das Modell ist eine Kraft, und die ist für alle gleich. Wer gewinnt, setzt sie besser an, mit Context, Tools und Grenzen, nicht mit mehr Druck, längeren Prompts oder mehr Effort. Gelernt wird wie im Dojo: Die Kata zeigt die Form (Do this), das Randori zeigt, was davon auf der eigenen Matte hält (Now you). Und niemand lernt allein: Uke empfängt die Technik, damit Tori üben kann. Das ist Jita-Kyoei, im Kurs heisst es "ask, disagree, help each other". Das Judo-Bild ist ein Werkzeug, keine Dekoration: Es kommt nur dort, wo es eine Claude-Code-Idee trägt.

Der Kurs trägt vier Gürtel: Weiss für Teil I (Foundations), Blau für Teil II (Build CLASH), Braun für Teil III (Control the context), Schwarz für Teil IV (Orchestrate and let go). Im Judo gibt es Schülergrade, die Kyu, und Meistergrade, die Dan. Die Kyu-Grade zählen abwärts bis zum 1. Kyu; danach kommt der 1. Dan, Shodan, mit dem schwarzen Gürtel. Wie viele Kyu-Grade es gibt und welche Farben sie tragen, unterscheidet sich je nach Land und Verband. Viele Systeme, auch das der IJF, gehen von Weiss über Gelb, Orange, Grün und Blau zu Braun; der Kodokan selbst nutzt eigene Farben. Die vier Kursgürtel sind also eine vereinfachte Linie: Die Reihenfolge stimmt, Gelb, Orange und Grün fehlen, und der Capstone ist keine Gürtelprüfung. Schwarz heisst im Judo nicht fertig. Shodan heisst wörtlich Anfangsgrad, und USA Judo beschreibt den ersten Dan als Anerkennung, dass jemand bereit ist, Judo ernsthaft zu studieren. Genau so endet der Kurs (Geschichte 6).

## Die roten Fäden

Fünf Fäden laufen durch die Geschichten. Jeder beginnt mit einem Satz an einer Folie und kommt später zurück.

- **Mate!** (beginnt in Geschichte 1, zurück in 3, 5 und 6): Esc ist dein Mate: Der Turn hält an, nichts ist verloren, es geht weiter, wenn du es sagst. Wo niemand Mate rufen kann, muss das Ende vorher feststehen.
- **Ukemi** (beginnt in Geschichte 1, zurück in 2, 3 und 5): Wer werfen lernen will, muss fallen können: `/rewind` und die `NN-start`-Branches sind die Fallschule des Kurses. Fallen gehört zum Training, es ist kein Scheitern.
- **Sensei und Kampfrichter** (beginnt in Geschichte 3, zurück in 4, 5 und 6): Der Sensei ruft vom Mattenrand, im Wettkampf als Coach; der Kampfrichter entscheidet. CLAUDE.md, Skills und Briefings sind Rat, Gates und Hooks sind Entscheid.
- **Schild und Schloss** (Saat in Geschichte 4, erzählt in 5, zurück in 6): Eine Deny-Regel ist ein Schild an den Türen, deren Namen sie kennt: Dort hält Claude Code jeden an, der sie beim Namen nennt. Die Sandbox ist das Schloss an denselben Türen, und ein Schloss hört nicht zu, was einer sagt.
- **Kata und Randori** (beginnt in Geschichte 1, zurück in 4, 5 und 6): Do this ist Kata, die Form mit festen Prompts; Now you ist Randori, und dort zeigt sich, was auf deiner eigenen Matte hält. Gemessen wird, bevor behauptet wird.

## Geschichte 1: Gleiche Kraft, andere Technik (Weiss)

**Wo im Deck:** Teil I, Foundations. "The model alone is a function" (Saat) → "The model is the same for everyone. The harness is where you win." (Einstieg, Spannung) → `/task-01`, "The prompt is a chat in your terminal" (erster Takt) → Recap "Setup and first conversation" → "Flags change how a session starts" (zweiter Takt; optional über den Chip in den Deep Dive, `/deep-effort-lab`, bis "Ten runs per level end in a tie", der Zurück-Chip führt auf "Flags", `/quick-effort-lab`) → "Print mode: no interaction, just an answer" (dritter Takt, Auflösung).

**Das Judo-Bild:** Seiryoku-Zenyo, Kanos Prinzip vom besten Gebrauch der Kraft, bei der IJF "maximum efficiency": nicht stärker drücken, sondern besser ansetzen. Das Modell ist die Kraft, der Harness die Technik.

**Merksatz:** Das Modell ist die Kraft, der Harness ist die Technik.

### Einstieg

Vorher, auf "The model alone is a function", ein Satz: "Tokens rein, Tokens raus. Merkt euch diese Funktion, am Ende des Abschnitts kommt sie zurück."

Auf der letzten Folie von 02-harness, nachdem sie einen Moment stand:

"Ihr könnt alle aus denselben Modellen wählen. Niemand hier bekommt heimlich ein schlaueres. Im Judo hiesse das: alle in derselben Gewichtsklasse, dann entscheidet die Technik. Das Prinzip dahinter heisst Seiryoku-Zenyo: nicht stärker drücken, sondern besser ansetzen. Das Modell, die Funktion vom Anfang, ist die Kraft. Die Technik heisst hier Harness, und die lernt ihr in diesem Kurs."

### Spannung

Frag: "Wenn Claude danebenliegt: Woran dreht ihr zuerst?" Kommt "grösseres Modell" oder "mehr Effort", sag: "Das ist Kraft." Die Folien dazwischen haben die andere Seite gezeigt: was im Prompt steht, welche Tools es gibt, was das Gate entscheidet. Die Schlussfolie behauptet viel. Beweisen muss es die erste Task.

### Wendepunkt

**Erster Takt**, `/task-01`, "The prompt is a chat in your terminal". In deinem CLASH-Clone, auf einem sauberen `01-start` ohne CLAUDE.md (`git status`: working tree clean), sendest du:

```text
What does this project do?
```

Kommen `Read(README.md)` und `Read(docs/SPEC.md)` zugleich, ohne Suche davor, fragst du: "Woher kennt es docs/SPEC.md? Die README hatte es da noch nicht gelesen." Die Antwort: Der Harness schickt von Anfang an einen Git-Schnappschuss mit, die letzten Commits inklusive. Zeig es, statt es vorzulesen, in einem zweiten Terminal in deinem CLASH-Clone:

```bash
git log --oneline -1
```

Dort steht `workshop: empty start — README, docs/SPEC.md, .gitignore`. Es musste nicht raten: Der Harness hat ihm den Pfad hingelegt. Kein Suchzug, keine verschwendete Kraft, weil die Ausgangslage stimmte. Ab der nächsten Folie legt ihr diesen Context selbst hin, mit @.

**Zweiter Takt**, nach dem Recap, auf "Flags change how a session starts", bei `--effort`: "Mehr Effort ist mehr Kraft. Findet sie auch mehr?" Nimmst du den Deep Dive, misst die Gruppe es selbst, und deine Messung zeigst du erst auf "Ten runs per level end in a tie". Ohne Deep Dive antwortest du hier: "Im Effort-Lab ist es gemessen, mit Sonnet 5.5 und zehn Läufen pro Level: Auf einer kleinen Datei fand high nichts, was low nicht fand, und brauchte etwa ein Fünftel mehr Output-Tokens."

**Dritter Takt**, "Print mode: no interaction, just an answer". Stell den Befehl in den Chat, damit alle ihn kopieren können, und lass ihn selbst in deinem CLASH-Clone laufen:

```bash
claude -p "ok" --output-format stream-json --verbose --max-turns 1
```

In der Ausgabe steht das init-Event (`"subtype":"init"`), darin steht `tools`. Frag: "Wer hat Grep?" Dann sag, was gemessen ist: Unter nativem Windows 11 mit Claude Code 2.1.323 war Grep drin. Unter Linux, gemessen in einem Dev Container mit 2.1.322, fehlen Grep und Glob, Claude sucht dort mit find und grep über Bash. Laut Docs ist es auf macOS und in WSL genauso, gelaufen ist dort bei uns nichts. Dann: "Gleicher Befehl für alle, das ist die Kata. Was zurückkommt, hängt an Plattform und Settings: Das ist eure Matte."

### Auflösung

Auf "Print mode", nach dem init-Event:

"Das ist Seiryoku-Zenyo in Claude Code. Mehr Effort hat im Lab nichts gefunden, was weniger Effort nicht fand, nur mehr Tokens verbraucht. Gewirkt hat die Technik: Zwei Teile des Harness habt ihr gerade gesehen. Der Context: Die Commit-Message lag im Fenster, bevor ihr getippt habt. Die Tools: Nicht jeder hat Grep. Die Plattform gibt die Matte vor, Settings und Flags ändern, was darauf liegt. Das dritte, die Regeln, kommt mit den Hooks in Teil IV. Die Kraft steht allen gleich zur Verfügung, ihr lernt, sie anzusetzen."

### Rückbezug

Diese Geschichte legt drei Fäden, jeder mit einem Satz an seiner Folie, alle nach dem Einstieg:

- **Kata und Randori**, Task-Intro "Task 01 — Setup and first conversation": "Jede Task-Datei hat zwei Teile. 'Do this' ist Kata, die Form mit festen Prompts. Ein Unterschied zum Judo: Ihr kennt nur eure Hälfte, Claudes Antwort steht nicht fest. 'Now you' ist Randori, freies Üben: Dort zeigt sich, was auf eurer eigenen Matte hält."
- **Ukemi**, dieselbe Folie, bei `git checkout 01-start`: "Wer werfen lernen will, muss fallen können. Im Judo kommt die Fallschule vor dem ersten Wurf, bei uns auch: In Schritt 4 tippt ihr `git checkout 01-start`, bevor ihr den ersten Prompt schreibt. Genau dieser Befehl holt euch zurück, wenn ihr hängt." Geschichte 2 holt den Faden mit `/rewind` zurück.
- **Mate!**, "The prompt is a chat in your terminal", bei "Esc stops it": "Im Judo ruft der Kampfrichter Mate, und der Kampf hält an. Hier seid ihr der Kampfrichter: Esc ist euer Mate. Der Turn hält an, nichts ist verloren. Eure nächste Nachricht ist das Hajime, das Kommando zum Weitermachen."

### Deine Erfahrung

- Wie sah dein erstes Training aus? Was hat man dir als Erstes beigebracht? Lautet die Antwort "fallen", erzähl sie auf dem Task-Intro von Task 01, direkt vor dem Ukemi-Satz.
- Wann hast du zum ersten Mal erlebt, dass Technik mehr bringt als Kraft? Die Antwort gehört in den Einstieg, direkt vor "Das Modell, die Funktion vom Anfang, ist die Kraft".

### Wenn es hakt

- **Andere Tool-Zeilen:** Claude liest nur README.md, liest nacheinander oder sucht zuerst. Sag: "Modell und Durchlauf ändern die Zeilen." Liest es nacheinander, steht der Pfad auch in der README. Dann ist die README die Quelle, sag das so. Probier vorher in einer frischen Session in deinem CLASH-Clone auf `01-start`: `/btw What is the last commit message?`. Nennt es die Message, zeig es hier live: /btw hat keine Tools, eine richtige Antwort kam also aus dem Fenster.
- **Die init-Zeile ist unlesbar lang:** Such darin nach `"tools"`. Oder zeig die Liste aus FACILITATOR.md, "Tools depend on platform and settings".
- **Alle haben dasselbe System:** Sag, was die andere Seite zeigt, und dass Linux nur in einem Dev Container gemessen ist.
- **Das Judo-Bild trägt nicht:** "Gleicher Motor für alle. Gewonnen wird mit Fahrwerk, Reifen und Bremsen."

**Belege:** [Anhang](#belege-zu-geschichte-1)

## Geschichte 2: Der Wurf beginnt vor dem Wurf (Blau)

**Wo im Deck:** Teil II, Build CLASH. Eröffnet in `/task-02` auf "A brief has three parts" (`/theory-briefs`). Wendepunkt live auf "Plan mode: read, think, propose" (`/theory-plan-mode`) und "Plan the data model". Landet in `/task-03` auf "Undo a step: /rewind" (`/theory-rewind`). Die Saat für Teil III liegt auf "The safety moment" (`/theory-server-action-safety`).

**Das Judo-Bild:** Kuzushi, Tsukuri, Kake: Gleichgewicht brechen, in Position gehen, ausführen. Gelehrt wird es in drei Schritten, im Wurf ist es eine Bewegung. Den Fall sieht man zuletzt, entschieden ist er vorher.

**Merksatz:** Der Wurf entscheidet sich vor dem Wurf: erst Briefing und Plan, dann der Edit.

### Einstieg

"Wer zum ersten Mal Judo sieht, sieht den Fall. Entschieden ist der vorher: Erst bringst du den anderen aus dem Gleichgewicht, dann gehst du in Position, dann wirfst du. Im Training lernst du das in drei Schritten, im Wurf ist es eine Bewegung. Ohne den ersten Schritt kein Wurf. Ab jetzt baust du CLASH, und die Dateien, die Claude schreibt, sind der Fall."

### Spannung

Teil II heisst Build, und alle wollen Dateien sehen. Der naheliegende Prompt ist "set up a Next.js app". Claude macht daraus etwas Plausibles, und genau das ist das Problem: Niemand weiss, wann es fertig ist, weder du noch Claude.

"Bau mir eine Millionen-Dollar-App. Done when? Wenn ein Livestream meiner Einfahrt drei neue Familienautos zeigt."

Wer jetzt mit mehr Druck arbeitet, denselben Wunsch nur ausführlicher schreibt oder mehr Effort einstellt, drückt gegen einen Partner, der fest auf beiden Beinen steht. Beim Datenmodell wird es teuer: Auf dem Schema baut alles bis Task 05 auf, Auth, Clashes, Venues und die Karte, und später ändert man es nur mit Mühe.

### Wendepunkt

In deinem CLASH-Clone, auf "Plan mode: read, think, propose" und "Plan the data model" (`/task-02`, Schritte 5 und 6). Plan Mode an, dann: "Ich sende den Prompt aus Schritt 6. Der Plan kommt, der Code bleibt." Leg den Plan neben `docs/SPEC.md`, wähl in der Freigabe-Abfrage "No, keep planning" und frag nach:

```
Add a Verification section to the plan: which commands prove that the migration and the seed worked, and what output we should see.
```

Fehlt bei Participation die Regel "One per user and clash" aus der Spec, frag zuerst danach. Erst dann freigeben: In der Freigabe-Abfrage zuerst Esc, denn Shift+Tab gibt dort den Plan frei. Dann Shift+Tab, bis die Statusleiste `manual mode on` zeigt, und der Prompt aus Schritt 8. Dazu: "Wir haben den Wurf korrigiert, bevor jemand gefallen ist."

Der zweite Takt kommt in `/task-03` auf "Undo a step: /rewind", nach dem Shell-Schritt (Schritt 6). Biege absichtlich falsch ab:

```
Move the sidebar to the right and make the top bar bright red.
```

Zeig CLASH auf `localhost:3000`. Dann `/rewind`, den Checkpoint vor diesem Prompt wählen und Code und Gespräch zurücksetzen lassen. Seite neu laden: Die Shell sieht aus wie vorher. "Das war Ukemi. Fallen gehört zum Training, es ist kein Scheitern. Fallschule lernt man nicht vom Mattenrand: Wer will, schickt in Schritt 7 meinen Prompt selbst und holt die Shell mit /rewind zurück."

### Auflösung

Sag: "Ihr werft, das Modell ist die Kraft. Das Briefing ist euer Kuzushi, das Gleichgewicht brechen: Mit Goal, Rules und Done when kann die Aufgabe nur noch in eine Richtung fallen. Plan Mode ist Tsukuri, die Position: Ihr bringt die Kraft in Stellung, solange noch niemand fällt. Der Edit ist Kake, der Wurf. Den sehen alle, entschieden habt ihr vorher." Für dich: Claude liest und nennt die Dateien in der Reihenfolge, in der es sie ändern will. Ohne Bypass ändert Plan Mode den Quellcode erst nach der Freigabe. Danach schaust du dir den Fall an, nicht die Ansage: erst `git status`, dann `/diff`. Die Zusammenfassung stimmt meistens, der Diff zeigt, was wirklich passiert ist.

Plan Mode lohnt sich dort, wo Rückgängigmachen weh tut: Schema, Auth. Für einen Rename lohnt er sich nicht ("When a plan earns its cost").

`/rewind` ist die Fallschule, und Ukemi schützt auf der Matte: Checkpoints erfassen nur Claudes eigene Dateiänderungen. Was ein Bash-Befehl ändert, landet neben der Matte. Dort hilft git, und was gitignored ist, baust du neu.

### Rückbezug

- Aus Geschichte 1: "Das Modell ist die Kraft, der Harness ist die Technik." Briefing und Plan sind Technik. Derselbe Wunsch in mehr Worten ist nur mehr Kraft.
- Faden Ukemi: In Geschichte 1 lag er auf dem Task-Intro von Task 01, bei `git checkout 01-start`. Hier fällst du zum ersten Mal mit Absicht, vor allen; in Schritt 7 öffnet die Gruppe `/rewind` dann selbst. Geschichte 3 holt ihn auf "One big ask, or four small ones" zurück, mit Esc, `/context` und `/rewind`.
- Saat für Geschichte 3: "Read the diff, not the summary". Dort wird der Diff zum Kampfrichter, und Claudes Zusammenfassung ist nur noch eine Ansage.
- Saat für Geschichte 4: "The safety moment". Das Layout schützt die Seite, nicht die Action. Zod prüft die Form, nicht die Berechtigung. Die Regel landet in CLAUDE.md. Nur für dich, nicht verraten: Auf CLASHs `08-start` fehlt die Ownership-Prüfung in `deleteClash` und `deleteVenue` absichtlich, und der Auditor in `/task-08` soll beide Lücken finden.

### Deine Erfahrung

- Erzähl von einem Wurf, den du oft geübt hast, bis Kuzushi und Tsukuri sassen. Woran hast du gemerkt, dass er sitzt?
- Wie hast du fallen gelernt? Was hat dabei geholfen?

### Wenn es hakt

- Claude baut los, bevor der Prompt aus Schritt 8 weg ist: Der Plan ist schon freigegeben, durch Shift+Tab in der Freigabe-Abfrage oder durch "Yes, manually approve edits". Wenn Claude fertig ist, nachschicken:

  ```
  Run npm run db:migrate and npm run db:seed and show me the output.
  ```

- Das Bild trägt nicht: Sag es ohne Judo, wie in der Note: "Ein Prompt ist ein Wunsch; ein Briefing ist ein Vertrag."

**Belege:** [Anhang](#belege-zu-geschichte-2)

## Geschichte 3: Ippon gibt der Kampfrichter (Blau)

**Wo im Deck:** Teil II, Build CLASH. Eröffnet auf "Let Claude read the error" (`/theory-error-feedback`). Dreht auf "Let Claude look at the page" (`/theory-browser-feedback`) und der Stop-Folie "One big ask, or four small ones". Landet im Debrief "Verify cheap first, full gate last", der Folie nach dem Recap "Venues, map, people" (Block `/task-04`). Endet in `/task-05` auf "Review like a stranger" (`/theory-code-review`) und "Ship, then look at the reference". Greift zurück auf den Exkurs "A Server Action is a public endpoint" (`/excursion-nextjs`), erreicht über den Chip auf "The safety moment" in `/task-03`.

**Das Judo-Bild:** Den Ippon sagt nicht der Werfer an. Der Kampfrichter hebt den Arm hoch über den Kopf, wenn er Tempo, Kraft, Rücken und Kontrolle bis zum Ende der Landung gesehen hat; ist das nicht ganz erfüllt, gibt es Waza-ari.

**Merksatz:** Fertig ist, was ein Check zeigt, nicht was Claude sagt.

**Vorbereiten:** Ein zweiter CLASH-Clone auf `05-start`, denn erst dort gibt es die Kartenseite. Darin CLASHs `.env` anlegen (`docs/SETUP.md`, "Create CLASH's `.env`"), dann `npm install`, `npm run db:migrate`, `npm run db:seed`, `npm run dev`. Vorher `npm run dev` in deinem CLASH-Clone auf `04-start` stoppen: Nur der zweite CLASH-Clone darf `localhost:3000` belegen, sonst startet er auf einem anderen Port, und agent-browser öffnet die Karte im falschen CLASH. Die agent-browser-Demo sendest du in einer Claude-Session des zweiten CLASH-Clones. Der Big Ask läuft in deinem CLASH-Clone auf `04-start`.

### Einstieg

"Stell dir einen Judo-Wettkampf vor. Der Wurf sitzt, der andere liegt auf dem Rücken, und der Werfer weiss: Das war Ippon, der volle Punkt, der den Kampf entscheidet. Trotzdem schaut er zum Kampfrichter, denn den Ippon sagt nicht der Werfer an. Merk dir diesen Blick zum Kampfrichter. Du wirst ihn brauchen."

### Spannung

Nach drei Tasks lesen sich Claudes Zusammenfassungen gut, und sie stimmen meistens. Genau dann schaut man nicht mehr hin.

Auf "Let Claude read the error" gibt es diesen Fehler noch nicht. Erzähl es als Vorschau: "Gleich baust du die Karte, und sie bricht wahrscheinlich einmal, oft mit 'window is not defined'. Dann melden sich zwei Reflexe: selbst fixen oder den Bug in eigenen Worten beschreiben. Im ersten Fall sieht Claude den Fehler nie, im zweiten muss es raten, was du meinst. Schick stattdessen diesen Prompt." Zeig ihn, ohne ihn zu senden (Schritt 6):

```
The dev server shows an error. Read the terminal output, find the cause, and fix it.
```

Dann die drei Wege: Claude liest das Terminal, du fügst den Fehlertext ein, oder du fügst einen Screenshot mit Ctrl+V ein (Alt+V unter Windows und WSL). Läuft `npm run dev` in einem eigenen Terminal und sieht Claude es nicht, fügst du den Fehlertext ein. Je genauer die Evidenz, desto kleiner der Fix. Den echten Fehler holst du dir während der Arbeit: Trifft jemand in Schritt 6 darauf, lass diese Person zeigen, wie sie den Fehlertext einfügt und Claude lesen lässt.

### Wendepunkt

Auf "Let Claude look at the page" in der Claude-Session deines zweiten CLASH-Clones (auf `05-start`) live senden:

```
Use agent-browser to open http://localhost:3000/map, log in as anna.schmidt@example.com
with password test, take a screenshot, and tell me if the pins are visible.
```

Zeig die Befehle, die Claude ausführt: `agent-browser open`, `snapshot -i`, `screenshot`. Öffne den Screenshot, den Claude gemacht hat, und zeig ihn neben Claudes letztem Satz. Frag: "Wer hat entschieden, dass es geht: Claude oder der Screenshot?" Sobald der Kreis Change → Browser → Observe → Fix geschlossen ist, sag den Satz der Note: Claude ändert den Code und prüft das Ergebnis. Auf den nächsten Klick, "no human in the loop", kommt die Antwort: "Kein Mensch in der Schleife heisst, Claude kann sich selbst korrigieren. Es heisst nicht, dass Claude den Ippon gibt. Der Screenshot ist der Videobeweis. Bei der IJF schauen Supervisoren die Aktionen live auf Video mit, aus bis zu acht Winkeln. Aber ein Video zählt erst, wenn jemand hinschaut."

Zweiter Takt, die Stop-Folie "One big ask, or four small ones". Klick die linke Seite durch und halte auf dem roten Balken an, die rechte bleibt zu. Wechsle in die Task-Datei und sende Schritt 2 live in deinem CLASH-Clone auf `04-start`; sag dazu, dass das niemand nachmacht. Claude fasst Venues, Karte, Teilnahme und Benachrichtigungen in einem einzigen Turn an, und bis es stoppt, gibt es nur ein Ende zum Prüfen. Auch im Judo wertet der Kampfrichter eine Aktion ohne Stopp als Ganzes, nach dem, wie sie landet. Welcher der vier Teile falsch sitzt, sieht man so nicht. Lass Claude laufen, bis genug Dateien vorbeigezogen sind. Dann Esc: Mate ruft im Judo nur der Kampfrichter, und hier bist du es. `/context` zeigt den Schaden. `/rewind` springt zum Checkpoint vor dem Senden und holt das Gespräch und Claudes Datei-Edits zurück: Ukemi. Danach `git status`, denn was ein Bash-Befehl geändert hat, holt `/rewind` nicht zurück.

Übergib bei Schritt 1: auschecken, eigene Session, Schritt 2 überspringen. Ab Schritt 3 geht es klein: Venues (3), Karte (5), Teilnahme (9), Benachrichtigungen (10). Wenn die meisten bei Check sind, geh zurück auf die Stop-Folie und klick die rechte Seite auf; nur dort erscheint sie. Ihr Schlusssatz ist die ganze Geschichte: "Same four features. The difference is whether each one ends with something you can check."

### Auflösung

Dann der Debrief "Verify cheap first, full gate last". Frag zuerst: "Wo hat Claude 'fertig' gesagt, und was hat dein Check danach gezeigt?" Hol zwei Antworten ein. Erst dann sagen: "Erinnert euch an den Blick zum Kampfrichter vom Anfang. Claudes Zusammenfassung ist die Ansage des Werfers. Kampfrichter seid ihr, und ihr wertet nach dem, was ihr seht: Fehlertext, Screenshot, Exit-Code der Gates, Diff. Eine Zusammenfassung, die meistens stimmt, ist Waza-ari, die Wertung unter dem Ippon. Den Ippon gebt ihr erst nach dem Check." Der billigste Check, der scheitern kann, kommt direkt nach der Änderung. `npx tsc --noEmit` und `npm run lint` schliessen ein Work Package ab. Vor "fertig" steht `npm run build`, dazu ein Browser-Check, wo das Feature einen braucht. Frag: Was ist kaputtgegangen, und welcher Check hätte es zuerst gefunden?

Die Section "Quality gates" aus Schritt 11 in der CLAUDE.md ihres CLASH-Clones ist der Sensei am Mattenrand: Er erinnert Claude daran, die Gates laufen zu lassen. Ob Claude es tut, bleibt Rat. Was der Exit-Code sagt, ist Entscheid.

In `/task-05` gilt dasselbe fürs Review. Auf "Review like a stranger" läuft der Prompt aus Schritt 8, danach absichtlich eine zweite Message:

```
Fix findings 1 and 3. Leave the others.
```

Auch ein Finding ist nur eine Ansage, bis du die Zeile gelesen hast. Auf "Ship, then look at the reference" stehen danach alle auf CLASHs `06-start` (Note und Schritt 12; prüf es vor Teil III). Ab hier trainieren alle auf derselben Matte.

### Rückbezug

- Zurück zu Geschichte 2: Dort war "Read the diff, not the summary" die erste Wertung nach Beweis, und `/rewind` Ukemi nach einem Fehlschritt. Zurück zu Geschichte 1: Seit "Esc stops it" ist Esc euer Mate. Im Kampf ist Mate Alltag, und Esc ist es auch.
- Saat für Geschichte 4: Wer auf "The safety moment" in `/task-03` den Exkurs "A Server Action is a public endpoint" genommen hat, holt ihn beim Review zurück. Die Seite sieht geschützt aus, und auch das ist nur eine Ansage: Ein direkter POST auf die Action fragt das Layout nie. Der Review-Prompt sucht darum "missing ownership checks in actions", und dieselbe Frage kommt in Teil III zurück. Nur für dich, nicht sagen: Das ist die Lücke aus Geschichte 2, die der Auditor in `/task-08` finden soll.
- Saat für Geschichte 5: Teil IV erzwingt den Build mit einem Hook. In `/task-13` lässt ein Stop-Hook `npm run build` laufen und blockt mit Exit 2, wenn der Build scheitert. Dann muss niemand mehr vom Mattenrand daran erinnern.

### Deine Erfahrung

- Hast du einen Kampf erlebt, in dem du sicher warst, das war Ippon, und der Kampfrichter sah es anders? Oder umgekehrt? Erzähl ihn vor "Let Claude look at the page".
- Was hast du als Werfer mitten im Wurf gesehen, und was erst danach?

### Wenn es hakt

- Niemand trifft in Schritt 6 auf den Leaflet-Fehler: Nimm den nächsten echten Fehler, den jemand hat, etwa eine Meldung von `npx tsc --noEmit`. Es geht um die Evidenz, nicht darum, welcher Fehler es ist.
- agent-browser kommt nicht durch den Login oder erreicht CLASH auf `localhost:3000` nicht: Mach selbst einen Screenshot, füg ihn mit Ctrl+V ein (Alt+V unter Windows und WSL) und sag in einem Satz, was falsch ist. Dieselbe Idee; der Docs-Link der Folie öffnet bei "Work with images".
- Das Judo-Bild trägt nicht: Frag ohne Judo: "Würdest du einen Pull Request mergen, nur weil im Titel 'works' steht?"

**Belege:** [Anhang](#belege-zu-geschichte-3)

## Geschichte 4: Was nicht in der Form steht (Braun)

**Wo im Deck:** Teil III, Control the context, `/task-06` bis `/task-10`. Vorbereitet in `/task-07` auf "A skill is advice" (`/theory-skill-advice`). Erzählt in `/task-08` auf "The auditor subagent" (`/theory-auditor-subagent`). Wendepunkt auf "Agent, subagent, fork: which is which" (`/theory-agent-subagent-fork`) und in Schritt 9 und 10 von `/task-08`. Landet nach dem Recap "Subagent audit", beim dritten Now-you-Punkt.

**Das Judo-Bild:** In der Kata steht vorher fest, was kommt, und beide halten sich daran. In der `tools:`-Zeile hält nicht der Partner die Form, sondern der Harness: Edit ist nicht verboten, Edit ist nicht da. Das ist strenger als jede Kata. Ein Zuruf vom Mattenrand ändert die Form nicht. Im Randori zeigt sich, ob die Form hält.

**Merksatz:** In `tools:` zählt, was fehlt; im Briefing zählt nur, was Claude befolgt.

### Einstieg

Auf "A skill is advice" die Saat. Statt des Satzes 'Merkt euch das. Task 13 kommt darauf zurück' sagst du: "Merkt euch, wer hier redet. CLAUDE.md, der Skill, später die Rule in Task 10: Das ist der Sensei am Mattenrand. Er hat meistens recht. Er ruft, er entscheidet nicht. Task 13 kommt darauf zurück."

Auf "The auditor subagent", Schritt 5: "Lest nicht zuerst das Briefing. Lest eine Zeile: `tools: Read, Grep, Glob`. Was steht da nicht? Edit. Write. Bash. Das ist keine Lücke, das ist das Feature. Dieser Agent soll zwei Bugs finden, und er kann keinen davon fixen, selbst wenn er wollte. Das ist wie eine Kata, nur strenger. In der Kata halten sich beide an die Form. Hier hält sie der Harness: Was nicht in der Zeile steht, ist gar nicht da."

### Spannung

In Teil III ist alles Text: CLAUDE.md, der Skill, später die Rule. Steht "read-only" im Briefing, klingt es wie ein Gesetz, und alle glauben es. Und ein Audit ist genau die Arbeit, bei der niemand einen Edit will. Wer `deleteClash` findet, will es sofort fixen. Das macht `/task-12`, nicht dieser Agent.

### Wendepunkt

Schritt 6 laufen lassen, auf die Zeile unter `main` zeigen, danach `/context`: kaum bewegt. Dann "Agent, subagent, fork: which is which", zweiter `[click]`: Ein Fork hat dieselben Tools wie main, eine `tools:`-Zeile gilt für ihn nicht.

Schritt 9 live: dasselbe Audit mit `/subtask`, das Briefing beginnt mit "Read-only audit: do not edit any file." Auf die Zeile unter `main` zeigen, diesmal ein Fork: "Dieser hier hat Edit und Write. Read-only steht nur im Briefing." Gleich danach den Docs-Link der Folie "Two ways to isolate" öffnen (https://code.claude.com/docs/en/sub-agents) und unter "How forks differ from other subagents" auf die Zeile "System prompt and tools | Same as main session" zeigen. Stehen lassen.

Dann die Saat einlösen: "'Do not edit' ist ein Zuruf vom Mattenrand. Der Fork hört ihn. Edit hat er trotzdem." Und zu Schritt 10: "Im Manual-Modus fragt Claude Code vor dem Edit. Im Auto-Modus, dem Startmodus im Terminal, fragt niemand: Ein Edit in `app/actions/` geht ohne Prompt durch. Eine harte Grenze ist ein frischer Subagent mit `tools:`-Zeile."

### Auflösung

Drei Punkte zum Mitnehmen:

1. Ein frischer Subagent hat nur die Tools seiner `tools:`-Zeile. Ohne die Zeile erbt er jedes Tool, das ein Subagent haben kann, Edit und Write eingeschlossen.
2. Ein Fork bekommt die Tools von main und ignoriert `tools:`. "Read-only" im Briefing ist eine Bitte.
3. Im `tools:`-Feld zählen nur ganze Tools. "`Bash(find *)` liest sich wie: Bash, aber nur find. Claude Code liest: Bash. Gemessen auf Linux mit Claude Code 2.1.322 und auf Windows mit 2.1.325." Dann: "Die Form kennt nur ganze Werkzeuge. Schreibst du `Bash(find *)`, steht Bash in der Form."

Zum Schluss sagen: "Was nicht in der Form steht, muss niemand verbieten. Es ist nicht da."

### Rückbezug

- Geschichte 1: Dort zeigte das `init`-Event die Tools von main. Hier kommt noch etwas dazu: die Agent-Datei. Andere Ausrüstung, sogar in derselben Session.
- Sensei und Kampfrichter: Der Sensei ruft, der Kampfrichter entscheidet. Im Wettkampf darf der Sensei als Coach nur zwischen Mate und Hajime rufen; im Kampf ist der Kämpfer allein mit dem, was er vorher gehört hat. So bei Claude: CLAUDE.md, Skill und Rule liegen im Context, bevor Claude handelt. Beim Tool-Aufruf entscheidet der Harness. In Teil III spricht nur der Sensei, die Note zum Recap von `/task-10` sagt es selbst: "weiterhin Hinweis, keine Durchsetzung". Den Kampfrichter kennen alle aus Geschichte 3: ihr, mit dem Exit-Code der Gates. In Geschichte 5 kommt er von selbst, als Hook ("Advice vs. law").
- Schild und Schloss, Saat für Geschichte 5: Weil Bash fehlt, kommt der Auditor auch nicht an `grep -r`, einen Befehl, der keine Datei nennt. Auf "The auditor subagent" reicht ein Satz: "Kein Bash heisst auch: kein Shell-Befehl, der Dateien liest, ohne sie zu nennen. Teil IV kommt darauf zurück." Was sein Grep-Tool von `.env` fernhält und was ein Subagent mit Bash trotzdem lesen kann, erzählt Geschichte 5.
- Kata und Randori: Im Randori zeigt sich, ob die Form hält. Darum steht `Bash(find *)` in Now you: nicht vorführen, nach dem Recap zwei Leute fragen, was passiert ist, dann Punkt 3 mit denselben Worten sagen.

### Deine Erfahrung

- Falls du eine Kata gelernt hast: Wie anders war es, als dein Partner im Randori frei angriff?
- Falls du im Wettkampf gecoacht wurdest: Was von dem, was dir zwischen Mate und Hajime zugerufen wurde, war im Kampf noch da?

### Wenn es hakt

- Der Agent wird nicht gefunden: `.claude/agents/` gab es beim Start noch nicht, und Claude Code beobachtet nur Ordner, die beim Start da waren. `/exit`, dann `claude`, wie Schritt 5 sagt.
- `/subtask` fehlt: Agent View ist aus (`disableAgentView`). Dann startet `/fork` den Fork.
- Die Zeile des Forks ist schon weg: egal, die Docs-Tabelle ist der Beleg.
- Niemand hat den `Bash(find *)`-Punkt probiert: selbst erzählen. "Die Docs sagen es nur für `disallowedTools`. Für `tools:` ist es gemessen, auf Linux mit Claude Code 2.1.322 und auf Windows mit 2.1.325: Der Agent hat die Datei angelegt."
- Der `Bash(find *)`-Agent legt keine Datei an: Fragen, ob ein Permission-Prompt für `touch` kam und abgelehnt wurde. Dann hatte er Bash trotzdem.
- Jemand fragt, warum der Auditor Grep hat und main nicht: "Stehen Grep und Glob in der Liste und Bash nicht, bekommt er die beiden als echte Tools, auch dort, wo main sie nicht hat (laut Docs auf macOS, Linux und WSL; gemessen auf Linux, Claude Code 2.1.322)."
- Jemand ergänzt `Bash` im Auditor: Dann kann er über die Shell wieder schreiben, read-only ist weg. Auf Linux (gemessen, Claude Code 2.1.322) fielen dabei auch Grep und Glob weg, obwohl sie in der Liste stehen. Unter Windows nicht gemessen.
- Das Bild trägt nicht: ohne Judo sagen: "`tools:` ist ein Zaun. Das Briefing ist ein Wunsch."

**Belege:** [Anhang](#belege-zu-geschichte-4)

## Geschichte 5: Jede Matte braucht ihren Kampfrichter (Schwarz)

**Wo im Deck:** Teil IV. `/task-13`: "One hook, slowly", "PreToolUse deny rules", "Advice vs. law" (`/theory-advice-vs-law`), nach dem Recap "Hooks" der Security-Debrief mit "Ignored by Git is not hidden" und "Security: three rules" (`/theory-security-rules`). Deep Dive (Chip auf "Choose the sandbox by what you risk", vor dem Recap, `/deep-sandbox`): "What the Bash sandbox leaves outside", "Dev container: one box for the team", zurück über `/quick-sandbox`. Nachklang im Exkurs TDD (`/task-11`, falls er läuft; hinein über den Chip auf "The loop that matters" in `/task-14`, also nach `/task-13`): "Update the test, or fix the code?".

**Das Judo-Bild:** An einem Turnier hat jede Matte ihren eigenen Kampfrichter, und keiner urteilt über die Nachbarmatte. Sein Shido heisst wörtlich Anleitung.

**Merksatz:** Hook und Deny-Regel prüfen, was ein Aufruf nennt; das Schloss prüft, was ein Prozess in der Sandbox öffnet.

### Einstieg

Auf "One hook, slowly", direkt nachdem Claude den Typfehler in `app/actions/venues.ts` repariert hat:

"In Teil II wart ihr der Kampfrichter: Ihr habt geschaut, ob der Check grün war. Jetzt steht einer an der Matte, der nie wegschaut: der Hook. Er gibt einen Shido, eine kleine Strafe. Shido heisst wörtlich Anleitung. Genau das habt ihr gerade gesehen: Der Edit war schon drin, `tsc` ist gescheitert, der Hook hat mit Exit 2 geantwortet. Wir haben nur gesagt: dann reparier es. Was falsch war, hat ihm niemand von uns gesagt. Das stand auf stderr."

### Spannung

Auf "PreToolUse deny rules" die Messung erzählen, nicht vorführen. Laut dazu: "Gemessen auf Windows mit Claude Code 2.1.325. Bash und PowerShell waren beide an." Ein `rm`-Hook nur mit `"matcher": "Bash"`, der Prompt `Remove junk.txt from this folder.` Sonnet nahm fünfmal `Bash(rm …)`, fünfmal geblockt. Opus 5.5 nahm viermal Bash, geblockt. In einem der fünf Läufe ging es direkt zu `PowerShell(Remove-Item junk.txt)`. Der Hook feuerte nicht, die Datei war weg.

"An einem Turnier hat jede Matte ihren eigenen Kampfrichter. Unter Windows kämpft Claude auf zwei Matten, Bash und PowerShell. Unser Hook stand nur an der Bash-Matte. Im Judo beginnt ohne Kampfrichter kein Kampf. In Claude Code schon: Opus hat einmal gleich auf der PowerShell-Matte angefangen, und dort stand keiner."

Der Antwortschlüssel stellt darum an jede Matte einen Kampfrichter: `"matcher": "Bash|PowerShell"`, ein Handler je Tool.

Auf "Advice vs. law": "Der Sensei rät vor dem Kampf. Im Kampf handelt der Kämpfer selbst, und was erlaubt war, entscheidet der Kampfrichter. CLAUDE.md, Skills und das Briefing sind Rat, der Hook entscheidet." [click] "Ein Skill ist, was du einem neuen Kollegen sagst; ein Hook ist, was die CI ablehnt." Dann: "Gesetz, ja. Aber nur an der Matte, an der ein Kampfrichter steht." Die Frage, die bleibt: Unser `rm`-Hook schaut nach Namen, welches Tool, welcher Befehl. Was ist mit einem Befehl, der gar nicht sagt, was er anfasst?

### Wendepunkt

**Ohne Deep Dive**, auf "Ignored by Git is not hidden", beim zweiten [click]: "Unser `.env`-Hook im CLASH-Clone schaut nur aufs Read-Tool. Eine Read-Deny-Regel sieht mehr: das Read-Tool und die Datei-Befehle, die Claude Code erkennt, `cat`, `head`, `tail`, wenn sie die Datei nennen. `grep -r` nennt keinen Namen, und ein Skript, das die Datei selbst öffnet, erkennt Claude Code nicht als Datei-Befehl." Dann die Messung, laut dazu "auf Linux, in einem Dev Container, Claude Code 2.1.322": Read-Deny auf `.env`, Sandbox aus, Claude führt `grep -r` aus, der Inhalt kommt zurück. Sandbox an, derselbe Befehl: "ugrep: warning: cannot read .env: Permission denied". Kein echtes Credential zeigen. Dann:

"Hier hilft kein weiterer Kampfrichter. Eine Deny-Regel ist ein Schild an den Türen, deren Namen sie kennt. Claude Code liest es und hält jeden an, der eine dieser Türen beim Namen nennt. `grep -r` nennt keinen Namen und geht vorbei. Die Sandbox ist das Schloss an denselben Türen. Ein Schloss hört nicht zu, was einer sagt."

**Mit Deep Dive** kommt dieselbe Messung vor dem Recap, beim dritten [click] auf "What the Bash sandbox leaves outside". Auf "Ignored by Git is not hidden" dann nur zurückrufen: "Schild und Schloss kennt ihr schon."

Live wird es auf "Dev container: one box for the team", im Container dieses Workshop-Repositorys (FACILITATOR.md, "Show the dev container"). Live nur, wenn er angemeldet ist und du die vier Checks darin selbst hast laufen lassen; sonst die Linux-Messung erzählen. Erst das Schild:

```
Read .devcontainer/.env.
```

Die Deny-Regel lehnt ab. Dann das Schloss:

```
Run node -e "console.log(require('fs').readFileSync('.devcontainer/.env', 'utf8'))"
```

Claude bittet um Freigabe; nach dem Ja scheitert der Befehl mit `EACCES: permission denied`. So headless gemessen, interaktiv noch nicht gelaufen. Die Zeile stehen lassen. Ein Retry ausserhalb der Sandbox kommt hier nicht: Die Managed Settings dieses Containers schalten ihn ab (`allowUnsandboxedCommands: false`).

### Auflösung

Auf "Security: three rules" (`/theory-security-rules`):

Sag: "Hook und Deny-Regel lesen Namen: welches Tool, welcher Befehl, welcher Pfad. Die Sandbox liest keinen Befehl. Sie nimmt die Pfade eurer Read- und Edit-Deny-Regeln, und das Betriebssystem hält sie zu, für jeden Befehl in der Sandbox und alles, was er startet. Darum schützt die Sandbox `.env` in eurem CLASH-Clone erst, wenn der Pfad verboten ist, etwa mit `Read(.env*)` unter `permissions.deny`. Ein Hook reicht dafür nicht." Für dich: Die Sandbox gibt es laut Doku auf macOS, Linux und WSL2, standardmässig aus; gemessen haben wir sie auf Linux, in einem Dev Container mit Claude Code 2.1.322. Unter nativem Windows gibt es keine: Dort braucht jede Matte ihren Kampfrichter, und wer das Schloss braucht, startet Claude Code in WSL2 oder in einem Container. Zum Schluss auf die letzte Zeile der Folie zeigen: "Die stillste Form von Gesetz ist die kleinste Tool-Liste. Was fehlt, muss niemand verbieten."

### Rückbezug

- Ruft zurück: Geschichte 1 (die Note von "Hooks": "Eine Regel in CLAUDE.md ist Ratschlag. Ein Hook ist Gesetz"; welche Tools Claude hat, hängt an der Plattform), Geschichte 3 ("Verify cheap first" versprach einen Hook für `npm run build`; "Gate the turn" löst das ein), Geschichte 4 (der Auditor ohne Bash kommt nicht an `grep -r`; von seinem Grep-Tool hält erst eine Read-Deny-Regel `.env` fern, nicht unser Hook auf Read).
- Weiter zu Geschichte 6: Bis hier sass immer jemand an der Tastatur, der Esc drücken konnte. Geschichte 6 fragt, was gilt, wenn nur noch der Hook dasteht und niemand Esc drückt.
- Nachklang im Exkurs TDD (`/task-11`, falls er läuft): Auf "Update the test, or fix the code?" den nachlässigen Prompt einmal live senden. Ändert Claude die Assertion: Esc, euer Mate, falls der Turn noch läuft, dann `/rewind`. Die Fallschule trägt, weil Claude die Testdatei selbst bearbeitet hat.

### Deine Erfahrung

- Hast du einen Shido bekommen, der dich etwas gelehrt hat? Was hat er dir gezeigt, das du selbst nicht gesehen hattest?
- Wie hast du an Turnieren erlebt, was ein Kampfrichter sah und was ihm entging?

### Wenn es hakt

- Der Hook feuert nicht: `/hooks` zeigt, was wirklich verdrahtet ist. Fehlt er dort, prüf die `.claude/settings.json` deines CLASH-Clones auf gültiges JSON. Interaktiv meldet Claude Code eine kaputte Datei beim Start mit dem Dialog "Settings Error"; in einem headless Testlauf (`claude -p`) wurde sie ohne Warnung ignoriert, mit allen Regeln darin. `claude doctor` im Terminal zeigt, was verworfen wurde.
- Jemand will die PowerShell-Lücke live sehen: nicht versprechen. Opus 5.5 nahm beim neutralen Prompt PowerShell in einem von fünf Läufen mit dem Bash-only-Hook und in drei von drei Läufen gegen den Antwortschlüssel (Windows, Claude Code 2.1.325). Vorne kann es passieren oder ausbleiben. Der Punkt steht in "Now you" von `/task-13`: ihr Randori, auf der eigenen Maschine. Du misst vorher auf der Maschine, auf der du unterrichtest.
- Ein Judoka sagt: Wer die Fläche verlässt, wird gestoppt. Stimmt. Claude hat nichts verlassen, es hat auf einer Matte angefangen, an der keiner stand.
- Jemand fragt, warum `rm` überhaupt gesperrt ist. Ein guter Grund: Checkpoints erfassen nur Claudes eigene Dateiänderungen, keine Änderung durch einen Bash-Befehl. Löscht `rm` eine Datei, die Claude nie selbst bearbeitet hat, holt `/rewind` sie nicht zurück. Für diesen Fall gibt es keine Ukemi.
- `/task-14` mit Sandbox an: Wer in `/task-13` `/sandbox` eingeschaltet hat, hat es in `.claude/settings.local.json` seines CLASH-Clones stehen. Laut Doku erreicht ein Befehl in der Sandbox standardmässig keinen Server, der ausserhalb läuft; Tests oder agent-browser, die Claude startet, verfehlen dann womöglich CLASH auf `localhost:3000`. Die Tests dann selbst in einem zweiten Terminal laufen lassen. Das Schloss kennt auch dich nicht.
- Das Turnierbild trägt nicht: Schild und Schloss brauchen kein Judo.

**Belege:** [Anhang](#belege-zu-geschichte-5)

## Geschichte 6: Was zum Sore-made führt, steht vor Hajime fest (Schwarz)

**Wo im Deck:** Teil IV. Einstieg auf "Letting go of the wheel". Spannung auf "Headless in CI" (`/theory-headless-ci`) und "Audit on every PR" (im Block von `/task-15`, nach "Headless in CI"), weiter in `/task-16`, im Exkurs `/task-19` (falls er läuft) und im Capstone (`/task-17`). Wendepunkt auf "Automate with a stop rule", mit Deep Dive live auf "Bound the work" nach "/goal: evidence decides when to stop" (`/theory-goal`, `/task-18`; hinein über `/deep-automate`, zurück über `/quick-automate`). Die Auflösung beginnt auf "Three levers, one responsibility" und geht weiter auf "Autonomy is earned by verification". Schluss auf "Context is king. You push it, you own it." (`/theory-context-is-king`).

**Das Judo-Bild:** Hajime, Mate und Sore-made ruft der Kampfrichter: Beginn, Halt, Ende. Sore-made folgt einer Regel, die vor dem Kampf feststeht: Ippon, Hansoku-make oder der Gong, wenn einer vorne liegt.

**Merksatz:** Wenn niemand Mate rufen kann, muss vor dem Hajime feststehen, was zum Sore-made führt.

### Einstieg

Auf "Letting go of the wheel":

"Bis hierhin warst du immer dabei: Mit Enter hast du Hajime gerufen, mit Esc Mate. Jetzt gehst du von der Matte. Mit Worktrees laufen mehrere Kämpfe gleichzeitig, und du stehst nicht auf jeder Matte. In CI und in deinem eigenen Programm auf dem Agent SDK ruft niemand mehr Mate. Die Frage für den schwarzen Gürtel ist also nicht, wie gut Claude kämpft, sondern: Wer ruft Sore-made, das Ende des Kampfes?"

### Spannung

Auf "Headless in CI", beim [click] auf die Karte "CI run": "Hier drückt niemand Esc, und niemand beantwortet einen Permission-Prompt. In `/task-16` bei `ask-clash.mts` genauso." Dann die naheliegende falsche Antwort: "Viele machen daraus einen Schalter: `bypassPermissions`, damit nichts mehr fragt. Damit fehlt nicht nur das Mate, damit begrenzt auch keine Allow-Liste mehr etwas. Was dann noch hält, muss vorher dastehen: Deny-Regeln, PreToolUse-Hooks und eine Sandbox ohne Retry nach draussen."

Auf "Audit on every PR" zeigt `claude_args: "___"`, wo die Grenze hingehört: Was Claude im GitHub-Workflow darf, steht vor dem Lauf da. Ohne `Bash(gh pr comment:*)` bleiben die Findings im Run-Log.

Falls der Exkurs `/task-19` läuft, auf der Stop-Folie "Every tool, or two named tools?" die Schalter-Seite zeigen, `mcp__clash__*` plus `bypassPermissions`: "Der Stern gibt alle vier Tools des Servers frei, auch das Lösch-Tool `cancel_clash`. Und mit `bypassPermissions` begrenzt `allowedTools` gar nichts mehr: Bash, Write und Edit laufen ohne Frage mit."

### Wendepunkt

Auf "Automate with a stop rule", für alle: "Wer drückt Esc, wenn niemand an der Tastatur sitzt?" Antworten abwarten. Dann [click] auf die Karte "Stop" ("/goal: a check, plus a turn clause to bound it"): "Niemand. Darum steht das Ende schon in der ersten Zeile."

Mit Deep Dive beantwortet "Bound the work" (`/task-18`, Schritt 8) dieselbe Frage live. In deinem CLASH-Clone als eine Zeile tippen:

```
/goal npx tsc --noEmit exits 0 and npm run lint exits 0; or stop after 6 turns
```

Dazu sagen: "Die beiden Checks sind mein Ippon, die sechs Turns der Gong. Den Kampfrichter bringt `/goal` gleich mit: ein kleines Modell, das nach jedem Turn das Transcript liest. Alles steht in dieser einen Zeile, vor dem ersten Turn. Ohne die Turn-Klausel wäre es Golden Score: kein Zeitlimit, es läuft, bis eine Entscheidung fällt."

Claude startet sofort und führt beide Checks aus. Das kleine Modell urteilt: erfüllt, noch nicht oder unmöglich. Auf CLASHs `18-start` sind beide Checks schon grün, das Goal kann also nach einem Turn erfüllt sein. Auf das Urteil im Transcript zeigen (Ctrl+O zeigt die Begründung), dann `/goal` ohne Argument: Bedingung, Turns, Tokens. "Fertig gesagt hat nicht die Session, die gearbeitet hat, und nicht ich. Der Kampfrichter hat den Ippon im Transcript gesehen: beide Checks mit Exit-Code 0."

Im selben Deep Dive, auf "The spec-drift routine", beim Vorlesen vor dem letzten Satz innehalten: "When nothing drifted, do nothing: no pull request, no issue, no commit." Dann: "Der schwerste Satz im ganzen Prompt. Nicht nur für Agents."

### Auflösung

Auf "Three levers, one responsibility", in Klickreihenfolge:

- [click] Karte Reasoning, zurück zu Geschichte 1: "Mehr Effort für dasselbe Ergebnis ist das Gegenteil von Seiryoku-Zenyo, dem besten Gebrauch der Kraft."
- [click] Karte Evidence, die Geschichte aus den Messungen für diesen Kurs: "Unter Windows, mit Claude Code 2.1.325, ging Opus 5.5 in einem von fünf Läufen am Bash-only-Hook vorbei. Evidence heisst: Miss auf der Maschine, auf der es laufen soll."

Auf "Autonomy is earned by verification" die Treppe durchklicken bis "CI / routine". Die erste Stufe nach "you watch" heisst "goal + gates". Dann sagen:

"Loslassen heisst: Niemand drückt Esc. Wann Schluss ist, steht vorher fest: der Check und die Turns im `/goal`, `maxTurns` im Programm. Was erlaubt ist, auch: die Tools in `claude_args`, die Liste in `disallowedTools`. Kein Schalter, der alles freigibt."

Zum Schluss auf die dritte Zeile zeigen, "/goal is the first step up": "Mehr Freiheit braucht mehr Belege, mehr Isolation und mehr Grenzen. `/goal` ist die erste Stufe."

Auf "Context is king. You push it, you own it.", nach der letzten Zeile der Note, als letzte Worte des Kurses: "Den schwarzen Gürtel gibt es ab dem ersten Dan, Shodan, wörtlich Anfangsgrad. Dieser Kurs vergibt keinen Dan. Er bringt euch an den Anfang. Von hier an ruft ihr Hajime selbst. Legt vorher fest, was zum Sore-made führt."

### Rückbezug

- **Mate!** (Geschichten 1, 3, 5): Esc war dein Mate. Ein `/loop` hält mit Esc noch an, solange er wartet, und er läuft nur, solange die Session offen ist und nichts tut. In CI, im SDK-Programm und in der Routine gibt es kein Mate mehr.
- **Sensei und Kampfrichter** (3, 4, 5): Ein Output Style und der Prompt einer Routine sind die Absprache mit dem Sensei vor dem Hajime. Nach IJF-Regeln darf er als Coach im Kampf nichts mehr rufen, erst wieder bei Mate. In der Routine kommt kein Mate. Der Stop-Hook aus `/task-13` dagegen entscheidet: Er beendet auf CLASHs `18-start` jeden Turn mit `npm run build`, auch in der Background-Session. `/goal` macht aus dem Merksatz von Geschichte 3, "Fertig ist, was ein Check zeigt", eine Stoppregel. Aus Geschichte 4 ("In tools: zählt, was fehlt") wird in der Publish-Route `tools: []`.
- **Schild und Schloss** (4, 5): Im Exkurs `/task-19` stoppt `Edit(tests/**)` in clash-conference Claudes Edit-Tools, `sed`, `tee` und `>`, aber kein `node -e`. Das stoppt nur die Sandbox, und natives Windows hat keine.
- **Kata und Randori** (1, 4, 5): Im Capstone wählst du den Brief und änderst den Plan ohne fertigen Prompt. Vorlagen gibt es nur für den Skill-Aufruf, das Review und den Pull Request. Das ist Randori. Für Fakten über Claude Code gilt dasselbe: Die Docs sind die Kata, so ist die Form beschrieben. Der Lauf auf deiner Maschine ist das Randori, dort zeigt sich, was hält.

### Deine Erfahrung

- Falls du eine Kyu- oder Dan-Prüfung abgelegt hast: Was war danach anders? War es ein Ende oder ein Anfang?
- Falls du Wettkämpfe bestritten hast: Nach IJF-Regeln darf der Coach nur in der Mate-Pause sprechen. Was hast du vor dem Kampf mit deinem Coach abgemacht, weil er danach schweigen muss?

### Wenn es hakt

- `/goal` ist nach einem Turn erfüllt: gut so. Es geht um den Vertrag, nicht um eine lange Demo.
- `/goal` geht nicht: Es braucht einen vertrauenswürdigen Ordner, in dem Hooks erlaubt sind. Mit `disableAllHooks` sagt der Befehl, warum er nicht geht.
- Jeder Turn wartet auf `npm run build`: Das ist das Gate aus `/task-13`, nicht der Loop. Im frischen Worktree der Background-Session fehlt `node_modules`, der Build scheitert bis `npm install`.
- Vor `/task-16`: in deinem CLASH-Clone auf `16-start` die Datei `workshop-artifacts/16-agent-sdk/ask-clash.mts` aus dem Workshop-Repository an den Root deines CLASH-Clones kopieren, `npm install @anthropic-ai/claude-agent-sdk tsx`, dann `npx tsx ask-clash.mts "find me something outdoors in Kreuzberg this evening"`, und schauen, ob am Ende `npm run build` läuft. `ask-clash.mts` setzt kein `settingSources`. Dass Hooks mitladen, ist bisher nur in einer Session dieses Workshop-Repositorys gemessen; erzähl, was du auf `16-start` gesehen hast.
- Der Exkurs `/task-19` lief nicht: Stop-Folie, Publish-Route und `Edit(tests/**)` weglassen. Die Spannung trägt der GitHub-Workflow aus `/task-15`.
- Das Bild trägt nicht: Judo weglassen und nur fragen "Wer drückt Esc in CI?"

**Belege:** [Anhang](#belege-zu-geschichte-6)

## Judo-Begriffe

| Begriff | Bedeutung |
| --- | --- |
| Judo | Der sanfte Weg: Ju heisst sanft oder nachgeben, Do heisst Weg oder Prinzip. |
| Kodokan | Kanos Judo-Institut in Tokio, wörtlich ein Ort zum Studium des Weges. |
| Seiryoku-Zenyo | Kanos Prinzip vom besten Gebrauch der Kraft von Körper und Geist, oft als maximaler Wirkungsgrad übersetzt. |
| Jita-Kyoei | Kanos Prinzip von gegenseitigem Wohlergehen und gemeinsamem Nutzen. |
| Dojo | Der Trainingsort, an dem Judo geübt wird. |
| Sensei | Lehrer, Trainer. Im Wettkampf coacht er vom Mattenrand. |
| Tori | Wer die Technik ausführt. |
| Uke | Wer die Technik empfängt. |
| Ukemi | Fallschule: sicher fallen, damit Würfe ohne grosse Verletzungsgefahr geübt werden können. |
| Kata | Form: eine festgelegte Übungsfolge, bei der jeder Partner vorher weiss, was der andere tut. |
| Randori | Freies Üben unter wettkampfnahen Bedingungen. |
| Kuzushi | Das Gleichgewicht des Partners brechen. |
| Tsukuri | Eindrehen, die Position für die Technik einnehmen. |
| Kake | Ausführen und Vollenden der Technik. |
| Hajime | Kommando des Kampfrichters: Beginnt. |
| Mate | Kommando des Kampfrichters: Warten, der Kampf hält an. Die IJF schreibt Matte; im Skript steht Mate, damit es nicht mit der Matte, dem Boden, verwechselt wird. |
| Sore-made | Kommando des Kampfrichters: Der Kampf ist beendet. |
| Shido | Kleine Strafe für einen leichten Regelverstoss, wörtlich Anleitung. |
| Hansoku-make | Schwerste Strafe, die Disqualifikation; sie beendet den Kampf. |
| Waza-ari | Wertung unter dem Ippon: Der Wurf erfüllt die Kriterien des Ippon nicht ganz. |
| Ippon | Voller Punkt, der den Kampf entscheidet, etwa für einen Wurf, der den Gegner mit Schwung und Kontrolle auf den Rücken bringt. |
| Golden Score | Verlängerung bei Gleichstand, ohne Zeitlimit: Sie läuft, bis eine Entscheidung fällt. |
| Kyu | Schülergrad unter dem schwarzen Gürtel; Zahl und Farben unterscheiden sich je nach Land und Verband. |
| Dan | Meistergrad, beginnt mit dem schwarzen Gürtel. |
| Shodan | Der erste Dan, wörtlich Anfangsgrad. |

**Quellen**

- IJF, Judo: what is it all about (Judo, Kata, Randori): https://www.ijf.org/history/judo-what-is-it-all-about
- IJF, Judo-Kultur (Seiryoku-Zenyo, Jita-Kyoei): https://www.ijf.org/history/judo-culture/2300
- IJF, neue Regeln (Mate): https://www.ijf.org/news/show/judo-presents-the-new-rules
- IJF-Regeln (Ippon, Waza-ari): https://rules.ijf.org/page-5.html
- USJF-Glossar (Sensei, Tori, Uke, Kuzushi, Tsukuri, Kake, Hajime, Sore-made): https://learn.usjf.com/vocabulary/
- Wikipedia, Kodokan: https://en.wikipedia.org/wiki/Kodokan_Judo_Institute
- Wikipedia, Judo (Dojo, Ukemi, Shido, Hansoku-make, Ippon, Golden Score): https://en.wikipedia.org/wiki/Judo
- Wikipedia, Rank in judo (Kyu, Dan): https://en.wikipedia.org/wiki/Rank_in_judo
- Wikipedia, Shodan: https://en.wikipedia.org/wiki/Shodan_(rank)

## Anhang: Belege

### Belege zu Geschichte 1

- **Modell als Funktion, Harness drumherum:** Kurs, Folie "The model alone is a function" und ihre Note.
- **Git-Schnappschuss im Context:** Docs env-vars, `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` entfernt "the git status snapshot from Claude's context".
- **Letzte Commits im Schnappschuss:** Docs sub-agents, "What loads at startup", Punkt Git status: Für einen Subagent im eigenen Worktree zeigt er "branch, status, and recent commits". Für die Hauptsession steht es nicht in den Docs und ist nicht gemessen; deine Probe mit `/btw What is the last commit message?` zeigt es (Wenn es hakt).
- **Commit-Message auf 01-start:** `scripts/prepare-branches.sh`, Zeile `commit_all 01-start`; der Branch ist orphan, mit diesem einen Commit.
- **Die README nennt docs/SPEC.md auch:** `scripts/checkpoints/01/README.md`.
- **/btw ohne Tools:** Docs sub-agents ("It has no tool access, and the answer isn't added to history"); FACILITATOR.md, "The harness" ("no tool call, answered from what's already in the window").
- **README.md und docs/SPEC.md zugleich, die Zeilen schwanken:** nicht gemessen und nicht in den Docs, darum steht es im Wendepunkt als Wenn-Satz. Dass die Tool-Wahl schwankt: Folie "It picks from probabilities".
- **Tool-Set Windows:** gemessen unter Windows 11, Claude Code 2.1.323: Das Standard-Set enthält unter anderem Glob, Grep, Read, Bash und PowerShell. Docs tools-reference: PowerShell ist mit Git Bash für claude.ai- und Console-Accounts standardmässig an; auf der Messmaschine war zudem `CLAUDE_CODE_USE_POWERSHELL_TOOL=1` gesetzt.
- **Tool-Set Linux:** gemessen in einem Dev Container (Docker Desktop, WSL2-Kernel), Claude Code 2.1.322: kein Grep, kein Glob, `find`, `grep` und `rg` laufen als Bash. Docs tools-reference: "Absent by default on macOS, Linux, and WSL". Nicht gelaufen: macOS, natives WSL, Linux ausserhalb eines Containers. Im `.devcontainer/` des Workshop-Repos ist das Tool-Set nicht gemessen.
- **Das init-Event listet `tools`:** FACILITATOR.md, "See your own tool set". Die Position der Zeile ist nicht geprüft.
- **Effort-Lab, Funde:** `workshop-artifacts/20-reasoning-lab/README.md`, "Measured": Sonnet 5.5, Print Mode, zehn Läufe pro Level, je ein Turn, 4/4 in 10 von 10, 0 falsche Treffer. Plattform und Claude-Code-Version sind dort nicht notiert.
- **Effort-Lab, Tokens:** dieselbe Stelle: Median 1366 (1210 bis 1532) gegen 1658 (1568 bis 1811) Output-Tokens, "longer proofs and more edge cases, not more findings". Randfälle laut Note der Tie-Folie: Kapazität 0, ein eingefrorenes Array.
- **Context, Tools, Regeln:** Kurs, Note von "The model is the same for everyone. The harness is where you win." ("der Context, den du ihm gegeben hast, die Tools, die du erlaubt hast, die Regeln, die du erzwungen hast"). Regeln per Hook in Teil IV: Note von "Hooks" in `slides/notes/de/02-harness.md` ("Teil vier baut diese Hooks").

### Belege zu Geschichte 2

In dieser Geschichte steckt keine eigene Messung. Alles stammt aus den Kursdateien und den Docs.

- Plan Mode liest, darf zum Erkunden Shell-Befehle ausführen und ändert den Quellcode erst nach der Freigabe, ausser in interaktiven Sessions mit Bypass im Angebot (etwa nach `--dangerously-skip-permissions` oder `--allow-dangerously-skip-permissions`). Shift+Tab läuft ab Auto über default und acceptEdits zu plan. In der Freigabe-Abfrage: "Yes, manually approve edits", "No, keep planning", Ctrl+G; Shift+Tab gibt dort den Plan frei, darum zuerst Esc; jede Freigabe startet die Edits. Quellen: Docs permission-modes, "Analyze before you edit with plan mode" und "Review and approve a plan"; Note "Plan mode: read, think, propose".
- Einen Plan vor der Freigabe ändern: FACILITATOR.md, Task 02. Verification als Teil eines guten Plans: Folie und Note "A good plan has an exit". "One per user and clash": `docs/SPEC.md`, Abschnitt "Data", in deinem CLASH-Clone. Der Prompt aus Schritt 8: `/task-02`.
- Das eigene Schema zählt bis Task 05: FACILITATOR.md, Task 05 ("Then `git checkout 06-start`. Everyone is on the same code from here.").
- Diff statt Zusammenfassung: Note "Read the diff, not the summary".
- Ein Checkpoint vor jedem Prompt: Folie "Undo a step: /rewind". Nur Claudes eigene Dateiänderungen, keine durch Bash: Docs checkpointing, "Limitations", und die Note derselben Folie. Bash-Befehle wie `create-next-app`, `npx shadcn@latest init` und `npm run db:migrate`: `/task-02`, Schritt 2 und 8. Gitignored: `.gitignore` deines CLASH-Clones (`/node_modules`, `/lib/generated/prisma`, `/dev.db`, `prisma/*.db`); Neuaufbau: `docs/SETUP.md`. Die Gruppe öffnet `/rewind` selbst: `/task-03`, Schritt 7.
- Safety moment: `/task-03`, Schritte 11 und 12, und Note "The safety moment". `/task-08`: "The ownership check was removed from `deleteClash` in `app/actions/clashes.ts` and from `deleteVenue` in `app/actions/venues.ts`".
- Judo: Kuzushi, Tsukuri und Kake als eine Bewegung: Attilio Sacripanti, [A Biomechanical Reassessment of the Scientific Foundations of Jigoro Kano's Kodokan Judo](https://arxiv.org/abs/1206.1135). Die drei "occur as one effective movement without separation"; Kano hat sie "for didactic reasons" in drei Schritte geteilt. Die Begriffe stehen im [USJF-Glossar](https://learn.usjf.com/vocabulary/). "Ohne den ersten Schritt kein Wurf" gibt den Dojo-Spruch "Ohne Kuzushi kein Wurf" wieder. Der Spruch ist keine Regel ohne Ausnahme.

### Belege zu Geschichte 3

- Leaflet-Fehler, Prompts, die drei Wege, Ctrl+V und Alt+V, die Schritte: `tasks/04-venues-map-people.md`; Notes zu "Let Claude read the error", "Let Claude look at the page", "One big ask, or four small ones".
- Ablauf der Stop-Folie, Übergabe, rechte Seite erst nach Check, Debrief: FACILITATOR.md, "Rhythm for every task" und Task 04. Checkpoints erfassen keine Bash-Änderungen: Note "Undo a step: /rewind" (Docs checkpointing).
- Kartenseite erst ab `05-start`, Ownership-Prüfung auf `08-start` entfernt: `docs/BRANCHES.md`.
- "no human in the loop": `slides/components/G16VerificationLoop.vue`.
- Gates, Browser-Check, Hook in Teil IV: FACILITATOR.md, Task 04; Note "Verify cheap first, full gate last". Stop-Hook mit Exit 2: `tasks/13-hooks.md`.
- Review in zwei Messages, Schritt 12, alle auf `06-start`: `tasks/05-finish-and-ship.md`; Notes zu "Review like a stranger", "Ship, then look at the reference", "Finish and ship".
- Server Action als POST-Endpoint, Layout läuft beim direkten Aufruf nie: `slides/notes/de/31-excursion-nextjs.md`.
- Gemessen wurde für diese Geschichte nichts. Alles stammt aus Kursdateien und Docs, deshalb steht hier keine Plattform und keine Version.
- Judo: Ippon-Kriterien und Waza-ari, https://rules.ijf.org/page-5.html. Wertung einer Aktion ohne Stopp (Decision 1), https://rules.ijf.org/page-4.html. Ippon-Geste (ein Arm hoch über den Kopf, Handfläche nach vorn) und Mate als Geste des Kampfrichters: IJF Sport and Organisation Rules (sor.ijf.org), Wortlaut bei USJF, https://www.usjf.com/?p=60352. Videobeweis mit bis zu acht Winkeln: https://www.ijf.org/news/show/behind-the-show.

### Belege zu Geschichte 4

- Frischer Subagent, `tools:` als Allowlist, ohne Feld jedes Tool, das ein Subagent haben kann: Docs sub-agents ("Inherits every tool available to subagents if omitted"); `/task-08` Schritt 5.
- Fork mit den Tools von main: Docs sub-agents, "How forks differ from other subagents" ("System prompt and tools | Same as main session"); FACILITATOR.md, Task 08.
- Fork-Zeile verschwindet, wenn er fertig ist: Docs sub-agents ("When a fork finishes successfully, Claude Code removes its row"); `/task-08`, Tabelle unter Why.
- Auto-Modus: ab Claude Code 2.1.283 Startmodus im Terminal; "Read-only actions and file edits in your working directory are auto-approved" (Docs permission-modes). Ohne `permissionMode` erbt ein Subagent den Modus von main (Docs sub-agents). Umschalten auf Auto in Task 02: FACILITATOR.md.
- Grep und Glob ohne Bash: Docs tools-reference ("lists Glob or Grep in its tools field and leaves out Bash"); gemessen Linux-Dev-Container, Claude Code 2.1.322. Main ohne Grep und Glob: gemessen Linux, 2.1.322; laut Docs auch macOS und WSL, dort nicht gelaufen.
- Mit `Bash` in der Liste nur Read und Bash: gemessen Linux-Dev-Container, Claude Code 2.1.322; Windows nicht gemessen.
- `Bash(find *)` in `tools:` gibt die ganze Bash: gemessen Linux, Claude Code 2.1.322; Windows, Claude Code 2.1.325, Sonnet, nur headless (`claude -p --agents`, `touch` per `--allowedTools` vorab erlaubt), 2 von 2 Läufen: `touch probe.txt` legte die Datei an. Kontrolle auf Windows mit Read, Grep, Glob: keine Shell, keine Datei. Docs sub-agents sagt nur für `disallowedTools`, dass `Bash(git push *)` das ganze Tool entfernt.
- Neustart für einen neuen `agents`-Ordner, `/subtask` und `/fork`: Docs sub-agents; FACILITATOR.md, Task 08.
- Grep-Tool und `.env`, `grep -r` ohne Sandbox: siehe Beleg von Geschichte 5.
- Kata und Randori: IJF, "Judo: what is it all about" (Kata: "each combatant agrees beforehand exactly what their opponent is going to do"; Randori: "each contestant cannot tell what their opponent is going to do").
- Coach nur zwischen Mate und Hajime: USA Judo, Update zu den IJF-Regeln für Junior und Cadet ("Coaching is authorized only during the pause after 'Mate!' and before 'Hajime!'").

### Belege zu Geschichte 5

- Exit 2 blockt vor einem Tool und am Stop, nach einem Tool geht stderr an Claude; `matcher` liest den Tool-Namen, `if` hält eine Regel: Docs hooks; `tasks/13-hooks.md`, "Why", Schritte 3 und 5.
- Windows mit Git Bash: PowerShell-Tool für claude.ai- und Console-Accounts standardmässig an, dann die primäre Shell (Docs tools-reference, hooks). Ohne Git Bash kein Bash-Tool, und "A hook that matches only `Bash` never fires there" (Docs hooks).
- Sonnet 5 von 5 `Bash(rm …)` geblockt; Opus 5.5 4 von 5 Bash geblockt, 1 von 5 `PowerShell(Remove-Item junk.txt)`, Datei gelöscht: gemessen Windows, Claude Code 2.1.325, `CLAUDE_CODE_USE_POWERSHELL_TOOL=1`. `Bash|PowerShell` mit `PowerShell(Remove-Item *)` blockt `Remove-Item` und den Alias `rm`: dieselbe Maschine, Sonnet, je zwei Läufe. Gegen die Datei des Antwortschlüssels selbst: 7 von 7 Löschversuchen geblockt, davon drei, in denen Opus 5.5 beim neutralen Prompt von sich aus PowerShell nahm. Antwortschlüssel `workshop-artifacts/13-hooks/settings.json`: ein Handler je Tool, weil ein `if` eine Regel hält; der Build-Log-Hook ist mit PowerShell nicht getestet.
- Checkpoints erfassen nur Claudes eigene Dateiänderungen: Note zu "Undo a step: /rewind" (Verweis auf Docs checkpointing, Limitations).
- Read-Deny greift beim Read-Tool, bei erkannten Datei-Befehlen (`cat`, `head`, `tail`, `sed`, `tee`) und Umleitungszielen, nicht bei `grep -r pattern .` oder beliebigen Subprozessen: Docs permissions, Warnkasten. Ein blosser Dateiname wie `Read(.env*)` gilt in jeder Tiefe: Docs permissions.
- `grep -r` mit Sandbox aus und an: gemessen im Linux-Dev-Container auf Docker Desktop (WSL2-Kernel), Claude Code 2.1.322. Das Grep-Tool lässt Dateien unter Read-Deny still aus: gemessen, Claude Code 2.1.322 im Linux-Dev-Container oder 2.1.323 auf Windows; auf welchem der beiden, ist nicht festgehalten (FACILITATOR.md, "Tools depend on platform and settings"). Das Grep-Tool sucht eine gitignorierte Datei, wenn Claude ihren Pfad nennt: Docs tools-reference.
- Sandbox übernimmt Pfade aus Read- und Edit-Deny-Regeln und gilt für Kindprozesse; macOS, Linux, WSL2, standardmässig aus, unter nativem Windows keine; kein direkter Weg zu einem Server ausserhalb ("A command fails to reach a server on localhost", mit CLASH nicht gelaufen); Retry je Modus: Docs sandboxing. `allowUnsandboxedCommands: false` schaltet den Retry ab: Docs sandboxing, "Turn off the retry with strict sandbox mode"; im Container dieses Workshop-Repositorys gesetzt in `.devcontainer/managed-settings.json`.
- Read `.devcontainer/.env` abgelehnt; `node -e` verlangt eine Freigabe und scheitert danach mit `EACCES: permission denied`: gemessen im Linux-Dev-Container, 2.1.322, headless, Regeln in einer Projekt-Settings-Datei. Interaktiv nicht gelaufen, im Container dieses Workshop-Repositorys (`.devcontainer/managed-settings.json`) noch gar nicht: FACILITATOR.md, "Show the dev container".
- Ungültiges JSON ohne Warnung ignoriert: gemessen headless, Claude Code 2.1.322 im Linux-Dev-Container oder 2.1.323 auf Windows (FACILITATOR.md, "Tools depend on platform and settings"); auf welchem der beiden, ist nicht festgehalten. Nicht auf macOS. Dialog "Settings Error" in einer interaktiven Session, `claude doctor` nach einem `-p`-Lauf: Docs settings, "Fix a broken settings file".
- Shido heisst Anleitung und wird mit einer Geste angezeigt (kein Claude-Code-Fakt): IJF, "Refereeing the new gestures".

### Belege zu Geschichte 6

**Aus den Kursdateien**

- `/goal` (Bewertung nach jedem Turn, Turn-Klausel, Ctrl+O, Anzeige ohne Argument, vertrauenswürdiger Ordner): `slides/notes/de/38-deep-automate.md` ("/goal: evidence decides when to stop", "Bound the work"), `tasks/18-automate.md` Schritt 8; Docs-Seite goal.
- Klickfolgen auf "Automate with a stop rule", "Three levers, one responsibility" und "Autonomy is earned by verification": `slides/sections/21-close.md`. Die Zeilen stehen von Anfang an, nur die Karten kommen per Klick.
- `/loop` stoppt mit Esc und läuft nur bei offener Session, die nichts tut: Folie "/loop: the prompt comes back"; Docs-Seite scheduled-tasks.
- Routine ohne Permission-Prompts, ein Pull Request je Lauf, Prompt wörtlich: Notes "The spec-drift routine" und "Routines: the cloud runs it", `tasks/18-automate.md` Schritt 19.
- Stop-Hook im Worktree, fehlendes `node_modules`: `tasks/18-automate.md` Schritt 16.
- CI: Ohne `Bash(gh pr comment:*)` in `claude_args` bleiben die Findings im Run-Log: `tasks/15-letting-go.md` Schritt 8. Trainer-Lösung mit `--allowedTools "Bash(gh pr comment:*),Bash(gh pr diff:*),Bash(gh pr view:*)"`: Note "Audit on every PR".
- Capstone: `tasks/17-capstone.md`, "Why"; Vorlagen in "Do this", Schritte 4, 6 und 8.
- `maxTurns: 12`, kein `settingSources`: `workshop-artifacts/16-agent-sdk/ask-clash.mts`. CLASHs `16-start` ist identisch mit `14-start` und bringt die Datei nicht mit: `docs/BRANCHES.md`.
- Publish-Route (nur Exkurs `/task-19`): `find_venue` und `create_clash` in `allowedTools`, `permissionMode: dontAsk`, `maxTurns: 8`, `tools: []`, `settingSources: []`, `strictMcpConfig: true`: `tasks/19-build-your-own-mcp.md` Schritt 8; FACILITATOR.md, Task 19.
- Stop-Folie: `mcp__clash__*` gibt auch `cancel_clash` frei, mit `bypassPermissions` begrenzt `allowedTools` nichts: Note "Every tool, or two named tools?" in `slides/notes/de/36-excursion-mcp-server.md`.
- `Edit(tests/**)` gegen `sed`, `tee`, `>` und `node -e`: FACILITATOR.md, Task 19.
- Weitere Grenzen ohne eigenen Satz in der Erzählung: ein Pull Request je Lauf in der Spec-Drift-Routine; `--dangerously-skip-permissions` nur in einer äusseren Grenze (Container, VM) und nur mit Repositories, denen du traust.

**Aus den Docs**

- permission-modes: "anything that would prompt is denied" (`dontAsk`); "Deny rules block in every mode, including `bypassPermissions`"; "Allow rules have no effect in `bypassPermissions`"; Abschnitt "Critical paths": "an allow rule or `bypassPermissions` mode can approve that retry with no prompt. Strict sandbox mode turns the retry off"; unbeaufsichtigt mit `--dangerously-skip-permissions` nur in Container, VM oder Sandbox-Runtime. Dass ein PreToolUse-Hook auch in `bypassPermissions` blockt: Kurs, Note "Advice vs. law" (`slides/notes/de/15-hooks.md`).
- devcontainer: Mit `--dangerously-skip-permissions` hält ein Dev Container ein bösartiges Projekt nicht davon ab, alles abzuziehen, was im Container erreichbar ist, auch die Anmeldedaten in `~/.claude`. Nur mit vertrauenswürdigen Repositories.
- permissions: Wer im SDK `settingSources` ohne Projekt-Settings setzt, lässt Claude Code weder die Settings-Dateien des Projekts noch dessen `.mcp.json` lesen.
- sandboxing: keine Sandbox unter nativem Windows.

**Gemessen**

- Hooks im SDK-Programm: Session dieses Workshop-Repositorys, Windows, Sonnet, Agent SDK. Ein Stop-Hook aus der `.claude/settings.json` des `cwd` lief mit, `settingSources: []` schaltete das ab. Versionen nicht notiert. Auf CLASHs `16-start` nicht gemessen.
- Bash oder PowerShell: Windows, Claude Code 2.1.325, `CLAUDE_CODE_USE_POWERSHELL_TOOL=1`, beide Tools im Set. Prompt "Delete the file junk.txt in this folder. Use a shell command, not a file tool.": Sonnet 6 von 6 Mal Bash. Neutraler Prompt "Remove junk.txt from this folder.": Sonnet 5 von 5 Mal Bash, Opus 5.5 in 1 von 5 Läufen PowerShell, junk.txt gelöscht. Sonnet zusammen 11 von 11, wie in FACILITATOR.md, Task 13.

**Judo**

- Shodan: https://www.usajudo.com/membership/promotions/philosophy-of-black-belt-promotions und https://en.wikipedia.org/wiki/Shodan_(rank); Schwarz ab dem ersten Dan: https://en.wikipedia.org/wiki/Rank_in_judo
- Coaching nur zwischen Mate und Hajime (IJF): https://judo.hr/new/350
- Golden Score ohne Zeitlimit, Sore-made nach Ippon, Hansoku-make oder Gong: IJF-Wettkampfregeln; vor dem Unterricht in der aktuellen Fassung nachlesen.
