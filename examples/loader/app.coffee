
# Deps
Vue = require 'vue'

# Component that will host the mixin
Vue.component 'visual', require 'vue-visual'

# The spinner component
Vue.component 'spinner',
	template: '<transition name="long-fade">
		<div class="spinner"></div>
	</transition>'

# Init root instance
window.App = new Vue el: '#app'
