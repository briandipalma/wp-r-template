import React, {createElement} from "react";
import {createRenderer} from "react/lib/ReactTestUtils";

export function createComponent(component, props, ...children) {
	const shallowRenderer = createRenderer();

	shallowRenderer.render(createElement(component, props, children.length > 1 ? children : children[0]));

	return shallowRenderer.getRenderOutput();
}
