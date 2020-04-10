/**
 * Example of using a functional component to set default props for all Visual
 * instances in a project. 
 */

import Visual from 'vue-visual';

Vue.component('visual', {
	name: 'VueVisual',
	functional: true,
	render: function(create, {props, data}) {
		return create(Visual, {
			...data,
			props: {
				
				// Custom default props
				lazyLoad: true,
				autoplay: true,
				
				...props
			}
		});
	}
});
