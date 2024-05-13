const CACHE_NAME = 'shin-kamenwriter-2024-05-31';
const OFFLINE_URL = 'https://www.shin-kamenwriter.com/';
const urlsToCache = ['https://www.shin-kamenwriter.com/'];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		}),
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys.map((key) => {
						if (CACHE_NAME !== key) {
							return caches.delete(key);
						}
					}),
				),
			)
			.then(() => {
				self.clients.claim();
			}),
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches
			.match(e.request)
			.then((response) => {
				return (
					response ||
					fetch(e.request).then((response) => {
						return caches.open(CACHE_NAME).then((cache) => {
							cache.put(e.request, response.clone());
							return response;
						});
					})
				);
			})
			.catch(() => {
				return caches.match(OFFLINE_URL);
			}),
	);
});
