/* @flow */

import React, {
	Component,
	PropTypes
} from 'react';

class App extends Component {
	render() {
		return <div>{`Hello ${this.props.name}`}</div>;
	}
}

App.propTypes = {
	name: PropTypes.string
};

export default App;
