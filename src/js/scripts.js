var follow = document.getElementById('follow');
follow.onclick = function() {
    if (follow.textContent == 'Отписаться') {
    	follow.textContent = 'Подписаться';
    } else {follow.textContent = 'Отписаться'}
    
};