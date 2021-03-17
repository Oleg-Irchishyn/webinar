$(window).on('load', function () {
  /*navigation buttons scroll event*/
  $('.scroll_to').each(function () {
    $(this).on('click', function (e) {
      /*variables*/
      var jump = $(this).attr('data-scroll');
      var new_position = $(jump).offset();
      let mobileNavBar = $('.header__nav-mobile-links');
      let body = $('body');
      /*variables classes*/
      mobileNavBar.removeClass('visible-mobile-navbar');
      mobileNavBar.hide();
      body.css('overflow', 'auto');
      /*scroll animation*/
      $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
      e.preventDefault();
    });
  });
});

$(document).ready(function () {
  /*mobile dropdown menu appearance toggling when a burger is being clicked*/
  (function toggleMobileNavBar() {
    let burger = $('.webinar-header .header__nav-burger');
    let innerCloseBtn = $('.webinar-header .header__nav-mobile-links .close-btn');
    let registerBtn = $('.gk-webinar .register_btn');
    let mobileNavBar = $('.webinar-header .header__nav-mobile-links');
    let body = $('body');
    burger.on('click', function () {
      mobileNavBar.addClass('visible-mobile-navbar');
      body.css('overflow', 'hidden');
    });
    innerCloseBtn.on('click', function () {
      mobileNavBar.removeClass('visible-mobile-navbar');
      body.css('overflow', 'auto');
    });
    registerBtn.each(function () {
      $(this).on('click', function () {
        mobileNavBar.removeClass('visible-mobile-navbar');
        body.css('overflow', 'auto');
      });
    });
  })();
  /* custom overflown scrollbar */
  $(function () {
    function triggerShadow(scrollTop) {
      var contentShadow = $('.content-shadow');
      if (scrollTop > 300) {
        contentShadow.addClass('top');
        contentShadow.removeClass('bottom');
      } else if (scrollTop < 300) {
        contentShadow.removeClass('top');
        contentShadow.addClass('bottom');
      }
    }
    $('.gk-webinar .infoblock').each(function () {
      $(this).overlayScrollbars({
        className: 'os-theme-dark',
        resize: 'none',
        sizeAutoCapable: false,
        nativeScrollbarsOverlaid: {
          showNativeScrollbars: false,
          initialize: true,
        },
        overflowBehavior: {
          y: 'scroll',
          x: 'hidden',
        },
        scrollbars: {
          visibility: 'auto',
          autoHide: 'never',
          dragScrolling: true,
          clickScrolling: false,
          touchSupport: true,
          snapHandle: false,
        },
        callbacks: {
          onScroll: function (e) {
            const scrollTop = e.target.scrollTop;
            triggerShadow(scrollTop);
          },
        },
      });
    });
  });

  /* sliders */
  (function initSliders() {
    let partnersSlider = $('.webinar_partners-slider');
    let newsSlider = $('.webinar_news-slider');
    /*webinar news slider logic*/
    newsSlider.slick({
      infinite: true,
      arrows: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: $('.news-slider-prev-arrow'),
      nextArrow: $('.news-slider-next-arrow'),
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            rows: 0,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            rows: 0,
          },
        },
      ],
    });
    /*webinar partners slider logic*/
    partnersSlider.slick({
      infinite: true,
      slidesPerRow: 4,
      rows: 2,
      dots: false,
      arrows: true,
      prevArrow: $('.partners-prev-arrow'),
      nextArrow: $('.partners-next-arrow'),
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesPerRow: 3,
            rows: 2,
            arrows: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesPerRow: 3,
            rows: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesPerRow: 2,
            rows: 2,
            arrows: false,
          },
        },
      ],
    });

    /*resize function for sliders*/
    $(window).resize(function () {
      partnersSlider.not('.slick-initialized').slick('resize');
      newsSlider.not('.slick-initialized').slick('resize');
    });

    $(window).on('orientationchange', function () {
      partnersSlider.not('.slick-initialized').slick('resize');
      newsSlider.not('.slick-initialized').slick('resize');
    });
  })();
});
