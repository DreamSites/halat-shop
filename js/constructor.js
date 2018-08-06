$(document).ready(function() {


  //Надпись


  $('#signInput').keyup(function() {
    $('#sign').html($(this).val());
  });


  //Выбор шрифта надписи



  function setActiveFP(activeFP, font) {
    $('.FP-Item').removeClass('FP-Active');
    $(activeFP).addClass('FP-Active');
    $('#sign').css('font-family', font);
    $('#FP-Placeholder').css('color', 'black');
    $('#FP-Placeholder').html(font + '<img src = "img/expandArrow.svg" alt = "" style = "float: right; margin-right: 15px;">');
  }
  $('#fontPicker').click(function() {
    $(this).css('height', '240px');
    $('#FP-Placeholder').css({
      'z-index': '1',
      'opacity': '0'
    });
    $('#FP-1').css('z-index', '10');
    $('.FP-Item').css({
      'display': 'block',
      'opacity': '100'
    });
    $(this).css('border-color', '#1EA896');
  })
  $('#FP-1').click(function() {
    setActiveFP(this, 'Academia');
  })
  $('#FP-2').click(function() {
    setActiveFP(this, 'Campus');
  })
  $('#FP-3').click(function() {
    setActiveFP(this, 'CyrillicOld');
  })
  $('#FP-4').click(function() {
    setActiveFP(this, 'Lobster-Regular');
  })
  $('#FP-5').click(function() {
    setActiveFP(this, 'MonAmour');
  })
  $('#FP-6').click(function() {
    setActiveFP(this, 'Sladkoeshka');
  })
  $('body').click(function(evt) {
    if (evt.target.id == "fontPicker")
      return;
    if ($(evt.target).closest('#fontPicker').length)
      return;
    $('#fontPicker').css('height', '50px');
    $('#FP-Placeholder').css({
      'z-index': '10',
      'opacity': '100'
    });
    $('#FP-1').css('z-index', '1');
    $('.FP-Item').css({
      'display': 'none',
      'opacity': '0'
    });
    $('.fontPicker').css('border-color', '#C4C4C4');
  });


  //Выбор цвета надписи



  function closeCP() {
    $('#CP-Placeholder').css({
      'opacity': '100',
      'z-index': '2'
    });
    $('.colorPicker').removeClass('opened');
    $('.CP-Colors').css({
      'opacity': '0',
      'z-index': '1'
    });
    $('.CP-Item').css('height', '0');
    $('.CP-Item p').css({
      'margin-top': '10px',
      'transition': 'all 0.2s ease'
    });
  }

  function pickCP(color, colorHEX) {
    $('#CP-Placeholder').css('color', 'black');
    $('#CP-Placeholder').html(color + '<img src="img/expandArrow.svg" alt="" style="float: right; margin-right: 15px;">');
    $('#sign').css('color', colorHEX);
  }
  $('.CP-Placeholder').click(function() {
    $('.colorPicker').addClass('opened');
    $('.CP-Colors').css({
      'opacity': '100',
      'z-index': '2'
    });
    $(this).css('opacity', '0');
    $(this).css('z-index', '1');
    $('.CP-Item').css('height', '60px');
    $('.CP-Item p').css({
      'margin-top': '65px',
      'transition': 'none'
    });
  });

  $('#CP-1').click(function() {
    closeCP();
    pickCP('Красный', '#F03434');
  });
  $('#CP-2').click(function() {
    closeCP();
    pickCP('Оранжевый', '#FABE58');
  });
  $('#CP-3').click(function() {
    closeCP();
    pickCP('Синий', '#446CB3');
  });
  $('#CP-4').click(function() {
    closeCP();
    pickCP('Фиолетовый', '#BF55EC');
  });
  $('#CP-5').click(function() {
    closeCP();
    pickCP('Золотой', '#F7CA18');
  });
  $('body').click(function(evt) {
    if (evt.target.id == "colorPicker")
      return;
    if ($(evt.target).closest('#colorPicker').length)
      return;
    closeCP();
  });


  //Выбор размера надписи
  $('#signSize').mouseover(function() {
    $('span').css('transition', 'none');
  });

  $('#signSize').on('input', function() {
    $(this).css('border-color', '#1EA896');
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background', '-webkit-linear-gradient(left, #1EA896 ' + val * 100 + '%, #FFFFFF ' + val * 100 + '%)');

    $('#sign').css('font-size', $(this).val() / 2);
  });

  $('#signSize').mouseout(function() {
    $('span').css('transition', 'all 0.2s ease');
    $(this).css('border-color', '#C4C4C4');

    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    $(this).css('background', '-webkit-linear-gradient(left, #C4C4C4 ' + val * 100 + '%, #FFFFFF ' + val * 100 + '%)');
  });


  //Выбор размера халата


  function setActiveSP(activeSP) {
    $('.SP').removeClass('SP-Active');
    $(activeSP).addClass('SP-Active focus');
    $('.sizePicker').css('border-color', '#1EA896');
    $('.SP-L').css('border-right-color', '#1EA896');
    $('.SP-R').css('border-left-color', '#1EA896');
  }

  $('#SP-1').click(function() {
    setActiveSP(this);
  });
  $('#SP-2').click(function() {
    setActiveSP(this);
  });
  $('#SP-3').click(function() {
    setActiveSP(this);
  });
  $('#SP-4').click(function() {
    setActiveSP(this);
  });
  $('#SP-5').click(function() {
    setActiveSP(this);
  });
  $('#SP-6').click(function() {
    setActiveSP(this);
  });

  $('.sizePicker').mouseout(function() {
    $(this).css('border-color', '#C4C4C4');
    $('.SP-L').css('border-right-color', '#C4C4C4');
    $('.SP-R').css('border-left-color', '#C4C4C4');
    $('.SP').removeClass('focus');
  });
});
