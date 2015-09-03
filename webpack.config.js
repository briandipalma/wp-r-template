"use strict";

var join = require("path").join;

var webpack = require("webpack");

var buildOutputDir = join(__dirname, "dist");
var appEntryPoint = join(__dirname, "app", "main.js");

module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080", // WebpackDevServer host and port
		"webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
		appEntryPoint
	],
	output: {
		path: buildOutputDir,
		filename: "bundle.js",
		publicPath: "/dist/"
	},
	devtools: "eval",
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /\-react\.js$/,
			exclude: /node_modules/,
			loaders: [
				"react-hot",
				"babel-loader"
			]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
