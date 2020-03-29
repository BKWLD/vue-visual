# Vue Visual [![npm](https://img.shields.io/npm/v/vue-visual.svg)](https://www.npmjs.com/package/vue-visual) [![Build Status](https://img.shields.io/travis/BKWLD/vue-visual.svg)](https://travis-ci.org/BKWLD/vue-visual)

Vue 2 image and video loader supporting lazy loading.  Visual 2.x is a simplification of Version 1.x with a greater reliance on modern browser features (IntersectionObserver, object-fit, srcset, sizes, etc).


**Examples at https://bkwld.github.io/vue-visual.**


## Installation

1. Install the package: `npm install --save vue-visual` or `yarn add vue-visual`
2. Register the component:
	```js
	import Vue from 'vue'
	import Visual from 'vue-visual'
	Vue.component('visual', Visual)
	import 'vue-visual/index.css'
	```
3. These polyfills are recommended for older browsers:
	- [IntersectionObserver](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)
	- [ObjectFit](https://github.com/constancecchen/object-fit-polyfill)


## Usage

See [the Storybook](https://bkwld.github.io/vue-visual).

## Props

A list of the [component properties](http://vuejs.org/v2/guide/components.html#Props) that may be set on the Visual component.


#### Assets

- `image (string)` : The URL of an image to load.

- `video (string|array)` : A video that is loaded after the image is loaded if the device supports video. If a string, should be the URL to a source video.  If an array, a list of video URLs that will be added as difference `<source>`s.

#### Size

- `width (number|string)` : This width will be applied to the container div. If a number, it's assumed to be a px value.

- `height (number|string)` : See `width`

- `aspect (number)` : Force the Visual to a specific aspect ratio.  This works by making the asset `position:absolute` and then using an inner div with a `padding-top` set to a percentage.

- `expand (boolean)` : Make the Visual fill it's container via CSS using absolute positioning.


#### Style

- `background-size (string)` - *Default `cover`.* Like the CSS property.

- `background-position (string)` - *Default `center center`.*  Like the CSS property.

- `align (string)` - *Default `center middle`.*.  Used in conjunction with slots to position the slot content.  May be any combination of one horizontal (`left`, `center`, `right`) and one vertical (`top`, `middle`, `bottom`) choice, space-delimited.


#### Loading

- `autoload (boolean)` - *Default: `true`.*  If `true`, assets are loaded immediately unless `lazyload``.

- `lazyload (boolean)` - Waits until the Visual enters the viewport to trigger loading.  Overrides, `autoload`.

- `intersection-options (object)` - IntersectionObserver options. Used with `lazyload` and `autopause`.

- `placeholder-color` - Sets a background color behind the assets.  Most useful in conjunction with an `aspect` value.

- `transition (string)` -  A [Vue transition](http://vuejs.org/v2/guide/transitions.html) name that is applied when an asset is loaded.


#### Video

- `autoplay (boolean)` - If `true`, begins playing immediately.

- `autopause (boolean)` - If `true`, begins playing when the Visual enters the viewport and stops when it leaves.  Overrides `autoplay`.

- `loop (boolean)` - Sets `<video>` `loop`

- `muted (boolean)` - Sets `<video>` `muted`

- `controls (boolean)` - Sets `<video>` `controls`


#### Accessibility

- `alt (string)` - Sets the <img> `alt` attribute or `aria-label` value, depending on context.


## Slots

- `default`: Markup is added after the assets and before the loader


## Methods

#### Instance

- `load()` - Manually initiate loading.

- `play()` - Tell `video` to play.

- `pause()` - Tell `video` to pause.

- `restart()` - Tell `video` to restart playback from beginning.


## Contributing

- Run the examples server with `PORT=3000 node examples/server` and go to an example to see the source for the E2E tests.  Like http://localhost:3000/basic/.
- Run `yarn test` to run E2E tests.
