$(document).ready(function() {

  $('#signInput').keyup(function() {
    if ($(this).val() != "") {
      $(this).css('border', '1px solid #1EA896');
    } else {
      $(this).css('border', '1px solid #C4C4C4');
    }
  });

  $('#fontPicker').click(function() {
    $(this).css('height', '240px');
    $('#FP-Placeholder').css('z-index', '1');
    $('#FP-Placeholder').css('opacity', '0');
    $('#FP-1').css('z-index', '10');
    $('.FP-Item').css('display', 'block')
    $('.FP-Item').css('opacity', '100')
  })
  $('#FP-1').click(function() {
    $(this).addClass('FP-Active');
    $(this).css('border-radius', '3px 3px 0 0');
    $('#FP-2').attr('class', 'FP-Item');
    $('#FP-3').attr('class', 'FP-Item');
    $('#FP-4').attr('class', 'FP-Item');
    $('#FP-5').attr('class', 'FP-Item');
    $('#FP-6').attr('class', 'FP-Item');
    $('#FP-6').css('border-radius', '0 0 5px 5px');
    $('#sign').css('font-family', 'Academia');
    $('#FP-Placeholder').css('color', 'black');
    $('#FP-Placeholder').html('Academia <img src = "img/expandArrow.svg" alt = "" style = "float: right; margin-right: 15px;">');
    $('.fontPicker').css('border', '1px solid #1EA896');
  })
  $('#FP-2').click(function() {
    $('#FP-1').attr('class', 'FP-Item');
    $('#FP-1').css('border-radius', '5px 5px 0 0');
    $(this).addClass('FP-Active');
    $('#FP-3').attr('class', 'FP-Item');
    $('#FP-4').attr('class', 'FP-Item');
    $('#FP-5').attr('class', 'FP-Item');
    $('#FP-6').attr('class', 'FP-Item');
    $('#FP-6').css('border-radius', '0 0 5px 5px');
    $('#sign').css('font-family', 'Campus');
    $('#FP-Placeholder').css('color', 'black');
    $('#FP-Placeholder').html('Campus <img src = "img/expandArrow.svg" alt = "" style = "float: right; margin-right: 15px;">');
    $('.fontPicker').css('border', '1px solid #1EA896');
  })
  $('#FP-3').click(function() {
    $('#FP-1').attr('class', 'FP-Item');
    $('#FP-1').css('border-radius', '5px 5px 0 0');
    $('#FP-2').attr('class', 'FP-Item');
    $(this).addClass('FP-Active');
    $('#FP-4').attr('class', 'FP-Item');
    $('#FP-5').attr('class', 'FP-Item');
    $('#FP-6').attr('class', 'FP-Item');
    $('#FP-6').css('border-radius', '0 0 5px 5px');
    $('#sign').css('font-family', 'CyrillicOld');
    $('#FP-Placeholder').css('color', 'black');
    $('#FP-Placeholder').html('CyrillicOld <img src = "img/expandArrow.svg" alt = "" style = "float: right; margin-right: 15px;">');
    $('.fontPicker').css('border', '1px solid #1EA896');
  })
  $('#FP-4').click(function() {
    $('#FP-1').attr('class', 'FP-Item');
    $('#FP-1').css('border-radius', '5px 5px 0 0');
    $('#FP-2').attr('class', 'FP-Item');
    $('#FP-3').attr('class', 'FP-Item');
    $(this).addClass('FP-Active');
    $('#FP-5').attr('class', 'FP-Item');
    $('#FP-6').attr('class', 'FP-Item');
    $('#FP-6').css('border-radius', '0 0 5px 5px');
    $('#sign').css('font-family', 'Lobster-Regular');
    $('#FP-Placeholder').css('color', 'black');
    $('#FP-Placeholder').html('Lobster-Regular <img src = "img/expandArrow.svg" alt = "" style = "float: right; margin-right: 15px;">');
    $('.fontPicker').css('border', '1px solid #1EA896');
  })
  $('#FP-5').click(function() {
    $('#FP-1').attr('class', 'FP-Item');
    $('#FP-1').css('border-radius', '5px 5px 0 0');
    $('#FP-2').attr('class', 'FP-Item');
    $('#FP-3').attr('class', 'FP-Item');
    $('#FP-4').attr('class', 'FP-Item');
    $(this).addClass('FP-Active');
    $('#FP-6').attr('class', 'FP-Item');
    $('#FP-6').css('border-radius', '0 0 5px 5px');
    $('#sign').css('font-family', 'MonAmour');
    $('#FP-Placeholder').css('color', 'black');
    $('#FP-Placeholder').html('MonAmour <img src = "img/expandArrow.svg" alt = "" style = "float: right; margin-right: 15px;">');
    $('.fontPicker').css('border', '1px solid #1EA896');
  })
  $('#FP-6').click(function() {
    $('#FP-1').attr('class', 'FP-Item');
    $('#FP-1').css('border-radius', '5px 5px 0 0');
    $('#FP-2').attr('class', 'FP-Item');
    $('#FP-3').attr('class', 'FP-Item');
    $('#FP-4').attr('class', 'FP-Item');
    $('#FP-5').attr('class', 'FP-Item');
    $(this).addClass('FP-Active');
    $(this).css('border-radius', '0 0 3px 3px');
    $('#sign').css('font-family', 'Sladkoeshka');
    $('#FP-Placeholder').css('color', 'black');
    $('#FP-Placeholder').html('Sladkoeshka <img src = "img/expandArrow.svg" alt = "" style = "float: right; margin-right: 15px;">');
    $('.fontPicker').css('border', '1px solid #1EA896');
  })
  $('body').click(function(evt) {
    if (evt.target.id == "fontPicker")
      return;
    if ($(evt.target).closest('#fontPicker').length)
      return;
    $('#fontPicker').css('height', '50px');
    $('#FP-Placeholder').css('z-index', '10');
    $('#FP-Placeholder').css('opacity', '100');
    $('#FP-1').css('z-index', '1');
    $('.FP-Item').css('display', 'none')
    $('.FP-Item').css('opacity', '0')
  });
});
