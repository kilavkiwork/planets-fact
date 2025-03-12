function initMediaQuery() {
  try {
    let mediaQuery620 = window.matchMedia('(max-width: 620px)');
    let navList = document.querySelector('nav > ul');

    if (!navList) return; // Переконуємось, що елемент існує

    function updateMenu(ev) {
      navList.id = ev.matches ? 'mobile-menu' : 'desktop-menu';
    }

    mediaQuery620.addEventListener('change', updateMenu);
    updateMenu(mediaQuery620);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { initMediaQuery };
