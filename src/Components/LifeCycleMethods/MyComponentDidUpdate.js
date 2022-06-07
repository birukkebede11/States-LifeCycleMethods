import React, { Component } from "react";

class MyComponentDidUpdate extends Component {
	state = {
		counter: 0,
	};

	increment = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	componentDidUpdate() {
		alert("Number of clicks: " + this.state.counter);
	}

	render() {
		return (
			<div>
				<h1>ComponentDidUpdate Example</h1>
				<br />
				<p>{this.state.counter}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default MyComponentDidUpdate;

