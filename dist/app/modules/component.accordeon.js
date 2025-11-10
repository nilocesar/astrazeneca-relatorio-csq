$('[data-accordeon]').each(function () {
	var $accordeon = $(this);
	var $items = $accordeon.find('.item');

	$items.click(function () {
		$items.removeClass('open');
		$(this).addClass('open');
	});
});