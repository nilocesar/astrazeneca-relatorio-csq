/**
 * Busca uma div com o id = "loader" e aplica comportamento ao loader
 * 
 */
(function () {
	var loadingTimer = null;
	$(window).on(VIEW_EVENT.LOAD_START, function () {
		loadingTimer = setTimeout(function () {
			$("#loader").fadeIn();
		}, 1000);
	});

	$(window).on(VIEW_EVENT.LOAD_END, function () {
		clearTimeout(loadingTimer);
		$("#loader").fadeOut();
	});

	$(window).on(VIEW_EVENT.READY, function () {
		$("#loader").fadeOut();
	});
})();