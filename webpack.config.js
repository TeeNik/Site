var path = require('path');
var webpack = require('webpack');

module.exports = {
 	entry: './comp.js',
 	output: { path: __dirname, filename: 'public/scripts/bundle.js' },

 	module: {
  		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node-modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
  		]
 	},
};