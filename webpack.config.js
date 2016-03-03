"use strict"; // eslint-disable-line

const join = require('path').join;

const webpack = require('webpack');

const buildOutputDir = join(__dirname, 'static');
const appEntryPoint = join(__dirname, 'app', 'main.js');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		appEntryPoint
	],
	output: {
		path: buildOutputDir,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			include: /app/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.js$/,
			include: /app/,
			loader: 'babel-loader'
		}]
	},
	devtool: 'source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
