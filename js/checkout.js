$(document).ready(function () {
    const stage = $('.stage a');
    $('#continue').click(function () {
        $('.deliveryInfo').removeClass('active');
        $('.clientInfo').addClass('active');
        stage.eq(0).css('color', 'var(--brown-grey)');
        stage.eq(1).css('color', 'var(--black)');
    });
    $('#checkoutButton').click(function () {
        $('.clientInfo').removeClass('active');
        $('.checkoutEnd').addClass('active');
        stage.eq(1).css('color', 'var(--brown-grey)');
        stage.eq(2).css('color', 'var(--black)');
    });

    $('#selectedCity').click(function () {
        openCityPicker();
    });

    $(document).mouseup(function (e) {
        const cityPicker = $('#cityPicker');
        if (!cityPicker.is(e.target) && cityPicker.has(e.target).length === 0) {
            closeCityPicker();
        }
    });

    $('#selectedDeliveryWay').click(function () {
        openDeliveryWayPicker();
    });

    $(document).mouseup(function (e) {
        const deliveryWayPicker = $('#deliveryWayPicker');
        if (!deliveryWayPicker.is(e.target) && deliveryWayPicker.has(e.target).length === 0) {
            closeDeliveryWayPicker();
        }
    });
});

function openCityPicker() {
    $('#cityPicker').addClass('active');
    $('#cityPicker .deliveryPickerItem').addClass('active');
    $('#selectedCity img').css('transform', 'rotate(180deg)');
}

function closeCityPicker() {
    $('#cityPicker').removeClass('active');
    $('#cityPicker .deliveryPickerItem').removeClass('active');
    $('#selectedCity img').css('transform', 'rotate(0)');
}

function pickCity(city) {
    $('#selectedCityName').html(city);
    $('#selectedCity').addClass('picked');
    closeCityPicker();
}

function openDeliveryWayPicker() {
    $('#deliveryWayPicker').addClass('active');
    $('#deliveryWayPicker .deliveryPickerItem').addClass('active');
    $('#selectedDeliveryWay img').css('transform', 'rotate(180deg)');
}

function closeDeliveryWayPicker() {
    $('#deliveryWayPicker').removeClass('active');
    $('#deliveryWayPicker .deliveryPickerItem').removeClass('active');
    $('#selectedDeliveryWay img').css('transform', 'rotate(0)');
}

function pickDeliveryWay(deliveryWay) {
    $('#selectedDeliveryWayName').html(deliveryWay);
    $('#selectedDeliveryWay').addClass('picked');
    closeDeliveryWayPicker();
}