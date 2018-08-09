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


  $('.cartIcon').click(function() {
    $('.cartExpanded').css({
      'display': 'block',
      'opacity': '100',
      'width': '300px',
      'height': '278px'
    });
  });
  $('.authorize').click(function() {
    if ($(this).html() == 'Войти') {
      firebase.auth().signInWithEmailAndPassword($('#userEmail').val(), $('#userPassword').val()).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.message)
        // ...
      });
    }
  })
});
