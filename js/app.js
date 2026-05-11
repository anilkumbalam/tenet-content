
/* ═══════════════════════════════════════════════════════
   GITHUB CONTENT CONFIG 
   ► Replace the two values below with your own.
   ► Keep everything else as-is.
   ► Use a PUBLIC repo for zero-config, or see README
     for how to use a private repo with a token.
═══════════════════════════════════════════════════════ */
const GITHUB = {
  user:   'anilkumbalam',            // ← your GitHub username
  repo:   'tenet-content',           // ← your repo name
  branch: 'main',
  url(path) {
    return `https://raw.githubusercontent.com/${this.user}/${this.repo}/${this.branch}/${path}`;
  }
};

/* Sanitise a filename/path fragment from external JSON — strip traversal and HTML
function safeName(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/\.\.\//g, '').replace(/[<>"']/g, '').replace(/\/\//g, '/');
} */


// ============================================
// LAZY LOAD KaTeX — only when articles are opened
// ============================================
async function loadKaTeX() {
  if (typeof katex !== 'undefined') return; // already loaded
  await new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/katex.min.css';
    link.integrity = 'sha384-UA8juhPf75SzzAMA/4fo3yOU7sBJ0om7SCD2GHq0fZqZco6tr1UCV7nUbk9J90JM';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/katex.min.js';
    script.integrity = 'sha384-Tt7wBxLKwSzFVRET4O4U9H6v8MNaQ/CjN2FMP4xFm0ErrFu6aNqoonRVW5W40iGI';
    script.crossOrigin = 'anonymous';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// ============================================
// FIX #1: IMPROVED safeName() FUNCTION
// ============================================

function safeName(str) {
  if (typeof str !== 'string') return '';
  
  // Remove all path traversal attempts (multiple passes)
  let clean = str;
  let prev;
  do {
    prev = clean;
    clean = clean.replace(/\.\.[\/\\]/g, '');
  } while (clean !== prev);
  
  // Remove dangerous characters and absolute paths
  clean = clean.replace(/^[\/\\]+/, '')      // Remove leading slashes
              .replace(/[<>"'`]/g, '')        // HTML injection chars
              .replace(/[\/\\]{2,}/g, '/')    // Double slashes
              .replace(/\0/g, '')             // Null bytes
              .replace(/[^\w\s\-._\/]/g, ''); // Only allow safe chars
  
  return clean;
}

// ============================================
// FIX #2: ADD THESE TWO NEW FUNCTIONS
// ============================================
//

/* HTML Escape - Prevent XSS from user-controlled content */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* Escape special regex characters */
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}




/* Fetch a file from the GitHub repo */
async function fetchGH(path) {
  // Check if user is offline
  if (!navigator.onLine) {
    throw new Error('You are offline. Please check your internet connection.');
  }
  
  // Sanitize path — prevent directory traversal attacks from malicious content JSON
 // const safePath = path.replace(/\.\.\//g, '').replace(/\/\//g, '/');
  
const safePath = safeName(path);

  const r = await fetch(GITHUB.url(safePath), {
    cache: 'default'  // Let browser/CDN cache it normally
  });
  
/*
  if (!r.ok) {
    // Provide more helpful error messages
    if (r.status === 404) {
      throw new Error(`Content not found: ${path}`);
    } else if (r.status === 403) {
      throw new Error('GitHub rate limit exceeded. Please try again later.');
    } else if (r.status >= 500) {
      throw new Error('GitHub is temporarily unavailable. Please try again later.');
    } else {
      throw new Error(`GitHub: ${path} returned ${r.status}`);
    }
  }
  
*/
// NEW:
if (!r.ok) {
  // Log detailed errors for developers, show generic message to users
  console.error(`[fetchGH] ${r.status} for ${path}`);
  
  if (r.status === 404) {
    throw new Error('Content not found. Please try again later.');
  } else if (r.status === 403) {
    throw new Error('Service temporarily unavailable. Please try again later.');
  } else if (r.status >= 500) {
    throw new Error('Service temporarily unavailable. Please try again later.');
  } else {
    throw new Error('Unable to load content. Please try again later.');
  }
}

  return r;
}

/* In-memory cache so we don't re-fetch the articles list on every nav */
/* Cache is cleared on page refresh since it's stored in window */
window.APP_CACHE = window.APP_CACHE || { articles: null, categories: null, team: null };

async function getArticles() {
  if (window.APP_CACHE.articles) return window.APP_CACHE.articles;
  window.APP_CACHE.articles = await (await fetchGH('articles/articles.json')).json();
  return window.APP_CACHE.articles;
}

async function getCategories() {
  if (window.APP_CACHE.categories) return window.APP_CACHE.categories;
  window.APP_CACHE.categories = await (await fetchGH('articles/categories.json')).json();
  return window.APP_CACHE.categories;
}


/* Build team cards HTML from member data 
function buildTeamCards(members) {
  return members.map((m, index) => {
    const hasPhoto = m.photo && m.photo.trim();
    const photoEl  = hasPhoto
      ? `<img class="team-photo" src="${GITHUB.url('team/photos/'+safeName(m.photo))}" width="400" height="400" alt="${safeName(m.name)}" data-fallback="true">`
      : '';
    const fallback = `<div class="team-photo-fallback" ${hasPhoto ? 'style="display:none"' : ''}>${m.icon||'👤'}</div>`;
    const linkedinOverlay = m.linkedin ? `
      <div class="linkedin-overlay">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </div>` : '';
    const tagline = m.tagline ? `<p class="team-tagline">${m.tagline}</p>` : '';
    
    return `
      <div class="team-card" data-team-index="${index}">
        <div class="photo-wrapper">
          ${photoEl}${fallback}${linkedinOverlay}
        </div>
        <div class="team-body">
          <h3 class="team-name">${m.name}</h3>
          <div class="team-role">${m.role}</div>
          ${tagline}
        </div>
      </div>`;
  }).join('');
} */

// ============================================
// FIX #3: UPDATE buildTeamCards FUNCTION
// ============================================
//

function buildTeamCards(members) {
  return members.map((m, index) => {
    const hasPhoto = m.photo && m.photo.trim();
    const photoEl  = hasPhoto
      ? `<img class="team-photo" src="${GITHUB.url('team/photos/'+safeName(m.photo))}" width="400" height="400" alt="${escapeHtml(m.name)}" data-fallback="true">`
      : '';
    const fallback = `<div class="team-photo-fallback" ${hasPhoto ? 'style="display:none"' : ''}>${escapeHtml(m.icon||'👤')}</div>`;
    const linkedinOverlay = m.linkedin ? `
      <div class="linkedin-overlay">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </div>` : '';
    const tagline = m.tagline ? `<p class="team-tagline">${escapeHtml(m.tagline)}</p>` : '';
    
    return `
      <div class="team-card" data-team-index="${index}">
        <div class="photo-wrapper">
          ${photoEl}${fallback}${linkedinOverlay}
        </div>
        <div class="team-body">
          <h3 class="team-name">${escapeHtml(m.name)}</h3>
          <div class="team-role">${escapeHtml(m.role)}</div>
          ${tagline}
        </div>
      </div>`;
  }).join('');
}


/* Skeleton HTML helpers */
function skelCards(n, wide=false) {
  return `<div class="${wide ? 'team-grid' : 'articles-grid'}">` +
    Array(n).fill('').map(()=>`
    <div class="skel-card">
      <div class="skel-avatar"></div>
      <div class="skel-body">
        <div class="skel-line w60"></div>
        <div class="skel-line w40"></div>
        <div class="skel-line w100"></div>
        <div class="skel-line w80"></div>
      </div>
    </div>`).join('') + '</div>';
}
function skelArticles(n) {
  return `<div class="articles-grid">` +
    Array(n).fill('').map(()=>`
    <div class="skel-article">
      <div class="skel-line w30" style="width:30%"></div>
      <div class="skel-line w80"></div>
      <div class="skel-line w100"></div>
      <div class="skel-line w60"></div>
    </div>`).join('') + '</div>';
}


/* ═══════════════════════════════════════════════════════════════
   CONTENT OBJECT has been moved to js/content.js
   Load it before app.js in index.html:
   <script src="js/content.js"></script>
   <script src="js/app.js"></script>
═══════════════════════════════════════════════════════════════ */

// CONTENT is now available as window.CONTENT from content.js
const CONTENT = window.CONTENT || {};


/* ── HELPERS ── */
const $ = id => document.getElementById(id);
const app = $('app');

function el(tag, cls, html='') {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

/* ── SEO: DYNAMIC TITLE & META DESCRIPTION ── */
const SEO_META = {
  home:     { title: 'Tenet Networks – Industrial IoT Gateways, SD-WAN & SCADA Connectivity',
              desc:  'Tenet Networks delivers industrial-grade M2M gateways, SD-WAN platforms, and embedded connectivity solutions for IoT, SCADA, and enterprise automation.' },
  products: {
    _default: { title: 'Products – Industrial Connectivity Portfolio | Tenet Networks',
                desc:  "Explore Tenet Networks' full range of M2M gateways, SCADA modems, VPN gateways, CMS platforms, and cWAN SD-WAN solutions." },
    m2m:      { title: 'M2M Gateways – Machine-to-Machine Cellular Connectivity | Tenet Networks',
                desc:  'Rugged, always-on M2M cellular gateways for industrial IoT, remote monitoring, and enterprise automation deployments.' },
    indoor:   { title: 'Indoor LTE Modems & Gateways | Tenet Networks',
                desc:  'High-performance indoor cellular modems engineered for enterprise sites, control rooms, and indoor industrial environments.' },
    outdoor:  { title: 'Outdoor Industrial Modems & Gateways | Tenet Networks',
                desc:  'IP-rated outdoor cellular gateways built for harsh environments — utilities, smart cities, and remote infrastructure.' },
    scada:    { title: 'SCADA Gateways – Industrial Remote Automation | Tenet Networks',
                desc:  'Purpose-built SCADA gateways enabling secure, reliable remote monitoring and control for critical industrial infrastructure.' },
    vpn:      { title: 'VPN Gateways – Secure Industrial Networking | Tenet Networks',
                desc:  'Hardware VPN gateways providing encrypted, zero-trust connectivity for industrial networks and distributed enterprise sites.' },
    cms:      { title: 'Credo CMS – Centralised Device Management | Tenet Networks',
                desc:  'Credo CMS delivers centralised monitoring, configuration, and lifecycle management for your entire Tenet gateway fleet.' },
    ces:      { title: 'Connectivity Evolution Platform (cWAN) – SD-WAN Platform | Tenet Networks',
                desc:  'Modular Connectivity Evolution Platform (cWAN) for legacy-to-digital WAN transformation using split-design SD-WAN architecture.' },
    cwan:     { title: 'cWAN – Enterprise SD-WAN Solution | Tenet Networks',
                desc:  'cWAN brings scalable, software-defined WAN to enterprises and service providers seeking flexible, resilient connectivity.' },
    cwanexpress: { title: 'cWAN Express – Rapid SD-WAN Deployment | Tenet Networks',
                   desc:  'cWAN Express offers fast-deployment SD-WAN for enterprises that need enterprise-grade WAN performance without complexity.' },
  },
  services: {
    _default:   { title: 'Engineering Services – Custom IoT & Network Solutions | Tenet Networks',
                  desc:  'End-to-end engineering services: custom hardware, firmware, embedded software, and network consulting for industrial IoT deployments.' },
    custom:     { title: 'Custom Engineering Services – Hardware & Firmware | Tenet Networks',
                  desc:  'Bespoke hardware design, PCB development, and firmware engineering for industrial IoT and cellular connectivity products.' },
    consulting: { title: 'Network Consulting & Engineering – LTE, 5G & IoT | Tenet Networks',
                  desc:  'Expert consulting in LTE, 5G NR, IoT architecture, and industrial network design to accelerate your digital transformation.' },
    software:   { title: 'Software & Embedded Systems Development | Tenet Networks',
                  desc:  'Embedded Linux, RTOS, and cloud-connected software development for industrial gateways, edge devices, and IoT platforms.' },
  },
  company: {
    _default:   { title: 'About Tenet Networks – Industrial IoT Pioneer | Tenet Networks',
                  desc:  'Learn about Tenet Networks — 150+ years of combined technology leadership building industrial IoT, SD-WAN, and SCADA solutions.' },
    about:      { title: 'About Us – Our Mission & Story | Tenet Networks',
                  desc:  'Tenet Networks is on a mission to unlock value through best-in-class connectivity and automation solutions, built in India for the world.' },
    team:       { title: 'Our Team – Expert Engineers & Leaders | Tenet Networks',
                  desc:  "Meet the embedded systems, network, and software engineers behind Tenet Networks' industrial connectivity products." },
    careers:    { title: 'Careers at Tenet Networks – Join Our Team',
                  desc:  'Build industrial IoT and SD-WAN products that matter. Explore career opportunities at Tenet Networks in Noida, India.' },
    stories:    { title: 'Customer Stories – Real-World IoT Deployments | Tenet Networks',
                  desc:  'See how Tenet Networks powers Jal Jeevan Mission, smart cities, and renewable energy projects across India and beyond.' },
    perspective:{ title: 'Perspective – IoT & Connectivity Insights | Tenet Networks',
                  desc:  'Articles, blogs, and engineering insights from the Tenet Networks team on industrial IoT, 5G, and network automation.' },
  },
  partners: { title: 'Partner Programme – Resellers & Distributors | Tenet Networks',
              desc:  'Join the Tenet Networks partner ecosystem. Competitive margins, technical enablement, and co-marketing support for resellers and VARs.' },
  'partner-enquiry': { title: 'Become a Partner – Partner Enquiry | Tenet Networks',
              desc:  'Submit your partner enquiry to Tenet Networks. Join our reseller, distributor, or system integrator ecosystem for industrial IoT and SD-WAN solutions.' },
  'request-quote': { title: 'Request a Quote – Product Pricing | Tenet Networks',
              desc:  'Get a customized quote for Tenet Networks industrial IoT gateways, SD-WAN solutions, and connectivity products. Fast response within 1-2 business days.' },
  contact:  { title: 'Contact Tenet Networks – Sales, Support & Partnerships',
              desc:  'Get in touch with the Tenet Networks team for product enquiries, technical support, partnership discussions, or career opportunities.' },
  apply:    { title: 'Apply Now – Careers at Tenet Networks',
              desc:  'Submit your application to join Tenet Networks. Upload your resume and tell us about yourself.' },
};

/* Wrap History API — throws SecurityError on file:// protocol */
const IS_LOCAL = window.location.protocol === 'file:';

function toUrl(path) {
  // On local file system, use hash-based URLs; on live site use clean URLs
  if (IS_LOCAL) {
    // Convert /page/tab back to #page/tab for local testing
    if (path.startsWith('/')) {
      return '#' + path.slice(1);
    }
    return path;
  }
  return path;
}

function safeHistoryPush(state, path) {
  try { history.pushState(state, '', toUrl(path)); } catch(e) {}
}
function safeHistoryReplace(state, path) {
  try { history.replaceState(state, '', toUrl(path)); } catch(e) {}
}

function updateMeta(page, tab) {
  const pageMeta = SEO_META[page];
  if (!pageMeta) return;
  const m = (tab && pageMeta[tab]) || pageMeta._default || pageMeta;
  if (!m.title) return;

  const title = m.title;
  const desc  = m.desc || '';
  const url = tab ? `https://www.tenetnetworks.com/${page}/${tab}` : `https://www.tenetnetworks.com/${page}`;

  /* Primary */
  document.title = title;
  const setMeta = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
  setMeta('meta[name="description"]',    'content', desc);

  /* Open Graph */
  setMeta('#og-url',   'content', url);
  setMeta('#og-title', 'content', title);
  setMeta('#og-desc',  'content', desc);

  /* Twitter */
  setMeta('#tw-title', 'content', title);
  setMeta('#tw-desc',  'content', desc);

  /* Canonical */
  const canonical = document.getElementById('canonical-url');
  if (canonical) canonical.setAttribute('href', url);
}

/* ══════════════════════════════════════════════════════
   APP STATE — single source of truth for runtime state
   Always use setState() to mutate; never write directly.
══════════════════════════════════════════════════════ */
const _state = {
  page:        'home',
  tab:         null,
  modal:       null,   // 'team' | 'story' | null
  modalIndex:  null,   // index of open modal item
  drawerOpen:  false,
  online:      navigator.onLine,
};

function setState(patch) {
  Object.assign(_state, patch);
}

function getState() {
  return Object.assign({}, _state); // return a shallow copy — never mutate directly
}

/* ══════════════════════════════════════════════════════
   MARKDOWN RENDER CACHE
   Avoids re-parsing identical content on back/forward nav.
   Key = raw markdown string. Cleared on page refresh.
══════════════════════════════════════════════════════ */
const _mdCache = new Map();

function getCachedMarkdown(key) {
  return _mdCache.get(key) || null;
}

function setCachedMarkdown(key, html) {
  // Cap cache size to avoid unbounded memory growth
  if (_mdCache.size > 50) {
    const firstKey = _mdCache.keys().next().value;
    _mdCache.delete(firstKey);
  }
  _mdCache.set(key, html);
}

/* ══════════════════════════════════════════════════════
   ERROR TRACKING
   Catches unhandled JS errors and promise rejections.
   Drop in your Sentry DSN below when ready — until then
   errors are logged to console with a structured format.
══════════════════════════════════════════════════════ */
const SENTRY_DSN = 'https://168fff6c87e7a71e1769814e50293296@o4511320092508160.ingest.de.sentry.io/4511320131108944';

function trackError(message, source, context = {}) {
  const payload = {
    message,
    source,
    page: _state.page,
    tab:  _state.tab,
    url:  window.location.href,
    ua:   navigator.userAgent,
    ts:   new Date().toISOString(),
    ...context,
  };

  // Log locally always
  console.error('[Tenet Error]', payload);

  // Forward to Sentry if DSN is set
  if (SENTRY_DSN && typeof Sentry !== 'undefined') {
    Sentry.captureException(new Error(message), { extra: payload });
  }
}

// Catch synchronous errors
window.onerror = function(message, source, lineno, colno, error) {
  trackError(message, `${source}:${lineno}:${colno}`, { stack: error?.stack });
  return false; // let browser handle normally
};

// Catch unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  trackError(
    event.reason?.message || String(event.reason),
    'unhandledrejection',
    { stack: event.reason?.stack }
  );
});

/* ── NAVIGATION ── */
let currentPage = '';
let currentTabs  = {};

