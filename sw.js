/* ═══════════════════════════════════════════════════════════════
   TENET NETWORKS - SERVICE WORKER
   Provides offline capability and asset caching
   ✨ IMAGE PRELOADING FROM TEAM & ARTICLES
   🔒 SECURITY: Message origin validation
   ═══════════════════════════════════════════════════════════════ */

const IS_DEV =
  self.location.hostname === 'localhost' ||
  self.location.hostname === '127.0.0.1';

const log = (...args) => {
  if (IS_DEV) console.log('[SW]', ...args);
};

const warn = (...args) => {
  if (IS_DEV) console.warn('[SW]', ...args);
};

/* Bump this on every deploy */
const BUILD_TIMESTAMP = '20260827PHASE2CWAN4';
const DEPLOY_VERSION = BUILD_TIMESTAMP;

const CACHE_VERSION =
  `tenet-v20260812BN.0.2-${BUILD_TIMESTAMP}`;

const IMAGE_CACHE_VERSION =
  `tenet-images-v1.0.2-${BUILD_TIMESTAMP}`;

const CONTENT_CACHE_VERSION =
  `tenet-content-v1.0.2-${BUILD_TIMESTAMP}`;

/*
 * IMPORTANT:
 * Do NOT include /index.html here.
 *
 * The hosting environment redirects /index.html -> /.
 * Caching that redirected response causes Chrome navigation
 * failures when the Service Worker serves it for /home.
 */
const CACHE_ASSETS = [
  '/',
  '/css/style.css',
  `/js/content.js?v=${DEPLOY_VERSION}`,
  `/js/app.js?v=${DEPLOY_VERSION}`,
  `/js/inline-scripts.js?v=${DEPLOY_VERSION}`,
  '/images/icons/favicon-32x32.png'
];

/*
 * Fetch the application shell from / and create a fresh Response.
 *
 * This deliberately removes the redirected state from the Response.
 * Even if the hosting platform redirects / to another URL, the
 * Response returned by this function is a new, non-redirected Response.
 */
async function fetchCleanAppShell() {
  const response = await fetch(
    new Request('/', {
      method: 'GET',
      headers: {
        'Accept': 'text/html'
      },
      redirect: 'follow'
    })
  );

  if (!response || !response.ok) {
    throw new Error(
      `App shell fetch failed: ${response?.status || 'no response'}`
    );
  }

  const body = await response.arrayBuffer();

  const headers = new Headers(response.headers);

  /*
   * Constructing a new Response from the response body removes
   * the redirected state associated with the original Response.
   */
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

/*
 * Return the cached app shell, or fetch and cache a clean one.
 */
async function getAppShell() {
  const cache = await caches.open(CACHE_VERSION);

  const cachedIndex = await cache.match('/index.html');

  if (cachedIndex) {
    return cachedIndex;
  }

  try {
    const cleanShell = await fetchCleanAppShell();

    /*
     * Store the same clean Response under both keys.
     */
    await cache.put('/index.html', cleanShell.clone());
    await cache.put('/', cleanShell.clone());

    return cleanShell;
  } catch (err) {
    warn('Failed to obtain app shell:', err);

    /*
     * Last-resort network fallback.
     */
    const response = await fetch(
      new Request('/', {
        method: 'GET',
        headers: {
          'Accept': 'text/html'
        },
        redirect: 'follow'
      })
    );

    if (!response.ok) {
      throw new Error(
        `Fallback app shell fetch failed: ${response.status}`
      );
    }

    const body = await response.arrayBuffer();

    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers: new Headers(response.headers)
    });
  }
}


/* ═══════════════════════════════════════════════════════════════
   INSTALL
   ═══════════════════════════════════════════════════════════════ */

self.addEventListener('install', event => {
  log('Installing Service Worker v' + CACHE_VERSION);

  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_VERSION);

        log('Caching app shell');

        /*
         * Fetch / and create a clean Response for the application
         * shell instead of using cache.addAll('/index.html').
         */
        const cleanShell = await fetchCleanAppShell();

        await cache.put('/index.html', cleanShell.clone());
        await cache.put('/', cleanShell.clone());

        /*
         * Cache the remaining static assets individually.
         */
        const remainingAssets = CACHE_ASSETS.filter(
          url => url !== '/'
        );

        await Promise.all(
          remainingAssets.map(async url => {
            const response = await fetch(
              new Request(url, {
                method: 'GET',
                redirect: 'follow'
              })
            );

            if (!response.ok) {
              throw new Error(
                `Failed to cache ${url}: ${response.status}`
              );
            }

            await cache.put(url, response);
          })
        );

        log('Install complete');

        /*
         * Activate immediately.
         */
        await self.skipWaiting();

      } catch (err) {
        warn('Cache failed:', err);

        /*
         * Still allow the Service Worker to install so it can
         * recover through the normal network path.
         */
        await self.skipWaiting();
      }
    })()
  );
});


