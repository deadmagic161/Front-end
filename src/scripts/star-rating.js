var stars = document.querySelectorAll('.rating');
for (var rating of stars) {
	rating.addEventListener('click', function(event) {
		for (var i = stars.length - 1; i >= 0; i--) {
			stars[i].classList.remove('value');
		}
		event.target.classList.add('value');
		for (var i = stars.length - 1; i >= 0; i--) {
			if (+stars[i].getAttribute('data') <= +this.getAttribute('data')) {
				stars[i].classList.add('active');
			}
			else {
				stars[i].classList.remove('active');
			}

		}

	})
}


