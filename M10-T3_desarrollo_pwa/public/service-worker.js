'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'mangas-v1';

// CODELAB: Add list of files to cache here.

const FILES_TO_CACHE = [
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/index.html',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/offline.html',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/ajax.js',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/assets/js/install.js',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/assets/img/orilla.jpg',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/assets/img/placeholder.png',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/assets/img/overlord.jpg',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/assets/img/slime.jpg',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/assets/img/kuroko.png',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/assets/img/silent.png',
    '/Primeros_pasos/M10-T3_desarrollo_pwa/public/assets/styles/estilos.css',
];



self.addEventListener('install',  (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  // CODELAB: Add fetch event handler here.
  // if (evt.request.mode !== 'navigate') {
  //   // Not a page navigation, bail.
  //   console.log("Fetch no navigate");
  //   return;
  // }
  console.log('[ServiceWorker] Fetch', evt.request.url);
  evt.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
              console.log("RESP", response);
              return response || fetch(evt.request);
            });
      })
  );
});