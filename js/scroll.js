$(document).ready(function() {
  $('#navitem-1').click(function() {
    document.getElementById('navitem-1').className = 'navitem nav-active';
    document.getElementById('navitem-2').className = 'navitem';
    document.getElementById('navitem-3').className = 'navitem';
    var scroll_el = $('body');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({
        scrollTop: ($(scroll_el).offset().top - '85')
      }, 500);
    }
    return false;
  });
  $('#navitem-2').click(function() {
    document.getElementById('navitem-1').className = 'navitem';
    document.getElementById('navitem-2').className = 'navitem nav-active';
    document.getElementById('navitem-3').className = 'navitem';
    var scroll_el = $('.ourWork');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({
        scrollTop: ($(scroll_el).offset().top - '85')
      }, 500);
    }
    return false;
  });
  $('#navitem-3').click(function() {
    document.getElementById('navitem-1').className = 'navitem';
    document.getElementById('navitem-2').className = 'navitem';
    document.getElementById('navitem-3').className = 'navitem nav-active';
    var scroll_el = $('#constructorHeader');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({
        scrollTop: ($(scroll_el).offset().top - '85')
      }, 500);
    }
    return false;
  });
});
