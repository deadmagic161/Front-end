var follow = document.querySelectorAll('.comment__sign');
for (var comment__sign of follow) {
	comment__sign.addEventListener('click', function(event) {
		event.target.classList.toggle('_follow');
	})
}

