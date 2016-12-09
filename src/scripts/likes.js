var likes = document.querySelectorAll('.comment-button__heart ');
for (var like of likes) {
	like.addEventListener('click', function(event) {
		var parent = event.target.parentNode;
		var countEl = parent.querySelector('.comment-button__likes');
		var count = Number(countEl.innerHTML);
		parent.classList.contains('_active') ? count-- : count++;
		countEl.innerHTML = count;
		parent.classList.toggle('_active');
	})
}