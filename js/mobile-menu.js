$('.mobile-menu-link').click(function(e) {
    e.preventDefault();

    $('.mobile-menu-link').toggleClass('close');
    $('body').toggleClass('menu-open')
  });