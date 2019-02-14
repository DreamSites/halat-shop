const bathrobeAmount = parseInt(localStorage.getItem("bathrobeAmount"), 10);

$(document).ready(function () {
    const stage = $('.stage a');
    $('#continue').click(function () {

        const cityName = $('#selectedCityName').html();
        const deliveryWayName = $('#selectedDeliveryWayName').html();
        const deliveryDayName = $('#selectedDeliveryDayName').html();
        const deliveryTimeName = $('#selectedDeliveryTimeName').html();
        const address = $('#addressInput').val();

        if (cityName !== "Выберите город" && deliveryWayName !== "Выберите способ получения" && deliveryDayName !== "Выберите дату доставки" && deliveryTimeName !== "Выберите время доставки" && address !== "") {
            $('.deliveryInfo').removeClass('active');
            $('.clientInfo').addClass('active');
            stage.eq(0).css('color', 'var(--brown-grey)');
            stage.eq(1).css('color', 'var(--black)');
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        }
        if (cityName === "Выберите город") {
            $('#cityError').css('opacity', 1);
        } else {
            $('#cityError').css('opacity', 0);
        }
        if (deliveryWayName === "Выберите способ получения") {
            $('#deliveryWayError').css('opacity', 1);
        } else {
            $('#deliveryWayError').css('opacity', 0);
        }
        if (deliveryDayName === "Выберите дату доставки") {
            $('#deliveryDateError').css('opacity', 1);
        } else {
            $('#deliveryDateError').css('opacity', 0);
        }
        if (deliveryTimeName === "Выберите время доставки") {
            $('#deliveryTimeError').css('opacity', 1);
        } else {
            $('#deliveryTimeError').css('opacity', 0);
        }
        if (address === "") {
            $('#addressError').css('opacity', 1);
        } else {
            $('#addressError').css('opacity', 0);
        }

    });
    $('#checkoutButton').click(function () {
        const nameInput = $('#nameInput').val();
        const phoneNumberInput = $('#phoneNumberInput').val();
        const emailInput = $('#emailInput').val();

        if (nameInput !== '' && emailInput !== '' && phoneNumberInput.length === 18) {
            $('.clientInfo').removeClass('active');
            $('.checkoutEnd').addClass('active');
            stage.eq(1).css('color', 'var(--brown-grey)');
            stage.eq(2).css('color', 'var(--black)');
            $('.leftCircle h2').css({'opacity': 0});

        }
        if (nameInput === '') {
            $('#nameError').css('opacity', 1);
        } else {
            $('#nameError').css('opacity', 0);
        }
        if (phoneNumberInput.length !== 18) {
            $('#phoneError').css('opacity', 1);
        } else {
            $('#phoneError').css('opacity', 0);
        }
        if (emailInput === '') {
            $('#emailError').css('opacity', 1);
        } else {
            $('#emailError').css('opacity', 0);
        }

    });

    $('#deliveryStage').click(function () {
        $('.deliveryInfo').addClass('active');
        $('.clientInfo').removeClass('active');
        $('.checkoutEnd').removeClass('active');
        $(this).css('color', 'var(--black)');
        $('#yourInfoStage').css('color', 'var(--brown-grey)');
        $('#doneStage').css('color', 'var(--brown-grey)');
    });

    $('#yourInfoStage').click(function () {
        $('.deliveryInfo').removeClass('active');
        $('.clientInfo').addClass('active');
        $('.checkoutEnd').removeClass('active');
        stage.eq(3).css('color', 'var(--brown-grey)');
        stage.eq(4).css('color', 'var(--black)');
        $(this).css('color', 'var(--black)');
        $('#deliveryStage').css('color', 'var(--brown-grey)');
        $('#doneStage').css('color', 'var(--brown-grey)');
    });



    $('#selectedCity').click(function () {
        openPicker($('#cityPicker'), $('#cityPicker .deliveryPickerItem'), $('#selectedCity img'));
        $('#arrowCity').toggleClass('flip');
    });

    $(document).mouseup(function (e) {
        const cityPicker = $('#cityPicker');
        if (!cityPicker.is(e.target) && cityPicker.has(e.target).length === 0) {
            closePicker(cityPicker, $('#cityPicker .deliveryPickerItem'), $('#selectedCity img'));
        }
    });

    $('#selectedDeliveryWay').click(function () {
        openPicker($('#deliveryWayPicker'), $('#deliveryWayPicker .deliveryPickerItem'), $('#selectedDeliveryWay img'));
        $('#arrowDeliveryWay').toggleClass('flip');
    });

    $(document).mouseup(function (e) {
        const deliveryWayPicker = $('#deliveryWayPicker');
        if (!deliveryWayPicker.is(e.target) && deliveryWayPicker.has(e.target).length === 0) {
            closePicker(deliveryWayPicker, $('#deliveryWayPicker .deliveryPickerItem'), $('#selectedDeliveryWay img'));
        }
    });

    $('#selectedDeliveryDay').click(function () {
        openPicker($('#deliveryDayPicker'), $('#deliveryDayPicker .deliveryPickerItem'), $('#selectedDeliveryDay img'));
        $('#arrowDate').toggleClass('flip');
    });

    $(document).mouseup(function (e) {
        const deliveryDayPicker = $('#deliveryDayPicker');
        if (!deliveryDayPicker.is(e.target) && deliveryDayPicker.has(e.target).length === 0) {
            closePicker(deliveryDayPicker, $('#deliveryDayPicker .deliveryPickerItem'), $('#selectedDeliveryDay img'));
        }
    });

    $('#selectedDeliveryTime').click(function () {
        openPicker($('#deliveryTimePicker'), $('#deliveryTimePicker .deliveryPickerItem'), $('#selectedDeliveryTime img'));
        $('#arrowTime').toggleClass('flip');
    });

    $(document).mouseup(function (e) {
        const deliveryTimePicker = $('#deliveryTimePicker');
        if (!deliveryTimePicker.is(e.target) && deliveryTimePicker.has(e.target).length === 0) {
            closePicker(deliveryTimePicker, $('#deliveryTimePicker .deliveryPickerItem'), $('#selectedDeliveryTime img'));
        }
    });

    responsiveNavigation();
});

