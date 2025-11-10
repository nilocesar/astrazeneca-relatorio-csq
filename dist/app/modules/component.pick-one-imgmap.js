function PickOneImgMap(element) {
    $(element)
        .addClass('component')
        .addClass('quiz')
        .addClass('imgmap');

    var $alternativas = $(element).find('.alternativa');
    var acertou = false;
    var alt = -1;
    var $confirmar = $(element).find('.confirmar').addClass('hide');
    $(element).find('.feedback').addClass('hide');

    $alternativas.each(function (i, e) {
        addMap(i, e);
        $(this).attr('data-index', i);
        $(this).click(onAltClick);
    });

    $(element).find('.feed-close')
        .on('click', function () {
            $(element).find('.feedback').addClass('hide');
        });

    function onAltClick() {
        showMap(this);
        $alternativas.removeClass('selecionado');
        $(this).addClass('selecionado');
        alt = $(this).attr('data-index');
        if ($(this).hasClass('resposta-correta')) {
            acertou = true;
        }
        $confirmar.removeClass('hide');
        console.log('pickOneImgMap::onAltClick->', alt, 'acertou', acertou);
    }

    $confirmar.click(confirmarResposta);

    function confirmarResposta() {
        var triggerdata = {
            type: "respondido",
            pickOneImgMap: {
                acertou: acertou,
                resposta: alt
            }
        };
        console.group('pickOneImgMap::confirmarResposta', triggerdata);
        if (acertou) {
            $($(element).find('.feedback-positivo')).addClass('selecionado').removeClass('hide');
        } else {
            $($(element).find('.feedback-negativo')).addClass('selecionado').removeClass('hide');
        }
        $(element).addClass('respondido');
        $(element).addClass('lock');
        $(element).trigger(triggerdata);
        console.groupEnd();
    }

    this.loadScorm = function (index) {
        console.group('pickOneImgMap::loadScorm', index);
        $alternativas.each(function (i, e) {
            if (i == index) {
                onAltClick.call(e, i, e);
            }
        });
        confirmarResposta();
        console.groupEnd();
    }
    return this;
}
function addMap(i, e) {
    var respostaCerta = $(e).hasClass('resposta-correta');
    $(e).attr('data-hit', '.hit-' + i);
    var maps = JSON.parse($(e).attr('data-imgmap'));
    for (let index = 0; index < maps.length; index++) {
        const map = maps[index];
        var mapping = $('<div>').addClass(map).addClass('hit-' + i).addClass('imgmap-selector').addClass(respostaCerta ? "resposta-certa" : "resposta-errada");
        $('.imagem').append(mapping);
    }
}

function showMap(alternative_element) {
    $('.imgmap-selector').removeClass('selected');
    $($(alternative_element).attr('data-hit')).addClass('selected');
}

(function ($) {
    $.fn.pickOneImgMap = function () {
        $instancia = $(this);
        $instancia.data('pickOneImgMap', PickOneImgMap($instancia));
        $instancia.on('respondido', function (data) {
            console.log(data.pickOneImgMap)
            scorm.saveQuiz($instancia.attr('id'), data.pickOneImgMap.resposta);
        });
        var loadedData = scorm.loadQuiz($instancia.attr('id'));
        if (loadedData) {
            $instancia.data('pickOneImgMap').loadScorm(loadedData);
        }
        return $instancia.data('pickOneImgMap');
    };
}(jQuery));