window.addEventListener('scroll', () => {
    const background = document.querySelector('.header');
    const button = document.querySelector('#sing-in');
    const background_mobile = document.querySelector('.header-mobile');
    if (window.scrollY === 0) {
      background.classList.remove('header-scroll');
      button.classList.remove('sing-in_scroll');
      button.classList.add('sing-in');
      background_mobile.classList.remove('header-mobile_scroll');
    } else {
      background_mobile.classList.add('header-mobile_scroll');
      background.classList.add('header-scroll');
      button.classList.add('sing-in_scroll');
      button.classList.remove('sing-in');
    }
  })
    let opened = false;

    function toggleMenu() {
      const header__links = document.querySelector('.header-mobile__links');
      const header_mobile = document.querySelector('.header-mobile');
       if (!opened) {
        header__links.style.display = 'flex';
        header_mobile.classList.add('header-mobile_open');
        opened = true;
      } else {
        header__links.style.display = 'none';
        header_mobile.classList.remove('header-mobile_open');
        opened = false;
      }
    }