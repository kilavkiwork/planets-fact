function initMediaQuery() {
  try {
    let mediaQuery620 = window.matchMedia('(max-width: 620px)');
    let navList = document.querySelector('nav > ul');
    let buttons = document.querySelectorAll('button.btn');

    if (!navList) return; // Переконуємось, що елемент існує

    function updateMenu(ev) {
      navList.id = ev.matches ? 'mobile-menu' : 'desktop-menu';
    }

    function updateButtonTexts() {
      buttons.forEach((button) => {
        if (mediaQuery620.matches) {
          // Менший екран, використовуємо текст для маленького екрану
          button.textContent = button.getAttribute('data-small-text');
        } else {
          // Більший екран, використовуємо текст для великого екрану
          button.textContent = button.getAttribute('data-large-text');
        }
      });
    }

    mediaQuery620.addEventListener('change', updateMenu);
    mediaQuery620.addEventListener('change', updateButtonTexts);
    updateMenu(mediaQuery620);
    updateButtonTexts(mediaQuery620);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { initMediaQuery };
