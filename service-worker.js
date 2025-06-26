const CACHE_NAME = "feedback-cache-v1";
const urlsToCache = [
  "/",                      // For GitHub Pages root
  "index.html",             // Main page
  "styles.css",             // CSS (make sure it’s not style.css instead)
  "script.js",              // Your JS logic
  "html2pdf.bundle.min.js", // PDF generator
  "manifest.json",          // Required for PWA
  "icon.png"                // Your PWA icon
];

// Cache files on install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve cached content when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