/* ═══════════════════════════════════════════════════════════════
   ACTIVATE
   ═══════════════════════════════════════════════════════════════ */

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

        /*
         * Take control of existing pages immediately.
         */
        return self.clients.claim();
      })
  );
});


/* ═══════════════════════════════════════════════════════════════
   FETCH
   ═══════════════════════════════════════════════════════════════ */

self.addEventListener('fetch', event => {
  const { request } = event;

  /* Skip non-GET requests */
  if (request.method !== 'GET') {
    return;
  }

  /* Skip Chrome extensions */
  if (request.url.startsWith('chrome-extension://')) {
    return;
  }

  /* Skip external requests */
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }

  /*
   * SPA navigation.
   *
   * /home, /products/..., /services/..., etc. are client-side
   * routes. Never fetch the physical /home URL.
   *
   * Always serve the clean application shell instead.
   */
  const acceptsHtml =
    (request.headers.get('accept') || '').includes('text/html');

  const routePath =
    new URL(request.url).pathname.replace(/\/+$/, '') || '/';

  const isKnownSpaRoute =
    routePath === '/home' ||
    routePath === '/contact' ||
    routePath === '/partner-enquiry' ||
    routePath === '/products' ||
    routePath.startsWith('/products/') ||
    routePath === '/services' ||
    routePath.startsWith('/services/') ||
    routePath === '/company' ||
    routePath.startsWith('/company/') ||
    routePath === '/partners' ||
    routePath.startsWith('/partners/');

  const isDocumentRequest =
    request.mode === 'navigate' ||
    request.destination === 'document' ||
    acceptsHtml ||
    isKnownSpaRoute;

  if (isDocumentRequest) {
    event.respondWith(
      getAppShell().catch(async err => {
        warn('App shell failed:', err);

        /*
         * Final network fallback.
         */
        return fetch(
          new Request('/', {
            method: 'GET',
            headers: {
              'Accept': 'text/html'
            },
            redirect: 'follow'
          })
        );
      })
    );

    return;
  }


  /* ═══════════════════════════════════════════════════════════
     NORMAL ASSET REQUESTS
     ═══════════════════════════════════════════════════════════ */

  const isImage =
    /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(request.url);

  const isArticleContent =
    request.url.includes('raw.githubusercontent.com') &&
    (
      request.url.includes('/articles/') ||
      request.url.includes('/team/')
    );

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
          log('Serving from cache:', request.url);
          return cachedResponse;
        }

        log('Fetching from network:', request.url);

        return fetch(request)
          .then(networkResponse => {

            if (
              networkResponse &&
              networkResponse.status === 200
            ) {
              const responseToCache =
                networkResponse.clone();

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
                      log(
                        '📸 Cached image:',
                        request.url
                      );
                    } else if (isArticleContent) {
                      log(
                        '📄 Cached content:',
                        request.url
                      );
                    }
                  });
              }
            }

            return networkResponse;
          })
          .catch(err => {

            warn(
              'Fetch failed:',
              request.url,
              err
            );

            /*
             * Offline HTML fallback.
             */
            if (
              request.headers.get('accept') &&
              request.headers.get('accept').includes('text/html')
            ) {
              return getAppShell();
            }

            throw err;
          });
      })
  );
});


/* ═══════════════════════════════════════════════════════════════
   SECURITY
   ═══════════════════════════════════════════════════════════════ */

function isValidMessageSource(event) {

  if (!event.source) {
    warn('[Security] Message rejected: no source');
    return false;
  }

  if (
    event.origin &&
    event.origin !== self.location.origin
  ) {
    warn(
      '[Security] Message rejected: invalid origin',
      event.origin
    );

    return false;
  }

  return true;
}


/* ═══════════════════════════════════════════════════════════════
   MESSAGE HANDLER
   ═══════════════════════════════════════════════════════════════ */

