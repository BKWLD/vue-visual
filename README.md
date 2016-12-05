# Vue Visual [![Build Status](https://travis-ci.org/BKWLD/vue-visual.svg?branch=master)](https://travis-ci.org/BKWLD/vue-visual)

Vue 2 image and video loader supporting lazy loading, cover videos, and more


## Installation

1. Install the package: `npm install --save vue-visual` or `yarn add vue-visual`
2. Register the component:
	```js
	Vue = require('vue')
	VueVisual = require('vue-visual')
	Vue.component('visual', VueVisual)

	// Assuming you are using webpack, require the CSS file
	require('vue-visual/index.css')
	```
3. If not using Webpack, copy the css contents from `index.css` to your stylesheet.
4. See "Usage" for examples


## Usage

### Create a simple image tag

```html
<visual image='image.png'></visual>
```

This renders:

```html
<div class='vv-visual'>
	<img image="image.png" class='vv-asset vv-image'>
</div>
```

You may also specify the width and height:

```html
<visual image='image.png' width='350' height='150'></visual>
```

This renders:

```html
<div class='vv-visual' style='width: 350px; height: 150px;'>
	<img image="image.png" class='vv-asset vv-image'>
</div>
```

The width and height are applied to the container as well so that loader graphics or other element that are inserted through the `<slot>` can make use of those dimensions.  The Visual stylesheet will add `width: 100%; height: 100%` to the img so that it fills the container.


### Lazy load a simple image tag

```html
<visual
	image='image.png'
	load='visible'
	offset='200'>
</visual>
```

This initially renders:

```html
<div class='vue-visual'></div>
```

Then, when the `visual` comes within `200px` of the viewport, it starts loading:

```html
<div class='vue-visual vv-loading'></div>
```

And finally, upon load:

```html
<div class='vue-visual vv-loaded'>
	<img image="image.png" class='vv-asset vv-image'>
</div>
```


### Use a low rez poster image

```html
<visual
	poster='low-rez.png'
	image='image.png'
	load='visible'>
</visual>
```

In ths case, the poster image will be loaded when the Visual enters the viewport.  Then, once it's finished loading, the main image will be loaded.  To load a poster immediately and only lazy load the image:

```html
<visual
	poster='low-rez.png'
	image='image.png'
	load='visible'
	:load-poster='true'
	offset='200'>
</visual>
```


### Declare a Vue transition for when load finishes

```html
<visual
	image='image.png'
	transition='vv-fade'>
</visual>
```

