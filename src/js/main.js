bridge.fullScreen = function () {
  const elem = document.documentElement;

  function enterFullScreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else if (elem.mozRequestFullScreen) {
      // Firefox
      elem.mozRequestFullScreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else if (elem.webkitRequestFullscreen) {
      // Chrome, Safari e Opera
      elem.webkitRequestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else if (elem.msRequestFullscreen) {
      // IE/Edge
      elem.msRequestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      console.error("Full-screen mode is not supported by this browser.");
    }
  }

  function exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari e Opera
      document.webkitExitFullscreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      console.error("Full-screen mode is not supported by this browser.");
    }
  }

  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    enterFullScreen();
  } else {
    exitFullScreen();
  }
};

$(window).on("beforeunload", function () {});
$(window).on("unload", function () {});
$(window).on(VIEW_EVENT.READY, function () {});
