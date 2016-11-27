	var buttons = document.querySelectorAll('.comment_button__arrow');
	
	for (var button  of buttons) {
		button.addEventListener('click', function(event) {
			var parent = event.target.closest('.comment-text');
			parent.classList.toggle('_open');
		});
	}

	var more = document.getElementById("more-comments");

	function load () {
		var block1 = document.getElementById('block1');
		var block2 = document.getElementById('block2');
  		block1.classList.add('_unload');
  		block2.classList.add('_unload');
}

	more.onclick = function() {
		var load = document.querySelector('._unload');
  		var show = document.querySelector('.comments');
  		load.classList.remove('_unload');
  		show.classList.add('_show');
}


	var follow = document.querySelectorAll('.comment__sign');
	
	for (var comment__sign of follow) {
	comment__sign.addEventListener('click', function(event) {
		event.target.classList.toggle('_follow');
	})
}

window.onload = load();