function openPicker(picker, pickerItem, selected) {
    picker.toggleClass('active');
    pickerItem.toggleClass('active');
}

function closePicker(picker, pickerItem, selected) {
    picker.removeClass('active');
    pickerItem.removeClass('active');
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
        $('#address').addClass('active');
        $('#deliveryDay').addClass('active');
        $('#deliveryTime').addClass('active');
    }
}

const phoneMask = new IMask(
    document.getElementById('phoneNumberInput'), {
        mask: '+{7} (000) 000-00-00'
    });

$('#bathrobePrice').html(3190 * bathrobeAmount + '₽');
$('#fullPrice').html(3190 * bathrobeAmount + 500 + '₽');

$(window).resize(function () {
    responsiveNavigation();
});

function responsiveNavigation() {
    if ($(window).width() > 1270) {
        $('#rightNav').html(
            '<div class="navItem" id="phone">' +
            '      <img alt="" src="img/phoneBlue.svg">' +
            '      +7 (937) 667-98-49' +
            '    </div>' +
            '    <div class="navItem">' +
            '      <img alt="" src="img/leftArrowBlue.svg">' +
            '      <a href="cart.html">Назад в корзину</a>' +
            '    </div>')
    }
    if ($(window).width() < 1270) {
        $('#rightNav').html(
            '<div class="circleButton" id="home" onclick="window.location=\'cart.html\';">' +
            '      <img alt="" src="img/leftArrowBlue.svg">' +
            '    </div>' +
            '    <div class="stage">')
    }
}