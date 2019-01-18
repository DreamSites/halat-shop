$(document).ready(function () {
    let reviewButtonRight = $('#reviewButtonRight');
    let reviewButtonLeft = $('#reviewButtonLeft');

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

    reviewButtonRight.click(function () {
        reviewID += 1;
        $('#sliderReviewsContent').css({'opacity': '0', 'transition': 'all 0.2s ease'});
        getReview();
    });

    reviewButtonLeft.click(function () {
        reviewID -= 1;
        $('#sliderReviewsContent').css({'opacity': '0', 'transition': 'all 0.2s ease'});
        getReview();
    });
});


var reviewID = 0;

function getReview() {
    var reviewRef = firebase.database().ref("reviews");
    const review = reviewRef.child(reviewID);
    review.once("value").then(function (snapshot) {
        const reviewName = snapshot.val().name;
        const reviewText = snapshot.val().text;
        const reviewDate = snapshot.val().date;

        $('#reviewName').html(reviewName);
        $('#reviewText').html(reviewText);
        $('#reviewDate').html(reviewDate);
    });
    if (reviewID > 0) {
        let reviewButtonLeft = $('#reviewButtonLeft');
        reviewButtonLeft.addClass('active');
        reviewButtonLeft.html('<img src="img/leftArrowActive.svg" alt="">');
    } else {
        let reviewButtonLeft = $('#reviewButtonLeft');
        reviewButtonLeft.removeClass('active');
        reviewButtonLeft.html('<img src="img/leftArrowNotActive.svg" alt="">');
    }
};

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
