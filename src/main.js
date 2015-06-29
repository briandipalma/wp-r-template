import io from "socket.io-client";
import React, {Component} from "react";

class Main extends Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}

React.render(<Main name="Brian" />, document.body);

const socket = io("http://localhost:7070/chat");