function nav(page, tab) {
  // Save current scroll position BEFORE changing currentPage
  const prevPage = currentPage;
  const prevTab = history.state?.tab || '';
  const scrollPos = window.scrollY || window.pageYOffset;
  
  if (prevPage) {
    const key = `scroll_${prevPage}_${prevTab}`;
    sessionStorage.setItem(key, scrollPos);
    console.log(`[SCROLL] Saved ${key} = ${scrollPos}`);
  }
  
  currentPage = page;
  setState({ page, tab: tab || null });
  const state = { page, tab: tab || null };
  const url = tab ? `/${page}/${tab}` : `/${page}`;
  safeHistoryPush(state, url);
  render(page, tab);
  updateMeta(page, tab);
  
  /* Scroll behavior:
     - If navigating to a specific tab: scroll to top and let user see the tab content
     - If navigating to certain pages (contact, partner-enquiry, request-quote): always scroll to top
     - If no tab specified and not in alwaysScrollToTop: restore saved scroll position or go to top
  */
  requestAnimationFrame(() => {
    setTimeout(() => {
      // Pages that should always scroll to top (form pages)
      const alwaysScrollToTop = ['contact', 'partner-enquiry', 'request-quote'];
      
      // If navigating to a specific tab OR to a form page, always go to top
      if (tab || alwaysScrollToTop.includes(page)) {
        console.log(`[SCROLL] Navigating to ${page}${tab ? '/'+tab : ''} - scrolling to top`);
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
      
      // Otherwise, restore saved position
      const key = `scroll_${page}_${tab || ''}`;
      const savedScroll = sessionStorage.getItem(key);
      console.log(`[SCROLL] Restoring ${key} = ${savedScroll}`);
      
      if (savedScroll !== null) {
        const targetScroll = parseInt(savedScroll, 10);
        window.scrollTo({ top: targetScroll, behavior: 'instant' });
        
        // Double-check after a bit longer (for async content like team photos)
        setTimeout(() => {
          if (Math.abs(window.scrollY - targetScroll) > 50) {
            console.log(`[SCROLL] Re-adjusting to ${targetScroll}`);
            window.scrollTo({ top: targetScroll, behavior: 'instant' });
          }
        }, 300);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 150);
  });
}

/* Handle browser back/forward */
window.addEventListener('popstate', e => {
  // Try state first, fall back to reading pathname
  let page, tab;
  if (e.state && e.state.page) {
    page = e.state.page;
    tab = e.state.tab || null;
  } else {
    // Read from current URL pathname
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    if (pathname && pathname !== '/') {
      const parts = pathname.slice(1).split('/');
      page = parts[0] || 'home';
      tab = parts[1] || null;
    } else if (hash) {
      const parts = hash.slice(1).split('/');
      page = parts[0] || 'home';
      tab = parts[1] || null;
    } else {
      page = 'home';
      tab = null;
    }
  }
  const state = { page, tab };
  currentPage = page;
  setState({ page, tab: tab || null });
  render(page, tab);
  updateMeta(page, tab);
  
  /* Restore scroll position for back/forward - wait for dynamic content */
  requestAnimationFrame(() => {
    setTimeout(() => {
      const key = `scroll_${state.page}_${state.tab || ''}`;
      const savedScroll = sessionStorage.getItem(key);
      console.log(`[SCROLL] Back/Forward restoring ${key} = ${savedScroll}`);
      
      if (savedScroll !== null) {
        const targetScroll = parseInt(savedScroll, 10);
        window.scrollTo({ top: targetScroll, behavior: 'instant' });
        
        // Double-check after async content loads (team photos, etc.)
        setTimeout(() => {
          if (Math.abs(window.scrollY - targetScroll) > 50) {
            console.log(`[SCROLL] Re-adjusting to ${targetScroll}`);
            window.scrollTo({ top: targetScroll, behavior: 'instant' });
          }
        }, 300);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 150);
  });
});

function navTab(page, tab) {
  if (currentPage === page) {
    switchTab(tab);
  } else {
    nav(page, tab);
  }
}

function navD(page) {
  closeDrawer();
  nav(page);
}
function navDT(page, tab) {
  closeDrawer();
  navTab(page, tab);
}

function toggleDrawer() {
  const isOpen = $('drawer').classList.toggle('open');
  setState({ drawerOpen: isOpen });
}
function closeDrawer() {
  $('drawer').classList.remove('open');
  setState({ drawerOpen: false });
}
function toggleSub(id) {
  $(id).classList.toggle('open');
}

/* ── TAB SYSTEM ── */
function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t.dataset.tab === tabId));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('on', p.dataset.tab === tabId));
  updateMeta(currentPage, tabId);
  const url = `/${currentPage}/${tabId}`;
  safeHistoryReplace({ page: currentPage, tab: tabId }, url);
  requestAnimationFrame(() => window.scrollTo({ top:0, behavior:'instant' }));
}

function tabBar(tabs, defaultTab) {
  return '<div class="tab-bar">' +
    tabs.map(t => `<div class="tab ${t.id===defaultTab?'on':''}" data-tab="${t.id}">${t.label}</div>`).join('') +
  '</div>';
}

function tabPanel(id, html, active=false) {
  return `<div class="tab-panel ${active?'on':''}" data-tab="${id}">${html}</div>`;
}

/* ── SHARED: PRODUCT / SERVICE PANEL ── */
function productPanelHTML(item, ctaHTML) {
  // Check if item uses NEW decision-first structure
  const hasNewStructure = item.hero && item.enables;
  
  if (hasNewStructure) {
    // ===== NEW STRUCTURE RENDERING =====
    
    // Detect if this is a service
    const isService = item.badge && item.badge.includes('Services ·');
    
    // Hero section
    const hero = `
      <div style="margin-bottom:2.5rem">
        <span style="display:inline-block;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);color:var(--secondary);font-family:var(--font-h);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.3rem .8rem;border-radius:100px;margin-bottom:.8rem">${item.badge}</span>
        <h2>${item.label}</h2>
        <p style="color:var(--secondary);font-family:var(--font-h);font-weight:600;font-size:1.1rem;margin:.6rem 0 .8rem">${item.hero.headline}</p>
        <p class="body-l" style="font-weight:500;margin-bottom:.5rem">${item.hero.subhead}</p>
        <p class="body-l">${item.hero.description}</p>
      </div>
      
      <div class="btn-group" style="margin-bottom:3rem">
        ${isService ? `
          <button class="btn btn-primary" data-nav="contact">Get in Touch</button>
        ` : `
          <button class="btn btn-primary" data-nav="contact">Talk to an Engineer</button>
        `}
      </div>
    `;
    
    // Use Cases section
    const useCases = item.useCases ? `
      <div style="margin-bottom:2.5rem;padding:1.5rem;background:var(--bg1);border-radius:8px">
        <h3 style="font-family:var(--font-h);font-size:1.05rem;font-weight:600;margin-bottom:1rem">Perfect For These Applications</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.8rem">
          ${item.useCases.map(uc => `
            <div style="display:flex;align-items:start;gap:.5rem">
              <span style="color:var(--secondary);font-weight:600;flex-shrink:0">✓</span>
              <span style="line-height:1.5">${uc}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';
    
    // What This Enables section (MERGED capabilities + features)
    const enables = `
      <div style="margin-bottom:2.5rem">
        <h3 style="font-family:var(--font-h);font-size:1.1rem;font-weight:600;margin-bottom:1.2rem">What This Enables</h3>
        <div style="display:grid;gap:1.5rem">
          ${item.enables.map(e => `
            <div style="border-left:3px solid var(--secondary);padding-left:1.2rem">
              <h4 style="font-family:var(--font-h);font-weight:600;font-size:1rem;margin-bottom:.5rem">${e.title}</h4>
              <p style="color:var(--muted);line-height:1.7">${e.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    // Differentiator section
    const diff = item.differentiator ? `
      <div style="background:var(--bg1);border-left:4px solid var(--secondary);padding:1.5rem;border-radius:8px;margin-bottom:2.5rem">
        <h3 style="font-family:var(--font-h);font-size:1rem;font-weight:600;margin-bottom:.8rem">${item.differentiator.title}</h3>
        <p style="line-height:1.8">${item.differentiator.content}</p>
      </div>
    ` : '';
    
    // Technical Capabilities (moved down)
    const techCaps = item.techCapabilities ? `
      <div style="margin-bottom:2.5rem">
        <h4 style="font-family:var(--font-h);font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:1rem">Technical Capabilities</h4>
        <ul class="feat-list">
          ${item.techCapabilities.map(tc => `<li>${tc}</li>`).join('')}
        </ul>
      </div>
    ` : '';
    
    // Specs table (only for products, not services)
    const specsTable = !isService && item.specs && item.specs.length > 0 ? `
      <div style="margin-bottom:2.5rem">
        <h4 style="font-family:var(--font-h);font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:1rem">Specifications</h4>
        <div style="display:grid;gap:.5rem">
          ${item.specs.map(s => `
            <div style="display:grid;grid-template-columns:minmax(140px,auto) 1fr;gap:1rem;padding:.6rem 0;border-bottom:1px solid var(--bg1)">
              <span style="font-weight:600;color:var(--muted)">${s.k}:</span>
              <span>${s.v}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';
    
    // CTAs at bottom (different for services vs products)
    const buttons = isService ? `
      <div class="btn-group" style="margin-top:2rem">
        <button class="btn btn-primary" data-nav="contact">Get in Touch</button>
      </div>
    ` : `
      <div class="btn-group" style="margin-top:2rem">
        <button class="btn btn-primary" data-nav="contact">Get in Touch</button>
      </div>
    `;
    
    return hero + useCases + enables + diff + techCaps + specsTable + buttons;
    
  } else {
    // ===== OLD STRUCTURE RENDERING (fallback for other products) =====
    const feats = item.features.map(f => `<li>${f}</li>`).join('');
    
    const capabilities = item.capabilities ? `
      <h4 style="font-family:var(--font-h);font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:2rem 0 1rem">Key Capabilities</h4>
      <div class="capabilities-grid">
        ${item.capabilities.map(cap => `
          <div class="capability-card">
            <div class="capability-icon">${cap.icon}</div>
            <h5 class="capability-title">${cap.title}</h5>
            <p class="capability-desc">${cap.desc}</p>
          </div>
        `).join('')}
      </div>
    ` : '';
    
    const buttons = ctaHTML !== undefined ? ctaHTML : `
      <div class="btn-group" style="margin-top:2rem">
        <button class="btn btn-primary" data-nav="contact">Request Datasheet / Demo</button>
        <button class="btn btn-ghost" data-nav="company" data-tab="stories">View Case Studies</button>
      </div>`;
      
    return `
      <div style="margin-bottom:1.5rem">
        <span style="display:inline-block;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);color:var(--secondary);font-family:var(--font-h);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.3rem .8rem;border-radius:100px;margin-bottom:.8rem">${item.badge}</span>
        <h2>${item.label}</h2>
        <p style="color:var(--secondary);font-family:var(--font-h);font-weight:500;margin:.5rem 0 .8rem">${item.subhead}</p>
        <p class="body-l">${item.body.replace(/\n\n/g,'</p><p class="body-l" style="margin-top:.8rem">')}</p>
      </div>
      ${capabilities}
      <h4 style="font-family:var(--font-h);font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:.6rem 0 1rem">Key Features</h4>
      <ul class="feat-list">${feats}</ul>
      ${buttons}`;
  }
}

/* ── FOOTER ── */
function footerHTML() {
  const c = CONTENT.company;
  return `<footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo" style="cursor:pointer" data-nav="home">
          <img src="data:image/png;base64,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" class="logo-img" alt="Tenet Networks" />
        </div>
        <p>Engineering intelligent connectivity and automation solutions for modern enterprises. Backed by 150+ years of combined technology leadership.</p>
        <div class="socials">
          <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="soc" title="LinkedIn">in</a>
          
          <a href="${c.youtube}" target="_blank" rel="noopener noreferrer" class="soc" title="YouTube">▶</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Products</h5>
        <a data-nav="products" data-tab="indoor">Indoor Modems</a>
        <a data-nav="products" data-tab="outdoor">Outdoor Modems</a>
        <a data-nav="products" data-tab="scada">SCADA Gateways</a>
        <a data-nav="products" data-tab="vpn">VPN Gateways</a>
        <a data-nav="products" data-tab="ces">cWAN / SD-WAN</a>
        <a data-nav="products" data-tab="cms">Credo CMS</a>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <a data-nav="services" data-tab="custom">Custom Engineering</a>
        <a data-nav="services" data-tab="consulting">Consulting & Engineering</a>
        <a data-nav="services" data-tab="software">Software & Embedded</a>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <a data-nav="company" data-tab="about">About Us</a>
        <a data-nav="company" data-tab="team">Our Team</a>
        <a data-nav="company" data-tab="careers">Careers</a>
        <a data-nav="company" data-tab="stories">Customer Stories</a>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <a data-nav="contact">Get in Touch</a>
        <a data-nav="partner-enquiry">Partner With Us</a>
        <a data-nav="request-quote">Request a Quote</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${c.founded}–2026 Tenet Networks Pvt. Ltd. All rights reserved. &nbsp;|&nbsp; ${c.address}</p>
    </div>
  </footer>
  
  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener noreferrer" class="whatsapp-float" title="Chat on WhatsApp" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
      <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.053 1.352 1.35-5.034-0.308-0.517c-1.316-2.203-2.012-4.733-2.012-7.307 0-7.51 6.11-13.62 13.6-13.62s13.6 6.11 13.6 13.62-6.090 13.667-13.6 13.667zM21.137 18.12c-0.323-0.162-1.913-0.944-2.21-1.052s-0.513-0.162-0.728 0.162c-0.216 0.323-0.835 1.052-1.024 1.268s-0.377 0.243-0.7 0.081c-0.324-0.162-1.366-0.503-2.6-1.603-0.962-0.857-1.61-1.916-1.8-2.24s-0.020-0.498 0.142-0.659c0.145-0.145 0.323-0.377 0.485-0.566s0.216-0.323 0.323-0.539c0.108-0.216 0.054-0.404-0.027-0.566s-0.728-1.755-0.997-2.402c-0.262-0.631-0.528-0.546-0.728-0.556-0.188-0.009-0.404-0.011-0.62-0.011s-0.566 0.081-0.862 0.404c-0.297 0.323-1.133 1.107-1.133 2.698s1.16 3.13 1.321 3.346c0.162 0.216 2.282 3.484 5.53 4.888 0.772 0.333 1.375 0.533 1.845 0.681 0.775 0.247 1.481 0.212 2.039 0.128 0.622-0.093 1.913-0.782 2.183-1.537s0.27-1.402 0.189-1.537c-0.080-0.135-0.296-0.216-0.620-0.378z"/>
    </svg>
  </a>`;
}

/* ══════════════════════════════════
   PAGE RENDERERS
══════════════════════════════════ */

/* HOME */
function renderHome() {
  const C = CONTENT;
  
  // ═════════════════════════════════════════════════════
  // 🎯 SMART HERO: Filter active slides + Random start
  // ═════════════════════════════════════════════════════
  function getActiveSlides() {
    const today = new Date();
    return C.hero.filter(s => {
      if (!s.active) return false;
      if (s.validFrom && today < new Date(s.validFrom)) return false;
      if (s.validUntil && today > new Date(s.validUntil)) return false;
      return true;
    });
  }
  
  const activeSlides = getActiveSlides();
  window._activeSlides = activeSlides;
  
  function getRandomStart() {
    const last = localStorage.getItem('tenet_lastSlide');
    const weighted = [];
    activeSlides.forEach((s, i) => {
      const p = s.priority || 1;
      if (s.id !== last) {
        for (let j = 0; j < p * 10; j++) weighted.push(i);
      }
    });
    if (weighted.length === 0) {
      activeSlides.forEach((s, i) => {
        const p = s.priority || 1;
        for (let j = 0; j < p * 10; j++) weighted.push(i);
      });
    }
    const idx = weighted[Math.floor(Math.random() * weighted.length)];
    if (activeSlides[idx]) localStorage.setItem('tenet_lastSlide', activeSlides[idx].id);
    return idx;
  }
  
  const startIdx = getRandomStart();
  
  // ═════════════════════════════════════════════════════
  // 🎨 RENDER: Support new structure (metrics, features)
  // ═════════════════════════════════════════════════════
  const slides = activeSlides.map((s, i) => {
    let extra = '';
    
    // Metrics
    if (s.metrics && s.metrics.length) {
      extra += '<div class="hero-metrics">';
      s.metrics.forEach(m => {
        extra += `<div class="metric">
          <div class="metric-icon">${m.icon}</div>
          <div class="metric-value">${m.prefix||''}${m.number}${m.unit}</div>
          <div class="metric-label">${m.label}</div>
        </div>`;
      });
      extra += '</div>';
    }
    
    // Features/Benefits/etc
    ['features','benefits','useCases','specs','promoDetails','newFeatures','weatherProof'].forEach(type => {
      if (s[type] && s[type].length) {
        extra += '<div class="hero-features">';
        s[type].forEach(f => {
          extra += `<div class="feature-item">
            <span class="feature-icon">${f.icon}</span>
            <span class="feature-label">${f.label}</span>
          </div>`;
        });
        extra += '</div>';
      }
    });
    
    return `
      <div class="hero-slide ${i===startIdx?'on':''}" id="hs${i}">
        <div class="hero-tag">${s.tag}</div>
        <h1>${s.title}</h1>
        <p>${s.subtitle}</p>
        ${extra}
        <div class="btn-group">
          <button class="btn btn-primary" data-nav="${s.cta1.target}" data-tab="${s.cta1.tab||''}">${s.cta1.label}</button>
          <button class="btn btn-ghost"   data-nav="${s.cta2.target}" data-tab="${s.cta2.tab||''}">${s.cta2.label}</button>
        </div>
      </div>`;
  }).join('');

  const dots = activeSlides.map((_,i)=>`<div class="h-dot ${i===startIdx?'on':''}" id="hd${i}" data-action="goSlide" data-slide="${i}"></div>`).join('');

  const stats = C.stats.map(s=>`<div><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></div>`).join('');

  const prodCards = [
    {id:'indoor',    icon:'📡', h:'Indoor Industrial Modems',    p:'High-availability 4G/5G for machines, control rooms and network closets.'},
    {id:'outdoor',   icon:'🏗', h:'Outdoor Industrial Modems',   p:'IP-rated weatherproof modems for remote installations and surveillance poles.'},
    {id:'scada',     icon:'⚙️', h:'SCADA Gateways',              p:'Protocol-aware 4G/5G gateways for secure utility and automation telemetry.'},
    {id:'vpn',       icon:'🔐', h:'Enterprise VPN Gateways',     p:'Site-to-site tunneling, multi-link termination, and centralized management.'},
    {id:'cwan',      icon:'🌐', h:'cWAN (SD-WAN)',                p:'Flagship modular SD-WAN for scalable, intelligent multi-site connectivity.'},
    {id:'cms',       icon:'🖥️', h:'Credo Management System',     p:'Centralized orchestration for thousands of deployed gateways and modems.'},
  ].map(c=>`
    <div class="card" data-nav="products" data-tab="${c.id}">
      <div class="card-icon">${c.icon}</div>
      <h3>${c.h}</h3><p>${c.p}</p>
      <span class="card-link">Learn more</span>
    </div>`).join('');

  const svcCards = ['custom','consulting','software'].map(id=>{
    const s = CONTENT.services[id];
    const icons = {custom:'🛠️',consulting:'🎯',software:'💡'};
    return `<div class="card" data-nav="services" data-tab="${id}">
      <div class="card-icon">${icons[id]}</div>
      <h3>${s.label}</h3><p>${s.hero.subhead}</p>
      <span class="card-link">Learn more</span>
    </div>`;
  }).join('');

  // Build Solutions cards
  const solutionsCards = CONTENT.solutions.map(s => `
    <div class="solution-card">
      <div class="solution-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p class="solution-subtitle">${s.subtitle}</p>
      <p class="solution-desc">${s.description}</p>
      <div class="solution-cases">
        ${s.useCases.map(uc => `
          <div class="use-case-item">
            <span class="use-case-icon">${uc.icon}</span>
            <span class="use-case-label">${uc.label}</span>
          </div>
        `).join('')}
      </div>
      <button class="btn btn-ghost btn-sm" data-nav="${s.cta.target}" data-tab="${s.cta.tab || ''}">${s.cta.label} →</button>
    </div>
  `).join('');

  app.innerHTML = `
  <div class="page active" id="page-home">

    <!-- HERO -->
    <div class="hero">
      <div class="hero-bg"></div><div class="hero-grid"></div>
      <div class="hero-content">
        <div class="hero-slides">${slides}</div>
        <div class="hero-dots">${dots}</div>
      </div>
    </div>

    <!-- FEATURED PRODUCTS -->
    <div class="section">
      <div class="section-inner">
        <div class="section-hd" style="text-align:center;max-width:620px;margin:0 auto 2.5rem">
          <div class="t-overline">Featured Products</div>
          <h2 style="margin:.6rem 0 .8rem">Engineered for <span class="accent">Real-World</span> Demands</h2>
          <p class="body-l">Purpose-built platforms that power critical connectivity across industries and geographies.</p>
        </div>
        <div class="feat-prod-grid">
          <div class="feat-prod-card" data-nav="products" data-tab="m2m">
            <div class="feat-prod-thumb">📡</div>
            <div class="feat-prod-body">
              <div class="t-overline" style="margin-bottom:.5rem">M2M Cellular Gateway</div>
              <h3>Industrial-Grade M2M <span class="accent">Connectivity</span></h3>
              <p>Reliable cellular connectivity for industrial systems, remote sites, and enterprise deployments. Built for mission-critical operations with secure data transport and centralized management.</p>
              <span class="card-link">Explore Products</span>
            </div>
          </div>
          <div class="feat-prod-card" data-nav="products" data-tab="ces">
            <div class="feat-prod-thumb">🌐</div>
            <div class="feat-prod-body">
              <div class="t-overline" style="margin-bottom:.5rem">Connectivity Evolution Platform (cWAN)</div>
              <h3>Modern SD-WAN for <span class="accent">Distributed Networks</span></h3>
              <p>Modular SD-WAN platform for distributed enterprises and industrial networks. Split-design architecture enables flexible deployment, seamless migration, and centralized orchestration.</p>
              <span class="card-link">Explore Platform</span>
            </div>
          </div>
        </div>
        <div style="text-align:center;margin-top:2rem">
          <button class="btn btn-ghost" data-nav="products">View Full Product Portfolio →</button>
        </div>
      </div>
    </div>

    <!-- SOLUTIONS (NEW) -->
    <div class="section" style="background:var(--bg1);padding-top:4rem;padding-bottom:4rem">
      <div class="section-inner">
        <div class="section-hd" style="text-align:center;max-width:720px;margin:0 auto 3rem">
          <div class="t-overline">Solutions</div>
          <h2 style="margin:.6rem 0 .9rem">Proven Solutions for <span class="accent">Every Industry</span></h2>
          <p class="body-l">From smart cities to manufacturing floors, we deliver connectivity solutions tailored to real-world challenges.</p>
        </div>
        <div class="solutions-grid">${solutionsCards}</div>
      </div>
    </div>

    <!-- WHY CHOOSE US -->
    <div class="section">
      <div class="section-inner">
        <div style="text-align:center;max-width:620px;margin:0 auto 0">
          <div class="t-overline">Why Choose Us</div>
          <h2 style="margin:.6rem 0 .9rem">Your Strategic Partner in <span class="accent">Connectivity &amp; Automation</span></h2>
          <p class="body-l">At Tenet Networks, we don't just deliver products — we build lasting partnerships.</p>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-num">01</div>
            <div>
              <h3>Depth &amp; Excellence</h3>
              <p>Our team brings deep domain expertise and a track record of engineering robust, secure, and field-proven systems — trusted in thousands of deployments.</p>
            </div>
          </div>
          <div class="why-card">
            <div class="why-num">02</div>
            <div>
              <h3>Tailored Solutions</h3>
              <p>No two businesses are alike. We design, engineer, and deploy solutions that align with your specific use case and performance objectives.</p>
            </div>
          </div>
          <div class="why-card">
            <div class="why-num">03</div>
            <div>
              <h3>End-to-End Partnership</h3>
              <p>From product development to ongoing support, we're with you every step of the way. Our long-term engagement model ensures continuity and trust.</p>
            </div>
          </div>
          <div class="why-card">
            <div class="why-num">04</div>
            <div>
              <h3>Future-Ready Innovation</h3>
              <p>We harness the latest in LTE, 5G NR, IoT, and edge computing to build solutions that are scalable, secure, and ready for tomorrow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICES -->
    <div class="section" style="background:var(--bg1);padding-top:4rem;padding-bottom:4rem">
      <div class="section-inner">
        <div class="section-hd" style="text-align:center;max-width:620px;margin:0 auto 2.5rem">
          <div class="t-overline">Our Services</div>
          <h2 style="margin:.6rem 0 .8rem">End-to-End <span class="accent">Engineering</span> Partnership</h2>
          <p class="body-l">Deep engineering expertise and custom development to solve your most complex connectivity challenges.</p>
        </div>
        <div class="grid-3">${svcCards}</div>
      </div>
    </div>

    <!-- ABOUT US -->
    <div class="section">
      <div class="section-inner">
        <div class="about-grid">
          <div>
            <div class="t-overline">About Us</div>
            <h2 style=\"margin:.6rem 0 1rem\">Making Technology Work <span class=\"accent\">Seamlessly</span></h2>
<p class=\"body-l\">At Tenet Networks, we design connectivity solutions that thrive in the toughest environments; from factory floors to smart cities. With over 150 years of combined leadership expertise, our team builds products that just work: secure, reliable and scalable.</p>
<ul class=\"about-cap-list\" style=\"margin-top:1.5rem\">
  <li><div class=\"cap-icon\">🏭</div>Industrial-grade devices for harsh environments</li>
  <li><div class=\"cap-icon\">🔄</div>Legacy-to-IoT platform transformation</li>
  <li><div class=\"cap-icon\">⚙️</div>Custom hardware and firmware development</li>
  <li><div class=\"cap-icon\">📡</div>Future-ready LTE, 5G, and edge solutions</li>
</ul>
            <div class="btn-group" style="margin-top:2rem">
              <button class="btn btn-primary" data-nav="company" data-tab="about">Our Story</button>
              <button class="btn btn-ghost"   data-nav="company" data-tab="team">Meet the Team</button>
            </div>
          </div>
          <div class="about-visual">
            <div class="t-overline" style="margin-bottom:1.2rem">By the Numbers</div>
            <div class="about-stat-grid">
              <div class="about-stat-box"><div class="n">150K+</div><div class="l">Devices Deployed</div></div>
              <div class="about-stat-box"><div class="n">200+</div><div class="l">Happy Customers</div></div>
              <div class="about-stat-box"><div class="n">150+</div><div class="l">Years Leadership</div></div>
              <div class="about-stat-box"><div class="n">Global</div><div class="l">Reach from India</div></div>
            </div>
            <div style="margin-top:2rem;padding-top:1.8rem;border-top:1px solid var(--border2)">
              <div class="t-overline" style="margin-bottom:.9rem">Our Mission</div>
              <p class="body-m">"To unlock value for our customers by delivering best-in-class solutions for their connectivity and automation needs — built in India, trusted globally."</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PARTNER CTA -->
    <div class="section" style="background:var(--bg1);padding-top:4rem;padding-bottom:4rem">
      <div class="section-inner">
        <div class="partner-banner">
          <div class="t-overline" style="margin-bottom:.8rem">Partner With Us</div>
          <h2>Collaborate for <span class="accent">Success</span></h2>
          <p>Join our fast-growing ecosystem of partners. Whether you're a distributor, reseller, or a value-added system integrator, Tenet offers you a reliable product line, strong technical support, and a partnership rooted in growth and mutual success.</p>
          <div class="partner-perks">
            <span class="partner-perk">✓ 150K+ Devices Deployed</span>
            <span class="partner-perk">✓ Priority Access &amp; Insights</span>
            <span class="partner-perk">✓ Marketing &amp; Technical Enablement</span>
            <span class="partner-perk">✓ Competitive Margins</span>
            <span class="partner-perk">✓ Post-Sales Service Backing</span>
          </div>
          <div class="btn-group" style="justify-content:center">
            <button class="btn btn-primary" data-nav="partner-enquiry">Become a Partner</button>
            <button class="btn btn-ghost"   data-nav="contact">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>

    ${footerHTML()}
  </div>`;

  /* start slider */
  let si = startIdx;
  let heroPaused = false;

  function restartDotAnim() {
    const activeDot = document.querySelector('.h-dot.on');
    if (!activeDot) return;
    activeDot.classList.remove('on');
    void activeDot.offsetWidth;
    activeDot.classList.add('on');
  }

  function startTimer() {
    clearInterval(window._heroTimer);
    window._heroTimer = setInterval(() => {
      const count = window._activeSlides ? window._activeSlides.length : CONTENT.hero.length;
      if (!heroPaused) goSlide((si + 1) % count);
    }, 5000);
  }
  window.goSlide = n => {
    document.querySelectorAll('.hero-slide').forEach((s,i)=>s.classList.toggle('on',i===n));
    document.querySelectorAll('.h-dot').forEach((d,i)=>d.classList.toggle('on',i===n));
    si = n;
    restartDotAnim();
  };

  startTimer();

  /* Pause on mouse/touch hold, resume on release */
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('mousedown',  () => {
      heroPaused = true;
      document.querySelector('.h-dot.on')?.classList.add('paused');
    });
    heroEl.addEventListener('touchstart', () => {
      heroPaused = true;
      document.querySelector('.h-dot.on')?.classList.add('paused');
    }, { passive: true });
    heroEl.addEventListener('mouseup', () => {
      heroPaused = false;
      document.querySelector('.h-dot.on')?.classList.remove('paused');
      startTimer();
    });
    heroEl.addEventListener('mouseleave', () => {
      heroPaused = false;
      document.querySelector('.h-dot.on')?.classList.remove('paused');
    });
    heroEl.addEventListener('touchend', () => {
      heroPaused = false;
      document.querySelector('.h-dot.on')?.classList.remove('paused');
      startTimer();
    });
  }
}

/* PRODUCTS */
function renderProducts(defaultTab='indoor') {
  const P = CONTENT.products;
  const tabs = [
    {id:'m2m',         label:'M2M Gateways'},
    {id:'indoor',      label:'Indoor Modems'},
    {id:'outdoor',     label:'Outdoor Modems'},
    {id:'scada',       label:'SCADA Gateways'},
    {id:'vpn',         label:'VPN Gateways'},
    {id:'cms',         label:'Credo CMS'},
    {id:'ces',         label:'Connectivity Evolution'},
    {id:'cwan',        label:'cWAN'},
    {id:'cwanexpress', label:'cWAN Express'},
  ];
  if (!tabs.find(t=>t.id===defaultTab)) defaultTab='indoor';

  const m2mIntro = `<div class="section-hd">
    <h2>${P.m2m_intro.heading}</h2>
    <p style="color:var(--secondary);font-family:var(--font-h);font-weight:500;margin:.5rem 0 .7rem">${P.m2m_intro.subhead}</p>
    <p class="body-l">${P.m2m_intro.body}</p>
  </div>
  <div class="grid-auto">
    ${['indoor','outdoor','scada','vpn','cms'].map(id=>{
      const item = P[id];
      // Get first 3 use cases
      const topUseCases = item.useCases ? item.useCases.slice(0, 3) : [];
      // Get differentiator snippet (first sentence)
      const diffSnippet = item.differentiator ? item.differentiator.content.split('.')[0] + '.' : '';
      
      return `<div class="card" data-tab="${id}">
        <span style="display:inline-block;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);color:var(--secondary);font-family:var(--font-h);font-size:.65rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.25rem .6rem;border-radius:100px;margin-bottom:.8rem">${item.badge}</span>
        <h3>${item.label}</h3>
        ${item.hero ? `<p style="color:var(--secondary);font-weight:500;margin-bottom:.8rem">${item.hero.headline}</p>` : ''}
        ${topUseCases.length > 0 ? `
          <div style="margin-bottom:1rem">
            <p style="font-size:.85rem;font-weight:600;margin-bottom:.5rem;color:var(--muted)">Perfect for:</p>
            ${topUseCases.map(uc => `<div style="display:flex;gap:.4rem;margin-bottom:.3rem;font-size:.9rem"><span style="color:var(--secondary)">✓</span><span>${uc}</span></div>`).join('')}
          </div>
        ` : ''}
        ${diffSnippet ? `<p style="font-size:.9rem;color:var(--muted);margin-bottom:1rem;font-style:italic">⭐ ${diffSnippet}</p>` : ''}
        <span class="card-link">View Details</span>
      </div>`;
    }).join('')}
  </div>`;

  const cesIntro = `<div class="section-hd">
    <h2>${P.ces_intro.heading}</h2>
    <p style="color:var(--secondary);font-family:var(--font-h);font-weight:500;margin:.5rem 0 .7rem">${P.ces_intro.subhead}</p>
    <p class="body-l">${P.ces_intro.body}</p>
  </div>
  <div class="grid-2">
    ${['cwan','cwanexpress'].map(id=>{
      const item = P[id];
      // Get first 3 use cases
      const topUseCases = item.useCases ? item.useCases.slice(0, 3) : [];
      // Get differentiator snippet (first sentence)
      const diffSnippet = item.differentiator ? item.differentiator.content.split('.')[0] + '.' : '';
      
      return `<div class="card" data-tab="${id}">
        <span style="display:inline-block;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);color:var(--secondary);font-family:var(--font-h);font-size:.65rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.25rem .6rem;border-radius:100px;margin-bottom:.8rem">${item.badge}</span>
        <h3>${item.label}</h3>
        ${item.hero ? `<p style="color:var(--secondary);font-weight:500;margin-bottom:.8rem">${item.hero.headline}</p>` : ''}
        ${topUseCases.length > 0 ? `
          <div style="margin-bottom:1rem">
            <p style="font-size:.85rem;font-weight:600;margin-bottom:.5rem;color:var(--muted)">Perfect for:</p>
            ${topUseCases.map(uc => `<div style="display:flex;gap:.4rem;margin-bottom:.3rem;font-size:.9rem"><span style="color:var(--secondary)">✓</span><span>${uc}</span></div>`).join('')}
          </div>
        ` : ''}
        ${diffSnippet ? `<p style="font-size:.9rem;color:var(--muted);margin-bottom:1rem;font-style:italic">⭐ ${diffSnippet}</p>` : ''}
        <span class="card-link">View Details</span>
      </div>`;
    }).join('')}
  </div>`;

  const panels = [
    tabPanel('m2m',         m2mIntro,                   defaultTab==='m2m'),
    tabPanel('indoor',      productPanelHTML(P.indoor),  defaultTab==='indoor'),
    tabPanel('outdoor',     productPanelHTML(P.outdoor), defaultTab==='outdoor'),
    tabPanel('scada',       productPanelHTML(P.scada),   defaultTab==='scada'),
    tabPanel('vpn',         productPanelHTML(P.vpn),     defaultTab==='vpn'),
    tabPanel('cms',         productPanelHTML(P.cms),     defaultTab==='cms'),
    tabPanel('ces',         cesIntro,                    defaultTab==='ces'),
    tabPanel('cwan',        productPanelHTML(P.cwan),    defaultTab==='cwan'),
    tabPanel('cwanexpress', productPanelHTML(P.cwanexpress), defaultTab==='cwanexpress'),
  ].join('');

  app.innerHTML = `
  <div class="page active">
    <div class="page-hero">
      <div class="page-hero-inner">
        <div class="t-overline">Products</div>
        <h1>Industrial-Grade <span class="accent">Connectivity</span> Portfolio</h1>
        <p class="body-l">From rugged field gateways to enterprise WAN platforms — purpose-built for mission-critical deployments.</p>
      </div>
    </div>
    ${tabBar(tabs, defaultTab)}
    ${panels}
    ${footerHTML()}
  </div>`;
}

/* SERVICES */
function renderServices(defaultTab='custom') {
  const S = CONTENT.services;
  const tabs = [
    {id:'custom',     label:'Custom Engineering'},
    {id:'consulting', label:'Consulting & Engineering'},
    {id:'software',   label:'Software & Embedded Systems'},
  ];
  
  // Services now use the same structure as products (hero, enables, etc.)
  // So we can use productPanelHTML directly
  const panels = Object.keys(S).map(id =>
    tabPanel(id, productPanelHTML(S[id]), defaultTab===id)
  ).join('');

  app.innerHTML = `
  <div class="page active">
    <div class="page-hero">
      <div class="page-hero-inner">
        <div class="t-overline">Services</div>
        <h1>End-to-End <span class="accent">Engineering</span> Services</h1>
        <p class="body-l">From concept to deployment — deep technical expertise to solve your most complex connectivity challenges.</p>
      </div>
    </div>
    ${tabBar(tabs, defaultTab)}
    ${panels}
    ${footerHTML()}
  </div>`;
}

/* COMPANY */
function renderCompany(defaultTab='about') {
  const A = CONTENT.about;
  const Ca = CONTENT.careers;

  /* About */
  const offerings = A.offerings.map(o=>`<div class="card"><div class="card-icon">${o.icon}</div><h3>${o.h}</h3><p>${o.p}</p></div>`).join('');
  const whyCards  = A.why_cards.map(w=>`<div class="card"><div class="card-icon">${w.icon}</div><h3>${w.h}</h3><p>${w.p}</p></div>`).join('');
  const aboutHTML = `
    <div class="section-hd">
      <div class="t-overline">Who We Are</div>
      <h2 style="margin:.6rem 0 .8rem">At Tenet Networks, we design <span class="accent">intelligent connectivity</span> and automation solutions</h2>
      <p class="body-l">${A.who_body.replace(/\n\n/g,'</p><p class="body-l" style="margin-top:.6rem">')}</p>
    </div>
    <h3 style="margin-bottom:1.2rem">What We Offer</h3>
    <div class="grid-auto" style="margin-bottom:3rem">${offerings}</div>
    <div class="t-overline">Why Choose Us</div>
    <h2 style="margin:.6rem 0 .7rem">${A.why_title}</h2>
    <p class="body-l" style="margin-bottom:2rem">${A.why_body}</p>
    <div class="grid-auto">${whyCards}</div>`;

  /* Team — rendered from GitHub; fallback to hardcoded below */
  const TEAM_FALLBACK = [
    { 
      name:'Anil Joseph',    
      role:'Managing Director',          
      bio:'Over two decades of experience in designing and engineering critical solutions for India and Asia-Pacific. Former Solution Architect at Lucent Technologies and researcher at premier organisations like DRDO and C-DOT.', 
      photo:'anil-joseph.jpg',
      icon:'🏛️',
      tagline: 'Engineering that works in reality, not just in theory',
      linkedin: 'https://linkedin.com/in/anilijoseph',
      email: 'anil@tenetnetworks.com',
      quickFacts: ['20+ years in industrial IoT', 'Former Lucent Technologies', 'DRDO researcher', 'Critical systems specialist'],
      expertise: ['Critical infrastructure design', 'IoT architecture & deployment', 'System integration', 'Technology leadership'],
      background: ['Solution Architect at Lucent Technologies', 'Researcher at DRDO (Defence Research and Development Organisation)', 'C-DOT (Centre for Development of Telematics)', 'Led enterprise deployments across India and Asia-Pacific'],
      currently: { reading: '📚 "Scale" by Geoffrey West', podcast: '🎙️ Lex Fridman Podcast' }
    },
    { 
      name:'Zahid Hussain',  
      role:'Director – Technology',      
      bio:'With 30+ years of experience introducing new technologies and managing global support centres, Zahid has led support for multi-billion USD infrastructures. Previously with NOKIA, AT&T, and Alcatel-Lucent.', 
      icon:'⚙️',
      tagline: 'Three decades of turning complexity into reliability',
      linkedin: 'https://linkedin.com/in/zahidhussain',
      email: 'zahid@tenetnetworks.com',
      quickFacts: ['30+ years in technology', 'Former NOKIA & AT&T', 'Global support leader', 'Multi-billion USD projects'],
      expertise: ['Technology deployment & operations', 'Global technical support', 'Large-scale infrastructure management', 'Vendor & partner management'],
      background: ['NOKIA – Technology Integration', 'AT&T – Global Support Operations', 'Alcatel-Lucent – Technical Leadership', 'Multi-billion USD infrastructure support'],
      currently: { reading: '📚 "The Phoenix Project"', podcast: '🎙️ Software Engineering Daily' }
    },
    { 
      name:'Shrikant Gupta', 
      role:'Director – Sales',           
      bio:'Nearly 20 years of sales leadership, driving businesses to achieve multi-million-dollar growth. Formerly Country Manager for Cambium Networks in India and South East Asia.', 
      icon:'📈',
      tagline: 'Building partnerships that scale from millions to billions',
      linkedin: 'https://linkedin.com/in/shrikantgupta',
      email: 'shrikant@tenetnetworks.com',
      quickFacts: ['20 years sales leadership', 'Former Cambium Networks', 'Multi-million USD growth', 'India & SEA markets'],
      expertise: ['Enterprise sales & strategy', 'Channel development', 'Business growth & expansion', 'Market development'],
      background: ['Country Manager at Cambium Networks (India & SE Asia)', 'Led businesses to multi-million dollar growth', 'Built channel networks across emerging markets', 'Strategic partnerships with telcos & enterprises'],
      currently: { reading: '📚 "The Challenger Sale"', podcast: '🎙️ Masters of Scale' }
    },
    { 
      name:'Naresh Chandra', 
      role:'Director – Projects',        
      bio:'A veteran in managing large-scale projects worth $100M+, with leadership roles in Lucent Technologies, Reliance Communications, and Globacom-Nigeria.', 
      icon:'🗂️',
      tagline: 'Delivering billion-dollar projects on time, on budget',
      linkedin: 'https://linkedin.com/in/nareshchandra',
      email: 'naresh@tenetnetworks.com',
      quickFacts: ['$100M+ project experience', 'Former Lucent & Reliance', 'International deployments', 'Complex project delivery'],
      expertise: ['Large-scale project management', 'Cross-functional team leadership', 'Vendor & stakeholder management', 'Risk mitigation & delivery'],
      background: ['Lucent Technologies – Project Leadership', 'Reliance Communications – Major infrastructure deployments', 'Globacom Nigeria – International projects', 'Managed $100M+ projects across continents'],
      currently: { reading: '📚 "The Goal" by Eliyahu Goldratt', podcast: '🎙️ Project Management Podcast' }
    },
    { 
      name:'Rajeev Singh',   
      role:'Director – Operations',      
      bio:'Expert in deploying and operationalising solutions globally, including implementing Number Portability in India and Russia.', 
      icon:'🔧',
      tagline: 'From deployment to uptime: making systems work globally',
      linkedin: 'https://linkedin.com/in/rajeevsingh',
      email: 'rajeev@tenetnetworks.com',
      quickFacts: ['Global operations expert', 'Implemented Number Portability', 'India & Russia deployments', 'Operational excellence'],
      expertise: ['Operations & deployment', 'System implementation', 'Process optimization', 'Global rollout management'],
      background: ['Led Number Portability implementation in India', 'Russia deployment & operations', 'Telecom infrastructure operations', 'Multi-country operational leadership'],
      currently: { reading: '📚 "Lean Thinking"', podcast: '🎙️ The Tim Ferriss Show' }
    },
    { 
      name:'Shalini Lal',    
      role:'Director – HR & Administration', 
      bio:'Specialist in managing data-centric networks with experience at Indian Telephone Industries and Idea Cellular.', 
      icon:'🤝',
      tagline: 'Building the culture that builds the technology',
      linkedin: 'https://linkedin.com/in/shalinilal',
      email: 'shalini@tenetnetworks.com',
      quickFacts: ['HR & operations specialist', 'Former ITI & Idea Cellular', 'Culture & talent development', 'Organizational excellence'],
      expertise: ['Human resources & talent', 'Organizational development', 'Culture building', 'Administrative excellence'],
      background: ['Indian Telephone Industries – HR & Administration', 'Idea Cellular – Talent Management', 'Data-centric network operations', 'Building high-performance teams'],
      currently: { reading: '📚 "Good to Great"', podcast: '🎙️ WorkLife with Adam Grant' }
    },
  ];
  const teamHTML = `
    <div class="section-hd">
      <div class="t-overline">Our People</div>
      <h2 style="margin:.6rem 0 .8rem">Meet the Experts Behind Our <span class="accent">Products and Services</span></h2>
      <p class="body-l">150+ years of combined technology leadership — from NOKIA, Lucent, AT&T and DRDO — united by a passion for building industrial connectivity that works in the real world.</p>
    </div>
    <div class="team-grid" id="gh-team-grid">${buildTeamCards(TEAM_FALLBACK)}</div>`;
  
  /* Store team data globally for modal access */
  window.TEAM_DATA = TEAM_FALLBACK;

  /* Perspective — loaded live from GitHub */
  const perspHTML = `
    <div class="section-hd">
      <div class="t-overline">Perspective</div>
      <h2 style="margin:.6rem 0 .8rem">Articles &amp; <span class="accent">Insights</span></h2>
      <p class="body-l">Technical articles, white papers, and engineering insights from the Tenet Networks team.</p>
    </div>
    <div id="gh-articles-container">${skelArticles(3)}</div>`;

  /* Careers */
  const exciteCards = Ca.excite.map(e=>`
    <div class="exc-card ${e.cls}">
      <div class="exc-icon">${e.icon}</div>
      <h3>${e.letter} — ${e.name}</h3>
      <p>"${e.quote}"</p>
    </div>`).join('');
  const lifeCards = Ca.life_cards.map(l=>`<div class="card"><div class="card-icon">${l.icon}</div><h3>${l.h}</h3><p>${l.p}</p></div>`).join('');
  const programs  = Ca.programs.map(p=>`
    <div class="card">
      <span style="display:inline-block;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.18);color:var(--secondary);font-size:.7rem;font-family:var(--font-h);font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .7rem;border-radius:100px;margin-bottom:.7rem">${p.tag}</span>
      <h3>${p.h}</h3><p>${p.p}</p>
    </div>`).join('');
  const careersHTML = `
    <div class="section-hd">
      <div class="t-overline">Why Work For Us</div>
      <h2 style="margin:.6rem 0 .7rem">A Culture Built on <span class="accent">EXCITE</span></h2>
      <p class="body-l">${Ca.why_body}</p>
    </div>
    <div class="excite-grid" style="margin-bottom:3rem">${exciteCards}</div>
    <h3 style="margin-bottom:1.2rem;color:var(--secondary)">Life at Tenet Networks</h3>
    <div class="grid-3" style="margin-bottom:3rem">${lifeCards}</div>
    <h3 style="margin-bottom:1.2rem;color:var(--secondary)">Career Pathways</h3>
    <div class="grid-auto" style="margin-bottom:2.5rem">${programs}</div>
    ${Ca.what_we_look_for ? `
    <div style="background:var(--bg1);padding:2rem;border-radius:12px;margin-bottom:2.5rem">
      <h3 style="margin-bottom:1rem;color:var(--secondary)">${Ca.what_we_look_for.title}</h3>
      <div style="display:grid;gap:.6rem;margin-bottom:1rem">
        ${Ca.what_we_look_for.items.map(item => `<p class="body-m" style="margin:0">${item}</p>`).join('')}
      </div>
      <p class="body-m" style="margin:0;font-style:italic;color:var(--text2)">${Ca.what_we_look_for.note}</p>
    </div>` : ''}
    <div class="cta-banner">
      <div>
        <h2>Ready to Start Your Journey?</h2>
        <p>Join a team where your ideas matter, your growth is supported, and your work makes a difference.</p>
        <p style="margin-top:.8rem">Send your resume to <a href="mailto:${CONTENT.company.careers}" style="color:var(--secondary)">${CONTENT.company.careers}</a></p>
      </div>
      <button class="btn btn-primary" data-nav="apply">Apply Now →</button>
    </div>`;

  /* Stories */
  const storyCards = CONTENT.stories.map((s,i)=>`
    <div class="story-card" data-action="openStoryModal" data-story="${i}" data-story-index="${i}">
      <div class="story-thumb">${s.icon}</div>
      <div class="story-body">
        <h3>${s.title}</h3>
        <p>${s.summary}</p>
      </div>
      <div class="story-card-footer">
        <span class="story-read-more">Read full story →</span>
      </div>
    </div>`).join('');
  const storiesHTML = `
    <div class="section-hd">
      <div class="t-overline">Customer Stories</div>
      <h2 style="margin:.6rem 0 .8rem">Real-World Impact Across <span class="accent">Industries</span></h2>
      <p class="body-l">From Jal Jeevan Mission to smart cities and renewable energy — see how Tenet solutions are transforming critical infrastructure.</p>
    </div>
    <div class="grid-auto">${storyCards}</div>`;

  const tabs = [
    {id:'about',       label:'About Us'},
    {id:'team',        label:'Team'},
    {id:'careers',     label:'Careers'},
    {id:'stories',     label:'Customer Stories'},
    {id:'perspective', label:'Perspective'},
  ];
  const panels = [
    tabPanel('about',       aboutHTML,   defaultTab==='about'),
    tabPanel('team',        teamHTML,    defaultTab==='team'),
    tabPanel('careers',     careersHTML, defaultTab==='careers'),
    tabPanel('stories',     storiesHTML, defaultTab==='stories'),
    tabPanel('perspective', perspHTML,   defaultTab==='perspective'),
  ].join('');

  app.innerHTML = `
  <div class="page active">
    <div class="page-hero">
      <div class="page-hero-inner">
        <div class="t-overline">Company</div>
        <h1>Making Technology <span class="accent">Work Seamlessly</span></h1>
        <p class="body-l">Backed by 150+ years of combined technology leadership — building products and services that work securely, reliably, and at scale.</p>
      </div>
    </div>
    ${tabBar(tabs, defaultTab)}
    ${panels}
    ${footerHTML()}
  </div>`;

  /* Kick off async GitHub loads after DOM is painted */
  requestAnimationFrame(() => {
    loadTeamFromGitHub();
    loadArticlesFromGitHub();
  });
}

/* ── GITHUB: Load team from GitHub ── */
async function loadTeamFromGitHub() {
  /* Wait a bit for tab panels to be in DOM */
  await new Promise(r => setTimeout(r, 100));
  
  const grid = document.getElementById('gh-team-grid');
  if (!grid) {
    console.warn('Team grid element not found');
    return;
  }
  try {
    console.log('Fetching team from GitHub...');
    const response = await fetchGH('team/team.json');
    const members = await response.json();
    console.log('Team loaded:', members.length, 'members');
    window.TEAM_DATA = members; // Store for modal access
    grid.innerHTML = buildTeamCards(members);
  } catch(e) {
    console.warn('Using fallback team data:', e.message);
    /* Fallback is already rendered and stored in TEAM_DATA, so no action needed */
  }
}

/* ── GITHUB: Load articles list from GitHub ── */
async function loadArticlesFromGitHub() {
  const container = document.getElementById('gh-articles-container');
  if (!container) return;
  
  try {
    // Load both categories and articles from GitHub
    const categories = await getCategories();
    const articles = await getArticles();
    
    // Group articles by category
    const byCategory = {};
    articles.forEach(a => {
      const cat = a.category || 'uncategorized';
      if (!byCategory[cat]) byCategory[cat] = [];
      byCategory[cat].push(a);
    });
    
    let html = '';
    
    // Sort categories by order field
    const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
    
    // Render each category with banner style
    sortedCategories.forEach(catConfig => {
      if (!byCategory[catConfig.key]) return; // Skip if no articles in this category
      
      const arts = byCategory[catConfig.key];
      
      html += `
        <div class="featured-series-banner" style="
          background: linear-gradient(135deg, var(--bg1) 0%, var(--bg2) 100%);
          border: 2px solid var(--border);
          border-radius: var(--radius);
          padding: 2rem;
          margin-bottom: 3rem;
        ">
          <div style="display: flex; align-items: flex-start; gap: 1.5rem;">
            <div style="font-size: 3rem; line-height: 1;">${catConfig.icon}</div>
            <div style="flex: 1;">
              <div class="t-overline" style="margin-bottom: .5rem;">${catConfig.label}</div>
              <h2 style="margin-bottom: .6rem;">${catConfig.title}</h2>
              <p class="body-l" style="margin-bottom: 1rem;">${catConfig.description}</p>
              <p class="body-m" style="opacity: .7;">
                ${arts.length} article${arts.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
        <div class="articles-grid" style="margin-bottom: 4rem;">
          ${arts.sort((a,b)=>(a.series_part||0)-(b.series_part||0)).map(a => articleCard(a)).join('')}
        </div>`;
    });
    
    // Render any uncategorized articles (fallback)
    if (byCategory['uncategorized']) {
      html += `
        <div style="margin-top: 3rem;">
          <h3 style="margin-bottom: 1.5rem;">Additional Articles</h3>
          <div class="articles-grid">
            ${byCategory['uncategorized'].map(a => articleCard(a)).join('')}
          </div>
        </div>`;
    }
    
    // === IMPROVED SMOOTH FADE-IN ===
    // Step 1: Fade out skeleton
    container.style.transition = 'opacity 0.2s ease-out';
    container.style.opacity = '0';
    
    // Step 2: Wait for fade out, then replace content
    await new Promise(resolve => setTimeout(resolve, 200));
    
    container.innerHTML = html || '<p style="color:var(--muted)">No articles published yet.</p>';
    
    // Step 3: Force reflow
    void container.offsetHeight;
    
    // Step 4: Fade in new content
    container.style.transition = 'opacity 0.4s ease-in';
    container.style.opacity = '1';
    
  } catch(e) {
    console.error('Failed to load articles:', e);
    
    // Smooth error display
    container.style.transition = 'opacity 0.2s ease-out';
    container.style.opacity = '0';
    
    await new Promise(resolve => setTimeout(resolve, 200));
    
    container.innerHTML = `
      <div style="
        text-align: center;
        padding: 3rem 1rem;
        background: var(--card);
        border: 1px solid var(--border2);
        border-radius: var(--radius);
      ">
        <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;">📄</div>
        <p style="color: var(--muted); font-size: 0.95rem; margin-bottom: 0.5rem;">
          Articles could not be loaded.
        </p>
        <p style="color: var(--muted); font-size: 0.8rem; opacity: 0.7;">
          ${e.message}
        </p>
        <button data-action="loadArticles" style="
          margin-top: 1.5rem;
          padding: 0.6rem 1.2rem;
          background: var(--secondary);
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-family: var(--font-h);
          font-weight: 600;
          font-size: 0.85rem;
        ">
          Try Again
        </button>
      </div>`;
    
    void container.offsetHeight;
    container.style.transition = 'opacity 0.4s ease-in';
    container.style.opacity = '1';
  }
}

function articleCard(a) {
  const date = a.date ? new Date(a.date).toLocaleDateString('en-IN',{year:'numeric',month:'short'}) : '';
  const seriesLabel = (a.series_part && a.series_part > 0 && a.series_total) ? `Part ${a.series_part} of ${a.series_total}` : '';
  const authorLine = a.author ? `by ${a.author}${a.credential ? ', '+a.credential : ''}` : '';
  return `
    <div class="article-card" data-nav="article" data-article="${a.id}">
      <div class="article-meta">
        ${date ? `<span class="article-date">${date}</span>` : '<span>&nbsp;</span>'}
      </div>
      <p class="article-author">${authorLine || '&nbsp;'}</p>
      <h3>${a.title}</h3>
      <p class="article-summary">${a.summary || ''}</p>
      <span class="article-read">Read article →</span>
    </div>`;
}

/* Compact article card for category sections */
function articleCardCompact(a) {
  const date = a.date ? new Date(a.date).toLocaleDateString('en-IN',{year:'numeric',month:'short'}) : '';
  return `
    <div class="article-card-compact" data-nav="article" data-article="${a.id}" style="
      padding: 1rem;
      border: 1px solid var(--border2);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      background: var(--card);
    " 
      >
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: .4rem;">
        <h4 style="font-size: .95rem; line-height: 1.3; flex: 1; margin-right: 1rem;">${a.title}</h4>
        ${date ? `<span style="font-size: .75rem; color: var(--muted); white-space: nowrap;">${date}</span>` : ''}
      </div>
      <p style="font-size: .85rem; color: var(--muted); line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
        ${a.summary || ''}
      </p>
    </div>`;
}

function renderPartners() {
  const P = CONTENT.partners;
  const benefits = P.benefits.map(b=>`<li>${b}</li>`).join('');
  const types    = P.types.map(t=>`
    <div class="pt-card">
      <div class="pt-icon">${t.icon}</div>
      <h3 style="font-family:var(--font-h);margin-bottom:.5rem">${t.h}</h3>
      <p class="body-m">${t.p}</p>
    </div>`).join('');

  app.innerHTML = `
  <div class="page active">
    <div class="page-hero">
      <div class="page-hero-inner">
        <div class="t-overline">Partners</div>
        <h1>${P.intro_title}</h1>
        <p class="body-l">${P.intro_body}</p>
      </div>
    </div>
    <div class="section">
      <div class="section-inner">
        <div class="grid-2" style="align-items:start;margin-bottom:3rem">
          <div>
            <div class="t-overline">What You Gain</div>
            <h2 style="margin:.6rem 0 1.2rem">Partner <span class="accent">Benefits</span></h2>
            <ul class="feat-list">${benefits}</ul>
            <button class="btn btn-primary" style="margin-top:1.8rem" data-nav="partner-enquiry">Become a Partner</button>
          </div>
          <div>
            <div class="t-overline">Partner Opportunities</div>
            <h2 style="margin:.6rem 0 1.2rem">Partnership <span class="accent">Models</span></h2>
            <div class="grid-2" style="gap:1rem">${types}</div>
          </div>
        </div>
        <div class="cta-banner">
          <div>
            <h2>Ready to Partner with Tenet Networks?</h2>
            <p>Join a growing ecosystem delivering next-generation industrial connectivity solutions globally.</p>
          </div>
          <button class="btn btn-primary" data-nav="partner-enquiry">Get in Touch</button>
        </div>
      </div>
    </div>
    ${footerHTML()}
  </div>`;
}

/* CONTACT */
function renderContact() {
  const c = CONTENT.company;
  /* Google Maps embed — no API key needed for embed URL */
  const mapsQuery  = encodeURIComponent('Logix Technova Sector 132 Noida Uttar Pradesh 201305');
  const mapsEmbed  = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsLink   = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  app.innerHTML = `
  <div class="page active">
    <div class="page-hero">
      <div class="page-hero-inner">
        <div class="t-overline">Contact</div>
        <h1>Get in <span class="accent">Touch</span></h1>
        <p class="body-l">Talk to our team about products, partnerships, support, or anything else. We're here to help.</p>
      </div>
    </div>
    <div class="section">
      <div class="section-inner">
        <div class="contact-layout">
          <div>
            <div class="info-card"><h4>📍 Address</h4><p>${c.address}</p></div>
            <div class="info-card"><h4>📧 Email</h4><p><a href="mailto:${c.email}" style="color:var(--secondary)">${c.email}</a><br><a href="mailto:${c.careers}" style="color:var(--secondary)">${c.careers}</a></p></div>
            <div class="info-card"><h4>📞 Phone</h4><p>${c.phone}</p></div>
            <div class="info-card"><h4>🕐 Business Hours</h4><p>${c.hours}</p></div>

            <!-- ── GOOGLE MAPS CARD ── -->
            <div class="info-card" style="padding:0;overflow:hidden;border:1px solid var(--border2)">
              <!-- Map header bar -->
              <div style="display:flex;align-items:center;gap:.6rem;padding:.75rem 1rem;background:var(--card2);border-bottom:1px solid var(--border2)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="var(--primary)"/>
                </svg>
                <span style="font-family:var(--font-h);font-size:.82rem;font-weight:600;color:var(--text-primary)">Tenet Networks — Noida Office</span>
              </div>
              <!-- Embedded map -->
              <div style="position:relative;width:100%;height:220px;background:#e8eef4">
                <iframe
                  title="Tenet Networks Location — Logix Technova, Sector 132, Noida"
                  src="${mapsEmbed}"
                  width="100%"
                  height="220"
                  style="border:0;display:block;width:100%;height:220px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <!-- Map action buttons -->
              <div style="display:flex;gap:.6rem;padding:.75rem 1rem;flex-wrap:wrap;background:var(--card2);border-top:1px solid var(--border2)">
                <a href="${mapsLink}" target="_blank" rel="noopener"
                   class="btn btn-primary"
                   style="font-size:.78rem;padding:.42rem 1rem;display:inline-flex;align-items:center;gap:.4rem;flex:1;justify-content:center;min-width:120px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.88 2.15L1.12 10.07c-.81.34-.79 1.47.03 1.78l7.38 2.6 2.6 7.38c.31.82 1.44.84 1.78.03l7.92-20.76c.31-.81-.47-1.59-1.28-1.28l.33-.87z" fill="white"/>
                  </svg>
                  Get Directions
                </a>
                <a href="${mapsSearch}" target="_blank" rel="noopener"
                   class="btn btn-ghost"
                   style="font-size:.78rem;padding:.42rem 1rem;display:inline-flex;align-items:center;gap:.4rem;flex:1;justify-content:center;min-width:120px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  View on Maps
                </a>
              </div>
            </div>
            <!-- ── END MAPS CARD ── -->

          </div>
          <div class="form-card">
            <h3>Send Us a Message</h3>
            <div class="fg"><label>Name</label><input type="text" placeholder="e.g. Rahul Sharma"/></div>
            <div class="fg"><label>Email Address</label><input type="email" placeholder="you@company.com"/></div>
            <div class="fg"><label>Company / Organisation</label><input type="text" placeholder="Your Company"/></div>
            <div class="fg"><label>Phone Number</label><input type="tel" placeholder="+91 XXXXX XXXXX"/></div>
            <div class="fg">
              <label>Subject</label>
              <select>
                <option value="">Select a topic…</option>
                <option>Product Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership / Reseller</option>
                <option>Custom Engineering</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </div>
            <div class="fg"><label>Message</label><textarea placeholder="Tell us about your project or query…" style="min-height:165px"></textarea></div>
            <button class="btn btn-primary" style="width:100%;justify-content:center;padding:.85rem" id="sbtn" data-action="submitForm">Send Message</button>
            <p class="recaptcha-notice">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.</p>
          </div>
        </div>
      </div>
    </div>
    ${footerHTML()}
  </div>`;
}

/* APPLY */
function renderApply() {
  const careersEmail = CONTENT.company.careers;
  app.innerHTML = `
  <div class="page active">
    <div class="page-hero">
      <div class="page-hero-inner">
        <div class="t-overline">Join Our Team</div>
        <h1>Apply to <span class="accent">Tenet Networks</span></h1>
        <p class="body-l">Tell us about yourself. We review every application personally and will get back to you within 5–7 business days.</p>
      </div>
    </div>

    <div class="section">
      <div class="section-inner">
        <div class="apply-layout">

          <!-- SIDEBAR -->
          <div class="apply-sidebar">
            <div class="info-card">
              <h4>📍 Location</h4>
              <p>${CONTENT.company.address}</p>
            </div>
            <div class="info-card">
              <h4>📧 Careers Email</h4>
              <p><a href="mailto:${careersEmail}" style="color:var(--secondary)">${careersEmail}</a></p>
            </div>
            <div class="info-card">
              <h4>🕐 Business Hours</h4>
              <p>${CONTENT.company.hours}</p>
            </div>
            <div class="info-card" style="margin-top:1.5rem">
              <h4>🌟 Why Tenet Networks?</h4>
              <ul class="apply-why">
                <li><span class="aw-icon">🚀</span>Work on cutting-edge industrial IoT &amp; SD-WAN products shipped globally.</li>
                <li><span class="aw-icon">🧠</span>Learn from a leadership team with 150+ years of combined tech experience.</li>
                <li><span class="aw-icon">🌍</span>India-built products trusted worldwide — real impact from day one.</li>
                <li><span class="aw-icon">🤝</span>Collaborative, inclusive culture built on the EXCITE values.</li>
                <li><span class="aw-icon">📈</span>Fast-growing startup with structured career pathways.</li>
              </ul>
            </div>
            <div style="margin-top:1.5rem">
              <button class="btn btn-ghost" style="width:100%;justify-content:center" data-nav="company" data-tab="careers">← Back to Careers</button>
            </div>
          </div>

          <!-- FORM -->
          <div>
            <!-- Progress bar -->
            <div class="apply-step-bar" id="applyStepBar">
              <div class="apply-step done" id="astep1"></div>
              <div class="apply-step" id="astep2"></div>
              <div class="apply-step" id="astep3"></div>
            </div>

            <div class="apply-form-card" id="applyFormCard">
              <h3>Your Application</h3>
              <p class="form-subtitle">All fields marked <span style="color:#d32f2f">*</span> are required. Your details are sent directly to our HR team.</p>

              <!-- ROW 1: Name -->
              <div class="fg" id="fg-fname">
                <label>Name <span style="color:#d32f2f">*</span></label>
                <input type="text" id="af-fname" placeholder="e.g. Rahul Sharma" autocomplete="name"/>
                <span class="field-error">Please enter your name.</span>
              </div>

              <!-- ROW 2: Email + Phone -->
              <div class="form-row">
                <div class="fg" id="fg-email">
                  <label>Email Address <span style="color:#d32f2f">*</span></label>
                  <input type="email" id="af-email" placeholder="you@example.com" autocomplete="email"/>
                  <span class="field-error">Please enter a valid email address.</span>
                </div>
                <div class="fg" id="fg-phone">
                  <label>Phone Number <span style="color:#d32f2f">*</span></label>
                  <input type="tel" id="af-phone" placeholder="+91 120 4165 905" autocomplete="tel"/>
                  <span class="field-error">Please enter your phone number.</span>
                </div>
              </div>

              <!-- Position -->
              <div class="fg" id="fg-position">
                <label>Position / Area of Interest <span style="color:#d32f2f">*</span></label>
                <select id="af-position">
                  <option value="">— Select a role —</option>
                  <optgroup label="Engineering">
                    <option>Embedded Systems Engineer</option>
                    <option>Hardware / PCB Design Engineer</option>
                    <option>Firmware Engineer</option>
                    <option>Network / LTE-5G Engineer</option>
                    <option>Software Engineer (Cloud / Backend)</option>
                    <option>Software Engineer (Embedded Linux / RTOS)</option>
                    <option>IoT Solutions Architect</option>
                  </optgroup>
                  <optgroup label="Sales & Business">
                    <option>Sales Engineer</option>
                    <option>Business Development Manager</option>
                    <option>Channel / Partner Manager</option>
                    <option>Pre-Sales Consultant</option>
                  </optgroup>
                  <optgroup label="Operations & Support">
                    <option>Field Application Engineer</option>
                    <option>Technical Support Engineer</option>
                    <option>Project Manager</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option>Graduate / Diploma Trainee Programme</option>
                    <option>Internship</option>
                    <option>Other / Open Application</option>
                  </optgroup>
                </select>
                <span class="field-error">Please select an area of interest.</span>
              </div>

              <!-- Experience + LinkedIn -->
              <div class="form-row">
                <div class="fg" id="fg-exp">
                  <label>Years of Experience <span style="color:#d32f2f">*</span></label>
                  <select id="af-exp">
                    <option value="">— Select —</option>
                    <option>Fresher / Student</option>
                    <option>Less than 1 year</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5–10 years</option>
                    <option>10+ years</option>
                  </select>
                  <span class="field-error">Please select your experience level.</span>
                </div>
                <div class="fg">
                  <label>LinkedIn Profile <span style="color:var(--muted);font-weight:400;text-transform:none;font-size:.75rem">(optional)</span></label>
                  <input type="url" id="af-linkedin" placeholder="https://linkedin.com/in/yourname"/>
                </div>
              </div>

              <!-- Resume Upload -->
              <div class="fg" id="fg-resume">
                <label>Resume / CV <span style="color:#d32f2f">*</span></label>
                <div class="file-upload-zone" id="fileZone">
                  <input type="file" id="af-resume" accept=".pdf,.doc,.docx" data-action="handleResumeSelect"/>
                  <div class="fuz-icon">📄</div>
                  <div class="fuz-label">Click to upload or drag &amp; drop</div>
                  <div class="fuz-hint">PDF, DOC, or DOCX · Max 5 MB</div>
                  <div class="fuz-selected" id="fuz-selected">✓ <span id="fuz-name"></span></div>
                </div>
                <span class="field-error" id="resume-error">Please attach your resume (PDF, DOC, or DOCX, max 5 MB).</span>
              </div>

              <!-- Cover Note -->
              <div class="fg">
                <label>Cover Note / Message <span style="color:var(--muted);font-weight:400;text-transform:none;font-size:.75rem">(optional)</span></label>
                <textarea id="af-cover" placeholder="Tell us a bit about yourself, your experience, and why you'd like to join Tenet Networks…" style="min-height:120px" data-action="updateCharCount" data-counter="af-cover-count" data-maxlength="500"></textarea>
                <div class="char-count"><span id="af-cover-count">0</span> / 500</div>
              </div>

              <!-- Consent -->
              <div style="display:flex;gap:.75rem;align-items:flex-start;margin-bottom:1.4rem;padding:.9rem;background:rgba(242,101,0,.04);border:1px solid rgba(242,101,0,.15);border-radius:8px">
                <input type="checkbox" id="af-consent" style="margin-top:.25rem;accent-color:var(--primary);width:16px;height:16px;flex-shrink:0;cursor:pointer"/>
                <label for="af-consent" style="font-size:.82rem;color:var(--muted);line-height:1.6;cursor:pointer">
                  I consent to Tenet Networks storing and using the information submitted here to process my job application. My data will be handled in accordance with applicable privacy regulations. <span style="color:#d32f2f" id="consent-error-inline"></span>
                </label>
              </div>

              <button class="btn btn-primary" id="applySubmitBtn" style="width:100%;justify-content:center;padding:.95rem;font-size:1rem" data-action="submitApplication" data-email="${careersEmail}">
                Submit Application →
              </button>
              <p class="recaptcha-notice">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.</p>

              <p style="font-size:.76rem;color:var(--muted);text-align:center;margin-top:.9rem;line-height:1.6">
                Your application is sent directly to <strong>${careersEmail}</strong>.<br>
                We review every application and typically respond within 5–7 business days.
              </p>
            </div>

            <!-- SUCCESS STATE -->
            <div class="apply-success" id="applySuccess">
              <div class="s-icon">🎉</div>
              <h3>Application Submitted!</h3>
              <p>Thank you for applying to Tenet Networks.<br>
              Your application has been sent to <strong>${careersEmail}</strong>.<br><br>
              We review every application personally and will be in touch within <strong>5–7 business days</strong>.<br>
              In the meantime, feel free to explore what we're building.</p>
              <div style="display:flex;gap:1rem;justify-content:center;margin-top:2rem;flex-wrap:wrap">
                <button class="btn btn-primary" data-nav="company" data-tab="about">About Tenet Networks</button>
                <button class="btn btn-ghost" data-nav="company" data-tab="careers">Back to Careers</button>
              </div>
            </div>

          </div><!-- /form col -->
        </div>
      </div>
    </div>
    ${footerHTML()}
  </div>`;

  /* Drag-over styling */
  const zone = document.getElementById('fileZone');
  if (zone) {
    zone.addEventListener('dragover',  e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (file) {
        const input = document.getElementById('af-resume');
        const dt = new DataTransfer();
        dt.items.add(file);
        input.files = dt.files;
        handleResumeSelect(input);
      }
    });
  }
}