The `<img>` will not be rendered until it loaded.  In addition, the asset is wrapped in a [Vue transition](http://vuejs.org/v2/guide/transitions.html) called `vv-fade`.  This is a real transition that ships with this component and makes newly-loaded assets fade in on top of previously loaded assets before they are removed.  It is a good default for background-image rendered assets (described later).

```css
.vv-fade-enter {
	opacity: 0
}
.vv-fade-enter-active {
	transition: opacity .3s
}
.vv-fade-leave-active {
	transition-delay: .31s
}
```

### Render image as a CSS background

```html
<visual image='image.png' background='cover'></visual>
```

This renders:

```html
<div class='vv-visual'>
	<div
		class='vv-asset vv-image vv-background-cover vv-fill-asset'
		style='background: url("image.png");'>
	</div>
</div>
```

The `vv-background-cover` class adds `background-size: cover` to the asset.  Additionally, you may set `background` to `contain` for `background-size: contain`.


### Use an aspect ratio for the size

It is often more useful in responsive layouts to set an aspect ratio for the Visual rather than a fixed width and height:

```html
<visual
	image='image.png'
	background='cover'
	aspect='16:9'>
</visual>
```

This renders:

```html
<div class='vv-visual'>
	<div class='vv-shim' style='padding-top: 56.25%'></div>
	<div
		class='vv-asset vv-image vv-background-cover vv-fill-asset'
		style='background: url("image.png");'>
	</div>
</div>
```

You can also pass in a number for the aspect, like: `:aspect='16/9'`.


### Render a video instead

```html
<visual video='video.mp4'></visual>
```

This renders:

```html
<div class='vv-visual'>
	<video>
		<source image='video.mp4' type='video/mp4'>
	</video>
</div>
```

Many `<video>` attributes may be passed through:

```html
<visual video='video.mp4' controls loop mute autoplay></visual>
```

You may also set autoplay to `visible` to make the video start playing only when it enters the viewport.  In addition, you may set `autopause` to `visible` to have it pause when you leave the viewport.  The viewport measuremnts are modified by the same `offset` value used for loading.

```html
<visual
	video='video.mp4'
	load='visible'
	autoplay='visible'
	autopause='visible'>
</visual>
```

Videos may also be rendered using the same `background` settings.  Thus, you can end up with something like:

```html
<visual
	transition='vv-fade'
	background='cover'
	aspect='16:9'

	poster='low-rez.png'
	:load-poster='true'

	image='image.png'
	load='visible'

	video='video.mp4'
	load-video='visible'
	autoplay='visible'
	autopause='visible'
	loop
	muted>

</visual>
```

This creates a Visual component with a 16:9 aspect ratio and immediately loads a low rez poster image.  Once it loads completely, it will fade in.  When the Visual enters the viewport, the `image` image will load in.  When it completes, it will fade in and, if the Visual is still in the viewport, the `video` will load.  Once enough has loaded that it can play without interruption, the video will fade in and begin playing (with looping) until it is scrolled out of the viewport.


### Show a fallback on non-autoplaying devices

Mobile devices like iOS and Android phones do not support autoplaying videos.  You can supply a fallback image that is shown for devices that don't support autoplaying videos (or videos at all).  This is great when used with a preview gif of the video.

```html
<visual
	video='video.mp4'
	fallback='fallback.gif'>
</visual>
```


### Slot markup within the Visual

```html
<visual
	background='cover'
	aspect='16:9'
	image='image.png'
	align='middle left'>

	<h1>I am the title of a marquee</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

</visual>
```

This renders:

```html
<div class='vv-visual'>
	<div class='vv-shim vv-align-middle' style='padding-top: 56.25%'></div>
	<div
		class='vv-asset vv-image vv-background-cover vv-fill-asset'
		style='background: url("image.png");'>
	</div>
	<div class='vv-slot vv-align-middle vv-align-left'>
		<h1>I am the title of a marquee</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>
</div>
```

Slotting in content is a great way to create marquees of websites with rich background assets.  The shim-based approach to aligning the slot content means that the slot content will stay centered in the Visual until the slot height is greater than the aspect radio (like as you reach a mobile viewport width), in which case the slot will prop the Visual open as needed.


### Add a spinner graphic

You can insert a spinner graphic that displays while loading like:

```js
// Register components
Vue = require('vue')
Vue.component('visual', require('vue-visual'))
Vue.component('spinner', {
	template: '<div class="spinner"></div>'
})
```
```html
<visual
	image='image.png'
	loader='spinner'
	transition-loader='vv-fade'>
</visual>
```

It's up to you to style the spinner.  The component is added after the assets and the slot in the DOM.


### Override vue-visual defaults

Vue-visual was designed to mimic regular `<img>` and `<video>` tag behavior with it's base config.  It renders as `inline-block`, the asset loads immediately, the asset is shown at it's native size, etc.  However, it's more common that you will want to render assets using `background-size: cover`, lazy load, and fade in when they are ready.  To override the default, opt-in themed configuration, you can do the following:

```js
Vue = require('vue')
Vue.component('visual', require('vue-visual')).options.setDefaults({
	background: 'cover',
	load: 'visible',
	loadPoster: true,
	transition: 'vv-fade'
})
```


## Props

A list of the [component properties](http://vuejs.org/v2/guide/components.html#Props) that may be set on the Visual component.


#### Assets

- `image (string|object)` : An image to load.  If a string, the URL of an image.  If an object, a list of image URLs keyed to `max-width`-style breakpoints:
	```
	:image='{ 500: 'image-mobile.png', 768: 'image-tablet.png' }'
	```

- `poster (string|object)` : An image that is loaded before `image`, `video`, or `fallback`.  See `image` for object schema.

- `video (string|array)` : A video that is loaded after the image is loaded if the device supports video.    If a string, should be the URL to a source video.  If an array, a list of video URLs that will be added as difference `<source>`s.

- `fallback (string|object)` : An image that is loaded after the `image` when the user's device doesn't support video or doesn't support auto-playing video and `require-autoplay` is truthy.  See `image` for object schema.

- `require-autoplay (boolean)` - *Default: `true`.* If `false`, the `fallback` is shown only if the user's device lacks video support.  If `true`, the `fallback`, will be shown also when a device cannot autoplay videos (like most mobile phones).


#### Size

- `width (number|string)` : This width will be applied to the container, `.visual`, div.

- `height (number|string)` : See `width`

- `aspect (number|string)` : Force the Visual to a specific aspect ratio.  This works by making the asset `position:absolute` and then using an inner div with a `padding-top` set to a percentage.  Can be set as a number like `:aspect='16/9'` or as a string like `aspect='16:9'`.  May also use any of the asset properties (`poster`, `image`, `video`, `fallback`) to use the native aspect ratio of the asset.  Note, these values cannot be read until the asset has loaded, so the Visual will be dimension-less until load has completed.

- `fill (boolean)` : Make the Visual fill it's container via CSS using absolute positioning.


#### Style

- `background (string)` - May be `cover` or `contain`. When set, image assets as a CSS `background-image` with either `background-size: cover` or `background-size: contain` depending on the value of the prop. Video assets will be made to mimic this display style by using javascript to transform the offset of the asset, masking clipped regions with `overflow: hidden`.

- `background-position (string)` - *Default `center center`.*  This sets the CSS `background-position` when the Visual is using `background` rendering.  The effect will also be applied to Videos.

- `align (string)` - *Default `center middle`.*.  Used in conjunction with slots to position the slot content.  May be any combination of one horizontal (`left`, `center`, `right`) and one vertical (`top`, `middle`, `bottom`) choice, space-delimited.


#### Loading

- `load (string|boolean)` - *Default: `true`.*  If `true`, assets are loaded in order, immediately.  In other words, once the `poster` has loaded, the `image` will load, and then either the `video` or `fallback`.  If set to `false`, you must call `loadAsset(asset)` on the component to initiate loading.  If set to `visible`, assets won't be loaded until the Visual enters the viewport.  Different loading values can be set for each asset type:
	- `load-poster (string|boolean)`
	- `load-image (string|boolean)`
	- `load-video (string|boolean)` - Also applies to the `fallback`

- `offset (number|string|object)` - A number that either expands (if positive) or contracts (if negative) the effective bounds of the Visual as it is interpreted by any `visible` setting (i.e. `load`, `autoplay`, `autopause`).  Setting to positive will make a Visual with `load='visible'` start loading before it enters the viewport.  Setting to negative will make a Visual with `render="visible"` not transition in until after it enters the viewport.  May also be set to an object like so: `<visual load='visible' :offset='{ top: 20, bottom: 50 }'></visual>`.  Different offset values can be set for each asset type:
	- `offset-poster (number|string|object)`
	- `offset-image (number|string|object)`
	- `offset-video (number|string|object)` - Also applies to the `fallback`

- `loader (string|object)` - A Vue component that will be mounted and appended to `.vv-visual`.  If a string, the identifier of a Component already registered with `Vue.component()`.  If an object, a Vue component object.

- `loader-throttle (number)` - *Default: `100`.*  How many milliseconds to throttle the check for whether to show the loader.  This prevents the loader from showing when a load is very quick.


#### Transition

- `transition (string)` -  A [Vue transition](http://vuejs.org/v2/guide/transitions.html) name that is applied to the `v-if` directives that are applied to assets that have `load` setting.  The Visual component ships with a `vv-fade` transition that fades in assets over previously loaded assets.  Different transition values can be set for each asset type (as well as the loader):
	- `transition-poster (string)`
	- `transition-image (string)`
	- `transition-video (string)` - Also applies to the `fallback`
	- `transition-loader (string)`


#### Video

- `autoplay (boolean,string)` - If `true`, begins playing immediately.  If `visible`, begins playing when the Visual enters the viewport, as modified by the `offset` prop.

- `autopause  (string)` - If `visible`, begins playing when the Visual enters the viewport, as modified by the `offset` prop.

- `loop (boolean)` - Sets `<video>` `loop`

- `muted (boolean)` - Sets `<video>` `muted`

- `controls (boolean)` - Sets `<video>` `controls`


#### Accessibility

- `alt (string)` - Sets the <img> `alt` attribute or `aria-label` value, depending on context.


## Slots

- `default`: Markup is added after the assets and before the loader

- `prepend`: Markup is added before the assets


## Methods

#### Instance

- `loadAsset(asset)` - Initiate loading if the Visual had the `load` prop set to false.  Specify an asset to load a specific asset.

- `play()` - Tell `video` to play.

- `pause()` - Tell `video` to pause.

- `restart()` - Tell `video` to restart playback from beginning.

- `togglePlayback(bool = null)` - Call without an argument to toggle between playing and paused.  Or call with `true` to play and `false` to pause.


#### Component

- `setDefaults(config)` - Change the default prop values for all future-instantiated components.
	```
	Vue.component('visual').options.method({
		transition: 'vv-fade',
	})
	```


## Contributing

- Run the examples server with `PORT=3000 node examples/server` and go to an example to see the source for the E2E tests.  Like http://localhost:3000/basic/.
- Run `yarn test` to run E2E tests.
