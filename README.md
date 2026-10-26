# Nobbis To-dos

Eine schlanke To-do-App, um schnell zu notieren, was noch erledigt werden muss.

| | |
|---|---|
| **Datei** | `Erstellte_Apps\todo\index.html` |
| **Ersteller** | Nobbi |
| **Design** | Ninox Design System, Bootstrap 5.3.3 |

## Dashboard und Hosting

| | |
|---|---|
| **Auf dem Dashboard anzeigen** | Ja, als Kachel oben im Kopfbereich neben Firmenname und Beschreibung im Mitarbeiter-Organigramm (`mitarbeiter_organigramm.htm`); das Organigramm ist das Dashboard. Die Kachel verlinkt nur auf die gehostete Version. |
| **Gehostet** | https://nosz.github.io/todoapp (GitHub Pages) |
| **Stand Veröffentlichung** | Noch nicht von Nobbi hochgeladen; Veröffentlichen nur nach Freigabe |

## Zweck

Aufgaben in Sekunden erfassen: Seite öffnen, tippen, Enter. Das Eingabefeld ist beim Öffnen sofort aktiv.

## Funktionen

| Funktion | Beschreibung |
|---|---|
| Aufgabe hinzufügen | Text eingeben, Enter oder „Hinzufügen" |
| Vorschläge | Beim Tippen schlägt die App die letzten 30 Einträge vor (ohne Doppelte, neueste zuerst); sie bleiben auch nach dem Löschen einer Aufgabe erhalten |
| Erledigen | Häkchen setzen; die Aufgabe wandert in „Erledigt" |
| Wichtig markieren | Stern ★; wichtige Aufgaben stehen oben mit orangem Balken |
| Filter | Offen, Erledigt, Alle, mit Zählern |
| Löschen | × pro Aufgabe; „Erledigte löschen" mit Rückfrage |

## Bedienung

1. `index.html` per Doppelklick im Browser öffnen.
2. Aufgabe tippen, Enter drücken.
3. Mit dem Häkchen als erledigt markieren, mit dem Stern als wichtig.

## PWA und Updates

- Installierbar (Startbildschirm / „App installieren"), Vollbild ohne Browserleiste, App-Hülle offline verfügbar.
- Dateien: `manifest.webmanifest`, `sw.js`, `icons\` (192, 512, maskable 512, Apple-Touch-Icon).
- Wird eine neue Version hochgeladen, erscheint unten „Neue Version verfügbar" mit „Jetzt aktualisieren". Die Prüfung läuft beim Zurückkehren in die App und stündlich.
- Voraussetzung: https. Beim Öffnen der Datei vom Rechner läuft die App normal, aber ohne PWA-Funktionen.
- Beim Hochladen alle Dateien des Ordners mitnehmen, nicht nur `index.html`.
- Bei jeder Änderung die Version in `sw.js`, `index.html` (meta und sichtbar) und hier hochzählen.

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

## Gemeldete Fehler

| Datum | Meldung | Ergebnis |
|---|---|---|
| 2026-10-26 | „Hinzufügen" schreibt auf nosz.github.io/todoapp nichts in die Liste | Lokal nicht nachstellbar: Klick und Enter funktionieren bei 375 px. Quelltext der gehosteten Version zeigt dieselbe Logik. Gehostete Seite konnte nicht im Browser geöffnet werden (gesperrt). Rückfragen an Norbert offen (Gerät, Browser, Konsolenmeldung). |

## Änderungsverlauf

| Datum | Änderung |
|---|---|
| 2026-10-26 | Erste Version |
| 2026-10-26 | In eigenen Ordner mit `index.html` verschoben |
| 2026-10-26 | **1.2.0**: PWA (Manifest, Service Worker, Icons, installierbar, offline) und Meldung „Neue Version verfügbar" mit „Jetzt aktualisieren" / „Später". Lokal geprüft: Manifest gültig, Icons vorhanden, Skript-Syntax, Banner-Optik. Erst online prüfbar: Installierbarkeit, Service-Worker-Registrierung, Update-Meldung, Offline. Noch nicht hochgeladen |
| 2026-10-26 | **1.1.0**: Automatische Vorschläge aus den letzten Einträgen und Versionsanzeige (lokal; noch nicht auf nosz.github.io hochgeladen). Die zuvor online liegende Version trägt keine Nummer und gilt als 1.0.0 |
