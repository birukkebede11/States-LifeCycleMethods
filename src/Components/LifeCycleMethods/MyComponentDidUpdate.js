import React, { Component } from "react";

class MyComponentDidUpdate extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};
	}

	increment = () => {
		this.setState((x) => {
			return {
				counter: x.counter + 1,
			};
		});
	};

	componentDidUpdate() {
		console.log("Number of clicks: " + this.state.counter);

		document.title = "Hello World";
	}

	render() {
		return (
			<div>
				<h1>ComponentDidUpdate Example</h1>
				<br />
				<h1>{this.state.counter}</h1>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default MyComponentDidUpdate;