/* ── FILE SELECT HANDLER ── */
window.handleResumeSelect = function(input) {
  const file = input.files[0];
  const sel  = document.getElementById('fuz-selected');
  const name = document.getElementById('fuz-name');
  if (file) {
    sel.style.display  = 'block';
    name.textContent   = file.name + ' (' + (file.size / 1024 / 1024).toFixed(2) + ' MB)';
    clearFgError('fg-resume');
    /* Progress bar step 2 */
    const s2 = document.getElementById('astep2');
    if (s2) s2.classList.add('done');
  }
};

/* ── CHAR COUNT ── */
window.updateCharCount = function(el, countId, max) {
  const len = el.value.length;
  const counter = document.getElementById(countId);
  if (counter) counter.textContent = Math.min(len, max);
  if (len > max) el.value = el.value.slice(0, max);
};

/* ── VALIDATION HELPERS ── */
function setFgError(id, show) {
  const el = document.getElementById(id);
  if (!el) return;
  if (show) el.classList.add('has-error');
  else      el.classList.remove('has-error');
}
function clearFgError(id) { setFgError(id, false); }

/* ── APPLICATION SUBMIT ── */
window.submitApplication = async function(toEmail) {
  /* --- Gather values --- */
  const fname    = (document.getElementById('af-fname')?.value    || '').trim();
  const lname    = '';
  const email    = (document.getElementById('af-email')?.value    || '').trim();
  const phone    = (document.getElementById('af-phone')?.value    || '').trim();
  const position = (document.getElementById('af-position')?.value || '').trim();
  const exp      = (document.getElementById('af-exp')?.value      || '').trim();
  const linkedin = (document.getElementById('af-linkedin')?.value || '').trim();
  const cover    = (document.getElementById('af-cover')?.value    || '').trim();
  const resumeInput   = document.getElementById('af-resume');
  const resumeFile    = resumeInput?.files[0] || null;
  const consentChecked = document.getElementById('af-consent')?.checked;

  /* --- Validate --- */
  let valid = true;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  setFgError('fg-fname',    !fname);    if (!fname)    valid = false;
  // last name is optional — no validation
  setFgError('fg-email',    !emailRe.test(email)); if (!emailRe.test(email)) valid = false;
  setFgError('fg-phone',    !phone);    if (!phone)    valid = false;
  setFgError('fg-position', !position); if (!position) valid = false;
  setFgError('fg-exp',      !exp);      if (!exp)      valid = false;

  /* Resume validation */
  const allowedTypes = ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const resumeErr = document.getElementById('resume-error');
  let resumeOk = resumeFile && allowedTypes.includes(resumeFile.type) && resumeFile.size <= 5 * 1024 * 1024;
  if (!resumeOk) {
    document.getElementById('fg-resume')?.classList.add('has-error');
    if (resumeErr) resumeErr.style.display = 'block';
    valid = false;
  } else {
    document.getElementById('fg-resume')?.classList.remove('has-error');
    if (resumeErr) resumeErr.style.display = 'none';
  }

  const consentErrEl = document.getElementById('consent-error-inline');
  if (!consentChecked) {
    if (consentErrEl) consentErrEl.textContent = '← Please accept consent to proceed.';
    valid = false;
  } else {
    if (consentErrEl) consentErrEl.textContent = '';
  }

  if (!valid) {
    /* Scroll to first error */
    const firstErr = document.querySelector('.fg.has-error, [id="consent-error-inline"]:not(:empty)');
    if (firstErr) firstErr.scrollIntoView({ behavior:'smooth', block:'center' });
    return;
  }

  /* --- reCAPTCHA v3 --- */
  const recaptchaToken = await getRecaptchaToken('apply');
  if (!recaptchaToken) { alert('Human verification failed. Please try again.'); return; }

  /* --- UI: loading state --- */
  const btn = document.getElementById('applySubmitBtn');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  /* Step 3 progress */
  const s3 = document.getElementById('astep3');
  if (s3) s3.classList.add('done');

  try {
    /* ── WEB3FORMS SUBMISSION ──
       Web3Forms is a free email service for static sites.
       SETUP (takes 2 minutes):
         1. Go to https://web3forms.com and enter your email: careers@tenetnetworks.com
         2. Check your inbox and copy the Access Key they send you.
         3. Replace 'YOUR_WEB3FORMS_ACCESS_KEY' below with that key.
       That's it — no account, no dashboard, 100% free.
    ═══════════════════════════════════════════════════════ */
    const W3F_KEY = '4303e7cd-dbb6-485b-9a44-70e99576f249'; // Web3Forms access key

    const formData = new FormData();
    formData.append('access_key',  W3F_KEY);
    formData.append('subject',     'New Job Application – ' + fname + ' ' + lname + ' (' + position + ')');
    formData.append('from_name',   'Tenet Networks Careers Portal');
    formData.append('to',          toEmail);
    formData.append('replyto',     email);
    formData.append('botcheck',    '');
    formData.append('g-recaptcha-response', recaptchaToken);

    /* Body content */
    formData.append('Full Name',         fname + ' ' + lname);
    formData.append('Email',             email);
    formData.append('Phone',             phone);
    formData.append('Position Applied',  position);
    formData.append('Experience Level',  exp);
    if (linkedin) formData.append('LinkedIn', linkedin);
    if (cover)    formData.append('Cover Note', cover);
    formData.append('Resume', resumeFile, resumeFile.name);

    const res  = await fetch('https://api.web3forms.com/submit', { method:'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      /* Show success card */
      document.getElementById('applyFormCard').style.display  = 'none';
      document.getElementById('applyStepBar').style.display   = 'none';
      document.getElementById('applySuccess').classList.add('show');
      window.scrollTo({ top: document.getElementById('applySuccess').offsetTop - 120, behavior:'smooth' });
    } else {
      throw new Error(data.message || 'Submission failed');
    }

  } catch (err) {
    /* Fallback: open pre-filled mailto link */
    const subject  = encodeURIComponent('Job Application – ' + fname + ' ' + lname + ' – ' + position);
    const body     = encodeURIComponent(
      'Full Name: '        + fname + ' ' + lname   + '\n' +
      'Email: '            + email                 + '\n' +
      'Phone: '            + phone                 + '\n' +
      'Position: '         + position              + '\n' +
      'Experience: '       + exp                   + '\n' +
      (linkedin ? 'LinkedIn: ' + linkedin + '\n' : '') +
      (cover    ? '\nCover Note:\n' + cover + '\n' : '') +
      '\n— Please attach your resume to this email before sending. —\n' +
      '\nSent via Tenet Networks Careers Portal.'
    );
    window.location.href = 'mailto:' + toEmail + '?subject=' + subject + '&body=' + body;

    btn.disabled    = false;
    btn.textContent = 'Submit Application →';
    /* Show a friendly note */
    const note = document.createElement('p');
    note.style.cssText = 'font-size:.82rem;color:#d32f2f;text-align:center;margin-top:.8rem';
    note.textContent   = 'Auto-send unavailable — your email app has opened with your details pre-filled. Please attach your resume and send.';
    btn.parentNode.insertBefore(note, btn.nextSibling);
  }
};

/* ── ARTICLE READER ── */
async function renderArticle(articleId) {
  await loadKaTeX(); // lazy load KaTeX only when needed
  /* Don't wipe the page immediately - keep current content visible while loading */
  const isFirstLoad = !app.querySelector('.page');
  
  /* Only show skeleton if it's the very first article (no existing content) */
  if (isFirstLoad) {
    app.innerHTML = `
    <div class="page" style="display:block">
      <div class="section" style="padding-top:6rem;min-height:calc(100vh - 90px)">
        <div class="section-inner">
          <div class="article-reader">
            <div class="article-back" data-nav="company" data-tab="perspective">← Back to Perspective</div>
            ${skelCards(1,false).replace('skel-grid','').replace('skel-card','skel-article')}
          </div>
        </div>
      </div>
      ${footerHTML()}
    </div>`;
  }

  try {
    /* First get the articles list to find the file name */
    const articles = await getArticles();
    const a = articles.find(x => x.id === articleId);
    if (!a) throw new Error('Article not found in index');
    
    /* Use file field if available, otherwise fall back to id.md */
    const mdFile = a.file || `${articleId}.md`;
    const mdText = await fetchGH(`articles/${mdFile}`).then(r => r.text());

    const allInSeries = a.series
      ? articles.filter(x => x.series === a.series).sort((x,y)=>(x.series_part||0)-(y.series_part||0))
      : [];
    const idx   = allInSeries.findIndex(x => x.id === articleId);
    const prev  = idx > 0 ? allInSeries[idx-1] : null;
    const next  = idx < allInSeries.length-1 ? allInSeries[idx+1] : null;

    /* Author photo */
    const authorPhoto = a.author_photo
      ? `<img class="article-byline-photo" src="${GITHUB.url('team/photos/'+safeName(a.author_photo))}" width="48" height="48" alt="${safeName(a.author)}" data-fallback="true">`
      : '';
    const authorFallback = `<div class="article-byline-fallback" ${a.author_photo?'style="display:none"':''}>${a.author_icon||'👤'}</div>`;

    const seriesBadge = a.series
      ? `<div class="article-series-badge">📚 ${a.series}${a.series_part > 0 ? ` · Part ${a.series_part} of ${a.series_total||allInSeries.length}` : ' · Introduction'}</div>`
      : '';

    const date = a.date ? new Date(a.date).toLocaleDateString('en-IN',{year:'numeric',month:'long',day:'numeric'}) : '';
    const tenetNote = a.tenet_note || '';

    const prevBtn = prev ? `<div class="art-nav-btn" data-nav="article" data-article="${prev.id}"><div class="art-nav-label">← Previous</div><div class="art-nav-title">${prev.title}</div></div>` : `<div></div>`;
    const nextBtn = next ? `<div class="art-nav-btn next" data-nav="article" data-article="${next.id}"><div class="art-nav-label">Next →</div><div class="art-nav-title">${next.title}</div></div>` : `<div></div>`;

    /* Fix relative image URLs in markdown to use GitHub raw URLs */
    /* This handles both standard markdown: ![alt](path) and Pandoc-style: ![alt](path){width="..." height="..."} */
    let mdTextFixed = mdText.replace(/!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)(\{[^}]*\})?/g, (match, alt, path, attrs) => {
      // Remove any Pandoc-style attributes from the path (they come after the closing paren)
      const cleanPath = path.trim();
      
      // Determine the full GitHub URL
      let fullUrl;
      if (cleanPath.startsWith('/')) {
        // Absolute path from repo root
        fullUrl = GITHUB.url(cleanPath.slice(1));
      } else if (cleanPath.startsWith('images/') || cleanPath.startsWith('media/')) {
        // Already starts with images/ or media/ - use directly from repo root
        fullUrl = GITHUB.url(cleanPath);
      } else if (cleanPath.startsWith('./images/') || cleanPath.startsWith('./media/')) {
        // Relative path with ./ prefix to images or media folder  
        fullUrl = GITHUB.url(cleanPath.slice(2));
      } else if (cleanPath.startsWith('./')) {
        // Relative to articles folder
        fullUrl = GITHUB.url('articles/' + cleanPath.slice(2));
      } else {
        // Assume it's relative to articles folder
        fullUrl = GITHUB.url('articles/' + cleanPath);
      }
      
      console.log('📷 Image path:', cleanPath, '→', fullUrl);
      
      // Return standard markdown without Pandoc attributes (marked.js doesn't support them)
      return `![${alt}](${fullUrl})`;
    });

    /* ═══════════════════════════════════════════════════════════════
       PREPROCESSING: Fix Pandoc/Markdown syntax BEFORE math processing
    ═══════════════════════════════════════════════════════════════ */
    
    // Convert Pandoc/Markdown superscripts ^text^ to LaTeX with footnote class
    // Pattern: ^1^, ^2^, ^A^, ^B^, etc. (footnote references)
    mdTextFixed = mdTextFixed.replace(/([^$])\^([A-Za-z0-9]{1,2})\^/g, (match, before, text) => {
      // Check if we're inside a math block by looking back
      const beforeContext = mdTextFixed.substring(0, mdTextFixed.indexOf(match));
      const dollarCount = (beforeContext.match(/\$/g) || []).length;
      
      // If odd number of $ before this, we're inside math - don't touch it
      if (dollarCount % 2 === 1) {
        return match;
      }
      
      // Convert to LaTeX superscript wrapped in span with class for CSS targeting
      return `${before}<span class="footnote-ref">$^{${text}}$</span>`;
    });
    
    // Convert Pandoc/Markdown subscripts ~text~ to LaTeX $_{text}$
    // Only for patterns that look like subscripts (variable_subscript)
    mdTextFixed = mdTextFixed.replace(/([A-Za-z])~([A-Za-z0-9]+)~/g, (match, base, sub) => {
      return `${base}$_{${sub}}$`;
    });
    
    // Convert HTML superscripts/subscripts to LaTeX with footnote class
    mdTextFixed = mdTextFixed.replace(/<sup>([^<]+)<\/sup>/g, (match, text) => {
      // Special handling for "Appendix X" pattern
      if (text.startsWith('Appendix ')) {
        return `<span class="footnote-ref">$^{\\text{${text}}}$</span>`;
      }
      // Single letters or numbers (footnote references)
      if (/^[A-Za-z0-9]{1,2}$/.test(text)) {
        return `<span class="footnote-ref">$^{${text}}$</span>`;
      }
      // Longer text - still a reference
      return `<span class="footnote-ref">$^{\\text{${text}}}$</span>`;
    });
    
    mdTextFixed = mdTextFixed.replace(/<sub>([^<]+)<\/sub>/g, (match, text) => {
      return `$_{${text}}$`;
    });

    /* Process math expressions BEFORE markdown parsing */
    /* Protect math expressions from markdown parser */
    const mathPlaceholders = [];
    let mathCounter = 0;
    
    // Extract display math FIRST ($$...$$) - can span multiple lines
    mdTextFixed = mdTextFixed.replace(/\$\$([\s\S]+?)\$\$/g, (match, math) => {
      const placeholder = `XMATHDISPLAYX${mathCounter}XENDX`;
      mathPlaceholders.push({ placeholder, math: math.trim(), display: true });
      console.log('📐 Display math found:', math.trim().substring(0, 50) + (math.trim().length > 50 ? '...' : ''));
      mathCounter++;
      return placeholder;
    });
    
    // Extract inline math ($...$) - should NOT span lines, more restrictive
    // Use negative lookahead to avoid matching empty $$ or $ at start of $$
    mdTextFixed = mdTextFixed.replace(/\$(?!\$)(.+?)\$/g, (match, math) => {
      const placeholder = `XMATHINLINEX${mathCounter}XENDX`;
      mathPlaceholders.push({ placeholder, math: math.trim(), display: false });
      console.log('📐 Inline math found:', math.trim());
      mathCounter++;
      return placeholder;
    });
    
    console.log(`📐 Total math expressions found: ${mathPlaceholders.length}`);

    /* Render markdown — sanitized for security (with KaTeX support) */
    const purifyConfig = {
      ADD_TAGS: ['math', 'mrow', 'mi', 'mo', 'mn', 'msup', 'msub', 'mfrac', 'mroot', 'msqrt', 'mover', 'munder', 'munderover', 'mtable', 'mtr', 'mtd', 'mtext', 'mspace', 'semantics', 'annotation', 'span'],
      ADD_ATTR: ['xmlns', 'mathvariant', 'stretchy', 'fence', 'separator', 'accent', 'accentunder', 'linebreak', 'displaystyle', 'scriptlevel', 'columnalign', 'rowalign', 'columnspacing', 'rowspacing', 'style', 'class', 'aria-hidden', 'width', 'height']
    };

    // Check markdown cache first (avoids re-parsing on back/forward nav)
    const mdCacheKey = mdTextFixed;
    let bodyHTML = getCachedMarkdown(mdCacheKey);

    if (!bodyHTML) {
      bodyHTML = typeof marked !== 'undefined'
        ? (typeof DOMPurify !== 'undefined' ? DOMPurify.sanitize(marked.parse(mdTextFixed), purifyConfig) : `<pre>${mdTextFixed}</pre>`)
        : `<pre>${mdTextFixed}</pre>`;
      setCachedMarkdown(mdCacheKey, bodyHTML);
    }
    
    /* Replace placeholders with rendered KaTeX */
    if (typeof katex !== 'undefined') {
      mathPlaceholders.forEach(({ placeholder, math, display }) => {
        try {
          const rendered = katex.renderToString(math, { 
            throwOnError: false, 
            displayMode: display 
          });
          
          // Check if placeholder exists in HTML
          if (bodyHTML.includes(placeholder)) {
            bodyHTML = bodyHTML.split(placeholder).join(rendered);
            console.log('✅ Replaced:', placeholder, '→ KaTeX HTML');
          } else {
            console.warn('❌ Placeholder not found in HTML:', placeholder);
            console.log('   Searching for variations...');
            // Try HTML-encoded version
            const encoded = placeholder.replace(/_/g, '&#95;');
            if (bodyHTML.includes(encoded)) {
              bodyHTML = bodyHTML.replace(new RegExp(encoded, 'g'), rendered);
              console.log('✅ Replaced encoded version:', encoded);
            } else {
              console.warn('   Original math was:', math);
            }
          }
        } catch (e) {
          console.warn('KaTeX render error:', e, 'for:', math);
          // Fallback to code block
          bodyHTML = bodyHTML.replace(new RegExp(placeholder, 'g'), `<code>${math}</code>`);
        }
      });
    } else {
      console.warn('⚠️ KaTeX library not loaded!');
      // If KaTeX not available, restore original math syntax
      mathPlaceholders.forEach(({ placeholder, math, display }) => {
        const original = display ? `$$${math}$$` : `$${math}$`;
        bodyHTML = bodyHTML.replace(new RegExp(placeholder, 'g'), `<code>${original}</code>`);
      });
    }
    
    /* Smooth fade transition - build content off-screen then crossfade */
    let articleReader = app.querySelector('.article-reader');
    
    /* If no article-reader exists (navigating from non-article page), create the structure first */
    if (!articleReader) {
      app.innerHTML = `
      <div class="page" style="display:block">
        <div class="section" style="padding-top:6rem;min-height:calc(100vh - 90px)">
          <div class="section-inner">
            <div class="article-reader" style="opacity:0">
            </div>
          </div>
        </div>
        ${footerHTML()}
      </div>`;
      articleReader = app.querySelector('.article-reader');
    }
    
    if (articleReader) {
      /* Build new content in a temporary container */
      const newContent = document.createElement('div');
      newContent.innerHTML = `
            <div class="article-back" data-nav="company" data-tab="perspective">← Back to Perspective</div>

            <div class="article-reader-hd">
              ${seriesBadge}
              <h1 style="font-family:var(--font-h);font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:800;line-height:1.2;margin-bottom:.5rem">${a.title}</h1>
              <div class="article-byline">
                ${authorPhoto}${authorFallback}
                <div class="article-byline-info">
                  <strong>${a.author}${a.credential ? ' · '+a.credential : ''}</strong>
                  <span>${date}</span>
                </div>
              </div>
              <div class="article-copyright">© ${new Date(a.date||Date.now()).getFullYear()} ${a.author} / Tenet Networks. All rights reserved. Reproduction without written permission is prohibited.</div>
            </div>

            ${tenetNote ? `<div class="article-tenet-note"><strong>Tenet Networks context:</strong> ${tenetNote}</div>` : ''}

            <div class="article-body">${bodyHTML}</div>

            <div class="article-nav">${prevBtn}${nextBtn}</div>

            <div class="article-cta-block">
              <h3>Interested in how these principles apply to real deployments?</h3>
              <p>Tenet Networks builds industrial IoT gateways and connectivity solutions grounded in exactly these fundamentals — energy-constrained, geometry-aware, and field-proven.</p>
              <div class="btn-group" style="justify-content:center">
                <button class="btn btn-primary" data-nav="products">Explore Products</button>
                <button class="btn btn-ghost"   data-nav="contact">Get in Touch</button>
              </div>
            </div>`;
      
      /* Fade out old content */
      articleReader.style.opacity = '0';
      
      /* After fade completes, swap content and fade in */
      setTimeout(() => {
        articleReader.innerHTML = newContent.innerHTML;
        void articleReader.offsetHeight;
        articleReader.style.opacity = '1';
      }, 350); // Match CSS transition duration
    }

  } catch(e) {
    app.innerHTML = `
    <div class="page active">
      <div class="section" style="padding-top:6rem">
        <div class="section-inner">
          <div class="article-back" data-nav="company" data-tab="perspective">← Back to Perspective</div>
          <p style="color:var(--muted);margin-top:2rem">Article could not be loaded. <small>(${e.message})</small></p>
        </div>
      </div>
      ${footerHTML()}
    </div>`;
  }
}

