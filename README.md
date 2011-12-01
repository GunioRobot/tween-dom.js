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
* `Tween.dom(element)` Creates a new instance and retrieves it. `element` can be a HTMLElement or an element id.
* `duration(seconds)` Defines the tweening duration in seconds.
* `delay(seconds)` Defines a tweening delay in seconds.
* `ease(function)` Defines an easing function for tweening.
* `to(object)` Starts the tween to the defined styles in the object param.
* `from(object)` Starts the tween from the defined styles in the object param.
* `play(delay)` Plays the tween with an additional delay.
* `stop()` Stops the tween.
* `reverse(delay)` Reverses the tween with an additional delay.
* `on(event, listener)` Sets a listener to an event.

### Events
* `update` Called while the tween is executing.
* `complete` Called when tween completes.