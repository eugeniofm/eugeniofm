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
