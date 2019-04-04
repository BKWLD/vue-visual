// Storybook includes
import { storiesOf, addDecorator } from '@storybook/vue'
import { withInfo, setDefaults as infoDefaults } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions';
import { 
  withKnobs, 
  number, 
  text, 
  boolean, 
  object,
  optionsKnob as options,
} from '@storybook/addon-knobs'

// Setup Storybook
addDecorator(withInfo)
addDecorator(withKnobs)
infoDefaults({
  useDocgen: false,
  docsInPanel: false,
  header: true
})

// Shared or wordy props
const props = {
  aspect: (def = 350/150) => { return { default: number('aspect', def, { 
    range: true, 
    min: 0.5, 
    max: 3,
    step: 0.1,
  })}},
  width: () => { return { default: number('width', 350, { 
    range: true, 
    min: 200, 
    max: 600,
    step: 10
  })}},
  background: () => { return { default: options('background', {
      'cover': 'cover',
      'contain': 'contain',
      'none': ''
    }, 'cover', { display: 'inline-radio' }
  )}},
  backgroundPosition: () => { return { default: options('background-position', {
      'center center': 'center center',
      'top left': 'top left',
      'bottom right': 'bottom right'
    }, 'center center', { display: 'inline-radio' }
  )}},
  align: () => { return { default: options('align', {
      'center middle': 'center middle',
      'left top': 'left top',
      'right bottom': 'right bottom',
    }, 'center middle', { display: 'inline-radio' }
  )}},
  transition: () => { return { default: options('transition', {
      'vv-fade': 'vv-fade',
      'none': '',
    }, 'vv-fade', { display: 'inline-radio' }
  )}},
}

// Import Visual
import Visual from '../index.vue';

// Import assets
import poster from '../examples/resources/poster.png';
import image from '../examples/resources/image.png';
import video from '../examples/resources/video.mp4';
import fallback from '../examples/resources/fallback.png';

// Containner of all stories
storiesOf('Assets', module)

  .add('Image', () => ({
    components: { Visual },
    props: {
      image: { default: text('image', image) },
    },
    template: `<visual 
      :image='image'
    />`
  }), { info: { summary: 
    `Example of rendering a simple image.` 
  }})
  
  .add('Video', () => ({
    components: { Visual },
    props: {
      video: { default: text('video', video) },
      fallback: { default: text('fallback', fallback) },
      autoplay: { default: boolean('autoplay', true) },
      loop: { default: boolean('loop', true) },
    },
    methods: {
      pause: function() { this.$refs.visual.pause() },
      play: function() { this.$refs.visual.play() },
      restart: function() { this.$refs.visual.restart() },
    },
    template: `<div>
      <div style='margin-bottom: 0.5em'>
        <button @click='pause'>Pause</button>
        <button @click='play'>Play</button>
        <button @click='restart'>Restart</button>
      </div>
      <visual 
        ref='visual' 
        :video='video' 
        :fallback='fallback' 
        :autoplay='autoplay' 
        :loop='loop' />
    </div>`
  }), { info: { summary: 
    `Loads autoplaying, looping video.` 
  }})
  
  .add('Responsive src', () => ({
    components: { Visual },
    props: {
      image: { default: object('image', {
        500: poster,
        1920: image,
      }) },
    },
    template: `<visual
      :aspect='350/150' 
      background='cover'
      :image='image'
    />`
  }), { info: { summary: 
    `Reize your browser to load different image assets. Note, the breakpoints
    are relative to Vue Visual's width, no the viewport`
  }})


storiesOf('Size', module)

  .add('Fixed size', () => ({
    components: { Visual },
    props: {
      width: { default: number('width', 400, { range: true, min: 200, max: 600}) },
      height: { default: number('height', 300, { range: true, min: 200, max: 600}) },
      background: props.background(),
      image: { default: text('image', image) },
    },
    template: `<visual 
      :image='image'
      :width='width'
      :height='height'
      :background='background'
    />`
  }), { info: { summary: 
    `Load an image into a container with a fixed size.`
  }})
  
  .add('Aspect ratio', () => ({
    components: { Visual },
    props: {
      aspect: { default: number('aspect', 16/9,) },
      background: props.background(),
      image: { default: text('image', image) },
    },
    template: `<visual 
      :image='image'
      :aspect='aspect'
      :background='background'
    />`
  }), { info: { summary: 
    `Load an image into an image with a fixed aspect ratio.`
  }})

