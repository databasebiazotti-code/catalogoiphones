const CACHE_NAME = 'catalogo-iphones-flat-v1';
const CORE = [
  './', './index.html', './manifest.json',
  './pack-artes-canva.png', './pack-videos-virais.png',
  './lista-fornecedores.png', './planilha-precificacao.png',
  './contrato-garantia.png', './pack-documentos-assistencia.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
  )));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request)));
});
