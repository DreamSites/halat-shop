$(document).ready(function () {
    if (localStorage.getItem("signInput") !== '') {
        document.getElementById('signInput').innerHTML = localStorage.getItem("signInput");
    }
    if (localStorage.getItem("pickedFont") !== '') {
        document.getElementById('font').innerHTML = localStorage.getItem("pickedFont");
    }
    if (localStorage.getItem("pickedBathrobeColor") !== '') {
        document.getElementById('bathrobeColor').innerHTML = localStorage.getItem("pickedBathrobeColor");
    }
    if (localStorage.getItem("pickedImage") !== '') {
        document.getElementById('pickedImage').innerHTML = localStorage.getItem("pickedImage");
    }
});