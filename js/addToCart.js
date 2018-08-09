$(document).ready(function() {
  $('.addToCart').click(function() {
    var $input = $('#countcart');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
