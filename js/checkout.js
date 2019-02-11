$(document).ready(function () {
    const stage = $('.stage a');
    $('#continue').click(function () {
        $('.deliveryInfo').removeClass('active');
        $('.clientInfo').addClass('active');
        stage.eq(0).css('color', 'var(--brown-grey)');
        stage.eq(1).css('color', 'var(--black)');
    });
});

