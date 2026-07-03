const CACHE_NAME = 'nadeem-qaiser-v1';
const urlsToCache = [
  '/Nadeem-Qaiser-Astrologer/',
  '/Nadeem-Qaiser-Astrologer/index.html',
  '/Nadeem-Qaiser-Astrologer/manifest.json',
  '/Nadeem-Qaiser-Astrologer/icon-192.png',
  '/Nadeem-Qaiser-Astrologer/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
