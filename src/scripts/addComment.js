var commentInput = document.querySelector('[name="comment"]');

var Comments = function() {
	var _init = function() {
		_eventListeners();
	};
	var user = { 
		'name': 'Undefined User',
		'photo': 'assets/img/user_1.png',
		'reviewsNumber': 88,
		'rating': '+10'
	};

	var _eventListeners = function() {
		commentInput.addEventListener('change', _addComment);
		commentInput.addEventListener('change', _clearInput);
	};

	var _addComment = function() {
		var parent = document.querySelector('.comments');
		var lastComment = document.querySelector('.comment-user');
		var newComment = createElement('div', {'class': 'comment-user'});

		var avatar = createElement('div', {'class': 'comment-avatar'});
		var reviews = createElement('label', {'class': 'comment__review'}, 'Рецензия: ');
		var subscribe = createElement('a', {'class': 'comment__sign', 'href': '#'});
		var rating = createElement('label', {'class': 'comment__note'}, 'Оценок ');

		var rightBlock = createElement('div', {'class': 'comment-text'});
		var heading = createElement('div', {'class': 'comment-text__header'});
		var time = new Date();
		var hours = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();
		var min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
		var timeString = time.getDate() + '.' +  +time.getMonth() + '.' +  time.getFullYear() + ' в ' +  
			 hours + ':' +  min;
		var text = commentInput.value;

		var commentButtons = createElement('div', {'class': 'comment-button'});

		rating.appendChild(createElement('span', {'class': 'comment__note_number'}, user.rating));
		reviews.appendChild(createElement('span', {'class': 'comment__reviw_number'}, user.reviewsNumber));
		avatar.appendChild(createElement('img', {'class': 'comment-avatar__picture', 'src': user.photo}));
		avatar.appendChild(reviews);
		avatar.appendChild(rating);
		avatar.appendChild(subscribe);

		heading.appendChild(createElement('span', {'class': 'comment-text__name'}, user.name));
		rightBlock.appendChild(heading);
		rightBlock.appendChild(createElement('span', {'class': 'comment-text__date'}, timeString));
		rightBlock.appendChild(createElement('span', {'class': 'comment-text__opinion'}, text));

		commentButtons.appendChild(createElement('button', {'class': 'comment-button__reply'}, 'Ответить'));
		commentButtons.appendChild(createElement('span', {'class': 'comment-button__heart'}));
		commentButtons.appendChild(createElement('span', {'class': 'comment-button__likes'}, '0'));
		commentButtons.appendChild(createElement('span', {'class': 'comment-button__arrow _down'}));

		rightBlock.appendChild(commentButtons);

		newComment.appendChild(avatar);
		newComment.appendChild(rightBlock);

		parent.insertBefore(newComment, lastComment);
	};

	var createElement = function (tag, attrs, text) {
	    var e = document.createElement(tag);
	    if (attrs) {
	        for (key in attrs) {
	            if (key == 'class') {
	                e.className = attrs[key];
	            } else if (key == 'id') {
	                e.id = attrs[key];
	            } else {
	                e.setAttribute(key, attrs[key]);
	            }
	        }
	    }
	    if (text) {
	    	e.appendChild(document.createTextNode(text));
	    }

	    return e;
	}

	var _clearInput = function() {
		commentInput.value = '';
	};

	return {
		init: _init
	}
}();

commentInput && Comments.init();