
# Deps
Vue = require 'vue'

# Component that will host the mixin
Vue.component 'visual', require 'vue-visual'

# Init root instance
window.App = new Vue
	el: '#app'
