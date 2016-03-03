/* @flow */

import {createElement} from 'react';
import {createRenderer} from 'react/lib/ReactTestUtils';

export function createComponent(
	component: ReactClass,
	props: ?Object,
	...children: Array<ReactElement>
): ReactElement {
	const shallowRenderer = createRenderer();

	shallowRenderer.render(createElement(component, props, children.length > 1 ? children : children[0]));

	return shallowRenderer.getRenderOutput();
}
