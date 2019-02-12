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
        openPicker($('#cityPicker'), $('#cityPicker .deliveryPickerItem'), $('#selectedCity img'));
    });

    $(document).mouseup(function (e) {
        const cityPicker = $('#cityPicker');
        if (!cityPicker.is(e.target) && cityPicker.has(e.target).length === 0) {
            closePicker(cityPicker, $('#cityPicker .deliveryPickerItem'), $('#selectedCity img'));
        }
    });

    $('#selectedDeliveryWay').click(function () {
        openPicker($('#deliveryWayPicker'), $('#deliveryWayPicker .deliveryPickerItem'), $('#selectedDeliveryWay img'));
    });

    $(document).mouseup(function (e) {
        const deliveryWayPicker = $('#deliveryWayPicker');
        if (!deliveryWayPicker.is(e.target) && deliveryWayPicker.has(e.target).length === 0) {
            closePicker(deliveryWayPicker, $('#deliveryWayPicker .deliveryPickerItem'), $('#selectedDeliveryWay img'));
        }
    });

    $('#selectedDeliveryDay').click(function () {
        openPicker($('#deliveryDayPicker'), $('#deliveryDayPicker .deliveryPickerItem'), $('#selectedDeliveryDay img'));
    });

    $(document).mouseup(function (e) {
        const deliveryDayPicker = $('#deliveryDayPicker');
        if (!deliveryDayPicker.is(e.target) && deliveryDayPicker.has(e.target).length === 0) {
            closePicker(deliveryDayPicker, $('#deliveryDayPicker .deliveryPickerItem'), $('#selectedDeliveryDay img'));
        }
    });

    $('#selectedDeliveryTime').click(function () {
        openPicker($('#deliveryTimePicker'), $('#deliveryTimePicker .deliveryPickerItem'), $('#selectedDeliveryTime img'));
    });

    $(document).mouseup(function (e) {
        const deliveryTimePicker = $('#deliveryTimePicker');
        if (!deliveryTimePicker.is(e.target) && deliveryTimePicker.has(e.target).length === 0) {
            closePicker(deliveryTimePicker, $('#deliveryTimePicker .deliveryPickerItem'), $('#selectedDeliveryTime img'));
        }
    });
});

function openPicker(picker, pickerItem, selected) {
    picker.addClass('active');
    pickerItem.addClass('active');
    selected.css('transform', 'rotate(180deg)');
}

function closePicker(picker, pickerItem, selected) {
    picker.removeClass('active');
    pickerItem.removeClass('active');
    selected.css('transform', 'rotate(0)');
}

function pick(picker, pickerItemText, pickerItem, selected, selectedName, selectedIMG) {
    selectedName.html(pickerItemText);
    selected.addClass('picked');
    closePicker(picker, pickerItem, selectedIMG);
    checkDeliveryStage();
}

function checkDeliveryStage() {
    if ($('#selectedCityName').html() !== 'Выберите город' && $('#selectedDeliveryWayName').html() !== 'Выберите способ получения') {
        $('#address').addClass('active');
        $('#deliveryDay').addClass('active');
        $('#deliveryTime').addClass('active');
    }
}