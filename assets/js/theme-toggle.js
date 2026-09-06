(() => {
  const themeMenu = document.querySelector('.theme-dropdown');
  if (!themeMenu) {
    return;
  }

  const trigger = themeMenu.querySelector(':scope > .nav-link');
  const lightOption = themeMenu.querySelector('.js-set-theme-light');
  const darkOption = themeMenu.querySelector('.js-set-theme-dark');
  const dropdown = themeMenu.querySelector('.dropdown-menu');

  if (!trigger || !lightOption || !darkOption) {
    return;
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = `${trigger.className} theme-toggle-button`;
  button.innerHTML = trigger.innerHTML;
  trigger.replaceWith(button);

  dropdown?.remove();
  themeMenu.classList.remove('dropdown', 'theme-dropdown');
  themeMenu.classList.add('theme-toggle');

  const updateButton = () => {
    const isDark = document.body.classList.contains('dark');
    const icon = button.querySelector('i');

    icon?.classList.toggle('fa-moon', isDark);
    icon?.classList.toggle('fa-sun', !isDark);
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('aria-pressed', String(isDark));
  };

  button.addEventListener('click', () => {
    const option = document.body.classList.contains('dark') ? lightOption : darkOption;
    option.click();
    requestAnimationFrame(updateButton);
  });

  document.addEventListener('wcThemeChange', () => requestAnimationFrame(updateButton));
  updateButton();
})();

(() => {
  if (window.location.pathname !== '/') {
    return;
  }

  const homeLink = document.querySelector('#navbar-main .navbar-nav .nav-link[href="/"]');
  if (!homeLink) {
    return;
  }

  homeLink.classList.add('home-current');
  homeLink.setAttribute('aria-current', 'page');
})();

(() => {
  const navbar = document.querySelector('#navbar-main');
  const toggler = navbar?.querySelector('.navbar-toggler');
  const menu = navbar?.querySelector('#navbar-content');
  const icon = toggler?.querySelector('i');

  if (!navbar || !toggler || !menu) {
    return;
  }

  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-nav-backdrop';
  backdrop.hidden = true;
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.appendChild(backdrop);

  const updateDrawerGeometry = () => {
    const navbarBottom = Math.max(0, navbar.getBoundingClientRect().bottom);
    document.documentElement.style.setProperty('--mobile-nav-top', `${navbarBottom}px`);
    document.documentElement.style.setProperty('--mobile-nav-width', `${menu.getBoundingClientRect().width}px`);
  };

  const closeMenu = () => {
    if (toggler.getAttribute('aria-expanded') === 'true') {
      toggler.click();
    }
  };

  const syncMenuState = () => {
    const isOpen = toggler.getAttribute('aria-expanded') === 'true';
    document.body.classList.toggle('mobile-nav-open', isOpen);
    backdrop.hidden = !isOpen;
    toggler.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Toggle navigation');
    icon?.classList.toggle('fa-bars', !isOpen);
    icon?.classList.toggle('fa-times', isOpen);
  };

  new MutationObserver(syncMenuState).observe(toggler, {
    attributes: true,
    attributeFilter: ['aria-expanded'],
  });

  backdrop.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
  window.addEventListener('resize', updateDrawerGeometry);
  window.addEventListener('orientationchange', updateDrawerGeometry);

  updateDrawerGeometry();
  syncMenuState();
})();

(() => {
  const researchTargets = {
    '/publication/biorob24/': '/projects/#adaptation-training-effects',
    '/publication/localization/': '/projects/#vine-robot-localization',
    '/publication/icra25/': '/projects/#inflated-rotational-joint',
    '/publication/foldpam/': '/projects/#foldpam',
  };

  for (const [publicationPath, researchPath] of Object.entries(researchTargets)) {
    document.querySelectorAll(`a[href="${publicationPath}"]`).forEach((link) => {
      link.setAttribute('href', researchPath);
    });
  }
})();
