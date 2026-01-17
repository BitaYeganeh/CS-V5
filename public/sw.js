// Service Worker for Cyber Security Finland website
const CACHE_NAME = 'cybersec-v1.10';
const urlsToCache = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/resources',
    // Note: styles are bundled by the build step; avoid caching non-existent paths
    '/Cyber Security Finland.jpg'
];

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve cached resources when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }
        
        // Otherwise, fetch from network
        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Listen for message events from the main thread
self.addEventListener('message', (event) => {
  // Handle messages sent from the main thread
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    console.log('Received performance metrics:', event.data.metrics);
    // Could send to analytics endpoint
  }
});