const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('.mobile');

function activeMenu() {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

export {mobileMenu, hamburger, activeMenu}