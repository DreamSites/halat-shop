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
    var key = childSnapshot.key;
    var childData = childSnapshot.val();

    var reviewName = childSnapshot.val().name;
    var reviewText = childSnapshot.val().text;
    var reviewDate = childSnapshot.val().date;

    document.getElementById('reviewName').innerHTML = reviewName;
    document.getElementById('reviewText').innerHTML = reviewText;
    document.getElementById('reviewDate').innerHTML = reviewDate;

  });
});

var i = 0
while (i < 100) {
  (function(i) {
    setTimeout(function() {
      document.getElementById('reviewsLoading').style.transform = "rotate(" + 360 * (i+2) + "deg)";
      var nameText = document.getElementById('reviewName').innerHTML;
      if (nameText != "Имя") {
        document.getElementById('sliderRewiewsContent').style.opacity = 1;
        document.getElementById('reviewsButtons').style.opacity = 1;
        document.getElementById('reviewsLoading').style.opacity = 0;
      }
    }, 1000 * i)
  })(i++)
}
