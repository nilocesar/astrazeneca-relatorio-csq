var events = new EventEmitter();

function onready() {
    events.emit('ready');
    // if (window.bridge.fontSize) {
    //     $('html').css('font-size', window.bridge.fontSize);
    // }
    // window.bridge.on('fontUpdate', function (data) {
    //     $('html').css('font-size', data.fontSize);
    // });
}

function enterView(direction) {
    events.emit('enterView', {
        direction: direction
    });
}

function exitView(direction) {
    events.emit('exitView', {
        direction: direction
    });
}