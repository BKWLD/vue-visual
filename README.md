# Vue Visual

Vue 2 image and video loader supporting lazy loading, cover videos, and more

## Installation

1. Install the package: `npm install --save vue-visual` or `yarn add vue-visual`
2. Register the component:
	```js
	import Vue from 'vue'
	import vueVisual from 'vue-visual'
	Vue.component('visual', vueVisual)
	```
3. See "Usage" for examples

## Usage

#### Create a simple image tag

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
	<img src="image.png" class='visual-asset'>
</div>
```
```css
.visual {
	overflow: hidden;
}
.visual-asset {
	width: 100%;
}
```


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


#### Lazy load a simple image tag

```html
<visual
	src='image.png'
	load='lazy'
	offset='200'>
</visual>
```

This initially renders:

```html
<div class='visual visual-pending'></div>
```

Then, when the `visual` comes within `200px` of the viewport, it starts loading

```html
<div class='visual visual-loading'></div>
```

And finally, upon load:

```html
<div class='visual visual-loaded'>
	<img src="image.png" class='visual-asset'>
</div>
```


#### Declare a Vue transition for when load finishes

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


#### Use a low rez poster image

```html
<visual
	poster='low-rez.png'
	src='image.png'
	load='lazy'
	transition='fade'>
</visual>
```

In this case, the poster image will be loaded immediately and the main image will be loaded only once the visual enters the viewport.  To lazy load the poster as well as the src:

```html
<visual
	poster='low-rez.png'
	src='image.png'
	load='lazy-poster'
	offset='300'
	transition='fade'>
</visual>
```


### Render as the background of a div

```html
<visual
	poster='low-rez.png'
	src='image.png'
	load='lazy-poster'
	offset='300'
	transition='fade'>
</visual>
```
