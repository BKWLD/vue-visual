// Storybook includes
import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// Import Visual
import Visual from '../index.vue';

// Import assets
import poster from '../examples/resources/poster.png';
import image from '../examples/resources/image.png';
import video from '../examples/resources/video.mp4';
import fallback from '../examples/resources/fallback.png';

storiesOf('Examples', module)
  .addDecorator(withKnobs)

  .add('Image', () => ({
    components: { Visual },
    props: {
      image: { default: text('Image', image) }
    },
    template: `<visual 
      :image='image'
    />`
  }))
  
  .add('Video', () => ({
    components: { Visual },
    props: {
      video: { default: text('Video', video) },
      autoplay: { default: boolean('Autoplay', true) }
    },
    template: `<visual 
      :video='video'
      :autoplay='autoplay'
    />`
  }))