/* PARTNER ENQUIRY */
function renderPartnerEnquiry() {
  const c = CONTENT.company;
  const partnerEmail = c.partners || 'partners@tenetnetworks.com';
  app.innerHTML = `
  <div class="page active">
    <div class="page-hero">
      <div class="page-hero-inner">
        <div class="t-overline">Partner Programme</div>
        <h1>Become a <span class="accent">Tenet Partner</span></h1>
        <p class="body-l">Tell us about your organisation and how you'd like to partner with Tenet Networks. Our partnerships team will get back to you within 2 business days.</p>
      </div>
    </div>

    <div class="section">
      <div class="section-inner">
        <div class="contact-layout">

          <!-- SIDEBAR -->
          <div>
            <div class="info-card">
              <h4>🤝 Partners Email</h4>
              <p><a href="mailto:${partnerEmail}" style="color:var(--secondary)">${partnerEmail}</a></p>
            </div>
            <div class="info-card">
              <h4>📍 Office</h4>
              <p>${c.address}</p>
            </div>
            <div class="info-card">
              <h4>🕐 Business Hours</h4>
              <p>${c.hours}</p>
            </div>
            <div class="info-card" style="margin-top:1.5rem">
              <h4>🌟 Why Partner with Us?</h4>
              <ul class="feat-list" style="margin-top:.5rem">
                <li>Competitive margins and reseller pricing</li>
                <li>Technical enablement and pre-sales support</li>
                <li>Co-marketing and demand generation</li>
                <li>Dedicated partner account management</li>
                <li>Post-sales service and warranty backing</li>
                <li>Access to Tenet's full product portfolio</li>
              </ul>
            </div>
            <div style="margin-top:1.5rem">
              <button class="btn btn-ghost" style="width:100%;justify-content:center" data-nav="partners">← View Partner Programme</button>
            </div>
          </div>

          <!-- FORM -->
          <div class="form-card">
            <h3>Partner Enquiry Form</h3>

            <div class="fg"><label>Name <span style="color:#d32f2f">*</span></label><input type="text" id="pf-fname" placeholder="e.g. Rahul Sharma" autocomplete="name"/></div>

            <div class="form-row">
              <div class="fg"><label>Email Address <span style="color:#d32f2f">*</span></label><input type="email" id="pf-email" placeholder="you@company.com" autocomplete="email"/></div>
              <div class="fg"><label>Phone Number <span style="color:#d32f2f">*</span></label><input type="tel" id="pf-phone" placeholder="+91 XXXXX XXXXX" autocomplete="tel"/></div>
            </div>

            <div class="fg"><label>Company / Organisation <span style="color:#d32f2f">*</span></label><input type="text" id="pf-company" placeholder="Your Company Name"/></div>

            <div class="form-row">
              <div class="fg">
                <label>Partnership Type <span style="color:#d32f2f">*</span></label>
                <select id="pf-type">
                  <option value="">— Select —</option>
                  <option>Reseller / Distributor</option>
                  <option>Value-Added Reseller (VAR)</option>
                  <option>System Integrator</option>
                  <option>Technology Partner</option>
                  <option>OEM / Embedded Partner</option>
                  <option>ISP / Telecom Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="fg">
                <label>Primary Industry</label>
                <select id="pf-industry">
                  <option value="">— Select —</option>
                  <option>Power & Utilities</option>
                  <option>Smart Cities</option>
                  <option>Oil & Gas / CGD</option>
                  <option>Water & Sanitation</option>
                  <option>Renewable Energy</option>
                  <option>Manufacturing / Industry 4.0</option>
                  <option>Telecom / ISP</option>
                  <option>Enterprise IT</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="fg">
              <label>City / Region of Operations <span style="color:#d32f2f">*</span></label>
              <input type="text" id="pf-region" placeholder="e.g. Mumbai, Maharashtra / South India"/>
            </div>

            <div class="fg">
              <label>Website <span style="color:var(--muted);font-weight:400;text-transform:none;font-size:.75rem">(optional)</span></label>
              <input type="url" id="pf-website" placeholder="https://yourcompany.com"/>
            </div>

            <div class="fg">
              <label>Tell us about your business and interest in partnering <span style="color:#d32f2f">*</span></label>
              <textarea id="pf-message" placeholder="Brief overview of your company, the customers you serve, and how you see a partnership with Tenet Networks working…" style="min-height:120px"></textarea>
            </div>

            <div style="display:flex;gap:.75rem;align-items:flex-start;margin-bottom:1.4rem;padding:.9rem;background:rgba(242,101,0,.04);border:1px solid rgba(242,101,0,.15);border-radius:8px">
              <input type="checkbox" id="pf-consent" style="margin-top:.25rem;accent-color:var(--primary);width:16px;height:16px;flex-shrink:0;cursor:pointer"/>
              <label for="pf-consent" style="font-size:.82rem;color:var(--muted);line-height:1.6;cursor:pointer">
                I consent to Tenet Networks storing and using this information to process my partner enquiry and contact me. <span style="color:#d32f2f" id="pf-consent-err"></span>
              </label>
            </div>

            <button class="btn btn-primary" id="pf-submit-btn" style="width:100%;justify-content:center;padding:.9rem;font-size:1rem" data-action="submitPartnerEnquiry" data-email="${partnerEmail}">
              Send Partner Enquiry →
            </button>
            <p class="recaptcha-notice">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.</p>

            <p style="font-size:.76rem;color:var(--muted);text-align:center;margin-top:.9rem;line-height:1.6">
              Sent directly to <strong>${partnerEmail}</strong> · We respond within 2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
    ${footerHTML()}
  </div>`;
}

