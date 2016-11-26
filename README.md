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
		<img src="image.png">
	</div>
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
		<img src="image.png">
	</div>
	```


#### Lazy load a simple image tag

```html
<visual src='image.png' load='lazy'></visual>
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
		<img src="image.png">
	</div>
	```
