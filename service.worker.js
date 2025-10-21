const CACHE_NAME = 'birdwatch-cache-v1';
const OFFLINE_URLS = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://fonts.googleapis.com/css?family=Roboto+Condensed:300%7CCinzel+Decorative:700',
    'https://faadia.github.io/Birdwatching/images/dove.png',
    'https://faadia.github.io/Birdwatching/images/favorite-1_th.jpg',
    'https://faadia.github.io/Birdwatching/images/favorite-2_th.jpg',
    'https://faadia.github.io/Birdwatching/images/favorite-3_th.jpg',
    'https://faadia.github.io/Birdwatching/images/favorite-4_th.jpg',
    // add other necessary resources here
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(OFFLINE_URLS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
