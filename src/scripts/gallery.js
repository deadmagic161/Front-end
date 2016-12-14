var trigger = document.querySelector('.book-preview__img_small');

var Gallery = (function() {
    var images = document.querySelectorAll('.book-preview__img_small');

    var _init = function() {
        _eventListeners();
    };

    var _eventListeners = function() {
        for (var i = 0; i < images.length; i++ ) {
            images[i].addEventListener('click', eventHandler);
        }
    };

    var eventHandler = function() {
            var clickedImg = this;
            var bigImg = document.querySelector('.book-preview__img_big');
            var imagePathBuffer = clickedImg.style.backgroundImage;

            clickedImg.style.backgroundImage = bigImg.style.backgroundImage;
            bigImg.style.backgroundImage = imagePathBuffer;

        };

    return {
        init: _init
    }
})();

trigger && Gallery.init();