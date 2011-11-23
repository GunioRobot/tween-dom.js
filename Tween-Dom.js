// tween.js r5 - http://github.com/sole/tween.js
var TWEEN=TWEEN||function(){var a,e,c=60,b=false,h=[];return{setFPS:function(f){c=f||60},start:function(f){arguments.length!=0&&this.setFPS(f);e=setInterval(this.update,1E3/c)},stop:function(){clearInterval(e)},setAutostart:function(f){(b=f)&&!e&&this.start()},add:function(f){h.push(f);b&&!e&&this.start()},getAll:function(){return h},removeAll:function(){h=[]},remove:function(f){a=h.indexOf(f);a!==-1&&h.splice(a,1)},update:function(f){a=0;num_tweens=h.length;for(f=f||Date.now();a<num_tweens;)if(h[a].update(f))a++;
else{h.splice(a,1);num_tweens--}num_tweens==0&&b==true&&this.stop()}}}();
TWEEN.Tween=function(a){var e={},c={},b={},h=1E3,f=0,j=null,n=TWEEN.Easing.Linear.EaseNone,k=null,l=null,m=null;this.to=function(d,g){if(g!==null)h=g;for(var i in d)if(a[i]!==null)b[i]=d[i];return this};this.start=function(d){TWEEN.add(this);j=d?d+f:Date.now()+f;for(var g in b)if(a[g]!==null){e[g]=a[g];c[g]=b[g]-a[g]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(d){f=d;return this};this.easing=function(d){n=d;return this};this.chain=function(d){k=d};this.onUpdate=
function(d){l=d;return this};this.onComplete=function(d){m=d;return this};this.update=function(d){var g,i;if(d<j)return true;d=(d-j)/h;d=d>1?1:d;i=n(d);for(g in c)a[g]=e[g]+c[g]*i;l!==null&&l.call(a,i);if(d==1){m!==null&&m.call(a);k!==null&&k.start();return false}return true}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(a){return a};
TWEEN.Easing.Quadratic.EaseIn=function(a){return a*a};TWEEN.Easing.Quadratic.EaseOut=function(a){return-a*(a-2)};TWEEN.Easing.Quadratic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a;return-0.5*(--a*(a-2)-1)};TWEEN.Easing.Cubic.EaseIn=function(a){return a*a*a};TWEEN.Easing.Cubic.EaseOut=function(a){return--a*a*a+1};TWEEN.Easing.Cubic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a;return 0.5*((a-=2)*a*a+2)};TWEEN.Easing.Quartic.EaseIn=function(a){return a*a*a*a};
TWEEN.Easing.Quartic.EaseOut=function(a){return-(--a*a*a*a-1)};TWEEN.Easing.Quartic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a;return-0.5*((a-=2)*a*a*a-2)};TWEEN.Easing.Quintic.EaseIn=function(a){return a*a*a*a*a};TWEEN.Easing.Quintic.EaseOut=function(a){return(a-=1)*a*a*a*a+1};TWEEN.Easing.Quintic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a*a;return 0.5*((a-=2)*a*a*a*a+2)};TWEEN.Easing.Sinusoidal.EaseIn=function(a){return-Math.cos(a*Math.PI/2)+1};
TWEEN.Easing.Sinusoidal.EaseOut=function(a){return Math.sin(a*Math.PI/2)};TWEEN.Easing.Sinusoidal.EaseInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};TWEEN.Easing.Exponential.EaseIn=function(a){return a==0?0:Math.pow(2,10*(a-1))};TWEEN.Easing.Exponential.EaseOut=function(a){return a==1?1:-Math.pow(2,-10*a)+1};TWEEN.Easing.Exponential.EaseInOut=function(a){if(a==0)return 0;if(a==1)return 1;if((a*=2)<1)return 0.5*Math.pow(2,10*(a-1));return 0.5*(-Math.pow(2,-10*(a-1))+2)};
TWEEN.Easing.Circular.EaseIn=function(a){return-(Math.sqrt(1-a*a)-1)};TWEEN.Easing.Circular.EaseOut=function(a){return Math.sqrt(1- --a*a)};TWEEN.Easing.Circular.EaseInOut=function(a){if((a/=0.5)<1)return-0.5*(Math.sqrt(1-a*a)-1);return 0.5*(Math.sqrt(1-(a-=2)*a)+1)};TWEEN.Easing.Elastic.EaseIn=function(a){var e,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!c||c<1){c=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/c);return-(c*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/b))};
TWEEN.Easing.Elastic.EaseOut=function(a){var e,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!c||c<1){c=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/c);return c*Math.pow(2,-10*a)*Math.sin((a-e)*2*Math.PI/b)+1};
TWEEN.Easing.Elastic.EaseInOut=function(a){var e,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!c||c<1){c=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/c);if((a*=2)<1)return-0.5*c*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/b);return c*Math.pow(2,-10*(a-=1))*Math.sin((a-e)*2*Math.PI/b)*0.5+1};TWEEN.Easing.Back.EaseIn=function(a){return a*a*(2.70158*a-1.70158)};TWEEN.Easing.Back.EaseOut=function(a){return(a-=1)*a*(2.70158*a+1.70158)+1};
TWEEN.Easing.Back.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*(3.5949095*a-2.5949095);return 0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)};TWEEN.Easing.Bounce.EaseIn=function(a){return 1-TWEEN.Easing.Bounce.EaseOut(1-a)};TWEEN.Easing.Bounce.EaseOut=function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};
TWEEN.Easing.Bounce.EaseInOut=function(a){if(a<0.5)return TWEEN.Easing.Bounce.EaseIn(a*2)*0.5;return TWEEN.Easing.Bounce.EaseOut(a*2-1)*0.5+0.5};

