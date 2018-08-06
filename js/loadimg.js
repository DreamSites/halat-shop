$(document).ready(function() {
  $('#imgButton-1').click(function() {
    $('.preview').css('padding-top', '80px');
    $('#img-1').css('opacity', '100');
    $('#img-2').css('opacity', '0');
    $('#img-3').css('opacity', '0');
    $('#img-4').css('opacity', '0');
  });
  $('#imgButton-2').click(function() {
    $('.preview').css('padding-top', '90px');
    $('#img-1').css('opacity', '0');
    $('#img-2').css('opacity', '100');
    $('#img-3').css('opacity', '0');
    $('#img-4').css('opacity', '0');
  });
  $('#imgButton-3').click(function() {
    $('.preview').css('padding-top', '100px');
    $('#img-1').css('opacity', '0');
    $('#img-2').css('opacity', '0');
    $('#img-3').css('opacity', '100');
    $('#img-4').css('opacity', '0');
  });
  $('#imgButton-4').click(function() {
    $('.preview').css('padding-top', '80px');
    $('#img-1').css('opacity', '0');
    $('#img-2').css('opacity', '0');
    $('#img-3').css('opacity', '0');
    $('#img-4').css('opacity', '100');
  });
})
