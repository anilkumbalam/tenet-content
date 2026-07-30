/* Wait for app.js functions to be defined */
function waitForFunctions() {
  return new Promise((resolve) => {
    if (typeof navD === 'function' && typeof nav === 'function') {
      resolve();
    } else {
      setTimeout(() => waitForFunctions().then(resolve), 50);
    }
  });
}

/* Safety net: ensure functions are globally accessible */
waitForFunctions().then(() => {
  if (typeof window.navDT === 'undefined' && typeof navDT === 'function') window.navDT = navDT;
  if (typeof window.navD === 'undefined' && typeof navD === 'function') window.navD = navD;
  if (typeof window.toggleDrawer === 'undefined' && typeof toggleDrawer === 'function') window.toggleDrawer = toggleDrawer;
  if (typeof window.toggleSub === 'undefined' && typeof toggleSub === 'function') window.toggleSub = toggleSub;
  if (typeof window.closeDrawer === 'undefined' && typeof closeDrawer === 'function') window.closeDrawer = closeDrawer;
  if (typeof window.nav === 'undefined' && typeof nav === 'function') window.nav = nav;
  if (typeof window.navTab === 'undefined' && typeof navTab === 'function') window.navTab = navTab;
  if (typeof window.openTeamModal === 'undefined' && typeof openTeamModal === 'function') window.openTeamModal = openTeamModal;
  if (typeof window.closeTeamModal === 'undefined' && typeof closeTeamModal === 'function') window.closeTeamModal = closeTeamModal;
  if (typeof window.openStoryModal === 'undefined' && typeof openStoryModal === 'function') window.openStoryModal = openStoryModal;
  if (typeof window.closeStoryModal === 'undefined' && typeof closeStoryModal === 'function') window.closeStoryModal = closeStoryModal;
  if (typeof window.switchTab === 'undefined' && typeof switchTab === 'function') window.switchTab = switchTab;
  if (typeof window.goSlide === 'undefined' && typeof goSlide === 'function') window.goSlide = goSlide;
  if (typeof window.submitForm === 'undefined' && typeof submitForm === 'function') window.submitForm = submitForm;
  if (typeof window.submitApplication === 'undefined' && typeof submitApplication === 'function') window.submitApplication = submitApplication;
  if (typeof window.submitPartnerEnquiry === 'undefined' && typeof submitPartnerEnquiry === 'function') window.submitPartnerEnquiry = submitPartnerEnquiry;
  if (typeof window.submitQuoteRequest === 'undefined' && typeof submitQuoteRequest === 'function') window.submitQuoteRequest = submitQuoteRequest;
  if (typeof window.loadArticlesFromGitHub === 'undefined' && typeof loadArticlesFromGitHub === 'function') window.loadArticlesFromGitHub = loadArticlesFromGitHub;
  if (typeof window.updateAndReload === 'undefined' && typeof updateAndReload === 'function') window.updateAndReload = updateAndReload;
  if (typeof window.dismissUpdate === 'undefined' && typeof dismissUpdate === 'function') window.dismissUpdate = dismissUpdate;
  console.log('✅ Event delegation initialized');
});

/* Image Error Handling - Replace onerror inline handlers */
document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG' && e.target.dataset.fallback === 'true') {
    e.target.style.display = 'none';
    const fallback = e.target.nextElementSibling;
    if (fallback && fallback.classList.contains('team-photo-fallback')) {
      fallback.style.display = 'grid';
    }
  }
}, true);

/* Textarea Input Handling - Character count updates */
document.addEventListener('input', (e) => {
  const textarea = e.target.closest('textarea[data-action="updateCharCount"]');
  if (textarea && typeof updateCharCount === 'function') {
    const counter = textarea.dataset.counter;
    const maxLength = parseInt(textarea.dataset.maxlength, 10);
    if (counter && maxLength) {
      updateCharCount(textarea, counter, maxLength);
    }
  }
});

/* File Input Change Handling - Resume upload */
document.addEventListener('change', (e) => {
  const fileInput = e.target.closest('input[type="file"][data-action="handleResumeSelect"]');
  if (fileInput && typeof handleResumeSelect === 'function') {
    handleResumeSelect(fileInput);
  }
});

/* Keyboard Navigation - Make data-nav and data-action elements keyboard accessible */
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const target = e.target.closest('[data-nav], [data-action], [data-team-index], .card[data-tab], .tab[data-tab]');
  if (!target) return;
  // Only fire on elements that have role="button" or tabindex (i.e. ones we made accessible)
  if (target.getAttribute('role') === 'button' || target.getAttribute('tabindex') !== null) {
    e.preventDefault();
    target.click();
  }
});

/* Context Menu Prevention - Disable right-click on article body */
document.addEventListener('contextmenu', (e) => {
  if (e.target.closest('.article-body')) {
    e.preventDefault();
    return false;
  }
});

