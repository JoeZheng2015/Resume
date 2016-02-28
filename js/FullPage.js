(function(exports) {
	exports.FullPage = FullPage;

	function FullPage(options) {
		this.el = document.querySelector(options.el);
		this.sliders = this.el.children;
		this.index = options.index || 0;
		this.dragging = false;

		this.init();
		this.render();
		this.bindEvent();
	}
	FullPage.prototype = {
		constructor: FullPage,
		init: function() {
			this.height = exports.innerHeight;
			this.threshold = exports.innerHeight / 6;
			this.setCss = function() {
				var el = document.createElement('fullpage');
				var type;
				var transformType = {
					'-webkit-transform': '-webkit-',
					'-moz-transform'   : '-moz-',
					'-o-transform'     : '-o-',
					'transform'        : ''
				}
				for (var name in transformType) {
					if (el.style[name] !== undefined) {
						type = transformType[name];
					}
				}
				return function(option) {
					var p = new RegExp(option.values.join('|'), 'g');
					option.el.style.cssText = option.css.replace(p, type + '$&');
				}
			}();
		},
		render: function() {
			var _this = this;
			_this.sliders[_this.index].className += ' current';
			for (var i = 0, l = _this.sliders.length; i < l; i++) {
				_this.sliders[i].className += ' fullpage';
				_this.setCss({
					el: _this.sliders[i],
					css: 'transform: translate3d(0,' + i * _this.height +'px,0);',
					values: ['transform']
				})
			}
		},
		bindEvent: function() {
			var _this = this;
			var startY, offsetY, nowY, dampen;

			document.addEventListener('touchstart', start, false);
			document.addEventListener('touchmove', move, false);
			document.addEventListener('touchend', end, false);

			function start(e) {
				if (e.target.className.indexOf('fullpage') !== -1) {
					e.preventDefault();
					_this.dragging = true;
					startY = e.touches[0].pageY;
					offsetY = 0;
				}
			}

			function move(e) {
				if (_this.dragging) {
					offsetY = e.touches[0].pageY - startY;
					dampen = offsetY > 0 ? 2 : 4;
					for (var begin = _this.index - 1, end = begin + 3; begin < end; begin++) {
						if (_this.sliders[begin]) {
							nowY = (begin - _this.index) * _this.height;
							_this.setCss({
								el: _this.sliders[begin],
								css: 'transition: all 0 ease-out; transform: translate3d(0, ' +  (nowY + offsetY / dampen) + 'px,0);',
								values: ['transition', 'transform']
							});
						}
					}
				}
			}

			function end(e) {
				if (_this.dragging) {
					if (offsetY > _this.threshold) {
						_this.slideTo('-1');
					}
					else if (offsetY < -_this.threshold) {
						_this.slideTo('+1');
					}
					else {
						_this.slideTo('0');
					}
					_this.dragging = false;
				}
			}
		},
		slideTo: function(dir) {
			var _this = this;
			if (typeof dir === 'string') {
				nextIndex = _this.index + dir * 1;
			}
			else {
				nextIndex = dir;
			}

			if (nextIndex < 0) {
				nextIndex = 0;
			}
			else if (nextIndex > _this.sliders.length - 1) {
				nextIndex = _this.sliders.length - 1;
			}

			for (var begin = nextIndex - 1, end = begin + 3; begin < end; begin++) {
				if (_this.sliders[begin]) {
					_this.setCss({
						el: _this.sliders[begin],
						css: 'transition: transform 0.4s ease-out;transform: translate3d(0, ' +  (begin - nextIndex) * _this.height + 'px,0);',
						values: ['transition', 'transform']
					})
				}
			}
			_this.sliders[_this.index].classList.remove('current');
			_this.sliders[nextIndex].classList.add('current');
			_this.index = nextIndex;
		}
	}
})(window);