/* ── PARTNER ENQUIRY SUBMIT ── */
window.submitPartnerEnquiry = async function(toEmail) {
  const fname   = (document.getElementById('pf-fname')?.value   || '').trim();
  const lname   = '';
  const email   = (document.getElementById('pf-email')?.value   || '').trim();
  const phone   = (document.getElementById('pf-phone')?.value   || '').trim();
  const company = (document.getElementById('pf-company')?.value || '').trim();
  const type    = (document.getElementById('pf-type')?.value    || '').trim();
  const industry= (document.getElementById('pf-industry')?.value|| '').trim();
  const region  = (document.getElementById('pf-region')?.value  || '').trim();
  const website = (document.getElementById('pf-website')?.value || '').trim();
  const message = (document.getElementById('pf-message')?.value || '').trim();
  const consent = document.getElementById('pf-consent')?.checked;

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  const req = [
    ['pf-fname', !fname],
    ['pf-email', !emailRe.test(email)],
    ['pf-phone', !phone],
    ['pf-company', !company],
    ['pf-type', !type],
    ['pf-region', !region],
    ['pf-message', !message],
  ];
  req.forEach(([id, err]) => { setFgError(id, err); if (err) valid = false; });
  const consentErr = document.getElementById('pf-consent-err');
  if (!consent) { if (consentErr) consentErr.textContent = '← Please accept to proceed.'; valid = false; }
  else { if (consentErr) consentErr.textContent = ''; }
  if (!valid) { document.querySelector('.fg.has-error')?.scrollIntoView({behavior:'smooth',block:'center'}); return; }

  /* --- reCAPTCHA v3 --- */
  const recaptchaToken = await getRecaptchaToken('partner_enquiry');
  if (!recaptchaToken) { alert('Human verification failed. Please try again.'); return; }

  const btn = document.getElementById('pf-submit-btn');
  btn.disabled = true; btn.textContent = 'Sending…';

  try {
    const W3F_KEY = '4303e7cd-dbb6-485b-9a44-70e99576f249'; // Web3Forms access key
    const fd = new FormData();
    fd.append('access_key', W3F_KEY);
    fd.append('subject',    'Partner Enquiry – ' + fname + ' ' + lname + ' · ' + company + ' (' + type + ')');
    fd.append('from_name',  'Tenet Networks Partner Portal');
    fd.append('to',         toEmail);
    fd.append('replyto',    email);
    fd.append('botcheck',   '');
    fd.append('g-recaptcha-response', recaptchaToken);
    fd.append('Name',       fname + (lname ? ' '+lname : ''));
    fd.append('Email',      email);
    fd.append('Phone',      phone);
    fd.append('Company',    company);
    fd.append('Partnership Type', type);
    if (industry) fd.append('Industry',    industry);
    fd.append('Region',     region);
    if (website)  fd.append('Website',     website);
    fd.append('Message',    message);

    const res  = await fetch('https://api.web3forms.com/submit', {method:'POST', body:fd});
    const data = await res.json();
    if (data.success) {
      btn.textContent = '✓ Enquiry Sent!';
      btn.style.background = '#2E7D32';
      document.getElementById('pf-submit-btn').closest('.form-card').insertAdjacentHTML('beforeend',
        `<div style="text-align:center;padding:1.5rem;margin-top:1rem">
          <div style="font-size:2.5rem;margin-bottom:.6rem">🤝</div>
          <h3 style="margin-bottom:.4rem">Thank you!</h3>
          <p style="color:var(--muted);font-size:.9rem">Your enquiry has been sent to <strong>${toEmail}</strong>. We'll be in touch within 2 business days.</p>
          <button class="btn btn-ghost" style="margin-top:1.2rem" data-nav="partners">← Back to Partners</button>
        </div>`);
    } else { throw new Error(data.message); }
  } catch(e) {
    const subject = encodeURIComponent('Partner Enquiry – ' + fname + ' ' + lname + ' – ' + company);
    const body = encodeURIComponent('Name: '+fname+' '+lname+'\nEmail: '+email+'\nPhone: '+phone+'\nCompany: '+company+'\nPartnership Type: '+type+'\nIndustry: '+industry+'\nRegion: '+region+(website?'\nWebsite: '+website:'')+'\n\nMessage:\n'+message);
    window.location.href = 'mailto:'+toEmail+'?subject='+subject+'&body='+body;
    btn.disabled = false; btn.textContent = 'Send Partner Enquiry →';
  }
};

