
# Deps
Vue = require 'vue'

# Component that will host the mixin
import visual from 'vue-visual'
Vue.component 'visual', visual

# The spinner component
Vue.component 'spinner',
	template: '<div class="spinner"></div>'

# Init root instance
window.App = new Vue
	el: '#app'
	data: -> load: false
