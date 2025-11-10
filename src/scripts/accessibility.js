$(document).ready(function() {
	addAlert("Aguarde, carregando!");
});

events.on('ready', function() {
	
	setTimeout(function() {

			createAriaPageInit();
			onePageTabIndexFix();
			fixTabIndexInComponents();
			controlAcessibilityModal();
			controlNavWereTab();

	}, 1000 * 1);
});

function createAriaPageInit() {
	var nav_current = navigate.currentScreen.index + 1;
	var nav_all = navigate.currentScreen.pages.length;

	if (nav_all > 1) {
			if (nav_current == 1) {
					addAlert(`Carregamento finalizado! Você está na página ${nav_current} de ${nav_all}. Para navegar no treinamento utilize apenas o TAB.`);
			} else {
					addAlert(`Carregamento finalizado! Você está na página ${nav_current} de ${nav_all}.`);
			}
	}
}


function hiddenElementesFromReader(ignoreId) {
	$("*").each(function() {
			if ($(this) != $(ignoreId)) {
					$(this).attr("aria-hidden", "true");
					$(this).attr("tabindex", "-1");
			}
	});
}

function controlAcessibilityModal() {
	
    var modal= null;
    $("[data-modal]").each(function (i, element){
        var $botao = $(element);
        $botao.on('click', function () {
            console.log("open modal: " + $(this).attr('data-modal') );
            modal = $( $(this).attr('data-modal') );
            openModal(modal);
        });
    });

    $("*").focusin(function () {
        if ($(this).hasClass("modal-close")) {
            console.log("close modal");
						$('.modal').css('display', 'none');
            closeModal();
        }
    });

		/// liberar o close para Acessibildade com qualquer evento do teclado.
		$(window).keyup(function(evt) {
			$('body').trigger('alertAccessibility');
		})
}

$('body').on('hide-header', function(){
	// $('.header .control-01').css('display', 'none');
	// $('.header .control-02').css('display', 'none');
	// $('.btnHelp').css('display', 'none');
})


$('body').on('show-header', function(){
	// $('.header .control-01').css('display', 'flex');
	// $('.header .control-02').css('display', 'flex');
	// $('.btnHelp').css('display', 'flex');
	$("video").each(function(){
			$(this).get(0).pause();
	});
})

$('body').on('modal-open', function(_this, modal){
	openModal(modal);
})

$('body').on('modal-close', function(_this, modal){
	closeModal();
})

function openModal(_modalCurrent) {

	$('body').trigger('hide-header');
	addAlert("Janela de conteúdo aberta.");

	var _elemTabModal = {
			ind: 99999999,
			item: null,
			last: 0,
			st: false
	};

	//grava o ultimo tabindex antes de entrar no modal
	$('body').attr('tabIndexModal', document.activeElement.tabIndex);

	_modalCurrent.find('.modal-close').attr("tabindex", -1);
	_modalCurrent.find("*").each(function(indice, item) {
			if (parseInt($(item).attr('tabindex')) > -1) {

					///grava o maior dos tab index dentro do modal para referenciar o btn de Fechar
					_elemTabModal.last = parseInt($(item).attr('tabindex')) + 1;
					if (_elemTabModal.st == false ) {
							_elemTabModal.ind = $(item).attr('tabindex');
							_elemTabModal.item = $(item);
							_elemTabModal.st = true; 
					}
			}
	});

	_modalCurrent.find('.modal-close').attr("tabindex", _elemTabModal.last);
	_modalCurrent.find('.modal-close').attr("aria-label", "Fechar modal.");

	_elemTabModal.item.focus();

}

function closeModal() {

	$('body').trigger('show-header');
	addAlert("Janela de conteúdo fechada.");
	// recupera o ultimo tabindex antes de entrar no modal
	var tabCurrent = parseInt($('body').attr('tabIndexModal'));
	document.activeElement.tabIndex = tabCurrent;

	if (window.keyToTabActive) {
			$("*").each(function() {
					var tabItem = parseInt($(this).attr('tabindex'));
					if (tabCurrent == tabItem) {
							$(this).focus();
					}
			});
	}


}

