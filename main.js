const nav = document.getElementById('navbar-default');
  const buttonToggle = document.getElementById('toggle');

  buttonToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === 'false') {
      nav.setAttribute('data-visible', 'true');
      buttonToggle.setAttribute('aria-expanded', 'true');
      nav.classList.remove('translate-x-full');
      nav.classList.add('translate-x-0');
      buttonToggle.style.backgroundImage = "url('./assets/images/icon-menu-close.svg')"; // Set background image for expanded state
    } else {
      nav.setAttribute('data-visible', 'false');
      buttonToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('translate-x-0');
      nav.classList.add('translate-x-full');
      buttonToggle.style.backgroundImage = "url('./assets/images/icon-menu.svg')"; // Set background image for collapsed state
    }
  });