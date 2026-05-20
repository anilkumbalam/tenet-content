/* ═══════════════════════════════════════════════════════════════
   TENET NETWORKS - SERVICE WORKER
   Provides offline capability and asset caching
   ✨ NOW WITH IMAGE PRELOADING FROM TEAM & ARTICLES
   🔒 SECURITY: Message origin validation added
═══════════════════════════════════════════════════════════════ */

/* Dev-only logging — silent in production */
const IS_DEV = self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1';
const log   = (...args) => { if (IS_DEV) console.log('[SW]', ...args); };
const warn  = (...args) => { if (IS_DEV) console.warn('[SW]', ...args); };

/* Bump this on every deploy (or automate via your build pipeline) */
/* ⚠️  KEEP IN SYNC: When you change BUILD_TIMESTAMP here, also update
        the ?v= query strings in index.html script tags to match.
        e.g. BUILD_TIMESTAMP = '20260419'  →  ?v=20260419
        This ensures the SW re-caches fresh JS files on every deploy. */
const BUILD_TIMESTAMP = '20260520';
const DEPLOY_VERSION  = BUILD_TIMESTAMP; // single source of truth
const CACHE_VERSION = `tenet-v1.0.2-${BUILD_TIMESTAMP}`;
const IMAGE_CACHE_VERSION = `tenet-images-v1.0.2-${BUILD_TIMESTAMP}`;
const CONTENT_CACHE_VERSION = `tenet-content-v1.0.2-${BUILD_TIMESTAMP}`;

const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  `/js/content.js?v=${DEPLOY_VERSION}`,
  `/js/app.js?v=${DEPLOY_VERSION}`,
  `/js/inline-scripts.js?v=${DEPLOY_VERSION}`,
  '/favicon-32x32.png'
  // External CDN assets are NOT cached by SW — browser handles them directly
];

/* Install Event - Cache assets */
self.addEventListener('install', event => {
  log('Installing Service Worker v' + CACHE_VERSION);
  
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => {
        log('Caching app shell');
        return cache.addAll(CACHE_ASSETS);
      })
      .then(() => {
        log('Install complete');
        return self.skipWaiting(); // Activate immediately
      })
      .catch(err => {
        warn('Cache failed:', err);
      })
  );
});

/* Activate Event - Clean up old caches */
self.addEventListener('activate', event => {
  log('Activating Service Worker v' + CACHE_VERSION);
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => 
              cacheName !== CACHE_VERSION && 
              cacheName !== IMAGE_CACHE_VERSION &&
              cacheName !== CONTENT_CACHE_VERSION
            )
            .map(cacheName => {
              log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        log('Activation complete');
        return self.clients.claim(); // Take control immediately
      })
  );
});

/* Fetch Event - Serve from cache, fallback to network */
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip Chrome extensions
  if (request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Skip ALL external requests — let browser handle CDN, fonts, APIs directly
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Determine cache based on content type
  const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(request.url);
  const isArticleContent = request.url.includes('raw.githubusercontent.com') && 
                          (request.url.includes('/articles/') || request.url.includes('/team/'));
  
  let cacheName;
  if (isImage) {
    cacheName = IMAGE_CACHE_VERSION;
  } else if (isArticleContent) {
    cacheName = CONTENT_CACHE_VERSION;
  } else {
    cacheName = CACHE_VERSION;
  }
  
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Return cached version
          log('Serving from cache:', request.url);
          return cachedResponse;
        }
        
        // Not in cache, fetch from network
        log('Fetching from network:', request.url);
        return fetch(request)
          .then(networkResponse => {
            // Cache successful responses for future use
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              
              // Only cache same-origin, CDN assets, or GitHub raw content
              if (
                request.url.startsWith(self.location.origin) ||
                request.url.includes('cdnjs.cloudflare.com') ||
                request.url.includes('cdn.jsdelivr.net') ||
                request.url.includes('raw.githubusercontent.com')
              ) {
                caches.open(cacheName)
                  .then(cache => {
                    cache.put(request, responseToCache);
                    if (isImage) {
                      log('📸 Cached image:', request.url);
                    } else if (isArticleContent) {
                      log('📄 Cached content:', request.url);
                    }
                  });
              }
            }
            
            return networkResponse;
          })
          .catch(err => {
            warn('Fetch failed:', request.url, err);
            
            // If offline and requesting HTML, return cached index
            if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
            
            // Otherwise return error
            throw err;
          });
      })
  );
});

