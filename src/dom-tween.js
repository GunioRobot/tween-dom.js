var DTween = DTween || (function(dom){
	var _dom = dom;
	var _duration = 1000;
	var _delay = 0;
	var _ease = TWEEN.Easing.Linear.EaseNone;
	var _unit = {};

	var _onUpdate = function() {
		for (var prop in this) _dom.style[prop] = this[prop] + _unit[prop];
	}

	var _computeStyle = function(dom, compare) {
		var style = {};

		if (dom.currentStyle === undefined)
			dom.currentStyle = getComputedStyle(dom);

		for (var prop in compare) {
			var computedStyle = dom.currentStyle[prop];
			var valueMatch = (/[0-9]+/).exec(computedStyle);
			var value = valueMatch !== null ? valueMath[0] : 0;
			var unitMatch = (/%|in|cm|mm|em|ex|pt|pc|px/).exec(computedStyle);
			var unit = unitMatch !== null ? unitMatch[0] : 'px';
			style[prop] = value;
			_unit[prop] = unit;
		}

		return style;
	}

	return {
		duration : function(value) {
			_duration = value * 1000;
			return this;
		},
		delay : function(value) {
			_delay = value * 1000;
			return this;
		},
		ease : function(value) {
			_ease = value;
			return this;
		},
		to : function(style) {
			var tween = new TWEEN.Tween(_computeStyle(_dom, style));
			tween.to(style, _duration);
			tween.delay(_delay);
			tween.easing(_ease);			
			tween.onUpdate(_onUpdate);
			tween.start();
		}
	}
});

var Expo = Expo || (function(){
	return {
		In : TWEEN.Easing.Exponential.EaseIn,
		Out : TWEEN.Easing.Exponential.EaseOut,
		InOut : TWEEN.Easing.Exponential.EaseInOut
	}
}());