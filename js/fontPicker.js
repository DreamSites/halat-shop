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
    placeholder.innerHTML = 'Academia <svg id="FP-DownArrow" style="position: absolute; top: 21px; right: 10px;" width="16px" height="10px" viewBox="0 0 16 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.3"><g id="Desktop-HD" transform="translate(-684.000000, -1453.000000)" fill="#000000" fill-rule="nonzero"><g id="Group-2" transform="translate(218.000000, 1431.000000)"><g id="noun_down-arrow_661476" transform="translate(466.000000, 22.000000)"><polygon id="Shape" points="0 0 7.66666667 10 15.3333333 0"></polygon></g></g></g></g></svg>'
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
    placeholder.innerHTML = 'Campus <svg id="FP-DownArrow" style="position: absolute; top: 21px; right: 10px;" width="16px" height="10px" viewBox="0 0 16 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.3"><g id="Desktop-HD" transform="translate(-684.000000, -1453.000000)" fill="#000000" fill-rule="nonzero"><g id="Group-2" transform="translate(218.000000, 1431.000000)"><g id="noun_down-arrow_661476" transform="translate(466.000000, 22.000000)"><polygon id="Shape" points="0 0 7.66666667 10 15.3333333 0"></polygon></g></g></g></g></svg>'
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
    placeholder.innerHTML = 'CyrillicOld <svg id="FP-DownArrow" style="position: absolute; top: 21px; right: 10px;" width="16px" height="10px" viewBox="0 0 16 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.3"><g id="Desktop-HD" transform="translate(-684.000000, -1453.000000)" fill="#000000" fill-rule="nonzero"><g id="Group-2" transform="translate(218.000000, 1431.000000)"><g id="noun_down-arrow_661476" transform="translate(466.000000, 22.000000)"><polygon id="Shape" points="0 0 7.66666667 10 15.3333333 0"></polygon></g></g></g></g></svg>'
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
    placeholder.innerHTML = 'Lobster-Regular <svg id="FP-DownArrow" style="position: absolute; top: 21px; right: 10px;" width="16px" height="10px" viewBox="0 0 16 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.3"><g id="Desktop-HD" transform="translate(-684.000000, -1453.000000)" fill="#000000" fill-rule="nonzero"><g id="Group-2" transform="translate(218.000000, 1431.000000)"><g id="noun_down-arrow_661476" transform="translate(466.000000, 22.000000)"><polygon id="Shape" points="0 0 7.66666667 10 15.3333333 0"></polygon></g></g></g></g></svg>'
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
    placeholder.innerHTML = 'MonAmour <svg id="FP-DownArrow" style="position: absolute; top: 21px; right: 10px;" width="16px" height="10px" viewBox="0 0 16 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.3"><g id="Desktop-HD" transform="translate(-684.000000, -1453.000000)" fill="#000000" fill-rule="nonzero"><g id="Group-2" transform="translate(218.000000, 1431.000000)"><g id="noun_down-arrow_661476" transform="translate(466.000000, 22.000000)"><polygon id="Shape" points="0 0 7.66666667 10 15.3333333 0"></polygon></g></g></g></g></svg>'
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
    placeholder.innerHTML = 'Sladkoeshka <svg id="FP-DownArrow" style="position: absolute; top: 21px; right: 10px;" width="16px" height="10px" viewBox="0 0 16 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.3"><g id="Desktop-HD" transform="translate(-684.000000, -1453.000000)" fill="#000000" fill-rule="nonzero"><g id="Group-2" transform="translate(218.000000, 1431.000000)"><g id="noun_down-arrow_661476" transform="translate(466.000000, 22.000000)"><polygon id="Shape" points="0 0 7.66666667 10 15.3333333 0"></polygon></g></g></g></g></svg>'
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
