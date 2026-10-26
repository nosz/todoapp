# Nobbis To-dos

Eine schlanke To-do-App, um schnell zu notieren, was noch erledigt werden muss.

| | |
|---|---|
| **Datei** | `Erstellte_Apps\todo\index.html` |
| **Ersteller** | Nobbi |
| **Design** | Ninox Design System, Bootstrap 5.3.3 |

## Zweck

Aufgaben in Sekunden erfassen: Seite öffnen, tippen, Enter. Das Eingabefeld ist beim Öffnen sofort aktiv.

## Funktionen

| Funktion | Beschreibung |
|---|---|
| Aufgabe hinzufügen | Text eingeben, Enter oder „Hinzufügen" |
| Erledigen | Häkchen setzen; die Aufgabe wandert in „Erledigt" |
| Wichtig markieren | Stern ★; wichtige Aufgaben stehen oben mit orangem Balken |
| Filter | Offen, Erledigt, Alle, mit Zählern |
| Löschen | × pro Aufgabe; „Erledigte löschen" mit Rückfrage |

## Bedienung

1. `index.html` per Doppelklick im Browser öffnen.
2. Aufgabe tippen, Enter drücken.
3. Mit dem Häkchen als erledigt markieren, mit dem Stern als wichtig.

## Datenspeicherung und Grenzen

- Die Aufgaben liegen im `localStorage` des Browsers, in dem die Datei geöffnet wird.
- Sie erscheinen nicht auf anderen Geräten oder in anderen Browsern.
- Löscht du die Browserdaten, sind die Aufgaben weg.
- Erlaubt der Browser kein Speichern, zeigt die App einen Warnhinweis.

## Technik

- Eine einzelne HTML-Datei mit JavaScript, Ninox-Logo eingebettet.
- Lädt Bootstrap und die Schrift Noto Sans über das Internet (CDN).

## Teststatus

- Getestet (Vorschau): Hinzufügen, Abhaken, Stern, Filter, Löschen, keine Konsolenfehler.
- Nicht getestet: dauerhaftes Speichern nach Neuladen (in der Vorschau gesperrt), Handy-Ansicht.

## Änderungsverlauf

| Datum | Änderung |
|---|---|
| 2026-10-26 | Erste Version |
| 2026-10-26 | In eigenen Ordner mit `index.html` verschoben |
