const CACHE = 'psc-energy-catalogo-v3';
const ASSETS = ["./", "./index.html", "./manifest.json", "./assets/page-01.png?v=3", "./assets/page-02.png?v=3", "./assets/page-03.png?v=3", "./assets/page-04.png?v=3", "./assets/page-05.png?v=3", "./assets/page-06.png?v=3", "./assets/page-07.png?v=3", "./assets/page-08.png?v=3", "./assets/page-09.png?v=3", "./assets/page-10.png?v=3", "./assets/icon-192.png", "./assets/icon-512.png"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp}).catch(()=>caches.match('./index.html'))))});

// Versión 3: actualización del brochure final - 2026-09-30.
