"use strict";

var join = require("path").join;

var webpack = require("webpack");

var buildOutputDir = join(__dirname, "static");
var appEntryPoint = join(__dirname, "app", "main.js");

module.exports = {
	entry: [
		"webpack-hot-middleware/client",
		appEntryPoint
	],
	output: {
		path: buildOutputDir,
		filename: "bundle.js",
		publicPath: "/static/"
	},
	module: {
		loaders: [{
			test: /\.css$/,
			include: /app/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.js$/,
			include: /app/,
			loader: "babel-loader"
		}]
	},
	devtools: "eval",
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
