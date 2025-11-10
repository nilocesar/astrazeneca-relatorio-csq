events.on('ready',function(){

  function portrait() {

    // Get screen size (inner/outerWidth, inner / outerHeight)
    var height = $(window).height();
    var width = $(window).width();

    if (width > height) {
        // Landscape
        $(".portrait").css("display", "none");
    } else {

        // Portrait
        setTimeout(function () {
            $(".portrait").css("display", "block");
        }, 1000 * 0.2);

    }
  }

  portrait();
  $(window).resize(function () {
      portrait();
  });
});