/* REQUEST QUOTE */
function renderRequestQuote() {
  const c = CONTENT.company;
  const salesEmail = c.email || 'info@tenetnetworks.com';
  app.innerHTML = `
  <div class="page active">
    <div class="page-hero">
      <div class="page-hero-inner">
        <div class="t-overline">Request a Quote</div>
        <h1>Get a <span class="accent">Custom Quote</span></h1>
        <p class="body-l">Tell us about your project requirements and we'll provide a tailored quote within 1–2 business days.</p>
      </div>
    </div>

    <div class="section">
      <div class="section-inner">
        <div class="contact-layout">

          <!-- SIDEBAR -->
          <div>
            <div class="info-card">
              <h4>📧 Sales Email</h4>
              <p><a href="mailto:${salesEmail}" style="color:var(--secondary)">${salesEmail}</a></p>
            </div>
            <div class="info-card">
              <h4>📞 Phone</h4>
              <p>${c.phone}</p>
            </div>
            <div class="info-card">
              <h4>🕐 Response Time</h4>
              <p>We typically respond within 1–2 business days with a detailed quote.</p>
            </div>
            <div class="info-card" style="margin-top:1.5rem">
              <h4>📦 What's Included</h4>
              <ul class="feat-list" style="margin-top:.5rem">
                <li>Product pricing based on volume</li>
                <li>Shipping and delivery estimates</li>
                <li>Warranty and support options</li>
                <li>Custom configuration pricing</li>
                <li>Bulk and project discounts</li>
              </ul>
            </div>
            <div style="margin-top:1.5rem">
              <button class="btn btn-ghost" style="width:100%;justify-content:center" data-nav="products">← Browse Products</button>
            </div>
          </div>

          <!-- FORM -->
          <div class="form-card">
            <h3>Quote Request Form</h3>

            <div class="fg" id="rfq-fg-name"><label>Name <span style="color:#d32f2f">*</span></label><input type="text" id="rfq-name" placeholder="e.g. Rahul Sharma" autocomplete="name"/><span class="field-error">Please enter your name.</span></div>

            <div class="form-row">
              <div class="fg" id="rfq-fg-email"><label>Email Address <span style="color:#d32f2f">*</span></label><input type="email" id="rfq-email" placeholder="you@company.com" autocomplete="email"/><span class="field-error">Please enter a valid email.</span></div>
              <div class="fg" id="rfq-fg-phone"><label>Phone Number <span style="color:#d32f2f">*</span></label><input type="tel" id="rfq-phone" placeholder="+91 XXXXX XXXXX" autocomplete="tel"/><span class="field-error">Please enter your phone number.</span></div>
            </div>

            <div class="fg" id="rfq-fg-company"><label>Company / Organisation <span style="color:#d32f2f">*</span></label><input type="text" id="rfq-company" placeholder="Your Company Name"/><span class="field-error">Please enter your company name.</span></div>

            <div class="form-row">
              <div class="fg" id="rfq-fg-product">
                <label>Product Interest <span style="color:#d32f2f">*</span></label>
                <select id="rfq-product">
                  <option value="">— Select Product —</option>
                  <option>Indoor Industrial Modems</option>
                  <option>Outdoor Industrial Modems</option>
                  <option>SCADA Gateways</option>
                  <option>VPN Gateways</option>
                  <option>cWAN / SD-WAN</option>
                  <option>Credo CMS</option>
                  <option>Multiple Products</option>
                  <option>Custom / Other</option>
                </select>
                <span class="field-error">Please select a product.</span>
              </div>
              <div class="fg">
                <label>Quantity / Volume</label>
                <input type="text" id="rfq-quantity" placeholder="e.g. 50 units, 100-500/year"/>
              </div>
            </div>

            <div class="form-row">
              <div class="fg">
                <label>Project Timeline</label>
                <select id="rfq-timeline">
                  <option value="">— Select Timeline —</option>
                  <option>Immediate (within 1 month)</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6+ months</option>
                  <option>Just exploring / No timeline</option>
                </select>
              </div>
              <div class="fg">
                <label>Industry</label>
                <select id="rfq-industry">
                  <option value="">— Select Industry —</option>
                  <option>Power & Utilities</option>
                  <option>Smart Cities</option>
                  <option>Oil & Gas / CGD</option>
                  <option>Water & Sanitation</option>
                  <option>Renewable Energy</option>
                  <option>Manufacturing / Industry 4.0</option>
                  <option>Telecom / ISP</option>
                  <option>Enterprise IT</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="fg" id="rfq-fg-details">
              <label>Project Details <span style="color:#d32f2f">*</span></label>
              <textarea id="rfq-details" placeholder="Tell us about your project, use case, technical requirements, or any specific configurations needed…" style="min-height:120px"></textarea>
              <span class="field-error">Please describe your project requirements.</span>
            </div>

            <div style="display:flex;gap:.75rem;align-items:flex-start;margin-bottom:1.4rem;padding:.9rem;background:rgba(242,101,0,.04);border:1px solid rgba(242,101,0,.15);border-radius:8px">
              <input type="checkbox" id="rfq-consent" style="margin-top:.25rem;accent-color:var(--primary);width:16px;height:16px;flex-shrink:0;cursor:pointer"/>
              <label for="rfq-consent" style="font-size:.82rem;color:var(--muted);line-height:1.6;cursor:pointer">
                I consent to Tenet Networks storing and using this information to process my quote request and contact me. <span style="color:#d32f2f" id="rfq-consent-err"></span>
              </label>
            </div>

            <button class="btn btn-primary" id="rfq-submit-btn" style="width:100%;justify-content:center;padding:.9rem;font-size:1rem" data-action="submitQuoteRequest" data-email="${salesEmail}">
              Submit Quote Request →
            </button>
            <p class="recaptcha-notice">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.</p>

            <p style="font-size:.76rem;color:var(--muted);text-align:center;margin-top:.9rem;line-height:1.6">
              Sent directly to <strong>${salesEmail}</strong> · We respond within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
    ${footerHTML()}
  </div>`;
}

