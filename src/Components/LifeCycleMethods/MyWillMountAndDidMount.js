import React, { Component } from "react";

let x = 0;
let y = 0;

class MyWillMountAndDidMount extends Component {
	state = {
		counter: 0,
	};

	componentWillMount() {
		y += 1;
		this.setState({
			counter:
				"Loading ...",
		});
	}

	componentDidMount() {
		x += 1;
		setTimeout(() => {
			this.setState({ counter: "Hello World" });
		}, 5000);
	}

	render() {
		return (
			<div>
				<h1>Component Will Mount & Component Did Mount Example</h1>
				<br />
				<h1>{this.state.counter}</h1>
				<h1>y = componentWillMount {y} times</h1>
				<h1>x = componentDidMount {x} times</h1>
			</div>
		);
	}
}

export default MyWillMountAndDidMount;

// // call the component 3 times on App.js, it will help you to understand componentDidMount
