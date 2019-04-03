module.exports = function({ config, mode }) {
	
	// Add to resolve extensions
	config.resolve.extensions.push('.coffee')
	
	// Add Coffeescript
	config.module.rules.push({
		test: /\.coffee$/,
		loader: 'babel-loader!coffee-loader',
	})
	
	// Add pug
	config.module.rules.push({
		test: /\.pug$/,
		loader: 'pug-plain-loader',
	})
	
	// Add Stylus
	config.module.rules.push({
		test: /\.styl(us)?$/,
		use: [
			'vue-style-loader',
			'css-loader',
			'stylus-loader',
		]
	})
	
	// Source addon
	config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })
	
	return config
};
