events.on('ready',function () {

  var exerciseID = navigate.currentScreenUid;

  $('.btn-next').hide();
  $(".feed").hide();
  $('.confirmar').hide();
  $('.rever').hide();
	$('.quiz').attr('id', exerciseID);
	
	var point = $('.quiz').attr('point');

	var PickOneElement = $('.quiz').first();
	PickOneElement.PickOneFlamboyant({});
	PickOneElement.on(PickOne.EVENTS.CHOOSING, function (event) {
		$('.confirmar').show();
	});

	PickOneElement.on(PickOne.EVENTS.FINISH, function(event) {
		let pick_one = event.pickOne;
		if (pick_one.acertou) {
			openModal("feed-positivo");
      
			var pointArray = [point];
			if( scorm.loadObject( 'point-quiz') ){
				pointArray = scorm.loadObject( 'point-quiz');
				pointArray.push(point);
			}
			scorm.saveObject( 'point-quiz', pointArray );
			scorm.saveObject( exerciseID+'-status', 1 );
			$('body').trigger('quiz-call');

		} else if (scorm.loadObject( exerciseID+'-tentativa' )) {
			openModal("feed-negativo2");

			var pointArray = [0];
			if( scorm.loadObject( 'point-quiz') ){
				pointArray = scorm.loadObject( 'point-quiz');
				pointArray.push(0);
			}

			scorm.saveObject( 'point-quiz', pointArray );
      scorm.saveObject( exerciseID+'-status', 0 );
			$('body').trigger('quiz-call');
			
		} else {
			openModal("feed-negativo1");
		}

	});  

	$('.confirmar').click(function() { 
		scorm.saveObject( exerciseID+'-tentativa', true);
	});

  $('.rever').click(function() { 
		if( scorm.loadObject( exerciseID+'-status') == 1 ) {
      openModal("feed-positivo");
    }else{
      openModal("feed-negativo2");
    }
	});

  function openModal(_modal){
    $("."+_modal).show();
    $('body').trigger('modal-open', [$("."+_modal)]);
		
		var _feed = exerciseID + "_positivo";
		if( _modal == 'feed-negativo1' )
			_feed = "00_tentativa";
		else if( _modal == 'feed-negativo2' )
			_feed = exerciseID + "_negativo";
		
		$('body').trigger('libras', [ _feed ]);
		
  }

	$('.tenta-novamente').on('click',function () {
    $(".feed").hide();
    $('body').trigger('modal-close');
		$('.alternativa').removeClass('selecionado');
		$('.confirmar').hide();
	});
	
	$('.feed .modal-close').focusin(function () {
    $(".feed").hide();
    $('body').trigger('modal-close');
		if( scorm.loadObject( exerciseID+'-status') == 0 || scorm.loadObject( exerciseID+'-status') == 1 ) {
			respondido();
			navigate.next();
		}
   
	});

	if( scorm.loadObject( exerciseID+'-status') == 0 || scorm.loadObject( exerciseID+'-status') == 1 ) {
    respondido();
	}


  function respondido(){
    $('.btn-next').show();
		$('.confirmar').hide();
		$('.quiz').addClass('lock');
    $('.rever').show();
  }

	controleParedao(); /// controle dos exercicios do Paredao

});

function controleParedao(){
	$('.radioBase .item').css('display', 'none');
	
	///Telas com exercicio
	var telas = ['35_tela', '38_tela' , '39_tela', '43_tela', '46_tela' ];

	montagemRadio();
	$('body').on('quiz-call', function(){

			setTimeout(function(){
					montagemRadio();
			}, 1000 * 0.1);
			
	});

	function montagemRadio(){
			for( var i = 0; i < telas.length; i++ ){
				if( scorm.loadObject( telas[i]+"-status" ) == 1 ){
					$('.radioBase .item'+(i+1)).css('display', 'block');
				}
			}
	}
}
