// Storybook includes
import { storiesOf, addDecorator } from '@storybook/vue'
import { withInfo, setDefaults as infoDefaults } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions';
import { 
  withKnobs, 
  number, 
  text, 
  boolean, 
  optionsKnob as options 
} from '@storybook/addon-knobs'

addDecorator(withInfo)
infoDefaults({
  useDocgen: false,
  docsInPanel: false,
  header: true
})

// Import Visual
import Visual from '../index.vue';

// Import assets
import poster from '../examples/resources/poster.png';
import image from '../examples/resources/image.png';
import video from '../examples/resources/video.mp4';
import fallback from '../examples/resources/fallback.png';

// Containner of all stories
storiesOf('Examples', module)
  .addDecorator(withKnobs)

  .add('Image', () => ({
    components: { Visual },
    props: {
      image: { default: text('Image', image) },
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
      <visual ref='visual' :video='video' :autoplay='autoplay' :loop='loop' />
    </div>`
  }), { info: { summary: 
    `Loads autoplaying, looping video.` 
  }})
  
  .add('Fixed size', () => ({
    components: { Visual },
    props: {
      image: { default: text('image', image) },
      width: { default: number('width', 400, { range: true, min: 200, max: 600}) },
      height: { default: number('height', 300, { range: true, min: 200, max: 600}) },
      background: { default: options('background', {
        'Cover': 'cover',
        'Contain': 'contain',
        'None': ''
      }, 'cover', { display: 'inline-radio' }) },
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
      image: { default: text('image', image) },
      aspect: { default: number('aspect', 16/9,) },
      background: { default: options('background', {
        'Cover': 'cover',
        'Contain': 'contain',
        'None': ''
      }, 'cover', { display: 'inline-radio' }) },
    },
    template: `<visual 
      :image='image'
      :aspect='aspect'
      :background='background'
    />`
  }), { info: { summary: 
    `Load an image into an image with a fixed aspect ratio.`
  }})
  
  .add('Loading assets', () => ({
    components: { Visual },
    props: {
      poster: { default: text('poster', poster) },
      image: { default: text('image', image) },
      video: { default: text('video', video) },
      fallback: { default: text('fallback', fallback) },
      autoplay: { default: boolean('autoplay', true) },
      loop: { default: boolean('loop', true) },
      width: { default: number('width', 350, { range: true, min: 200, max: 600}) },
      aspect: { default: number('aspect', 350/150,) },
      transition: { default: text('transition', 'vv-fade') },
      background: { default: options('background', {
        'Cover': 'cover',
        'Contain': 'contain',
        'None': ''
      }, 'cover', { display: 'inline-radio' }) },
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
