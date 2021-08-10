(() => {
  // Header navigation
  const navLinks = document.querySelectorAll('.nav__link');
  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        document.querySelector('.nav__link--active').classList.remove('nav__link--active');
        link.classList.add('nav__link--active');
      });
    });
  }

  // Slider
  const swiper = new Swiper('.intro__slider', {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})();