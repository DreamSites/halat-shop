let bathrobeID = 0;
let bathrobeAmount = localStorage.getItem("bathrobeAmount");
let pickedSize = JSON.parse(localStorage.getItem("pickedSize"));
let signInput = JSON.parse(localStorage.getItem("signInput"));
let pickedFont = JSON.parse(localStorage.getItem("pickedFont"));
let pickedColor = JSON.parse(localStorage.getItem("pickedColor"));
let pickedBathrobeColor = JSON.parse(localStorage.getItem("pickedBathrobeColor"));
let pickedImage = JSON.parse(localStorage.getItem("pickedImage"));

$(document).ready(function () {
    getOrderInfo();

    $('#previousBathrobe').click(function () {
        bathrobeID -= 1;
        getOrderInfo();
    });

    $('#nextBathrobe').click(function () {
        bathrobeID += 1;
        getOrderInfo();
    });
});

function getOrderInfo() {
    $('#size').html(pickedSize[bathrobeID]);
    $('#signInput').html(signInput[bathrobeID]);
    $('#font').html(pickedFont[bathrobeID]);
    $('#fontColor').html(pickedColor[bathrobeID]);
    $('#bathrobeColor').html(pickedBathrobeColor[bathrobeID]);
    $('#pickedImage').html(pickedImage[bathrobeID]);
    updateBathrobeID();
    $('#fullPrice').html(parseInt(bathrobeAmount, 10) * 1790 + '₽');

    if (bathrobeID < parseInt(bathrobeAmount, 10)) {
        $('#nextBathrobe').addClass('active');
        $('#nextBathrobe img').attr('src', 'img/rightArrowActive.svg');
    }
    if (bathrobeID > 0) {
        $('#previousBathrobe').addClass('active');
        $('#previousBathrobe img').attr('src', 'img/leftArrowActive.svg');
    }
    if (bathrobeID + 1 === parseInt(bathrobeAmount, 10)) {
        $('#nextBathrobe').removeClass('active');
        $('#nextBathrobe img').attr('src', 'img/rightArrowNotActive.svg');
    }
    if (bathrobeID === 0) {
        $('#previousBathrobe').removeClass('active');
        $('#previousBathrobe img').attr('src', 'img/leftArrowNotActive.svg');
    }
}

function updateBathrobeID() {
    $('#bathrobeID').html((bathrobeID + 1) + '/' + parseInt(bathrobeAmount, 10));
}