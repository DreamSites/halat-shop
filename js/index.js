$(document).ready(function () {
    responsiveNavigation();
    const reviewButtonRight = $('#reviewButtonRight');
    const reviewButtonLeft = $('#reviewButtonLeft');

    $('nav, a').click(function () {
        const scrollTo = $(this).attr('href');
        if ($(scrollTo).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scrollTo).offset().top
            }, 500);
        }
        return false;
    });

    $('.links, a').click(function () {
        $('#headerNavigation').css({'opacity': 0, 'z-index': 1});
        const scrollTo = $(this).attr('href');
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

    $('#openNavigation').click(function () {
        $('#headerNavigation').css({'opacity': 1, 'z-index': 3});
    });

    $('#closeNavigation').click(function () {
        $('#headerNavigation').css({'opacity': 0, 'z-index': 1});
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

    (function (global) {
        document.getElementById("order").addEventListener("click", function () {
            global.localStorage.setItem("signInput", document.getElementById("signInput").value);
        }, false);
    }(window));

    $('#selectedFont').click(function () {
        openFontPicker();
    });

    $(document).mouseup(function (e) {
        const fontPicker = $('#fontPicker');
        if (!fontPicker.is(e.target) && fontPicker.has(e.target).length === 0) {
            closeFontPicker();
        }
    });

    $('#ourWorksButtonLeft').click(function () {
        if (pickedWorkID > 1) {
            pickedWorkID -= 1;
            updateOurWorks();
            updateOurWorksMargin();
        }
    });

    $('#ourWorksButtonRight').click(function () {
        if (pickedWorkID < 6) {
            pickedWorkID += 1;
            updateOurWorks();
            updateOurWorksMargin();
        }
    });

});


let reviewID = 0;
let reviewsDotIndicatorID = 0;

function updateReviewDotIndicator() {
    const reviewsDotContainer = $('#reviewsDotsContainer').children();
    reviewsDotContainer.removeClass('active');
    reviewsDotContainer.eq(reviewsDotIndicatorID).addClass('active');
}

function updateOurWorks() {
    const ourWorksDotContainer = $('#ourWorksDotsContainer').children();
    ourWorksDotContainer.removeClass('active');
    ourWorksDotContainer.eq(pickedWorkID).addClass('active');
    const sliderPhotoContainer = $('.sliderContent');
    sliderPhotoContainer.removeClass('active');
    sliderPhotoContainer.removeClass('leftActive');
    sliderPhotoContainer.removeClass('rightActive');
    sliderPhotoContainer.eq(pickedWorkID).addClass('active');
    if ($(window).width() > 600) {
        sliderPhotoContainer.eq(pickedWorkID + 1).addClass('rightActive');
        sliderPhotoContainer.eq(pickedWorkID - 1).addClass('leftActive');
    }
    if (pickedWorkID === 1) {
        const ourWorksButtonLeft = $('#ourWorksButtonLeft');
        const ourWorksButtonRight = $('#ourWorksButtonRight');
        ourWorksButtonLeft.removeClass('active');
        ourWorksButtonLeft.html('<img src="img/leftArrowNotActive.svg" alt="">');
        ourWorksButtonRight.addClass('active');
        ourWorksButtonRight.html('<img src="img/rightArrowActive.svg" alt="">');
    } else if (pickedWorkID === 6) {
        const ourWorksButtonLeft = $('#ourWorksButtonLeft');
        const ourWorksButtonRight = $('#ourWorksButtonRight');
        ourWorksButtonLeft.addClass('active');
        ourWorksButtonLeft.html('<img src="img/leftArrowActive.svg" alt="">');
        ourWorksButtonRight.removeClass('active');
        ourWorksButtonRight.html('<img src="img/rightArrowNotActive.svg" alt="">');
    } else {
        const ourWorksButtonLeft = $('#ourWorksButtonLeft');
        const ourWorksButtonRight = $('#ourWorksButtonRight');
        ourWorksButtonLeft.addClass('active');
        ourWorksButtonLeft.html('<img src="img/leftArrowActive.svg" alt="">');
        ourWorksButtonRight.addClass('active');
        ourWorksButtonRight.html('<img src="img/rightArrowActive.svg" alt="">');
    }
}

function getReview() {
    const reviewRef = firebase.database().ref("reviews");
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
        const reviewButtonLeft = $('#reviewButtonLeft');
        const reviewButtonRight = $('#reviewButtonRight');
        reviewButtonLeft.addClass('active');
        reviewButtonLeft.html('<img src="img/leftArrowActive.svg" alt="">');
        reviewButtonRight.addClass('active');
        reviewButtonRight.html('<img src="img/rightArrowActive.svg" alt="">');
        updateReviewDotIndicator()
    } else if (reviewsDotIndicatorID === 0) {
        const reviewButtonLeft = $('#reviewButtonLeft');
        reviewButtonLeft.removeClass('active');
        reviewButtonLeft.html('<img src="img/leftArrowNotActive.svg" alt="">');
        updateReviewDotIndicator()
    } else if (reviewsDotIndicatorID === 3) {
        const reviewButtonRight = $('#reviewButtonRight');
        reviewButtonRight.removeClass('active');
        reviewButtonRight.html('<img src="img/rightArrowNotActive.svg" alt="">');
        updateReviewDotIndicator()
    }
}

getReview();

// АНИМАЦИЯ ЗАГРУЗКИ

let i = 0;
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

function responsiveNavigation() {
    if ($(window).width() > 600) {
        pickedWorkID = 1;
        updateOurWorks();
        updateOurWorksMargin();
    } else {
        pickedWorkID = 0;
        updateOurWorks();
        updateOurWorksMargin();
    }
    if ($(window).width() < 1240) {
        $('#headerLeftBG nav').html(
            '<div class="circleButton" id="openNavigation">' +
            '   <img src="img/navigation.svg" alt="">' +
            '</div>' +
            '<div class="circleButton" onclick="window.location=\'cart.html\';">' +
            '   <img src="img/cart.svg" alt="">' +
            '</div>' +
            '<img src="img/logo.png" alt="" class="logo">'
        );
        $('footer nav').html(
            '<img src="img/logo.png" alt="" class="logo">' +
            '<div class="circleButton" onclick="window.location=\'cart.html\';">' +
            '   <img src="img/cartBold.svg" alt="">' +
            '</div>'
        );
    }
    if ($(window).width() < 675) {
        $('#copyright span').text = 'Copyright 2018 Магазин халатов.';
    }
    if ($(window).width() < 600) {
        $('.sliderContent').removeClass('active');
        $('#work1').addClass('active');
    }
}

function openFontPicker() {
    $('#fontPicker').addClass('active');
    $('.fontPickerItem').addClass('active')
}

function closeFontPicker() {
    $('#fontPicker').removeClass('active');
    $('.fontPickerItem').removeClass('active')
}

function pickFont(font) {
    const selectedFont = $('#selectedFont');
    const selectedFontName = $('#selectedFontName');
    selectedFontName.html = font;
    selectedFontName.css('font-family', font);
    selectedFont.addClass('picked');
}

const ourWorksSlider = document.getElementById('ourWorksSlider');
ourWorksSlider.addEventListener("touchstart", startTouch, false);
ourWorksSlider.addEventListener("touchmove", moveTouch, false);
let pickedWorkID = 0;

function updateOurWorksMargin() {
    if ($(window).width() < 600) {
        let margin = 260 * pickedWorkID - 1;
        let marginSign = 'calc((50vw - 320px/2) - ' + margin + 'px)';
        $('#ourWorksSlider').css('margin-left', marginSign);
    } else {
        let margin = -825 * (pickedWorkID - 1);
        let marginSign = margin + 'px';
        $('#work1').css('margin-left', marginSign);
    }
}

// Swipe Up / Down / Left / Right
let initialX = null;
let initialY = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}

function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;

    let diffX = initialX - currentX;
    let diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            if (pickedWorkID < 7) {
                pickedWorkID += 1;
                updateOurWorks();
                updateOurWorksMargin();
            }
        } else {
            // swiped right
            if (pickedWorkID > 0) {
                pickedWorkID -= 1;
                updateOurWorks();
                updateOurWorksMargin();
            }
        }
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
}

function changePickedWorkID(clickedDot) {
    if (clickedDot > 0 && clickedDot < 7 && $(window).width() > 600) {
        pickedWorkID = clickedDot;
        updateOurWorks();
        updateOurWorksMargin();
    } else if ($(window).width() < 600) {
        pickedWorkID = clickedDot;
        updateOurWorks();
        updateOurWorksMargin();
    }
}

