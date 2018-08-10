$(document).ready(function() {
  $('nav, a').click(function() {
    var scrollTo = $(this).attr('href');
    if ($(scrollTo).length != 0) {
      $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
      }, 500);
    }
    return false;
  });

  $('.headerScrollButton').click(function() {
    var scrollTo = $(this).attr('href');
    if ($(scrollTo).length != 0) {
      $('html, body').animate({
        scrollTop: $(scrollTo).offset().top + 30
      }, 500);
    }
    return false;
  });



  //Корзина


  var authorizeState = 'signIn'

  $('.cartIcon').click(function() {
    $('.cartExpanded').css({
      'z-index': '3',
      'opacity': '100'
    });
  });
  $('.closeCart').click(function() {
    $('.cartExpanded').css({
      'z-index': '1',
      'opacity': '0'
    });
  });
});
