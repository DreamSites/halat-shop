$(document).ready(function () {
    $('nav, a').click(function () {
        var scrollTo = $(this).attr('href');
        if ($(scrollTo).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scrollTo).offset().top
            }, 500);
        }
        return false;
    });

// Кнопка вниз

    $('#scrollDown').click(function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 500);
        return false;
    });

// КНОПКА ВВЕРХ

    $('#scrollUp').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('#reviewButtonRight').click(function () {
        reviewID += 1;
        getReview();
    });
});
var reviewID = 0;
var dataRef = firebase.database().ref("reviews/" + reviewID);

function getReview() {
    dataRef.once("value").then(function (snapshot) {
        const reviewName = snapshot.val().name;
        const reviewText = snapshot.val().text;
        const reviewDate = snapshot.val().date;

        $('#reviewName').html(reviewName);
        $('#reviewText').html(reviewText);
        $('#reviewDate').html(reviewDate);
    });
}

getReview();

// АНИМАЦИЯ ЗАГРУЗКИ

var i = 0
while (i < 100) {
    (function (i) {
        setTimeout(function () {
            document.getElementById('reviewsLoading').style.transform = "rotate(" + 360 * (i + 2) + "deg)";
            document.getElementById('reviewsLoadingContainer').style.transform = "rotate(" + 360 * (i + 2) + "deg)";
            const nameText = document.getElementById('reviewName').innerHTML;
            if (nameText !== "Имя") {
                $('#sliderReviewsContent').css('opacity', '1');
                $('#reviewsButtons').css('opacity', '1');
                $('#reviewsLoading').css('opacity', '0');
            }
        }, 1000 * i)
    })(i++)
}
