/* @flow */

import {ok} from 'assert';

import {shallow} from 'enzyme';
import {
	describe,
	it
} from 'mocha';
import React from 'react';

import App from './App-react';

describe('App', () => {
	it('should display name', () => {
		// Given.
		const name = 'Brian';
		const wrapper = shallow(<App name={name} />);

		// Then.
		ok(wrapper.equals(<div>{`Hello ${name}`}</div>));
	});
});
