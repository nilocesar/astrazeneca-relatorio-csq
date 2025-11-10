$('[data-toggler]').each(function () {
	var target = $(this).attr('data-target');
	var classname = $(this).attr('data-toggler');
	var toggledElement = null;
	if (target) {
		toggledElement = $(target);
	}
	$(this).click(function () {
		$(this).toggleClass(classname);
		if (toggledElement) {
			toggledElement.toggleClass(classname);
		}
	})
});