import {join} from "path";

import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "../webpack.config";

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
	/* eslint-disable no-console */
	console.log("Request for", req.url);
	/* eslint-enable no-console */

	res.sendFile(indexPage);
}

function logListenEvents(err) {
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
