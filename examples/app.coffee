
# Deps
Vue = require 'vue'

# Component that will host the mixin
Vue.component 'visual', require 'vue-visual'

# In viewport directive used to test for a compatibility issue
Vue.directive 'in-viewport', require 'vue-in-viewport-directive'

# Init root instance
window.App = new Vue el: '#app'
