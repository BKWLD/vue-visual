const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  
  mode: 'development',
  devtool: 'inline-source-map',
  
  resolve: {
    modules: [ path.join(__dirname, '..'), 'node_modules' ],
    extensions: ['.js', '.coffee', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js',
      'vue-visual': 'index.vue'
    }
  },

  entry: {
    app: path.join(__dirname, 'app.coffee'),
    defaults: path.join(__dirname, 'set-defaults', 'app.coffee'),
    loader: path.join(__dirname, 'loader', 'app.coffee'),
  },

  module: { rules: [
		{ test: /\.coffee$/, loader: 'babel-loader!coffee-loader' },
		{ test: /\.pug$/, loader: 'pug-plain-loader' },
		{ test: /\.vue$/, loader: 'vue-loader' },
		{ test: /\.styl(us)?$/, use: [
			'vue-style-loader',
			'css-loader',
			'stylus-loader'
		]}
	]},
  
	plugins: [
		new VueLoaderPlugin()
	],

  output: {
    path: path.join(__dirname, '_build'),
    filename: '[name].js',
    publicPath: '/_build/',
  },

}
