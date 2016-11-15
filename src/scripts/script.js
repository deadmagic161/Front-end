window.onload = function () {
	var show1 = document.getElementById('click1');
	var show2 = document.getElementById('click2');
	var show3 = document.getElementById('click3');
	var open1 = document.getElementById('show1');
	var open2 = document.getElementById('show2');
	var open3 = document.getElementById('show3');
	show1.onclick= function () {
		show1.classList.toggle('_arrow-down-show');
		open1.classList.toggle('comment-text__opinion-new');
	};
	show2.onclick= function () {
		show2.classList.toggle('_arrow-down-show');
		open2.classList.toggle('comment-text__opinion-new');
	};
	show3.onclick= function () {
		show3.classList.toggle('_arrow-down-show');
		open3.classList.toggle('comment-text__opinion-new');
	};
};
