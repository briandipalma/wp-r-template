import {deepEqual} from "assert";

import {
	describe,
	it
} from "mocha";
import React from "react";

import {createComponent} from "../test-utils";
import App from "../../src/components/App-react";

describe("App", () => {
	it("should display name", () => {
		// Given.
		const props = {
			name: "Brian"
		};
		const appOutput = createComponent(App, props);

		// Then.
		deepEqual(appOutput, <div>Hello {props.name}</div>);
	});
});
