window.onload = function () {
	var show = document.getElementById('click');
	var open = document.getElementById('show');
	show.onclick= function () {
		show.classList.toggle('_arrow-down-show');
		open.classList.toggle('comment-text__opinion-new');
	};
};
