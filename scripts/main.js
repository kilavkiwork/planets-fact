document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('#hamburger');
  const mobileMenu = document.querySelector('.mobile');
  console.log(mobileMenu);

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  });

  // main
});
