function fontchange() {
  fontSelect = document.getElementById("fontSelect");
  value = fontSelect.options[fontSelect.selectedIndex].value;
  if (value == 1) {
    document.getElementById("sign").style.fontFamily = "Academia"
  } else if (value == 2) {
    document.getElementById("sign").style.fontFamily = "Campus"
  } else if (value == 3) {
    document.getElementById("sign").style.fontFamily = "CyrillicOld"
  } else if (value == 4) {
    document.getElementById("sign").style.fontFamily = "Lobster-Regular"
  } else if (value == 5) {
    document.getElementById("sign").style.fontFamily = "MonAmour"
  } else if (value == 6) {
    document.getElementById("sign").style.fontFamily = "Sladkoeshka"
  }
}
