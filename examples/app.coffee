
# Deps
Vue = require 'vue'

# Component that will host the mixin
import visual from 'vue-visual'
Vue.component 'visual', visual

# Init root instance
window.App = new Vue el: '#app'