function controlNavWereTab() {
	$(window).keyup(function(evt) {
			if (evt.which == 37 || evt.which == 38) {
					//PREV
					$.tabPrev();
			}

			if (evt.which == 39 || evt.which == 40) {
					//NEXT
					$.tabNext();
					window.keyToTabActive = true;
			}
	});
}

function fixTabIndexInComponents() {
	$('button').find("*").each(function() {
			$(this).attr("tabindex", '-1');
	});
	$('a').find("*").each(function() {
		$(this).attr("tabindex", '-1');
	});
}

function onePageTabIndexFix() {
	$("*").each(function() {
			var tabItem = parseInt($(this).attr('tabindex'));
			if ( tabItem == 1 && !$(this).hasClass('modal-close')) {
					$(this).focus();
			}
	});
}

function addAlert(aMsg) {
	removeOldAlert();
	var newAlert = document.createElement("div");
	newAlert.setAttribute("role", "alert");
	newAlert.setAttribute("id", "alert");
	var msg = document.createTextNode(aMsg);
	newAlert.appendChild(msg);
	document.body.appendChild(newAlert);
	$("#alert").css("opacity", "0");

	setTimeout(function() {
			removeOldAlert();
	}, 4000);
}

function removeOldAlert() {
	var oldAlert = document.getElementById("alert");
	if (oldAlert) {
			document.body.removeChild(oldAlert);
	}
}


(function($){
	'use strict';
	$.focusNext = function(){
		selectNextTabbableOrFocusable(':focusable');
	};
	$.focusPrev = function(){
		selectPrevTabbableOrFocusable(':focusable');
	};
	$.tabNext = function(){
		selectNextTabbableOrFocusable(':tabbable');
	};
	$.tabPrev = function(){
		selectPrevTabbableOrFocusable(':tabbable');
	};

	function selectNextTabbableOrFocusable(selector){
		var selectables = $(selector);
		var current = $(':focus');
		var nextIndex = 0;
		if(current.length === 1){
			var currentIndex = selectables.index(current);
			if(currentIndex + 1 < selectables.length){
				nextIndex = currentIndex + 1;
			}
		}

		selectables.eq(nextIndex).focus();
	}

	function selectPrevTabbableOrFocusable(selector){
		var selectables = $(selector);
		var current = $(':focus');
		var prevIndex = selectables.length - 1;
		if(current.length === 1){
			var currentIndex = selectables.index(current);
			if(currentIndex > 0){
				prevIndex = currentIndex - 1;
			}
		}

		selectables.eq(prevIndex).focus();
	}
	$.extend($.expr[ ':' ], {
		data: $.expr.createPseudo ?
			$.expr.createPseudo(function(dataName){
				return function(elem){
					return !!$.data(elem, dataName);
				};
			}) :
			function(elem, i, match){
				return !!$.data(elem, match[ 3 ]);
			},

		focusable: function(element){
			return focusable(element, !isNaN($.attr(element, 'tabindex')));
		},

		tabbable: function(element){
			var tabIndex = $.attr(element, 'tabindex'),
				isTabIndexNaN = isNaN(tabIndex);
			return ( isTabIndexNaN || tabIndex >= 0 ) && focusable(element, !isTabIndexNaN);
		}
	});

	/**
	 * focussable function, taken from jQuery UI Core
	 * @param element
	 * @returns {*}
	 */
	function focusable(element){
		var map, mapName, img,
			nodeName = element.nodeName.toLowerCase(),
			isTabIndexNotNaN = !isNaN($.attr(element, 'tabindex'));
		if('area' === nodeName){
			map = element.parentNode;
			mapName = map.name;
			if(!element.href || !mapName || map.nodeName.toLowerCase() !== 'map'){
				return false;
			}
			img = $('img[usemap=#' + mapName + ']')[0];
			return !!img && visible(img);
		}
		return ( /^(input|select|textarea|button|object)$/.test(nodeName) ?
			!element.disabled :
			'a' === nodeName ?
				element.href || isTabIndexNotNaN :
				isTabIndexNotNaN) &&
			visible(element);

		function visible(element){
			return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function(){
				return $.css(this, 'visibility') === 'hidden';
			}).length;
		}
	}
})(jQuery);
