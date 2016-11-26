# Vue Visual

Vue 2 image and video loader supporting lazy loading, cover videos, and more

## Installation

1. Install the package: `npm install --save vue-visual` or `yarn add vue-visual`
2. Register the component:
	```js
	import Vue from 'vue'
	import vueVisual from 'vue-visual'
	Vue.component('visual', vueVisual)

	// Assuming you are using webpack, require the CSS file
	require('vue-visual/index.css')
	```
3. If not using Webpack, copy the css contents from `index.css` to your stylesheet.
4. See "Usage" for examples

## Usage

### Create a simple image tag

```html
<visual src='image.png'></visual>
```

This renders:

```html
<div class='visual'>
	<img src="image.png" class='visual-asset'>
</div>
```

You may also specify the width and height:

```html
<visual src='image.png' width='350' height='150'></visual>
```

This renders:

```html
<div class='visual' style='width: 350px; height: 150px;'>
	<img src="image.png" class='visual-asset' width='350' height='150'>
</div>
```

The width and height are applied to the container as well so that loader graphics or other element that are inserted through the `<slot>` can make use of those dimensions.


### Wait to render until image loaded

```html
<visual src='image.png' load='now'></visual>
```

This initially renders:

```html
<div class='visual visual-loading'></div>
```

Then, when the image is loaded:

```html
<div class='visual visual-loaded'>
	<img src='image.png' class='visual-asset'>
</div>
```


### Lazy load a simple image tag

```html
<visual
	src='image.png'
	load='visible'
	offset='200'>
</visual>
```

This initially renders:

```html
<div class='visual visual-pending'></div>
```

Then, when the `visual` comes within `200px` of the viewport, it starts loading:

```html
<div class='visual visual-loading'></div>
```

And finally, upon load:

```html
<div class='visual visual-loaded'>
	<img src="image.png" class='visual-asset'>
</div>
```


### Declare a Vue transition for when load finishes

```html
<visual
	src='image.png'
	load='now'
	transition='fade'>
</visual>
```

This functions like the `load='now'` example above, except that, internally, the `<img>` is wrapped in a [Vue transition](http://vuejs.org/v2/guide/transitions.html) with the name you provide.  For instance, if you add the following styles:

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
```

Then the image will fade in once it's done loading.


### Use a low rez poster image

```html
<visual
	poster='low-rez.png'
	src='image.png'
	load='visible'
	transition='fade'>
</visual>
```

In this case, the poster image will be loaded immediately and the main image will be loaded only once the Visual enters the viewport.  To lazy load the poster as well as the src:

```html
<visual
	poster='low-rez.png'
	poster-load='visible'
	src='image.png'
	load='visible'
	offset='300'
	transition='fade'>
</visual>
```


### Render image as a CSS background

```html
<visual src='image.png' bkgd='cover'></visual>
```

This renders:

```html
<div class='visual'>
	<div
		class='visual-asset visual-bkgd visual-bkgd-cover'
		style='background: url("image.png");'>
	</div>
</div>
```

The `visual-cover` class adds `background-size: cover` to the asset.  Additionally, you may also set `bkgd` to `contain` for `background-size: contain`.


### Use native asset dimensions for the size

```html
<visual
	src='image.png'
	bkgd='cover'
	width='src'
	height='src'>
</visual>
```

Once the `src` image has loaded, the native `src` size will be used for the Visual dimensions.  You may use `poster` as the value as well.  Or, use the shorthand `size='src'` in place of `width` and `height`.


### Use an aspect ratio for the size

It is often more useful in responsive layouts to set an aspect ratio for the Visual rather than a fixed width and height:

```html
<visual
	src='image.png'
	bkgd='cover'
	aspect='16:9'>
</visual>
```

This renders:

```html
<div class='visual'>
	<div
		class='visual-asset visual-bkgd visual-bkgd-cover visual-aspect'
		style='background: url("image.png");'>
		<div class='visual-aspect-prop' style='padding-top: 56.25%'></div>
	</div>
</div>
```

You can also pass in a number for the aspect, like: `:aspect='16/9'`.

You can also use the measured dimensions of the `src` or `poster` for the aspect, although these can't be determined until the image has actually fully loaded:

```html
<visual
	src='image.png'
	bkgd='cover'
	aspect='src'>
</visual>
```


### Render a video instead

```html
<visual video='video.mp4'></visual>
```

This renders:

```html
<div class='visual'>
	<video>
		<source src='video.mp4' type='video/mp4'>
	</video>
</div>
```

Many `<video>` attributes may be passed through:

```html
<visual video='video.mp4' controls loop mute></visual>
```

Instead of `autoplay` and `preload`, though, use these Visual props:

```html
<visual
	video='video.mp4'
	video-load='now'
	autoplay='visible'
	autopause='visible'>
</visual>
```

These work like the `load` values above.  In otherwords, the video will start loading as soon as the component is mounted.  Howver, if won't play until it enters the viewport.  And then the video will pause again once it leaves the viewport.


### Play videos on hover

```html
<visual
	src='image.png'
	video='video.mp4'
	video-load='mouseover'
	autoplay='mouseover'
	autopause='mouseout'
	transition='fade'>
</visual>
```

In this case, an image will be loaded initially into the visual.  Then, when the user hovers the image, the video will be loaded.  Once it's ready to play, if the user is still hovering the Visual, it will be animated in using the `fade` transition.  When the user stops hovering, the video will pause.


### Show a fallback on non-autoplaying devices

Mobile devices like iOS and Android phones do not support autoplaying videos.  You can supply a fallback image that is shown for devices that don't support autoplaying videos (or videos at all).  This is great when used with a preview gif of the video.

```html
<visual
	video='video.mp4'
	fallback='fallback.gif'>
</visual>
```


### The kitchen sink

```html
<visual
	transition='fade'
	bkgd='cover'
	aspect='16:9'

	poster='low-rez.png'
	poster-load='now'

	src='image.png'
	load='visible'

	video='video.mp4'
	video-load='visible'
	autoplay='visible'
	autopause='visible'
	loop
	muted

	fallback='fallback.gif'>
</visual>
```

This creates a Visual component with a 16:9 aspect ratio and immediately loads a low rez poster image.  Once it loads completely, it will fade in.  When the Visual enters the viewport, the `src` image will load in.  When it completes, if the Visual is still in the viewport, the `video` will load.  Once enough has loaded that it can play without interuption, it will play (looping) until it is scrolled out of the viewport.  Finally, in the event that the user's device doesn't support autoplaying video, instead of loading a video, after the `src` loads, the `fallback` gif would have been loaded instead.