/* ── QUOTE REQUEST SUBMIT ── */
window.submitQuoteRequest = async function(toEmail) {
  const name     = (document.getElementById('rfq-name')?.value     || '').trim();
  const email    = (document.getElementById('rfq-email')?.value    || '').trim();
  const phone    = (document.getElementById('rfq-phone')?.value    || '').trim();
  const company  = (document.getElementById('rfq-company')?.value  || '').trim();
  const product  = (document.getElementById('rfq-product')?.value  || '').trim();
  const quantity = (document.getElementById('rfq-quantity')?.value || '').trim();
  const timeline = (document.getElementById('rfq-timeline')?.value || '').trim();
  const industry = (document.getElementById('rfq-industry')?.value || '').trim();
  const details  = (document.getElementById('rfq-details')?.value  || '').trim();
  const consent  = document.getElementById('rfq-consent')?.checked;

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  const req = [
    ['rfq-fg-name',    !name],
    ['rfq-fg-email',   !emailRe.test(email)],
    ['rfq-fg-phone',   !phone],
    ['rfq-fg-company', !company],
    ['rfq-fg-product', !product],
    ['rfq-fg-details', !details],
  ];
  req.forEach(([id, err]) => { setFgError(id, err); if (err) valid = false; });
  const consentErr = document.getElementById('rfq-consent-err');
  if (!consent) { if (consentErr) consentErr.textContent = '← Please accept to proceed.'; valid = false; }
  else { if (consentErr) consentErr.textContent = ''; }
  if (!valid) { document.querySelector('.fg.has-error')?.scrollIntoView({behavior:'smooth',block:'center'}); return; }

  /* --- reCAPTCHA v3 --- */
  const recaptchaToken = await getRecaptchaToken('quote_request');
  if (!recaptchaToken) { alert('Human verification failed. Please try again.'); return; }

  const btn = document.getElementById('rfq-submit-btn');
  btn.disabled = true; btn.textContent = 'Sending…';

  try {
    const W3F_KEY = '4303e7cd-dbb6-485b-9a44-70e99576f249';
    const fd = new FormData();
    fd.append('access_key', W3F_KEY);
    fd.append('subject',    'Quote Request – ' + name + ' · ' + company + ' (' + product + ')');
    fd.append('from_name',  'Tenet Networks Quote Portal');
    fd.append('to',         toEmail);
    fd.append('replyto',    email);
    fd.append('botcheck',   '');
    fd.append('g-recaptcha-response', recaptchaToken);
    fd.append('Name',       name);
    fd.append('Email',      email);
    fd.append('Phone',      phone);
    fd.append('Company',    company);
    fd.append('Product Interest', product);
    if (quantity) fd.append('Quantity / Volume', quantity);
    if (timeline) fd.append('Project Timeline',  timeline);
    if (industry) fd.append('Industry',          industry);
    fd.append('Project Details', details);

    const res  = await fetch('https://api.web3forms.com/submit', {method:'POST', body:fd});
    const data = await res.json();
    if (data.success) {
      btn.textContent = '✓ Request Sent!';
      btn.style.background = '#2E7D32';
      document.getElementById('rfq-submit-btn').closest('.form-card').insertAdjacentHTML('beforeend',
        `<div style="text-align:center;padding:1.5rem;margin-top:1rem">
          <div style="font-size:2.5rem;margin-bottom:.6rem">📋</div>
          <h3 style="margin-bottom:.4rem">Thank you!</h3>
          <p style="color:var(--muted);font-size:.9rem">Your quote request has been sent to <strong>${toEmail}</strong>. We'll get back to you within 1–2 business days.</p>
          <button class="btn btn-ghost" style="margin-top:1.2rem" data-nav="products">← Browse Products</button>
        </div>`);
    } else { throw new Error(data.message); }
  } catch(e) {
    const subject = encodeURIComponent('Quote Request – ' + name + ' – ' + company);
    const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nPhone: '+phone+'\nCompany: '+company+'\nProduct Interest: '+product+(quantity?'\nQuantity: '+quantity:'')+(timeline?'\nTimeline: '+timeline:'')+(industry?'\nIndustry: '+industry:'')+'\n\nProject Details:\n'+details);
    window.location.href = 'mailto:'+toEmail+'?subject='+subject+'&body='+body;
    btn.disabled = false; btn.textContent = 'Submit Quote Request →';
  }
};

/* ── MAIN RENDER ROUTER ── */
function render(page, tab) {
  clearInterval(window._heroTimer);
  try {
    switch(page) {
      case 'home':     renderHome();                 break;
      case 'products': renderProducts(tab||'indoor'); break;
      case 'services': renderServices(tab||'custom'); break;
      case 'company':  renderCompany(tab||'about');   break;
      case 'partners':        renderPartners();              break;
      case 'partner-enquiry': renderPartnerEnquiry();        break;
      case 'request-quote':   renderRequestQuote();          break;
      case 'contact':         renderContact();               break;
      case 'apply':    renderApply();                 break;
      case 'article':  renderArticle(tab);            break;
      default:         renderHome();
    }
  } catch(err) {
    console.error('[render] Unhandled error on page:', page, tab, err);
    trackError(`Render failed: ${err.message}`, 'render()', { page, tab, stack: err.stack });
    const appEl = document.getElementById('app');
    if (appEl) {
      appEl.innerHTML = `
        <div style="min-height:60vh;display:flex;align-items:center;justify-content:center;padding:2rem;text-align:center;">
          <div>
            <div style="font-size:3rem;margin-bottom:1rem;">&#9888;&#65039;</div>
            <h2 style="margin-bottom:0.5rem;">Something went wrong</h2>
            <p style="opacity:0.7;margin-bottom:1.5rem;">We couldn't load this page. Please try refreshing or contact us directly.</p>
            <a href="mailto:info@tenetnetworks.com" style="color:var(--primary)">info@tenetnetworks.com</a>
            &nbsp;&middot;&nbsp;
            <a href="tel:+911204165905" style="color:var(--primary)">+91 120 4165 905</a>
          </div>
        </div>`;
    }
  }
}

/* ── STORY EXPAND ── */
/* ── FORM SUBMIT ── */
/* ── reCAPTCHA v3 helper ── */
async function getRecaptchaToken(action) {
  try {
    return await grecaptcha.execute('6LfgxqwsAAAAILhYcak_HcvNkiSCjEuu2t4rUGI', { action });
  } catch(e) { console.warn('reCAPTCHA failed', e); return null; }
}

window.submitForm = async () => {
  const btn = $('sbtn');
  btn.textContent = 'Verifying…'; btn.disabled = true;
  
  /* Try to get reCAPTCHA token (optional - won't block if it fails) */
  const token = await getRecaptchaToken('contact');
  
  /* Collect form data */
  const form = btn.closest('.form-card');
  const name = form.querySelector('input[type="text"]')?.value || '';
  const email = form.querySelector('input[type="email"]')?.value || '';
  const company = form.querySelectorAll('input[type="text"]')[1]?.value || '';
  const phone = form.querySelector('input[type="tel"]')?.value || '';
  const subject = form.querySelector('select')?.value || '';
  const message = form.querySelector('textarea')?.value || '';
  
  /* Basic validation */
  if (!name || !email || !message) {
    btn.textContent = 'Please fill required fields';
    btn.disabled = false;
    setTimeout(() => { btn.textContent = 'Send Message'; }, 2500);
    return;
  }
  
  try {
    const W3F_KEY = '4303e7cd-dbb6-485b-9a44-70e99576f249'; // Web3Forms access key
    const fd = new FormData();
    fd.append('access_key', W3F_KEY);
    fd.append('subject', 'Contact Form - ' + subject);
    fd.append('from_name', 'Tenet Networks Contact Form');
    fd.append('to', 'info@tenetnetworks.com'); // Your email
    fd.append('replyto', email);
    if (token) fd.append('g-recaptcha-response', token); // Only add if available
    fd.append('Name', name);
    fd.append('Email', email);
    if (company) fd.append('Company', company);
    if (phone) fd.append('Phone', phone);
    fd.append('Subject', subject);
    fd.append('Message', message);
    
    btn.textContent = 'Sending…';
    const res = await fetch('https://api.web3forms.com/submit', {method:'POST', body:fd});
    const data = await res.json();
    
    if (data.success) {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#2E7D32';
      form.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
    } else {
      throw new Error(data.message);
    }
  } catch(e) {
    btn.textContent = 'Error - Please try again';
    console.error('Form submission error:', e);
  }
  
  btn.disabled = false;
  setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
};

