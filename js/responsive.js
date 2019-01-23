$(document).ready(function () {
    responsiveNavigation();
});
$(document).resize(function () {
    responsiveNavigation();
});

function responsiveNavigation() {
    if ($(window).width() < 1240) {
        $('.headerLeftBG nav').html(
            '<div class="circleButton" id="openNavigation">' +
            '   <img src="img/navigation.svg" alt="">' +
            '</div>' +
            '<div class="circleButton">' +
            '   <img src="img/cart.svg" alt="">' +
            '</div>' +
            '<img src="img/logo.png" alt="" class="logo">'
        );
    }
}