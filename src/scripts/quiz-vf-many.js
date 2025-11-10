events.on('ready', function () {
  
  var exerciseID = navigate.currentScreenUid;
  $('.btn-next').hide();
  $(".feed").hide();
  $('.confirmar').hide();
  $('.rever').hide();

  var point = $('.quiz').attr('point');

  $('.exercise-pickVF .alternativa').on('click', function(){

    var status = 0;
    if( $(this).hasClass('resposta-correta') )  status = 1;

    $(this).parent().attr('ativoAlt', status );
    $(this).parent().addClass('ativoAlt');
    $(this).parent().find('.alternativa').removeClass('selecionado');
    $(this).addClass('selecionado');

    var comp = true;
    $('.exercise-pickVF .list').each(function(indice, it){
      if( !$(it).hasClass('ativoAlt') ){
        comp = false;
      }
    })

    if(comp){
      $('.confirmar').show();
    }
  })

  $('.confirmar').on('click',function() { 
        
    $('.confirmar').hide();

    var acertou = true;
    $('.exercise-pickVF .list').each(function(indice, it){
      if( $(it).attr('ativoAlt') == 0 ){
        acertou = false;
      }
    })

    var _vfQuiz = [];
    $('.exercise-pickVF .alternativa').each(function(indice, it){
      if( $(it).hasClass('selecionado') ){
        _vfQuiz.push(indice);
      }
    })

    scorm.saveObject( exerciseID+'-vf', _vfQuiz );

    if(acertou){
      openModal("feed-positivo");
      
      var pointArray = [point];
			if( scorm.loadObject( 'point-quiz') ){
				pointArray = scorm.loadObject( 'point-quiz');
				pointArray.push(point);
			}
			scorm.saveObject( 'point-quiz', pointArray );
			scorm.saveObject( exerciseID+'-status', 1 );
			$('body').trigger('quiz-call');

      $('.quiz').addClass('lock');
      
    }else{
      
      if (scorm.loadObject( exerciseID+'-tentativa' )) {
        ///segunda tentativa
        openModal("feed-negativo2");
        
        var pointArray = [0];
        if( scorm.loadObject( 'point-quiz') ){
          pointArray = scorm.loadObject( 'point-quiz');
          pointArray.push(0);
        }

        scorm.saveObject( 'point-quiz', pointArray );
        scorm.saveObject( exerciseID+'-status', 0 );
        $('body').trigger('quiz-call');

        $('.quiz').addClass('lock');
      } else {
        ///primeira tentativa
        openModal("feed-negativo1");
        scorm.saveObject( exerciseID+'-tentativa', true);
      }
    }

  });

  $('.rever').on('click',function() { 
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

    var _vfArray = scorm.loadObject( exerciseID+'-vf');
    for( var i = 0; i < _vfArray.length; i++){
        $('.exercise-pickVF .list .alternativa').eq(_vfArray[i]).addClass('selecionado');
    }  
  }

});