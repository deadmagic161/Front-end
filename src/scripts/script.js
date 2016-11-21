window.onload = function () {
	var buttons = document.querySelectorAll('.comment_button__arrow');
	for (var comment_button__arrow  of buttons) {
		comment_button__arrow.addEventListener('click', function(event) {
			var parent = event.target.closest('.comment-text');
			parent.classList.toggle('_open');
		});
	}
};