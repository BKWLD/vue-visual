minify = '-p' in process.argv
webpack = require 'webpack'
ExtractText = require 'extract-text-webpack-plugin'

module.exports =

	entry: index: './index.vue'

	resolve: extensions: ['', '.js', '.coffee', '.vue']

	plugins: [
		new ExtractText '[name].css', allChunks: true
	]

	module: loaders: [
		{ test: /\.coffee$/, loader: 'coffee-loader' }
		{ test: /\.jade$/, loader: 'apply-loader!jade-loader' }
		{ test: /\.vue$/, loader: 'vue-loader' }
	]
	vue: loaders: stylus: ExtractText.extract 'css-loader!stylus-loader'


	output:
		library: 'vue-visual'
		libraryTarget: 'umd'
		filename: if '-p' in process.argv then '[name].min.js' else '[name].js'

	# Every non-relative module is external
	externals: [
		/^[a-z\-0-9]+$/,
	]

# Turn off warnings during minifcation.  They aren't particularly helpfull.
if minify then module.exports.plugins = module.exports.plugins.concat [
	new webpack.optimize.UglifyJsPlugin compress: warnings: false
]
