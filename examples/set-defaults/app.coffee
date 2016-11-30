
# Deps
Vue = require 'vue'

# Component that will host the mixin
Vue.component 'visual', require 'vue-visual'

# Set defaults
Vue.component('visual').options.setDefaults
	transition: 'long-fade'

# Init root instance
window.App = new Vue el: '#app'
