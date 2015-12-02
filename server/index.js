/* @flow */

import {join} from "path";

import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "../webpack.config";

const APP_PORT = 8080;
const devMiddlewareOptions = {
	noInfo: true,
	publicPath: config.output.publicPath
};
const indexPage = join(__dirname, "..", "index.html");

const app = express();
const compiler = webpack(config);
const hmrMiddleware = webpackHotMiddleware(compiler);
const devMiddleware = webpackDevMiddleware(compiler, devMiddlewareOptions);

function allRoutesHandler(req, res) {
	console.log("Request for", req.url); // eslint-disable-line

	res.sendFile(indexPage);
}

function logListenEvents(err) {
	if (err) {
		console.log(err); // eslint-disable-line
	}

	console.log("Listening at localhost:8080"); // eslint-disable-line
}

app.use(devMiddleware);
app.use(hmrMiddleware);

app.get("*", allRoutesHandler);

app.listen(APP_PORT, "localhost", logListenEvents);