/* 🔒 SECURITY: Validate message origin */
function isValidMessageSource(event) {
  // Messages must come from clients controlled by this service worker
  if (!event.source) {
    warn('[Security] Message rejected: no source');
    return false;
  }
  
  // Check if source is from same origin
  if (event.origin && event.origin !== self.location.origin) {
    warn('[Security] Message rejected: invalid origin', event.origin);
    return false;
  }
  
  return true;
}

/* Message Event - Handle commands from main app */
self.addEventListener('message', event => {
  // 🔒 SECURITY: Validate message source
  if (!isValidMessageSource(event)) {
    return;
  }
  
  if (event.data && event.data.action === 'clearCache') {
    log('Clearing all caches');
    
    event.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
          );
        })
        .then(() => {
          log('All caches cleared');
          // Notify all clients
          self.clients.matchAll().then(clients => {
            clients.forEach(client => {
              client.postMessage({ action: 'cacheCleared' });
            });
          });
        })
    );
  }
  
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }

  if (event.data && event.data.action === 'getCacheInfo') {
    caches.keys().then(async cacheNames => {
      const info = {};
      for (const name of cacheNames) {
        const cache = await caches.open(name);
        const keys = await cache.keys();
        info[name] = keys.map(r => r.url);
      }
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ action: 'cacheInfo', data: info });
        });
      });
    });
  }

  // Handle content preloading request from app (images + articles)
  if (event.data && event.data.action === 'preloadContent') {
    const imageUrls = event.data.images || [];
    const contentUrls = event.data.content || [];
    log('📦 Preloading:', imageUrls.length, 'images and', contentUrls.length, 'content files');
    
    event.waitUntil(
      Promise.all([
        // Cache images
        caches.open(IMAGE_CACHE_VERSION).then(cache => {
          return Promise.allSettled(
            imageUrls.map(url => 
              fetch(url)
                .then(response => {
                  if (response.ok) {
                    cache.put(url, response.clone());
                    log('✅ Image cached:', url);
                  }
                  return response;
                })
                .catch(err => {
                  warn('❌ Image failed:', url, err);
                })
            )
          );
        }),
        // Cache content (articles, JSON files)
        caches.open(CONTENT_CACHE_VERSION).then(cache => {
          return Promise.allSettled(
            contentUrls.map(url => 
              fetch(url)
                .then(response => {
                  if (response.ok) {
                    cache.put(url, response.clone());
                    log('✅ Content cached:', url);
                  }
                  return response;
                })
                .catch(err => {
                  warn('❌ Content failed:', url, err);
                })
            )
          );
        })
      ])
        .then(([imageResults, contentResults]) => {
          const imagesSuccessful = imageResults.filter(r => r.status === 'fulfilled').length;
          const imagesFailed = imageResults.filter(r => r.status === 'rejected').length;
          const contentSuccessful = contentResults.filter(r => r.status === 'fulfilled').length;
          const contentFailed = contentResults.filter(r => r.status === 'rejected').length;
          
          log(`📦 Preload complete: ${imagesSuccessful}/${imageUrls.length} images, ${contentSuccessful}/${contentUrls.length} content`);
          
          // Notify the app
          self.clients.matchAll().then(clients => {
            clients.forEach(client => {
              client.postMessage({ 
                action: 'preloadComplete',
                imagesSuccessful,
                imagesFailed,
                imagesTotal: imageUrls.length,
                contentSuccessful,
                contentFailed,
                contentTotal: contentUrls.length
              });
            });
          });
        })
    );
  }
});

/* Push Notification Event (future feature) */
self.addEventListener('push', event => {
  log('Push received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update from Tenet Networks',
    icon: '/favicon-32x32.png',
    badge: '/favicon-32x32.png',
    vibrate: [200, 100, 200]
  };
  
  event.waitUntil(
    self.registration.showNotification('Tenet Networks', options)
  );
});

/* Notification Click Event */
self.addEventListener('notificationclick', event => {
  log('Notification clicked');
  event.notification.close();
  
  event.waitUntil(
    self.clients.openWindow('/')
  );
});

log('Service Worker loaded');
