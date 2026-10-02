const CACHE = 'psc-energy-catalogo-v6';
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/page-01.png',
  './assets/page-02.png',
  './assets/page-03.png',
  './assets/page-04.png',
  './assets/page-05.png',
  './assets/page-06.png',
  './assets/page-07.png',
  './assets/page-08.png',
  './assets/page-09.png',
  './assets/page-10.png',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // For page navigations, always fall back to the cached app shell offline.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html', {ignoreSearch: true}))
    );
    return;
  }

  // Static files: cache first. ignoreSearch lets ?v=5 use the precached image.
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
