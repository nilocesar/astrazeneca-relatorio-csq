function PickOneSentence(element, callback) {
	$(element).addClass('PickOneSentence');
	var $alternativas = $(element).find('.alternativa');
	var acertou = false;
	var alt = -1;
	$(element).find('.feedback').addClass('hide');
	$alternativas.each(function (i, e) {
		$(this).attr('data-index', i);
		$(this).click(onAltClick);
	});

	function onAltClick() {
		$(element).trigger('selecionou');
		$alternativas.removeClass('selecionado');
		$(this).addClass('selecionado');
		if ($(this).hasClass('resposta-correta')) {
			acertou = true;
		}
		alt = $(this).attr('data-index');
	}
	this.confirmarResposta = function () {
		if (acertou) {
			$($(element).find('.feedback-positivo')).addClass('selecionado').removeClass('hide');
		} else {
			$($(element).find('.feedback-negativo')).addClass('selecionado').removeClass('hide');
		}
		$(element).addClass('respondido');
		$(element).addClass('lock');
		var callbackData = {
			type: "respondido",
			respostaSentenca: {
				acertou: acertou,
				resposta: alt
			}
		};
		callback(callbackData);
		$(element).trigger(callbackData);
	}
	this.loadScorm = function (index) {
		console.log('loadd', index)
		try {
			$alternativas.each(function (i, e) {
				if (i == index) {
					onAltClick.call(e, i, e);
				}
			});
		} catch (e) {}
	}
	return this;
}

function PickVF(element) {
	var $element = $(element);
	$element
		.addClass('component')
		.addClass('quiz')
		.addClass('pick-vf');

	var $confirmar = $element.find('.confirmar').addClass('hide');
	$element.find('.feedback').addClass('hide');
	var $sentencasElements = $(element).find('.sentenca');
	var $sentencas = $sentencasElements.map(function () {
		return new PickOneSentence($(this), function (e) {
			respostas.push(e.respostaSentenca);
			update();
		});
	});
	var totalSelected = 0;
	$sentencasElements.on('selecionou', function (e) {
		totalSelected++;
		if (totalSelected >= $sentencasElements.length) {
			$confirmar.removeClass('hide');
		}
	});
	var respostas = [];
	$('.close').click(function () {
		$element.find('.feedback').addClass('hide');
	});

	function update() {
		if (respostas.length == $sentencasElements.length) {
			var acertou = true;
			for (let index = 0; index < respostas.length; index++) {
				const resposta = respostas[index];
				acertou = resposta.acertou;
				if (!acertou) break;
			}
			var callbackData = {
				type: "finalizado",
				pickVF: {
					acertou: acertou,
					resposta: respostas
				}
			};

			$(element).trigger(callbackData);
			if (acertou) {
				$($(element).find('.feedback-positivo')).addClass('selecionado').removeClass('hide');
			} else {
				$($(element).find('.feedback-negativo')).addClass('selecionado').removeClass('hide');
			}
		}
	}

	function confirmarResposta() {
		$sentencas.each(function (i, e) {
			e.confirmarResposta();
		});
		$(element).addClass('lock');
	}
	$confirmar.click(confirmarResposta);
	this.loadScorm = function (data) {
		console.log('loadScorm', data)
		if (data) {
			for (let index = 0; index < data.length; index++) {
				// console.log('index', index)
				const resultado = data[index];
				console.log($sentencas[index]);
				$sentencas[index].loadScorm(resultado.resposta)
			}
			confirmarResposta();
		}
	};
	return this;
}
(function ($) {
	$.fn.pickVF = function () {
		$instancia = $(this);
		$instancia.data('pickVF', new PickVF($instancia));
		$instancia.on('finalizado', function (data) {
			scorm.saveQuiz($instancia.attr('id'), data.pickVF.resposta);
		});
		var loadedData = scorm.loadQuiz($instancia.attr('id'));
		if (loadedData) {
			$instancia.data('pickVF').loadScorm(loadedData);
		}
		return $instancia.data('pickVF');
	};
}(jQuery));