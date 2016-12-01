
# Deps
Vue = require 'vue'

# Component that will host the mixin
Vue.component 'visual', require 'vue-visual'

# The spinner component
Vue.component 'spinner',
	template: '<div class="spinner"></div>'

# Init root instance
window.App = new Vue
	el: '#app'
	data: -> load: false
