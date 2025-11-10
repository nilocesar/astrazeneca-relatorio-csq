$('[data-chained]').each(function () {
    var $chained = $(this);
    var $chainers = $($(this).attr('data-chained'));
    $chained.addClass('chained');
    $chainers.addClass('chainer');
    $chainers.click(chainerClick);

    function chainerClick() {
        $(this).removeClass('chainer');
        $(this).off('click', chainerClick);
        var lastChainers = $chainers.filter('.chainer');
        if (lastChainers.length == 0) {
            unchain();
        }
    }

    function unchain() {
        $chained.removeClass('chained');
        if ($chained.attr('data-chained-callback')) {
            try {
                window[$chained.attr('data-chained-callback')]($chained);
            } catch (e) {
                console.warn(e)
            }
        }
    }
});