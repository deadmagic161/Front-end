(function(){
	var stars = document.querySelectorAll('.rating');

	for (var star of stars) {
		star.addEventListener('click', function(event) {
			for (var i = stars.length - 1; i >= 0; i--) {
				stars[i].classList.remove('value');
			};

			event.target.classList.add('value');

			for (var i = stars.length - 1; i >= 0; i--) {
				if (Number(stars[i].getAttribute('data')) <= Number(this.getAttribute('data'))) {
					stars[i].classList.add('active');
				}else {
					stars[i].classList.remove('active');
				}
			}
		})
	}
}());