/* @flow */

import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import type {ExpressRequest, ExpressResponse} from '../flowlibs/express';

const IndexPage = () => {
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
			</head>
			<body>
				<div id="container">
				</div>
				<script src="/static/bundle.js"></script>
			</body>
		</html>
	);
};

export function indexRouteHandler(req: ExpressRequest, res: ExpressResponse) {
	console.log(`Request for ${req.url}`); // eslint-disable-line

	// JSX can't process DOCTYPE tags.
	res.send(
		`<!DOCTYPE html>
		${renderToStaticMarkup(<IndexPage />)}`
	);
}