self.addEventListener('message', event => {

  /* Security validation */
  if (!isValidMessageSource(event)) {
    return;
  }


  /* ═══════════════════════════════════════════════════════════
     CLEAR CACHE
     ═══════════════════════════════════════════════════════════ */

  if (
    event.data &&
    event.data.action === 'clearCache'
  ) {

    log('Clearing all caches');

    event.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName =>
              caches.delete(cacheName)
            )
          );
        })
        .then(() => {

          log('All caches cleared');

          self.clients.matchAll()
            .then(clients => {

              clients.forEach(client => {
                client.postMessage({
                  action: 'cacheCleared'
                });
              });

            });
        })
    );
  }


  /* ═══════════════════════════════════════════════════════════
     SKIP WAITING
     ═══════════════════════════════════════════════════════════ */

  if (
    event.data &&
    event.data.action === 'skipWaiting'
  ) {
    self.skipWaiting();
  }


  /* ═══════════════════════════════════════════════════════════
     CACHE INFORMATION
     ═══════════════════════════════════════════════════════════ */

  if (
    event.data &&
    event.data.action === 'getCacheInfo'
  ) {

    caches.keys().then(async cacheNames => {

      const info = {};

      for (const name of cacheNames) {

        const cache = await caches.open(name);
        const keys = await cache.keys();

        info[name] = keys.map(
          response => response.url
        );
      }

      self.clients.matchAll()
        .then(clients => {

          clients.forEach(client => {

            client.postMessage({
              action: 'cacheInfo',
              data: info
            });

          });

        });
    });
  }


  /* ═══════════════════════════════════════════════════════════
     CONTENT PRELOADING
     ═══════════════════════════════════════════════════════════ */

  if (
    event.data &&
    event.data.action === 'preloadContent'
  ) {

    const imageUrls =
      event.data.images || [];

    const contentUrls =
      event.data.content || [];

    log(
      '📦 Preloading:',
      imageUrls.length,
      'images and',
      contentUrls.length,
      'content files'
    );

    event.waitUntil(

      Promise.all([

        /* ─────────────────────────────────────────────────────
           Images
           ───────────────────────────────────────────────────── */

        caches.open(IMAGE_CACHE_VERSION)
          .then(cache => {

            return Promise.allSettled(

              imageUrls.map(url =>

                fetch(url)
                  .then(response => {

                    if (response.ok) {

                      cache.put(
                        url,
                        response.clone()
                      );

                      log(
                        '✅ Image cached:',
                        url
                      );
                    }

                    return response;
                  })
                  .catch(err => {

                    warn(
                      '❌ Image failed:',
                      url,
                      err
                    );

                  })

              )

            );

          }),


        /* ─────────────────────────────────────────────────────
           Content
           ───────────────────────────────────────────────────── */

        caches.open(CONTENT_CACHE_VERSION)
          .then(cache => {

            return Promise.allSettled(

              contentUrls.map(url =>

                fetch(url)
                  .then(response => {

                    if (response.ok) {

                      cache.put(
                        url,
                        response.clone()
                      );

                      log(
                        '✅ Content cached:',
                        url
                      );
                    }

                    return response;
                  })
                  .catch(err => {

                    warn(
                      '❌ Content failed:',
                      url,
                      err
                    );

                  })

              )

            );

          })

      ])

      .then(
        ([
          imageResults,
          contentResults
        ]) => {

          const imagesSuccessful =
            imageResults.filter(
              r => r.status === 'fulfilled'
            ).length;

          const imagesFailed =
            imageResults.filter(
              r => r.status === 'rejected'
            ).length;

          const contentSuccessful =
            contentResults.filter(
              r => r.status === 'fulfilled'
            ).length;

          const contentFailed =
            contentResults.filter(
              r => r.status === 'rejected'
            ).length;

          log(
            `📦 Preload complete: ` +
            `${imagesSuccessful}/${imageUrls.length} images, ` +
            `${contentSuccessful}/${contentUrls.length} content`
          );

          self.clients.matchAll()
            .then(clients => {

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

        }
      )

    );
  }

});


/* ═══════════════════════════════════════════════════════════════
   PUSH NOTIFICATIONS
   ═══════════════════════════════════════════════════════════════ */

self.addEventListener('push', event => {

  log('Push received:', event);

  const options = {

    body:
      event.data
        ? event.data.text()
        : 'New update from Tenet Networks',

    icon:
      '/images/icons/favicon-32x32.png',

    badge:
      '/images/icons/favicon-32x32.png',

    vibrate: [
      200,
      100,
      200
    ]

  };

  event.waitUntil(
    self.registration.showNotification(
      'Tenet Networks',
      options
    )
  );

});


/* ═══════════════════════════════════════════════════════════════
   NOTIFICATION CLICK
   ═══════════════════════════════════════════════════════════════ */

self.addEventListener(
  'notificationclick',
  event => {

    log('Notification clicked');

    event.notification.close();

    event.waitUntil(
      self.clients.openWindow('/')
    );

  }
);


log('Service Worker loaded');
