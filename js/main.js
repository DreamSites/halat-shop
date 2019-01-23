$(document).ready(function () {
    let reviewButtonRight = $('#reviewButtonRight');
    let reviewButtonLeft = $('#reviewButtonLeft');

    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });

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
        reviewsDotIndicatorID += 1;
        $('#sliderReviewsContent').css({'opacity': '0', 'transition': 'all 0.2s ease'});
        getReview();
    });

    reviewButtonLeft.click(function () {
        reviewID -= 1;
        reviewsDotIndicatorID -= 1;
        $('#sliderReviewsContent').css({'opacity': '0', 'transition': 'all 0.2s ease'});
        getReview();
    });
});


var reviewID = 0;
var reviewsDotIndicatorID = 0;

function updateDotIndicator() {
    let reviewsDotContainer = $('#reviewsDotsContainer').children();
    reviewsDotContainer.eq(reviewsDotIndicatorID).addClass('active');
    reviewsDotContainer.eq(reviewsDotIndicatorID - 1).removeClass('active');
    reviewsDotContainer.eq(reviewsDotIndicatorID + 1).removeClass('active');
}

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
    if ((reviewsDotIndicatorID > 0) && (reviewsDotIndicatorID < 3)) {
        let reviewButtonLeft = $('#reviewButtonLeft');
        let reviewButtonRight = $('#reviewButtonRight');
        reviewButtonLeft.addClass('active');
        reviewButtonLeft.html('<img src="img/leftArrowActive.svg" alt="">');
        reviewButtonRight.addClass('active');
        reviewButtonRight.html('<img src="img/rightArrowActive.svg" alt="">');
        updateDotIndicator()
    } else if (reviewsDotIndicatorID === 0) {
        let reviewButtonLeft = $('#reviewButtonLeft');
        reviewButtonLeft.removeClass('active');
        reviewButtonLeft.html('<img src="img/leftArrowNotActive.svg" alt="">');
        updateDotIndicator()
    } else if (reviewsDotIndicatorID === 3) {
        let reviewButtonRight = $('#reviewButtonRight');
        reviewButtonRight.removeClass('active');
        reviewButtonRight.html('<img src="img/rightArrowNotActive.svg" alt="">');
        updateDotIndicator()
    }
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
                $('#reviewsDotsContainer').css('opacity', '1');
            }
        }, 1000 * i)
    })(i++)
}
