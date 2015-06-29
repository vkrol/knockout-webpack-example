module.exports = {
	entry: './app.js',
	output: {
		path: __dirName + '/build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'html' },
			//{ test: /knockout-3.3.0\.js/, loader: 'imports?require=>__webpack_require__' },
			{
      	test: /\.js$/,
      	exclude: /(node_modules|bower_components)/,
      	loader: 'babel'
    	}
		]/*,
		noParse: [
			/knockout-3.3.0\.js/
    ]*/
	},
	externals: {
		'ko': 'ko'
  }
};
