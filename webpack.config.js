module.exports = {
	entry: './app.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.html$/, loader: 'html-loader', }
		]
	}
};
