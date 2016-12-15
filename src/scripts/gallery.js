var triggers = document.querySelectorAll('.book-preview__img_small');

var Gallery = (function() {
    var _init = function() {
        _eventListener();
    };

    var _eventListener = function() {
        var images = document.querySelectorAll('.book-preview__img_small');

        var eventHandler = function() {
            console.log('Image clicked');
        };

        for (var i = 0; i < images.length; i++ ) {
            images[i].addEventListener('click', eventHandler);
        }
    };

    return {
        init: _init
    }
})();

triggers && Gallery.init();