/* ── GLOBAL ERROR BOUNDARY ── */
/* Catch unhandled promise rejections and other errors */
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent default browser error handling
  event.preventDefault();
  // Show user-friendly error message
  showErrorToast('Something went wrong. Please try refreshing the page.');
});

window.addEventListener('error', event => {
  console.error('Global error:', event.error);
  // Don't show toast for resource loading errors (images, scripts)
  if (event.target !== window) return;
  showErrorToast('An unexpected error occurred. Please refresh the page.');
});

/* ── OFFLINE/ONLINE DETECTION ── */
let isOnline = navigator.onLine;

window.addEventListener('offline', () => {
  isOnline = false;
  showOfflineBanner();
});

window.addEventListener('online', () => {
  isOnline = true;
  hideOfflineBanner();
  showOnlineToast();
});

/* Show offline banner */
function showOfflineBanner() {
  // Remove existing banner if any
  hideOfflineBanner();
  
  const banner = document.createElement('div');
  banner.id = 'offline-banner';
  banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #f44336 0%, #e91e63 100%);
    color: white;
    padding: 0.75rem 1rem;
    text-align: center;
    z-index: 10000;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    animation: slideDown 0.3s ease;
  `;
  banner.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
      <span>You're offline. Some content may not be available.</span>
    </div>
  `;
  document.body.appendChild(banner);
  
  // Adjust page content to not hide under banner
  if (app) app.style.paddingTop = '3rem';
}

/* Hide offline banner */
function hideOfflineBanner() {
  const banner = document.getElementById('offline-banner');
  if (banner) {
    banner.remove();
    if (app) app.style.paddingTop = '0';
  }
}

/* Show brief "back online" toast */
function showOnlineToast() {
  showToast('✓ Back online', 'success', 2000);
}

/* Show error toast */
function showErrorToast(message) {
  showToast(message, 'error', 5000);
}

/* Generic toast notification */
function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: ${type === 'error' ? '#f44336' : type === 'success' ? '#4caf50' : '#2196F3'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10001;
    max-width: 400px;
    animation: slideUp 0.3s ease;
    cursor: pointer;
  `;
  toast.textContent = message;
  
  // Add slide up animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from { transform: translateY(100px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideDown {
      from { transform: translateY(-100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  if (!document.getElementById('toast-animations')) {
    style.id = 'toast-animations';
    document.head.appendChild(style);
  }
  
  document.body.appendChild(toast);
  
  // Click to dismiss
  toast.addEventListener('click', () => {
    toast.style.animation = 'slideUp 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  });
  
  // Auto dismiss
  setTimeout(() => {
    if (document.body.contains(toast)) {
      toast.style.animation = 'slideUp 0.3s ease reverse';
      setTimeout(() => toast.remove(), 300);
    }
  }, duration);
}

/* Check if user is currently offline on page load */
if (!navigator.onLine) {
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', showOfflineBanner);
}

/* ── INIT ── */
/* Parse the current URL pathname to restore state on page load/refresh */
function initFromHash() {
  // Support both old hash URLs and new clean URLs
  let page, tab;
  const pathname = window.location.pathname;
  const hash = window.location.hash;

  if (pathname && pathname !== '/') {
    // Clean URL e.g. /products/indoor or /article/antennas-performance
    const parts = pathname.slice(1).split('/');
    page = parts[0] || 'home';
    tab = parts[1] || null;
  } else if (hash) {
    // Legacy hash URL e.g. #products/indoor
    const parts = hash.slice(1).split('/');
    page = parts[0] || 'home';
    tab = parts[1] || null;
  } else {
    page = 'home';
    tab = null;
  }

  const url = tab ? `/${page}/${tab}` : `/${page}`;
  safeHistoryReplace({ page, tab }, url);
  currentPage = page;
  setState({ page, tab: tab || null });
  render(page, tab);
  updateMeta(page, tab);
}

/* Initialize on page load */
initFromHash();

/* Preload articles and categories after a brief delay to avoid network errors */
/* This makes subsequent navigation faster without causing console warnings */
setTimeout(() => {
  getArticles().catch(() => {});
  getCategories().catch(() => {});
}, 500);

/* ═══════════════════════════════════════
   TEAM MODAL FUNCTIONS
═══════════════════════════════════════ */
window.TEAM_DATA = null; // Will hold team data reference

window.openTeamModal = function(index) {
  if (!window.TEAM_DATA) {
    console.warn('Team data not loaded yet');
    return;
  }
  const members = window.TEAM_DATA;
  const member = members[index];
  if (!member) {
    return;
  }
  
  const overlay = document.getElementById('teamModalOverlay');
  if (!overlay) {
    console.error('Modal overlay element not found!');
    return;
  }
  
  const content = document.getElementById('teamModalContent');
  
  const photoHTML = member.photo
    ? `<img class="modal-photo" src="${GITHUB.url('team/photos/'+safeName(member.photo))}" width="400" height="400" alt="${safeName(member.name)}" />`
    : `<div class="modal-photo-fallback">${member.icon||'👤'}</div>`;
  
  const quickFactsHTML = member.quickFacts ? `
    <div class="quick-facts">
      <h4>Quick Facts</h4>
      <ul>
        ${member.quickFacts.map(fact => `<li>${fact}</li>`).join('')}
      </ul>
      ${member.currently ? `
      <div class="currently-section">
        <h4>Currently</h4>
        ${member.currently.reading ? `<div class="currently-item">${member.currently.reading}</div>` : ''}
        ${member.currently.podcast ? `<div class="currently-item">${member.currently.podcast}</div>` : ''}
      </div>
      ` : ''}
    </div>
  ` : '';
  
  const linkedinLink = member.linkedin ? `
    <a href="${member.linkedin}" target="_blank" rel="noopener" class="modal-link linkedin">
      <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      LinkedIn
    </a>
  ` : '';
  
  const emailLink = member.email ? `
    <a href="mailto:${member.email}" class="modal-link email">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      Email
    </a>
  ` : '';
  
  const taglineHTML = member.tagline ? `
    <div class="modal-tagline">"${member.tagline}"</div>
  ` : '';
  
  const expertiseHTML = member.expertise ? `
    <div class="modal-section">
      <h3>Expertise</h3>
      <ul>
        ${member.expertise.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  ` : '';
  
  const backgroundHTML = member.background ? `
    <div class="modal-section">
      <h3>Background</h3>
      <ul>
        ${member.background.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  ` : '';
  
  content.innerHTML = `
    <div class="modal-left">
      ${photoHTML}
      ${quickFactsHTML}
    </div>
    
    <div class="modal-right">
      <div class="modal-header">
        <h2 class="modal-name" id="modalTitle">${member.name}</h2>
        <div class="modal-role">${member.role}</div>
        
        <div class="modal-links">
          ${linkedinLink}
          ${emailLink}
        </div>
      </div>
      
      ${taglineHTML}
      
      <div class="modal-bio">${member.bio}</div>
      
      ${expertiseHTML}
      ${backgroundHTML}
    </div>
  `;
  
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeTeamModal = function() {
  const overlay = document.getElementById('teamModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  setState({ modal: null, modalIndex: null });
};

// Close on overlay click
setTimeout(() => {
  const overlay = document.getElementById('teamModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) {
        closeTeamModal();
      }
    });
  }
}, 100);

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const teamOverlay = document.getElementById('teamModalOverlay');
    if (teamOverlay && teamOverlay.classList.contains('active')) {
      closeTeamModal();
    }
    const storyOverlay = document.getElementById('storyModalOverlay');
    if (storyOverlay && storyOverlay.classList.contains('active')) {
      closeStoryModal();
    }
  }
});

// ══════════════════════════════════
// CUSTOMER STORY MODAL FUNCTIONS
// ══════════════════════════════════

window.openStoryModal = function(index) {
  console.log('openStoryModal called with index:', index);
  const stories = CONTENT.stories || [];
  const story = stories[index];
  if (!story) {
    console.error('No story found at index:', index);
    return;
  }
  console.log('Opening modal for:', story.title);
  
  const overlay = document.getElementById('storyModalOverlay');
  if (!overlay) {
    console.error('Story modal overlay element not found!');
    return;
  }
  
  const content = document.getElementById('storyModalContent');
  
  const impactHTML = story.bullets ? `
    <div class="story-modal-section">
      <h3>Key Impact</h3>
      <ul class="story-impact-list">
        ${story.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>
    </div>
  ` : '';
  
  content.innerHTML = `
    <div class="story-modal-header">
      <div class="story-modal-icon">${story.icon}</div>
      <div class="story-modal-header-text">
        <h2 class="story-modal-title" id="storyModalTitle">${story.title}</h2>
        <p class="story-modal-summary">${story.summary}</p>
      </div>
    </div>
    
    <div class="story-modal-body">
      <div class="story-modal-section">
        <h3>The Challenge</h3>
        <p class="story-modal-detail">${story.detail}</p>
      </div>
      
      ${impactHTML}
    </div>
  `;
  
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  setState({ modal: 'story', modalIndex: index });
};

window.closeStoryModal = function() {
  const overlay = document.getElementById('storyModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  setState({ modal: null, modalIndex: null });
};

// Close story modal on overlay click
setTimeout(() => {
  const overlay = document.getElementById('storyModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) {
        closeStoryModal();
      }
    });
  }
}, 100);

/* ═══════════════════════════════════════════════════════════════
   IMAGE PRELOADING FUNCTIONALITY
   Collects all team and article images and caches them
═══════════════════════════════════════════════════════════════ */

/* Extract image URLs from markdown content */
function extractImageUrlsFromMarkdown(mdText, basePath = 'articles/') {
  const imageUrls = [];
  
  // Match markdown image syntax: ![alt](path) or ![alt](path){attributes}
  const imageRegex = /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)(\{[^}]*\})?/g;
  let match;
  
  while ((match = imageRegex.exec(mdText)) !== null) {
    const path = match[2].trim();
    let fullUrl;
    
    if (path.startsWith('/')) {
      // Absolute path from repo root
      fullUrl = GITHUB.url(path.slice(1));
    } else if (path.startsWith('images/') || path.startsWith('media/')) {
      // Already starts with images/ or media/ - use directly from repo root
      fullUrl = GITHUB.url(path);
    } else if (path.startsWith('./images/') || path.startsWith('./media/')) {
      // Relative path with ./ prefix to images or media folder  
      fullUrl = GITHUB.url(path.slice(2));
    } else if (path.startsWith('./')) {
      // Relative to articles folder
      fullUrl = GITHUB.url(basePath + path.slice(2));
    } else {
      // Assume it's relative to articles folder
      fullUrl = GITHUB.url(basePath + path);
    }
    
    // Only add jpg and png files
    if (/\.(jpg|jpeg|png)$/i.test(fullUrl)) {
      imageUrls.push(fullUrl);
    }
  }
  
  return imageUrls;
}

/* Collect all URLs to cache (images AND article content) */
async function collectAllCacheableUrls() {
  const imageUrls = new Set(); // For images
  const contentUrls = new Set(); // For article markdown files
  
  try {
    // 1. Collect team photos
    console.log('📸 Collecting team photos...');
    try {
      const teamResponse = await fetchGH('team/team.json');
      const teamData = await teamResponse.json();
      
      // Cache team.json itself
      contentUrls.add(GITHUB.url('team/team.json'));
      
      teamData.forEach(member => {
        if (member.photo && member.photo.trim()) {
          const photoUrl = GITHUB.url('team/photos/' + safeName(member.photo));
          if (/\.(jpg|jpeg|png)$/i.test(photoUrl)) {
            imageUrls.add(photoUrl);
          }
        }
      });
      
      console.log(`✅ Found ${imageUrls.size} team photos`);
    } catch (err) {
      console.warn('⚠️ Could not fetch team photos:', err);
    }
    
    // 2. Collect articles and their images
    console.log('📸 Collecting articles and images...');
    try {
      const articlesResponse = await fetchGH('articles/articles.json');
      const articles = await articlesResponse.json();
      
      // Cache articles.json itself
      contentUrls.add(GITHUB.url('articles/articles.json'));
      
      // Also cache categories.json if it exists
      try {
        const categoriesResponse = await fetchGH('articles/categories.json');
        contentUrls.add(GITHUB.url('articles/categories.json'));
      } catch (err) {
        // Categories file might not exist, that's ok
      }
      
      // For each article, fetch its markdown and extract images
      const articlePromises = articles.map(async (article) => {
        try {
          const mdFile = article.file || `${article.id}.md`;
          const articleUrl = GITHUB.url(`articles/${mdFile}`);
          
          // Add the article markdown to content cache
          contentUrls.add(articleUrl);
          
          const mdResponse = await fetchGH(`articles/${mdFile}`);
          const mdText = await mdResponse.text();
          
          const articleImages = extractImageUrlsFromMarkdown(mdText);
          articleImages.forEach(url => imageUrls.add(url));
          
          // Also add author photo if present
          if (article.author_photo && article.author_photo.trim()) {
            const authorPhotoUrl = GITHUB.url('team/photos/' + safeName(article.author_photo));
            if (/\.(jpg|jpeg|png)$/i.test(authorPhotoUrl)) {
              imageUrls.add(authorPhotoUrl);
            }
          }
        } catch (err) {
          console.warn(`⚠️ Could not fetch article ${article.id}:`, err);
        }
      });
      
      await Promise.all(articlePromises);
      console.log(`✅ Found ${imageUrls.size} images and ${contentUrls.size} content files`);
    } catch (err) {
      console.warn('⚠️ Could not fetch articles:', err);
    }
    
    return {
      images: Array.from(imageUrls),
      content: Array.from(contentUrls)
    };
  } catch (err) {
    console.error('❌ Error collecting URLs:', err);
    return { images: [], content: [] };
  }
}

/* Trigger preloading via service worker */
async function preloadAllContent() {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    console.warn('⚠️ Service worker not available for preloading');
    return;
  }
  
  console.log('🚀 Starting content preload...');
  const startTime = Date.now();
  
  const { images, content } = await collectAllCacheableUrls();
  
  if (images.length === 0 && content.length === 0) {
    console.log('ℹ️ No content to preload');
    return;
  }
  
  console.log(`📦 Requesting cache for ${images.length} images and ${content.length} content files...`);
  
  // Send to service worker for caching
  navigator.serviceWorker.controller.postMessage({
    action: 'preloadContent',
    images: images,
    content: content
  });
  
  // Listen for completion
  const handler = (event) => {
    if (event.data && event.data.action === 'preloadComplete') {
      navigator.serviceWorker.removeEventListener('message', handler);
      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(
        `✅ Content preload complete in ${duration}s:\n` +
        `   ${event.data.imagesSuccessful}/${event.data.imagesTotal} images cached ✓\n` +
        `   ${event.data.contentSuccessful}/${event.data.contentTotal} articles cached ✓\n` +
        `   ${event.data.imagesFailed + event.data.contentFailed} failed ✗`
      );
    }
  };
  navigator.serviceWorker.addEventListener('message', handler);
}

/* Service Worker Registration with Update Notification */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('✅ Service Worker registered:', registration.scope);
        
        // Check for updates every 30 minutes
        setInterval(() => {
          registration.update();
        }, 30 * 60 * 1000);
        
        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              showUpdateNotification(newWorker);
            }
          });
        });
        
        // ✨ NEW: Trigger content preloading after SW is active
        if (navigator.serviceWorker.controller) {
          // SW already active, start preloading
          setTimeout(() => preloadAllContent(), 2000); // Small delay to not block initial load
        } else {
          // Wait for SW to become active
          navigator.serviceWorker.ready.then(() => {
            setTimeout(() => preloadAllContent(), 2000);
          });
        }
      })
      .catch(error => {
        console.warn('❌ Service Worker registration failed:', error);
      });
    
    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', event => {
      if (event.data && event.data.action === 'cacheCleared') {
        console.log('🗑️ Cache cleared by user');
      }
    });
  });
}

/* Show Update Notification */
function showUpdateNotification(newWorker) {
  // Create a subtle notification banner
  const banner = document.createElement('div');
  banner.id = 'update-banner';
  banner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.4);
      z-index: 10000;
      font-family: var(--font-h);
      display: flex;
      align-items: center;
      gap: 1rem;
      max-width: 350px;
      animation: slideIn 0.3s ease;
    ">
      <div style="flex: 1;">
        <div style="font-weight: 600; margin-bottom: 0.3rem;">Update Available!</div>
        <div style="font-size: 0.85rem; opacity: 0.9;">A new version of the site is ready.</div>
      </div>
      <button data-action="updateAndReload" style="
        background: white;
        color: var(--primary);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        font-family: var(--font-h);
        font-size: 0.85rem;
        white-space: nowrap;
      ">
        Refresh
      </button>
      <button data-action="dismissUpdate" style="
        background: transparent;
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
        padding: 0.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1.2rem;
        line-height: 1;
        width: 32px;
        height: 32px;
      ">
        ×
      </button>
    </div>
  `;
  
  document.body.appendChild(banner);
  
  // Store reference to new worker
  window.newServiceWorker = newWorker;
}

/* Update and Reload */
window.updateAndReload = function() {
  if (window.newServiceWorker) {
    window.newServiceWorker.postMessage({ action: 'skipWaiting' });
    window.location.reload();
  }
};

/* Dismiss Update Notification */
window.dismissUpdate = function() {
  const banner = document.getElementById('update-banner');
  if (banner) {
    banner.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => banner.remove(), 300);
  }
};

/* Add animations */
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

/* Developer Tools - Cache Management (accessible via console) */
window.tenetCache = {
  // Clear all caches
  clear: async function() {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ action: 'clearCache' });
      console.log('🗑️ Cache clear request sent');
    } else {
      console.warn('⚠️ No active service worker');
    }
  },
  
  // Get cache info
  info: async function() {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      // Listen for the response
      const handler = (event) => {
        if (event.data && event.data.action === 'cacheInfo') {
          navigator.serviceWorker.removeEventListener('message', handler);
          const data = event.data.data;
          Object.keys(data).forEach(cacheName => {
            console.group('📦 ' + cacheName + ' (' + data[cacheName].length + ' items)');
            data[cacheName].forEach(url => console.log('  ', url));
            console.groupEnd();
          });
        }
      };
      navigator.serviceWorker.addEventListener('message', handler);
      navigator.serviceWorker.controller.postMessage({ action: 'getCacheInfo' });
    } else {
      console.warn('⚠️ No active service worker');
    }
  },
  
  // Force update
  update: async function() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        registration.update();
        console.log('🔄 Update check initiated');
      }
    }
  },
  
  // Unregister service worker
  unregister: async function() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.unregister();
        console.log('❌ Service worker unregistered');
        location.reload();
      }
    }
  },
  
  // ✨ NEW: Manually trigger content preloading (images + articles)
  preload: async function() {
    console.log('🚀 Manually triggering content preload...');
    await preloadAllContent();
  }
};

console.log('💡 Cache management: Use tenetCache.clear(), tenetCache.info(), tenetCache.update(), tenetCache.preload(), tenetCache.unregister()');

console.log('✅ Tenet Networks website loaded');
