(() => {
  const select = document.querySelector('.select');
  if (select) {
    select.addEventListener('click', () => {
      select.classList.toggle('select--active');
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