storiesOf('Style', module)

  .add('Background', () => ({
    components: { Visual },
    props: {
      background: props.background(),
      backgroundPosition: props.backgroundPosition(),
      aspect: props.aspect(3),
      image: { default: text('image', image) },
    },
    template: `<visual
      :aspect='aspect'
      :background='background'
      :background-position='backgroundPosition'
      :image='image'
    />`
  }), { info: { summary: 
    `Example of background image options.` 
  }})
  
  .add('Slot', () => ({
    components: { Visual },
    props: {
      align: props.align(),
      aspect: props.aspect(3),
      image: { default: text('image', image) },
    },
    template: `<visual 
      :aspect='aspect' 
      :image='image' 
      :align='align'
      background='cover'>
      <p style='font-size: 2rem; color: white;'>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum 
        nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi 
        porta  gravida at eget metus. Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Vestibulum id ligula porta felis euismod semper. 
        Maecenas sed diam eget risus varius blandit sit amet non magna. Duis 
        mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia 
        odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet 
        non magna.
      </p>
    </visual>`
  }), { info: { summary: 
    `Example of slot options.  Note how the default slot will push the height
    of the Visual open; this is useful when Visual is the background of a
    marquee.` 
  }})

storiesOf('Loading', module)

  .add('Progressive', () => ({
    components: { Visual },
    props: {
      poster: { default: text('poster', poster) },
      image: { default: text('image', image) },
      video: { default: text('video', video) },
      fallback: { default: text('fallback', fallback) },
      autoplay: { default: boolean('autoplay', true) },
      loop: { default: boolean('loop', true) },
      width: props.width(),
      aspect: props.aspect(),
      transition: props.transition(),
      background: props.background(),
    },
    methods: {
      onLoadEvent: (event) => action(event)()
    },
    template: `<visual
      :poster='poster'
      :image='image'
      :video='video'
      :width='width'
      :aspect='aspect'
      :fallback='fallback'
      :transition='transition'
      :background='background'
      :autoplay='autoplay'
      :loop='loop'
      @loading='onLoadEvent("loading")'
      @loaded='onLoadEvent("loaded")'
      @poster-loading='onLoadEvent("poster-loading")'
      @poster-loaded='onLoadEvent("poster-loaded")'
      @image-loading='onLoadEvent("image-loading")'
      @image-loaded='onLoadEvent("image-loaded")'
      @video-loading='onLoadEvent("video-loading")'
      @video-loaded='onLoadEvent("video-loaded")'
      @fallback-loading='onLoadEvent("fallback-loading")'
      @fallback-loaded='onLoadEvent("fallback-loaded")'
    />`
  }), { info: { summary: 
    `Vue Visual loads the poster first, then the image, then the video and only 
    loads the fallback if the device doesn't support videos. Using an aspect and
    background cover so there is no pop in during the transition. Check out the 
    Actions tab for the loading events that are fired and the order in which
    they were triggered.`
  }})
  
  .add('Manual', () => ({
    components: { Visual },
    props: {
      image: { default: text('image', image) },
      transition: props.transition(),
    },
    methods: {
      load: function() { this.$refs.visual.loadAsset('image') },
      onLoadEvent: function(event) { action(event)() },
    },
    template: `<div>
      <div style='margin-bottom: 0.5em'>
        <button @click='load'>Load</button>
      </div>
      <visual 
        ref='visual'
        :load='false'
        :image='image'
        :transition='transition'
        @loading='onLoadEvent("loading")'
        @loaded='onLoadEvent("loaded")'
      />
    </div>`
  }), { info: { summary: 
    `Don't load assets until manually initiated. Watch the Actions tab to
    view loading events.`
  }})
