var stars = document.querySelectorAll('.rating');
var ratingValue = document.getElementsByClassName('rating-value');
var starModule = (function(){
	var _init = function(){
		for (var star of stars) {
			star.addEventListener('click', function(event) {
				for (var i = stars.length - 1; i >= 0; i--) {
					stars[i].classList.remove('animated');
					if (Number(stars[i].getAttribute('data')) <= Number(this.getAttribute('data'))) {
						stars[i].classList.add('active');
					}else {
						stars[i].classList.remove('active');
					}
				};

				event.target.classList.add('animated');
				ratingValue[0].innerHTML = this.getAttribute('data');
			});
		};
	}

	return {
		init: _init
	}
})();

stars&&starModule.init();
