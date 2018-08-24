module.exports = {
	entry: './app.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'html' },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	},
	externals: {
		'ko': 'ko'
	}
};
