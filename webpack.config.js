"use strict";

var join = require("path").join;

var buildOutputDir = join(__dirname, "dist");
var appEntryPoint = join(__dirname, "app", "src", "main.js");

module.exports = {
	entry: appEntryPoint,
	output: {
		path: buildOutputDir,
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.css$/, loader: "style-loader!css-loader"
		}, {
			test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
		}]
	}
};
