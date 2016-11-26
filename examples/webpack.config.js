const path = require('path')
const webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  entry: {
    app: path.join(__dirname, 'app.coffee'),
  },

  output: {
    path: path.join(__dirname, '_build'),
    filename: '[name].js',
    publicPath: '/_build/',
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.coffee$/, loader: 'coffee-loader' }
    ]
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'vue-visual': path.join(__dirname, '..', 'index.coffee')
    }
  },

}