/* Event Delegation - Handle ALL clicks */
document.addEventListener('click', (e) => {
  const target = e.target.closest('a, button, div, span, [data-nav], [data-action], [data-tab]');
  if (!target) return;
  
  // Action handlers (toggleDrawer, toggleSub, submitForm, etc.)
  const actionElement = target.closest('[data-action]');
  if (actionElement && actionElement.dataset.action) {
    e.preventDefault();
    const action = actionElement.dataset.action;
    
    switch(action) {
      case 'toggleDrawer':
        if (typeof toggleDrawer === 'function') toggleDrawer();
        break;
      
      case 'toggleSub':
        if (typeof toggleSub === 'function' && actionElement.dataset.target) {
          toggleSub(actionElement.dataset.target);
        }
        break;
      
      case 'closeTeamModal':
        if (typeof closeTeamModal === 'function') closeTeamModal();
        break;
      
      case 'closeStoryModal':
        if (typeof closeStoryModal === 'function') closeStoryModal();
        break;
      
      case 'goSlide':
        if (typeof goSlide === 'function' && actionElement.dataset.slide) {
          goSlide(parseInt(actionElement.dataset.slide, 10));
        }
        break;
      
      case 'openStoryModal':
        if (typeof openStoryModal === 'function' && actionElement.dataset.story) {
          openStoryModal(parseInt(actionElement.dataset.story, 10));
        }
        break;
      
      case 'loadArticles':
        if (typeof loadArticlesFromGitHub === 'function') {
          loadArticlesFromGitHub();
        }
        break;
      
      case 'submitForm':
        if (typeof submitForm === 'function') submitForm();
        break;
      
      case 'submitApplication':
        if (typeof submitApplication === 'function' && actionElement.dataset.email) {
          submitApplication(actionElement.dataset.email);
        }
        break;
      
      case 'submitPartnerEnquiry':
        if (typeof submitPartnerEnquiry === 'function' && actionElement.dataset.email) {
          submitPartnerEnquiry(actionElement.dataset.email);
        }
        break;
      
      case 'submitQuoteRequest':
        if (typeof submitQuoteRequest === 'function' && actionElement.dataset.email) {
          submitQuoteRequest(actionElement.dataset.email);
        }
        break;
      
      case 'updateAndReload':
        if (typeof updateAndReload === 'function') updateAndReload();
        break;
      
      case 'dismissUpdate':
        if (typeof dismissUpdate === 'function') dismissUpdate();
        break;
    }
    return;
  }
  
  // Team card clicks
  const teamCard = target.closest('[data-team-index]');
  if (teamCard && !actionElement) {
    const index = parseInt(teamCard.dataset.teamIndex, 10);
    if (!isNaN(index) && typeof openTeamModal === 'function') {
      e.preventDefault();
      openTeamModal(index);
      return;
    }
  }
  
  // Tab switcher clicks (for cards with data-tab that are NOT navigation)
  const tabCard = target.closest('.card[data-tab]');
  if (tabCard && !tabCard.dataset.nav && typeof switchTab === 'function') {
    const tabId = tabCard.dataset.tab;
    if (tabId) {
      e.preventDefault();
      switchTab(tabId);
      return;
    }
  }
  
  // Tab element clicks (for .tab elements)
  const tabElement = target.closest('.tab[data-tab]');
  if (tabElement && typeof switchTab === 'function') {
    const tabId = tabElement.dataset.tab;
    if (tabId) {
      e.preventDefault();
      switchTab(tabId);
      return;
    }
  }
  
  // Navigation with nav and optional tab or article
  const navElement = target.closest('[data-nav]');
  if (navElement && navElement.dataset.nav) {
    e.preventDefault();
    const navTarget = navElement.dataset.nav;
    const tab = navElement.dataset.tab;
    const article = navElement.dataset.article;
    
    // Check if drawer is open
    const drawer = document.getElementById('drawer');
    const isDrawerOpen = drawer ? drawer.classList.contains('open') : false;
    
    // Close drawer if it's open (mobile)
    if (isDrawerOpen && typeof closeDrawer === 'function') {
      closeDrawer();
    }
    
    // Close mega menu if navigation is from within it (desktop)
    const megaMenu = navElement.closest('.mega');
    if (megaMenu) {
      const navGroup = megaMenu.closest('.nav-group');
      if (navGroup) {
        // Force close mega menu by hiding it
        megaMenu.style.display = 'none';
        // Reset after navigation completes
        setTimeout(() => {
          megaMenu.style.display = '';
        }, 100);
      }
    }
    
    if (article && typeof nav === 'function') {
      // Article navigation
      nav('article', article);
    } else if (tab && typeof navTab === 'function') {
      // Has both nav and tab - use navTab
      navTab(navTarget, tab);
    } else if (typeof nav === 'function') {
      // Just nav - use nav function directly
      nav(navTarget);
    }
    return;
  }
});
