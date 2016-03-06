/* @flow */

import {createElement} from 'react';
import {createRenderer} from 'react/lib/ReactTestUtils';

export function createComponent(
	component: ReactClass,
	props: ?Object
): ReactClass {
	const shallowRenderer = createRenderer();

	shallowRenderer.render(createElement(component, props));

	return shallowRenderer.getRenderOutput();
}
