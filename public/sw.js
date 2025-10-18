// Service Worker for CyberSec website
// Implements caching strategies for faster repeat visits

const CACHE_NAME = 'cybersec-v1.2';
const STATIC_CACHE = 'cybersec-static-v1.2';
const DYNAMIC_CACHE = 'cybersec-dynamic-v1.2';

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/services',
  '/packages',
  '/contact',
  '/about',
  '/Logo Blue_F.svg',
  '/Cyber Security Finland.jpg',
  // Add critical CSS and JS files
];

// Cache strategies for different types of content
const CACHE_STRATEGIES = {
  // Static assets: Cache first, network fallback
  static: [
    /\.(css|js|woff2?|ttf|eot)$/,
    /\/Logo/,
    /\/images\//,
    /\/icons\//
  ],
  
  // API calls: Network first, cache fallback
  api: [
    /\/api\//,
    /\/search/
  ],
  
  // Pages: Stale while revalidate
  pages: [
    /\/services\//,
    /\/packages\//,
    /\/industries\//,
    /\/resources\//,
    /\/about\//
  ],
  
  // External resources: Cache first
  external: [
    /fonts\.googleapis\.com/,
    /fonts\.gstatic\.com/,
    /google-analytics\.com/,
    /googletagmanager\.com/
  ]
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installed successfully');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('Service Worker: Installation failed', err);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension requests
  if (url.protocol === 'chrome-extension:') return;
  
  // Skip Google Analytics requests (let them go through)
  if (url.hostname.includes('google-analytics.com') || 
      url.hostname.includes('googletagmanager.com')) {
    return;
  }
  
  event.respondWith(
    handleRequest(request)
  );
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Static assets: Cache first strategy
    if (isStaticAsset(request)) {
      return await cacheFirst(request, STATIC_CACHE);
    }
    
    // API calls: Network first strategy
    if (isApiRequest(request)) {
      return await networkFirst(request, DYNAMIC_CACHE);
    }
    
    // Pages: Stale while revalidate strategy
    if (isPageRequest(request)) {
      return await staleWhileRevalidate(request, DYNAMIC_CACHE);
    }
    
    // External resources: Cache first with network fallback
    if (isExternalResource(request)) {
      return await cacheFirst(request, STATIC_CACHE);
    }
    
    // Default: Network first
    return await networkFirst(request, DYNAMIC_CACHE);
    
  } catch (error) {
    console.error('Service Worker: Request failed', error);
    
    // Return offline fallback for navigation requests
    if (request.destination === 'document') {
      return await caches.match('/offline.html') || 
             new Response('Service temporarily unavailable', { 
               status: 503,
               headers: { 'Content-Type': 'text/html' }
             });
    }
    
    throw error;
  }
}

// Cache first strategy - good for static assets
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.warn('Service Worker: Network failed, no cache available', error);
    throw error;
  }
}

// Network first strategy - good for API calls
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.warn('Service Worker: Network failed, trying cache', error);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale while revalidate strategy - good for pages
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  const networkResponsePromise = fetch(request)
    .then(response => {
      if (response.ok) {
        const cache = caches.open(cacheName);
        cache.then(c => c.put(request, response.clone()));
      }
      return response;
    })
    .catch(error => {
      console.warn('Service Worker: Background fetch failed', error);
    });
  
  return cachedResponse || networkResponsePromise;
}

// Helper functions to categorize requests
function isStaticAsset(request) {
  return CACHE_STRATEGIES.static.some(pattern => pattern.test(request.url));
}

function isApiRequest(request) {
  return CACHE_STRATEGIES.api.some(pattern => pattern.test(request.url));
}

function isPageRequest(request) {
  return request.destination === 'document' || 
         CACHE_STRATEGIES.pages.some(pattern => pattern.test(request.url));
}

function isExternalResource(request) {
  const url = new URL(request.url);
  return url.origin !== self.location.origin ||
         CACHE_STRATEGIES.external.some(pattern => pattern.test(request.url));
}

// Background sync for analytics and form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-analytics') {
    event.waitUntil(sendQueuedAnalytics());
  }
  
  if (event.tag === 'contact-form') {
    event.waitUntil(sendQueuedContactForms());
  }
});

async function sendQueuedAnalytics() {
  // Implementation for sending queued analytics when back online
  try {
    const requests = await getQueuedRequests('analytics');
    for (const request of requests) {
      await fetch(request.url, request.options);
    }
    await clearQueue('analytics');
  } catch (error) {
    console.error('Service Worker: Failed to send queued analytics', error);
  }
}

async function sendQueuedContactForms() {
  // Implementation for sending queued contact forms when back online
  try {
    const requests = await getQueuedRequests('contact');
    for (const request of requests) {
      await fetch(request.url, request.options);
    }
    await clearQueue('contact');
  } catch (error) {
    console.error('Service Worker: Failed to send queued contact forms', error);
  }
}

// Push notifications for important updates
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body || 'New cybersecurity update available',
    icon: '/Logo Blue_F.svg',
    badge: '/images/icons/badge.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/',
      timestamp: Date.now()
    },
    actions: [
      {
        action: 'view',
        title: 'View Update',
        icon: '/images/icons/view.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/images/icons/dismiss.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'CyberSec Update', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    const url = event.notification.data.url || '/';
    event.waitUntil(
      clients.openWindow(url)
    );
  }
});

// Utility functions for queue management
async function getQueuedRequests(type) {
  const cache = await caches.open(`queue-${type}`);
  const requests = await cache.keys();
  return requests.map(request => ({
    url: request.url,
    options: {
      method: request.method,
      headers: request.headers,
      body: request.body
    }
  }));
}

async function clearQueue(type) {
  const cache = await caches.open(`queue-${type}`);
  const requests = await cache.keys();
  await Promise.all(requests.map(request => cache.delete(request)));
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Log performance metrics for analysis
    console.log('Service Worker: Performance metrics', event.data.metrics);
  }
});

console.log('Service Worker: Script loaded successfully');