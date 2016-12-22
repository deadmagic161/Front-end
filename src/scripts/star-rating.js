var stars = document.querySelectorAll('.rating');

var starModule = (function() {
	var _init = function() {
		_eventListeners();
	};

	var _eventListeners = function() {
		for (var star of stars) {
			star.addEventListener('click', _setCurrentStar);
		};
	};

	var _setCurrentStar = function(event) {
		var elem = event.target;
		var ratingValue = document.getElementsByClassName('rating-value');

		var eventStar = Number(elem.getAttribute('data'));

		for (var i = stars.length - 1; i >= 0; i--) {
			var currentStar = Number(stars[i].getAttribute('data'));
				
			stars[i].classList.remove('animated');

			currentStar <= eventStar ? stars[i].classList.add('active')
				: stars[i].classList.remove('active');
		};

		elem.classList.add('animated');
		ratingValue[0].innerHTML = elem.getAttribute('data');
	};

	return {
		init: _init
	};
})();

stars && starModule.init();