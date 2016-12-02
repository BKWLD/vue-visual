const path = require('path')
const webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  entry: {
    app: path.join(__dirname, 'app.coffee'),
    defaults: path.join(__dirname, 'set-defaults', 'app.coffee'),
    loader: path.join(__dirname, 'loader', 'app.coffee'),
  },

  output: {
    path: path.join(__dirname, '_build'),
    filename: '[name].js',
    publicPath: '/_build/',
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.coffee$/, loader: 'coffee-loader' },
			{ test: /\.jade$/, loader: 'apply-loader!jade-loader' }
    ]
  },
	vue: {
		loaders: {
			stylus: 'style-loader!css-loader!stylus-loader'
		}
	},

  resolve: {
    root: path.join(__dirname, '..'),
    extensions: ['', '.js', '.coffee', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js',
      'vue-visual': 'index.vue'
    }
  },

}
