$(document).ready(function() {


  //Выбор шрифта надписи


  $('#fontPicker').click(function() {
    $(this).css('height', '240px');
    $('#FP-Placeholder').css({'z-index':'1', 'opacity':'0'});
    $('#FP-1').css('z-index', '10');
    $('.FP-Item').css({'display':'block', 'opacity':'100'});
    $('.fontPicker').css('border-color', '#1EA896');
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
  })
  $('body').click(function(evt) {
    if (evt.target.id == "fontPicker")
      return;
    if ($(evt.target).closest('#fontPicker').length)
      return;
    $('#fontPicker').css('height', '50px');
    $('#FP-Placeholder').css({'z-index':'10', 'opacity':'100'});
    $('#FP-1').css('z-index', '1');
    $('.FP-Item').css({'display':'none', 'opacity':'0'});
    $('.fontPicker').css('border-color', '#C4C4C4');
  });


  //Выбор цвета надписи



  function closeCP() {
    $('#CP-Placeholder').css({'color':'black', 'opacity':'100', 'z-index':'2'});
    $('.colorPicker').css('border', '1px solid #1EA896');
    $('.colorPicker').removeClass('opened');
    $('.CP-Colors').css({'opacity':'0', 'z-index':'1'});
    $('.CP-Item').css('height', '0');
    $('.CP-Item p').css({'margin-top':'10px', 'transition':'all 0.2s ease'});
  }
  $('.CP-Placeholder').click(function() {
    $('.colorPicker').addClass('opened');
    $('.CP-Colors').css({'opacity':'100', 'z-index':'2'});
    $(this).css('opacity', '0');
    $(this).css('z-index', '1');
    $('.CP-Item').css('height', '60px');
    $('.CP-Item p').css({'margin-top':'65px', 'transition':'none'});
  });
  $('#CP-1').click(function() {
    $('#sign').css('color', '#F03434');
    $('#CP-Placeholder').html('Красный <img src="img/expandArrow.svg" alt="" style="float: right; margin-right: 15px;">');
    closeCP();
  });
  $('#CP-2').click(function() {
    $('#sign').css('color', '#FABE58');
    $('#CP-Placeholder').html('Оранжевый <img src="img/expandArrow.svg" alt="" style="float: right; margin-right: 15px;">');
    closeCP();
  });
  $('#CP-3').click(function() {
    $('#sign').css('color', '#446CB3');
    $('#CP-Placeholder').html('Синий <img src="img/expandArrow.svg" alt="" style="float: right; margin-right: 15px;">');
    closeCP();
  });
  $('#CP-4').click(function() {
    $('#sign').css('color', '#BF55EC');
    $('#CP-Placeholder').html('Фиолетовый <img src="img/expandArrow.svg" alt="" style="float: right; margin-right: 15px;">');
    closeCP();
  });
  $('#CP-5').click(function() {
    $('#sign').css('color', '#F7CA18');
    $('#CP-Placeholder').html('Золотой <img src="img/expandArrow.svg" alt="" style="float: right; margin-right: 15px;">');
    closeCP();
  });
  $('body').click(function(evt) {
    if (evt.target.id == "colorPicker")
      return;
    if ($(evt.target).closest('#colorPicker').length)
      return;
    $('.colorPicker').removeClass('opened');
    $('.CP-Colors').css({'opacity':'0', 'z-index':'1'});
    $('.CP-Placeholder').css({'opacity':'100', 'z-index':'2'});
    $('.CP-Item').css('height', '0');
    $('.CP-Item p').css({'margin-top':'10px', 'transition':'all 0.2s ease'});
  });


  //Выбор размера надписи
  $('#signSize').mouseover(function() {
    $('span').css('transition', 'none');
  });

  $('#signSize').on('input', function() {
    $(this).css('border', '1px solid #1EA896');
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background', '-webkit-linear-gradient(left, #1EA896 '+ val*100 +'%, #FFFFFF '+ val*100 +'%)');

    $('#sign').css('font-size', $(this).val() / 2);
  });
  $('body').mouseover(function(evt) {
    if (evt.target.id == "signSize")
      return;
    if ($(evt.target).closest('#signSize').length)
      return;
    $('span').css('transition', 'all 0.2s ease');
  });


  //Выбор размера халата


  $('#SP-1').click(function() {
    $('#SP-1').addClass('SP-Active');
    $('#SP-2').attr('class', 'SP SP-L');
    $('#SP-3').attr('class', 'SP SP-L');
    $('#SP-4').attr('class', 'SP');
    $('#SP-5').attr('class', 'SP SP-R');
    $('#SP-6').attr('class', 'SP SP-R');
    $('.sizePicker').css('border', '1px solid #1EA896');
    $('.SP-L').css('border-right', '1px solid #1EA896');
    $('.SP-R').css('border-left', '1px solid #1EA896');
  });
  $('#SP-2').click(function() {
    $('#SP-1').attr('class', 'SP SP-L');
    $('#SP-2').addClass('SP-Active');
    $('#SP-3').attr('class', 'SP SP-L');
    $('#SP-4').attr('class', 'SP');
    $('#SP-5').attr('class', 'SP SP-R');
    $('#SP-6').attr('class', 'SP SP-R');
    $('.sizePicker').css('border', '1px solid #1EA896');
    $('.SP-L').css('border-right', '1px solid #1EA896');
    $('.SP-R').css('border-left', '1px solid #1EA896');
  });
  $('#SP-3').click(function() {
    $('#SP-1').attr('class', 'SP SP-L');
    $('#SP-2').attr('class', 'SP SP-L');
    $('#SP-3').addClass('SP-Active');
    $('#SP-4').attr('class', 'SP');
    $('#SP-5').attr('class', 'SP SP-R');
    $('#SP-6').attr('class', 'SP SP-R');
    $('.sizePicker').css('border', '1px solid #1EA896');
    $('.SP-L').css('border-right', '1px solid #1EA896');
    $('.SP-R').css('border-left', '1px solid #1EA896');
  });
  $('#SP-4').click(function() {
    $('#SP-1').attr('class', 'SP SP-L');
    $('#SP-2').attr('class', 'SP SP-L');
    $('#SP-3').attr('class', 'SP SP-L');
    $('#SP-4').addClass('SP-Active');
    $('#SP-5').attr('class', 'SP SP-R');
    $('#SP-6').attr('class', 'SP SP-R');
    $('.sizePicker').css('border', '1px solid #1EA896');
    $('.SP-L').css('border-right', '1px solid #1EA896');
    $('.SP-R').css('border-left', '1px solid #1EA896');
  });
  $('#SP-5').click(function() {
    $('#SP-1').attr('class', 'SP SP-L');
    $('#SP-2').attr('class', 'SP SP-L');
    $('#SP-3').attr('class', 'SP SP-L');
    $('#SP-4').attr('class', 'SP');
    $('#SP-5').addClass('SP-Active');
    $('#SP-6').attr('class', 'SP SP-R');
    $('.sizePicker').css('border', '1px solid #1EA896');
    $('.SP-L').css('border-right', '1px solid #1EA896');
    $('.SP-R').css('border-left', '1px solid #1EA896');
  });
  $('#SP-6').click(function() {
    $('#SP-1').attr('class', 'SP SP-L');
    $('#SP-2').attr('class', 'SP SP-L');
    $('#SP-3').attr('class', 'SP SP-L');
    $('#SP-4').attr('class', 'SP');
    $('#SP-5').attr('class', 'SP SP-R');
    $('#SP-6').addClass('SP-Active');
    $('.sizePicker').css('border', '1px solid #1EA896');
    $('.SP-L').css('border-right', '1px solid #1EA896');
    $('.SP-R').css('border-left', '1px solid #1EA896');
  });
});
