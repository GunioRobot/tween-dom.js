:)
=============

If you're an ActionScript developer too, probably you're missing tweening engines like [Twenner](http://code.google.com/p/tweener) and [TweenMax](http://www.greensock.com/tweenmax) for JavaScript. Fortunately, there're an excelent tweening engine in JavaScript called [Tween.js](http://github.com/sole/tween.js). But, again, if you came from an ActionScript background, the use of [Tween.js](http://github.com/sole/tween.js) isn't so friendly.

So, that's what Tween-Dom.js is for. It adapts the [Tween.js](http://github.com/sole/tween.js) to set tweening values in DOM style properties (CSS) directly and adds some more features.

Example
-------

### Tween.js

```html
<script type="text/javascript">
	TWEEN.start();

	var target = document.getElementById('target');
	var position = {x:0};
	new TWEEN.Tween(position).to({x:100}, 2000).easing(TWEEN.Easing.Exponential.EaseInOut).onUpdate(update).start();

	function update() {
		target.style.left = this.x + 'px';
	}
</script>
```

### Tween-Dom.js

```html
<script type="text/javascript">
	Tween.dom('target').duration(2).ease(Expo.InOut).to({'left':100});
</script>
```


Using
-------

### Methods
* `Tween.dom(element)` Creates a new instance and retrieves it.