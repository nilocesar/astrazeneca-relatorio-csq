$('.pulse').addClass('animated pulse infinite');
$('.zoomIn').addClass('animated zoomIn');
$('.heartBeat').addClass('animated heartBeat');
$('.left').addClass('animated fadeInLeft');
$('.right').addClass('animated fadeInRight');
$('.down').addClass('animated fadeInDown');
$('.up').addClass('animated fadeInUp');
$('.in').addClass('animated fadeIn');

for (var i = 1; i < 50; i++) {
  var tempo = i / 2;
  $('.delay' + i).css('animation-delay', tempo + 's');
  $('.delay' + i).addClass('delay_tablet delay_mobile');
}

events.on('ready',function(){
  
  $('.pulse').addClass('animated pulse infinite');
  $('.zoomIn').addClass('animated zoomIn');
  $('.heartBeat').addClass('animated heartBeat');
  $('.left').addClass('animated fadeInLeft');
  $('.right').addClass('animated fadeInRight');
  $('.down').addClass('animated fadeInDown');
  $('.up').addClass('animated fadeInUp');
  $('.in').addClass('animated fadeIn');

  for (var i = 1; i < 50; i++) {
    var tempo = i / 2;
    $('.delay' + i).css('animation-delay', tempo + 's');
    $('.delay' + i).addClass('delay_tablet delay_mobile');
  }

});