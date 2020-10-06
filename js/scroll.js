
$(document).ready(function(){
  $('.nav-js').on('click', function(event){
    event.preventDefault();

    $('body').removeClass('menu-open');
    $('.mobile-menu-link').removeClass('close');
    
    let href = $(this).attr('href');
    let headerHeight = $('.header').height();
    let offset = $(href).offset().top - headerHeight;

    $('body,html').animate({
      scrollTop: offset,
    }, 700);
  });
});

'use strict'
const moveUpEl = document.querySelector('.footer__btn-up-js');

moveUpEl.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header-wrapper').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

