import React, {addons} from "react/addons";

const TestUtils = addons.TestUtils;

export function createComponent(component, props, ...children) {
	const shallowRenderer = TestUtils.createRenderer();

	shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));

	return shallowRenderer.getRenderOutput();
}
