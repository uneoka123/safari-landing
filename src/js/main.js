(() => {
  /**
   * Добавить общие функции для закрытия по клику вне елемента и клавишой Esc
   */

  // Select
  const select = document.querySelector('.select');
  if (select) {
    select.addEventListener('click', () => {
      select.classList.toggle('select--active');
    });
  }

  // Counter
  const counters = document.querySelectorAll('.counter');
  if (counters) {
    counters.forEach((counter) => {
      const counterInput = counter.querySelector('.counter__input');
      const counterButton = counter.querySelector('.counter__button');
      const counterItems = counter.querySelectorAll('.counter__item');

      // Open list
      counter.addEventListener('click', (e) => {
        if (e.target === counterButton) {
          counter.classList.toggle('counter--active');
        } else {
          counter.classList.remove('counter--active');
        }
      });

      // Set input value
      counterItems.forEach((item) => {
        item.addEventListener('click', () => {
          counterInput.value = item.textContent;
          counter.classList.remove('counter--active');
        });
      });

      // Close when click outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.counter')) {
          counter.classList.remove('counter--active');
        }
      });

      // Keyboard event Esc
      counter.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
          counter.classList.remove('counter--active');
        }
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
