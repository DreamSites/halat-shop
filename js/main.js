$(document).ready(function() {

  // НАВИГАЦИЯ

  $('nav, a').click(function() {
    var scrollTo = $(this).attr('href');
    if ($(scrollTo).length != 0) {
      $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
      }, 500);
    }
    return false;
  });

  // Кнопка вниз

  $('#scrollDown').click(function() {
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 500);
    return false;
  });
});
