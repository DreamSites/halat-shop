$(document).ready(function() {
  var fontPicker = document.getElementById("fontPicker");
  var placeholder = document.getElementById("FP-Placeholder");
  var item1 = document.getElementById("FP-1");
  var item2 = document.getElementById("FP-2");
  var item3 = document.getElementById("FP-3");
  var item4 = document.getElementById("FP-4");
  var item5 = document.getElementById("FP-5");
  var item6 = document.getElementById("FP-6");
  $("#fontPicker").click(function() {
    this.style.height = "300px";
    placeholder.style.zIndex = "1";
    item1.style.zIndex = "10";
    placeholder.style.opacity = "0";
    $('.FP-Item-1').css('display', 'block')
    $('.FP-Item').css('display', 'block')
    $('.FP-Item-1').css('opacity', '100')
    $('.FP-Item').css('opacity', '100')
    $('.FP-Item').css('padding-top', '12px')
  })
  $('#FP-1').click(function() {
    this.className += " FP-Active";
    item2.className = "FP-Item";
    item3.className = "FP-Item";
    item4.className = "FP-Item";
    item5.className = "FP-Item";
    item6.className = "FP-Item";
    document.getElementById("sign").style.fontFamily = "Academia";
    placeholder.style.color = "black"
    placeholder.innerHTML = "Academia"
  })
  $('#FP-2').click(function() {
    item1.className = "FP-Item-1";
    this.className += " FP-Active";
    item3.className = "FP-Item";
    item4.className = "FP-Item";
    item5.className = "FP-Item";
    item6.className = "FP-Item";
    document.getElementById("sign").style.fontFamily = "Campus";
    placeholder.style.color = "black"
    placeholder.innerHTML = "Campus"
  })
  $('#FP-3').click(function() {
    item1.className = "FP-Item-1";
    item2.className = "FP-Item";
    this.className += " FP-Active";
    item4.className = "FP-Item";
    item5.className = "FP-Item";
    item6.className = "FP-Item";
    document.getElementById("sign").style.fontFamily = "CyrillicOld";
    placeholder.style.color = "black"
    placeholder.innerHTML = "CyrillicOld"
  })
  $('#FP-4').click(function() {
    item1.className = "FP-Item-1";
    item2.className = "FP-Item";
    item3.className = "FP-Item";
    this.className += " FP-Active";
    item5.className = "FP-Item";
    item6.className = "FP-Item";
    document.getElementById("sign").style.fontFamily = "Lobster-Regular";
    placeholder.style.color = "black"
    placeholder.innerHTML = "Lobster-Regular"
  })
  $('#FP-5').click(function() {
    item1.className = "FP-Item-1";
    item2.className = "FP-Item";
    item3.className = "FP-Item";
    item4.className = "FP-Item";
    this.className += " FP-Active";
    item6.className = "FP-Item";
    document.getElementById("sign").style.fontFamily = "MonAmour";
    placeholder.style.color = "black"
    placeholder.innerHTML = "MonAmour"
  })
  $('#FP-6').click(function() {
    item1.className = "FP-Item-1";
    item2.className = "FP-Item";
    item3.className = "FP-Item";
    item4.className = "FP-Item";
    item5.className = "FP-Item";
    this.className += " FP-Active";
    document.getElementById("sign").style.fontFamily = "Sladkoeshka";
    placeholder.style.color = "black"
    placeholder.innerHTML = "Sladkoeshka"
  })
  $('body').click(function(evt) {
    if (evt.target.id == "fontPicker")
      return;
    if ($(evt.target).closest('#fontPicker').length)
      return;
    fontPicker.style.height = "50px";
    placeholder.style.zIndex = "10";
    item1.style.zIndex = "1";
    placeholder.style.opacity = "100";
    $('.FP-Item-1').css('display', 'none')
    $('.FP-Item').css('display', 'none')
    $('.FP-Item-1').css('opacity', '0')
    $('.FP-Item').css('opacity', '0')
    $('.FP-Item').css('padding-top', '0px')
  });
});
