"use strict";

var join = require("path").join;

module.exports = {
	entry: join(__dirname, "/src/main.js"),
	output: {
		path: join(__dirname, "/dist"),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};
