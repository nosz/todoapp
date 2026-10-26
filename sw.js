// Service Worker der To-do-App.
// WICHTIG: VERSION bei jeder Änderung der App hochzählen (identisch zu meta app-version in index.html).
// Ändert sich diese Datei, erkennt der Browser eine neue Version und die App zeigt „Neue Version verfügbar“.
const VERSION = "1.3.1";
const CACHE = "nobbis-todo-" + VERSION;
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  // Kein automatisches skipWaiting: Die neue Version wartet, bis der Nutzer „Jetzt aktualisieren“ wählt.
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("nobbis-todo-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
  if (event.data === "GET_VERSION" && event.source) event.source.postMessage({ type: "VERSION", version: VERSION });
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Seitenaufrufe: Netz zuerst (immer die aktuelle Version), offline aus dem Cache
  if (url.origin === self.location.origin && req.mode === "navigate") {
    event.respondWith(
      fetch(req, { cache: "no-cache" }).catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  // Übrige eigene Dateien: Cache zuerst (schnell und offline)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(hit => hit || fetch(req).catch(() => req.mode === "navigate" ? caches.match("./index.html") : Response.error()))
    );
    return;
  }

  // Externe Dateien (Bootstrap, Schrift): zuerst Cache, im Hintergrund aktualisieren
  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req).then(hit => {
        const fresh = fetch(req).then(res => { if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; }).catch(() => hit);
        return hit || fresh;
      })
    )
  );
});
