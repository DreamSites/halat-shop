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

  // КНОПКА ВВЕРХ

  $('#scrollUp').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

var dataRef = firebase.database().ref("reviews").orderByKey();
dataRef.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    const reviewName = childSnapshot.val().name;
    const reviewText = childSnapshot.val().text;
    const reviewDate = childSnapshot.val().date;

    $('#reviewName').html(reviewName);
    $('#reviewText').html(reviewText);
    $('#reviewDate').html(reviewDate);

  });
});

var i = 0
while (i < 100) {
  (function(i) {
    setTimeout(function() {
      document.getElementById('reviewsLoading').style.transform = "rotate(" + 360 * (i+2) + "deg)";
      document.getElementById('reviewsLoadingContainer').style.transform = "rotate(" + 360 * (i + 2) + "deg)";
      var nameText = document.getElementById('reviewName').innerHTML;
      if (nameText !== "Имя") {
        $('#sliderReviewsContent').css('opacity', '1');
        $('#reviewsButtons').css('opacity', '1');
        $('#reviewsLoading').css('opacity', '0');
      }
    }, 1000 * i)
  })(i++)
}
