/* @flow */

import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "../webpack.config";
import {indexRouteHandler} from "./indexPage-react";

const APP_PORT = 8080;
const devMiddlewareOptions = {
	noInfo: true,
	publicPath: config.output.publicPath
};

const app = express();
const compiler = webpack(config);
const hmrMiddleware = webpackHotMiddleware(compiler);
const devMiddleware = webpackDevMiddleware(compiler, devMiddlewareOptions);

function logListenEvents(err) {
	if (err) {
		console.log(err); // eslint-disable-line
	} else {
		console.log(`Listening at localhost:${APP_PORT}`); // eslint-disable-line
	}
}

app.use(devMiddleware);
app.use(hmrMiddleware);

app.get("/", indexRouteHandler);

app.listen(APP_PORT, "localhost", logListenEvents);
