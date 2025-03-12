const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('nav > ul');
const menuItems = document.querySelectorAll('[data-menu]');

// Додаємо обробник кліку на всі пункти меню (один раз)
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Повертаємо прокрутку
  });
});

function activateMenu() {
  try {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  } catch (error) {
    console.error('Сталася помилка:', error.message);
  }
}

export { hamburger, activateMenu };

