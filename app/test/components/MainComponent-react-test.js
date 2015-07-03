import {deepEqual} from "assert";

import {
	describe,
	it
} from "mocha";
import React from "react";

import {createComponent} from "../test-utils";
import MainComponent from "../../src/components/MainComponent-react";

describe("Main", () => {
	it("should display name", () => {
		// Given.
		const props = {
			name: "Brian"
		};
		const mainComponentOutput = createComponent(MainComponent, props);

		// Then.
		deepEqual(mainComponentOutput, <div>Hello {props.name}</div>);
	});
});
