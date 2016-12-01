	var buttons = document.querySelectorAll('.comment_button__arrow');
	
	for (var button  of buttons) {
		button.addEventListener('click', function(event) {
			var parent = event.target.closest('.comment-text');
			parent.classList.toggle('_open');
		});
	}
	var blocks = document.getElementsByClassName('comment-user');
	var more = document.getElementById('more-comments');

	function load() {
			for (var i = 0; i < blocks.length; i++ ) {
  				blocks[i].classList.add('_unload');
  	}
  		more.addEventListener('click', function() {
  			var load = document.querySelector('._unload');
  			var show = document.querySelector('.comments');
  			load && load.classList.remove('_unload');
  			show && show.classList.add('_show');

  			if(!blocks[blocks.length-1].classList.contains('_unload')){
  				more.classList.add('_hide');
  			}
  		})
  	}

	var follow = document.querySelectorAll('.comment__sign');
	
	for (var comment__sign of follow) {
	comment__sign.addEventListener('click', function(event) {
		event.target.classList.toggle('_follow');
	})
}
window.onload = load();