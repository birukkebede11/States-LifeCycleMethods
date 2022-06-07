import React, { Component } from "react";

class HandlingEvents extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};
	}

	increment = () => {
		console.log("You clicked Add 1");
	};

	render() {
		return (
			<div>
				<h1>Handling Events</h1>
				<h2>{this.state.counter}</h2>
				<button onClick={this.increment}>Add 1</button>
				<br />
			</div>
		);
	}
}
export default HandlingEvents;
