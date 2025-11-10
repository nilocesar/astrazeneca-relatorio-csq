$("[data-modal]").each(function (i, element) {
    var $botao = $(element);
    var modal_id = $botao.attr('data-modal');
    var $popup = $(modal_id);
    $popup.hide().addClass('modal');
    $botao.on('click', function () {
        $botao.addClass('clicked');
        $popup.fadeIn();
    });
    $popup.find('.modal-close')
        .on('click', function () {
            $botao.removeClass('clicked');
            $popup.fadeOut();
        })
});