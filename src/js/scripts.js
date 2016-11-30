var follow = document.querySelectorAll('.comment__sign');
for (var comment__sign of follow) {
	comment__sign.addEventListener('click', function(event) {
		event.target.classList.toggle('_follow');
	})
}

var stars = document.querySelectorAll('.star_rating__item');

for (var star_rating__item of stars) {
	star_rating__item.addEventListener('click', function(event) {
		for (var star_rating__item of stars) {
			star_rating__item.classList.remove('_activeStar');
		}
		event.target.classList.toggle('_activeStar');
	})
}