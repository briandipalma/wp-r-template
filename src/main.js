import React, {Component} from "react";

class Main extends Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}

React.render(<Main name="Brian" />, document.body);
