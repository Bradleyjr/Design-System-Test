const body = document.body;

function setTheme(theme) {
  body.setAttribute('data-theme', theme);
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    // Ignore storage errors (e.g. in private mode)
  }
  const toggleIcon = document.querySelector('[data-theme-toggle] .icon');
  if (toggleIcon) {
    toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

(function initTheme() {
  let stored;
  try {
    stored = localStorage.getItem('theme');
  } catch (error) {
    stored = null;
  }
  const prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  setTheme(theme);
})();

document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Password toggle
body.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('[data-password-toggle]')) {
    const input = target.closest('.field').querySelector('input');
    if (input) {
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      target.textContent = type === 'password' ? 'Show' : 'Hide';
      input.focus();
    }
  }
});

// Split button menu
const splitToggle = document.querySelector('[data-split-menu]');
const splitMenu = document.querySelector('[data-split-menu-list]');

if (splitToggle && splitMenu) {
  splitToggle.addEventListener('click', () => {
    const expanded = splitToggle.getAttribute('aria-expanded') === 'true';
    splitToggle.setAttribute('aria-expanded', String(!expanded));
    splitMenu.hidden = expanded;
  });

  splitMenu.addEventListener('click', (event) => {
    const item = event.target.closest('button');
    if (!item) return;
    splitToggle.setAttribute('aria-expanded', 'false');
    splitMenu.hidden = true;
    showToast();
  });

  document.addEventListener('click', (event) => {
    if (!splitMenu.hidden && !splitMenu.contains(event.target) && !splitToggle.contains(event.target)) {
      splitToggle.setAttribute('aria-expanded', 'false');
      splitMenu.hidden = true;
    }
  });
}

// Tabs
function initTabs(tabsEl) {
  const tabButtons = Array.from(tabsEl.querySelectorAll('[role="tab"]'));
  const panels = Array.from(tabsEl.querySelectorAll('[role="tabpanel"]'));

  function activateTab(newTab) {
    const controlsId = newTab.getAttribute('aria-controls');
    if (!controlsId) return;
    tabButtons.forEach((tab) => {
      const isActive = tab === newTab;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
      if (isActive) {
        tab.focus();
      }
    });

    panels.forEach((panel) => {
      const isActive = panel.id === controlsId;
      panel.classList.toggle('is-active', isActive);
    });
  }

  tabButtons.forEach((tab) => {
    tab.setAttribute('tabindex', tab.classList.contains('is-active') ? '0' : '-1');
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      const currentIndex = tabButtons.indexOf(tab);
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        const nextTab = tabButtons[(currentIndex + 1) % tabButtons.length];
        activateTab(nextTab);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        const prevTab = tabButtons[(currentIndex - 1 + tabButtons.length) % tabButtons.length];
        activateTab(prevTab);
      } else if (event.key === 'Home') {
        event.preventDefault();
        activateTab(tabButtons[0]);
      } else if (event.key === 'End') {
        event.preventDefault();
        activateTab(tabButtons[tabButtons.length - 1]);
      }
    });
  });
}

document.querySelectorAll('[data-tabs]').forEach(initTabs);

// Toast
const toastTrigger = document.querySelector('[data-toast-trigger]');
const toast = document.querySelector('.toast');
const toastDismiss = document.querySelector('[data-toast-dismiss]');
let toastTimeout;

function showToast() {
  if (!toast) return;
  toast.hidden = false;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.hidden = true;
  }, 4000);
}

toastTrigger?.addEventListener('click', showToast);
toastDismiss?.addEventListener('click', () => {
  toast.hidden = true;
  clearTimeout(toastTimeout);
});

// Modal
document.querySelector('[data-modal-open]')?.addEventListener('click', () => {
  const dialog = document.querySelector('[data-modal]');
  if (!dialog) return;
  dialog.showModal();
  dialog.classList.add('is-open');
});

// Popover
const popoverTrigger = document.querySelector('[data-popover-trigger]');
const popover = document.querySelector('.popover');
const popoverClose = document.querySelector('[data-popover-close]');

if (popoverTrigger && popover) {
  popoverTrigger.addEventListener('click', () => {
    const expanded = popoverTrigger.getAttribute('aria-expanded') === 'true';
    popoverTrigger.setAttribute('aria-expanded', String(!expanded));
    popover.hidden = expanded;
  });

  document.addEventListener('click', (event) => {
    if (!popover.contains(event.target) && !popoverTrigger.contains(event.target)) {
      popoverTrigger.setAttribute('aria-expanded', 'false');
      popover.hidden = true;
    }
  });
}

popoverClose?.addEventListener('click', () => {
  popoverTrigger?.setAttribute('aria-expanded', 'false');
  if (popover) popover.hidden = true;
});

// Drawer
const drawer = document.querySelector('[data-drawer]');
const drawerOpen = document.querySelector('[data-drawer-open]');
const drawerCloseElements = document.querySelectorAll('[data-drawer-close]');

function openDrawer() {
  if (!drawer) return;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  if (!drawer) return;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
}

drawerOpen?.addEventListener('click', openDrawer);
drawerCloseElements.forEach((el) => el.addEventListener('click', closeDrawer));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeDrawer();
    const dialog = document.querySelector('[data-modal]');
    if (dialog?.open) {
      dialog.close('cancel');
    }
  }
});

// Close drawer when scrim is clicked
drawer?.querySelector('.drawer__scrim')?.addEventListener('click', closeDrawer);

// Provide interactive feedback for segmented control
const segmented = document.querySelector('.segmented');
if (segmented) {
  segmented.addEventListener('click', (event) => {
    const button = event.target.closest('.segmented__item');
    if (!button) return;
    segmented.querySelectorAll('.segmented__item').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
  });
}

// Prevent focus trap issues when closing dialog via form buttons
document.querySelector('[data-modal] form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.closest('dialog')?.close('confirm');
  showToast();
});

// Keep modal class in sync when opened
const modal = document.querySelector('[data-modal]');
if (modal) {
  if (modal.open) {
    modal.classList.add('is-open');
  }
  modal.addEventListener('close', () => {
    modal.classList.remove('is-open');
  });
  modal.addEventListener('cancel', () => {
    modal.classList.remove('is-open');
  });
}
