import {equal} from "assert";

import {
	describe,
	it
} from "mocha";

import {createComponent} from "../test-utils";
import MainComponent from "../../src/components/MainComponent-react";

describe("Main", () => {
	it("should display name", () => {
		// Given.
		const mainComponent = createComponent(MainComponent, {
			name: "Brian"
		});

		// Then.
		equal(mainComponent.props.children[1], "Brian");
	});
});
