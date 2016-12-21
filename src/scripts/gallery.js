var trigger = document.querySelector('.book-preview__img_small');

var Gallery = (function() {
    var images = document.querySelectorAll('.book-preview__img_small');

    var _init = function() {
        _eventListeners();
    };

    var _eventListeners = function() {
        for (var i = 0; i < images.length; i++ ) {
            images[i].addEventListener('click', changeImages);
        }
    };

    var changeImages = function() {
        var clickedImg = this;
        var bigImg = document.querySelector('.book-preview__img_big');
        var imagePathBuffer = clickedImg.style.backgroundImage;

        changeFromTo(bigImg, clickedImg);
        changeBig(imagePathBuffer);
    };

    var changeFromTo = function(fromElement, toElement) {
        toElement.style.backgroundImage = fromElement.style.backgroundImage;
    }

    function changeBig(path) {
        var div = document.querySelector('.book-preview__img_big');
        div.style.backgroundImage = path;
    }

    return {
        init: _init
    }
})();

trigger && Gallery.init();
