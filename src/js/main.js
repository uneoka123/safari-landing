(() => {
  /**
   * Добавить общие функции для закрытия по клику вне елемента
   * и доработать закрытие клавишой Esc
   */

  // Select
  const selects = document.querySelectorAll('.select');
  if (selects) {
    selects.forEach((select) => {
      const selectTitle = select.querySelector('.select__title');
      const selectItems = select.querySelectorAll('.select__item');

      select.addEventListener('click', () => {
        select.classList.toggle('select--active');
      });

      selectItems.forEach((item) => {
        item.addEventListener('click', () => {
          // Set text title
          selectTitle.textContent = item.textContent;
        });
      });

      // Close when click outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.select')) {
          select.classList.remove('select--active');
        }
      });

      closeEsc(select);
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

      closeEsc(counter);
    });
  }

  // Counter-buttons
  const counterButtons = document.querySelectorAll('.counter-buttons');
  if (counterButtons) {
    counterButtons.forEach((counter) => {
      const buttonAdd = counter.querySelector('.counter-buttons__button--add');
      const buttonRemove = counter.querySelector('.counter-buttons__button--remove');
      const counterInput = counter.querySelector('.counter-buttons__input');

      // Add item
      buttonAdd.addEventListener('click', () => {
        counterInput.value = parseInt(counterInput.value) + 1;
        if (parseInt(counterInput.value) > 1) {
          buttonRemove.removeAttribute('disabled');
        }
      });

      // Remove item
      buttonRemove.addEventListener('click', () => {
        if (parseInt(counterInput.value) <= 1) {
          buttonRemove.setAttribute('disabled', 'disabled');
        } else {
          counterInput.value = parseInt(counterInput.value) - 1;
        }
      });
    });
  }

  // Close element on key press
  function closeEsc(element) {
    const activeElement = element.classList.item(0) + '--active';

    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27) {
        element.classList.remove(activeElement);
      }
    });
  }

  // Scroll to top
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 900) {
        scrollTop.classList.add('scroll-top--active');
      } else {
        scrollTop.classList.remove('scroll-top--active');
      }
    });

    scrollTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0
      });
    });
  }

  // Slider
  const swiper = new Swiper('.intro__slider', {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    autoHeight: true,
    wrapperClass: 'intro__slider-wrapper',
    slideClass: 'intro__slide',
    slideActiveClass: 'intro__slide--active',

    pagination: {
      el: '.intro__pagination',
      clickable: true,
      bulletClass: 'intro__pagination-bullet',
      bulletActiveClass: 'intro__pagination-bullet--active'
    },
  });
})();
