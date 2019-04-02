
# Deps
Vue = require 'vue'

# Component that will host the mixin
import visual from 'vue-visual'
Vue.component 'visual', visual

# Set defaults
Vue.component('visual').options.setDefaults
	transition: 'long-fade'

# Init root instance
window.App = new Vue el: '#app'
