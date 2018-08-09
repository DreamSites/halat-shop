$(document).ready(function() {
  $('.addToCart').click(function () {
			var $input = $(this).parent().find('#countcart');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
