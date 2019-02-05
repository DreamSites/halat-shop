let bathrobeID = 0;
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
}