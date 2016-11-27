window.onload = function () {
	var buttons = document.querySelectorAll('.comment_button__arrow');
	
	for (var button  of buttons) {
		button.addEventListener('click', function(event) {
			var parent = event.target.closest('.comment-text');
			parent.classList.toggle('_open');
		});
	}

	var follow = document.querySelectorAll('.comment__sign');
	
	for (var comment__sign of follow) {
	comment__sign.addEventListener('click', function(event) {
		event.target.classList.toggle('_follow');
	})
}


};