// tween-dom.js r1 - http://github.com/leocavalcante/tween-dom.js
var TweenD = TweenD || (function(dom){
	var _dom = typeof dom == 'string' ? document.getElementById(dom) : dom;
	var _duration = 1000;
	var _delay = 0;
	var _ease = TWEEN.Easing.Linear.EaseNone;
	var _unit = {};

	var _onUpdate = function() {
		for (var prop in this) _dom.style[prop] = String(this[prop]) + _unit[prop];
	}

	var _computeStyle = function(dom, compare) {
		var style = {};

		if (dom.currentStyle === undefined)
			dom.currentStyle = getComputedStyle(dom);

		for (var prop in compare) {
			var computedStyle = dom.currentStyle[prop];
			var valueMatch = (/[0-9]+/).exec(computedStyle);
			var value = valueMatch !== null ? Number(valueMatch[0]) : 0;
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
		},
		from : function(style) {
			var to = _computeStyle(_dom, style);
			for (var prop in style) {
				var value = style[prop];
				var unitMatch = (/%|in|cm|mm|em|ex|pt|pc|px/).exec(value);
				var unit = unitMatch !== null ? unitMatch[0] : 'px';
				_dom.style[prop] = value + unit;
			}
			this.to(to);
		}
	}
});

var Linear = Linear || (function(){
	return {
		None : TWEEN.Easing.Linear.EaseNone
	};
}());

var Quad = Quad || (function(){
	return {
		In : TWEEN.Easing.Quadratic.EaseIn,
		Out : TWEEN.Easing.Quadratic.EaseOut,
		InOut : TWEEN.Easing.Quadratic.EaseInOut
	};
}());

var Cubic = Cubic || (function(){
	return {
		In : TWEEN.Easing.Cubic.EaseIn,
		Out : TWEEN.Easing.Cubic.EaseOut,
		InOut : TWEEN.Easing.Cubic.EaseInOut
	};
}());

var Quart = Quart || (function(){
	return {
		In : TWEEN.Easing.Quartic.EaseIn,
		Out : TWEEN.Easing.Quartic.EaseOut,
		InOut : TWEEN.Easing.Quartic.EaseInOut
	};
}());

var Quint = Quint || (function(){
	return {
		In : TWEEN.Easing.Quintic.EaseIn,
		Out : TWEEN.Easing.Quintic.EaseOut,
		InOut : TWEEN.Easing.Quintic.EaseInOut
	};
}());

var Sine = Sine || (function(){
	return {
		In : TWEEN.Easing.Sinusoidal.EaseIn,
		Out : TWEEN.Easing.Sinusoidal.EaseOut,
		InOut : TWEEN.Easing.Sinusoidal.EaseInOut
	};
}());

var Expo = Expo || (function(){
	return {
		In : TWEEN.Easing.Exponential.EaseIn,
		Out : TWEEN.Easing.Exponential.EaseOut,
		InOut : TWEEN.Easing.Exponential.EaseInOut
	};
}());

var Circ = Circ || (function(){
	return {
		In : TWEEN.Easing.Circular.EaseIn,
		Out : TWEEN.Easing.Circular.EaseOut,
		InOut : TWEEN.Easing.Circular.EaseInOut
	};
}());

var Elastic = Elastic || (function(){
	return {
		In : TWEEN.Easing.Elastic.EaseIn,
		Out : TWEEN.Easing.Elastic.EaseOut,
		InOut : TWEEN.Easing.Elastic.EaseInOut
	};
}());

var Back = Back || (function(){
	return {
		In : TWEEN.Easing.Back.EaseIn,
		Out : TWEEN.Easing.Back.EaseOut,
		InOut : TWEEN.Easing.Back.EaseInOut
	};
}());

var Bounce = Bounce || (function(){
	return {
		In : TWEEN.Easing.Bounce.EaseIn,
		Out : TWEEN.Easing.Bounce.EaseOut,
		InOut : TWEEN.Easing.Bounce.EaseInOut
	};
}());

TWEEN.start();