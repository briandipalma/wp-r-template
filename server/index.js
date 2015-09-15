"use strict";

var join = require("path").join;

var express = require("express");
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var config = require("../webpack.config");

var devMiddlewareOptions = {
	noInfo: true,
	publicPath: config.output.publicPath
};
var indexPage = join(__dirname, "..", "index.html");

var app = express();
var compiler = webpack(config);
var hmrMiddleware = webpackHotMiddleware(compiler);
var devMiddleware = webpackDevMiddleware(compiler, devMiddlewareOptions);

function allRoutesHandler(req, res) {
	/* eslint-disable no-console */
	console.log("Request for", req.url);
	/* eslint-enable no-console */

	res.sendFile(indexPage);
}

function logListenEvents(err, result) {
	/* eslint-disable no-console */
	if (err) {
		console.log(err);
	}

	console.log("Listening at localhost:8080");
	/* eslint-enable no-console */
}

app.use(devMiddleware);
app.use(hmrMiddleware);

app.get("*", allRoutesHandler);

app.listen(8080, "localhost", logListenEvents);
