"use strict";

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var config = require("../webpack.config");

var webpackDevServer = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
});

function logListenEvents(err, result) {
	/* eslint-disable no-console */
	if (err) {
		console.log(err);
	}

	console.log("Listening at localhost:8080");
	/* eslint-enable no-console */
}

webpackDevServer.listen(8080, "localhost", logListenEvents);
