const CACHE_NAME = 'central-lojista-pwa-v2';
const CORE_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  './apple.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png',
  './pack-artes-canva.png',
  './pack-videos-virais.png',
  './lista-fornecedores.png',
  './planilha-precificacao.png',
  './contrato-garantia.png',
  './pack-documentos-assistencia.png',
  './xiaomi.png',
  './realme.png',
  './reels.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;

  const request = event.request;
  const isNavigation = request.mode === 'navigate';

  event.respondWith(
    caches.match(request).then(cached => {
      if(cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        if(response.ok && request.url.startsWith(self.location.origin)){
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => {
        if(isNavigation) return caches.match('./offline.html');
      });
    })
  );
});
