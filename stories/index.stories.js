/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Import Visual
import Visual from '../index.vue';

// Import assets
import poster from '../examples/resources/poster.png';
import image from '../examples/resources/image.png';
import video from '../examples/resources/video.mp4';
import fallback from '../examples/resources/fallback.png';

storiesOf('Examples', module)
  .add('Image', () => ({
    components: { Visual },
    template: `<visual image="${image}"/>`,
    methods: { 
      action: linkTo('Button') 
    },
  }))
  .add('Video', () => ({
    components: { Visual },
    template: `<visual video="${video}" autoplay/>`,
    methods: { 
      action: linkTo('Button') 
    },
  }))
