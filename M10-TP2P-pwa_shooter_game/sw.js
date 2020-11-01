'use strict';

const CACHE_NAME = "shoot-v1";

const FILES_TO_CACHE = [
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/index.html",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/offline.html",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Animations.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/main.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Navigation.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/UI.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/install.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/libs/anime.min.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/libs/swiper-bundle.min.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/libs/swiper-bundle.min.js.map",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/libs/interact.min.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/libs/interact.min.js.map",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Game/Character.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Game/Entity.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Game/Game.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Game/Opponent.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Game/Player.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Game/Shot.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/app/Game/utils.js",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/audio/BGM.mp3",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/audio/shoot.mp3",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/css/main.min.css",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/css/main.css.map",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/css/swiper.min.css",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/css/swiper.css.map",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/css/materialdesignicons.min.css",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/css/materialdesignicons.css.map",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/material-icons/materialdesignicons-webfont.ttf",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/material-icons/materialdesignicons-webfont.eot",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/material-icons/materialdesignicons-webfont.woff",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/material-icons/materialdesignicons-webfont.woff2",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Bold.svg",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Regular.svg",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Bold.ttf",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Regular.ttf",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Bold.eot",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Regular.eot",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Bold.woff",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Regular.woff",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Bold.woff2",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/fonts/nunito/Nunito-Regular.woff2",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/bueno_muerto.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/bueno.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/game_over.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/jefe_muerto.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/jefe.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/malo_muerto.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/malo.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/shot1.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/shot2.png",
    "/Primeros_pasos/M10-TP2P-pwa_shooter_game/assets/img/you_win.png"
]


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