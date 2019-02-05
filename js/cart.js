$(document).ready(function () {
    if (localStorage.getItem("pickedSize") !== '') {
        $('#size').html(localStorage.getItem("pickedSize"));
    }
    if (localStorage.getItem("signInput") !== '') {
        $('#signInput').html(localStorage.getItem("signInput"));
    }
    if (localStorage.getItem("pickedFont") !== '') {
        $('#font').html(localStorage.getItem("pickedFont"));
    }
    if (localStorage.getItem("pickedColor") !== '') {
        $('#fontColor').html(localStorage.getItem("pickedColor"));
    }
    if (localStorage.getItem("pickedBathrobeColor") !== '') {
        $('#bathrobeColor').html(localStorage.getItem("pickedBathrobeColor"));
    }
    if (localStorage.getItem("pickedImage") !== '') {
        $('#pickedImage').html(localStorage.getItem("pickedImage"));
    }
});