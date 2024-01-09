import React, { Component } from "react";

class HandlingEvents extends Component {
	constructor() {
		super();
		this.state = {
			counter: 1000,
		};

		this.increment = this.increment.bind(this); //binding to use regular function instead of arrow function
	}

	increment() {
		// // 👆 if normal function used instead of arrow function, it requires binding in the constructor function in order to update the state. But if arrow function is used, it auto binds it, so no need to bind it manually. 

		console.log("You clicked Add 1");
		console.log(this.state.counter);
	}

	render() {
		return (
			<div>
				<h1>Handling Events</h1>
				<h2>{this.state.counter}</h2>
				<button onClick={this.increment}>Add 1</button>
			</div>
		);
	}
}

export default HandlingEvents;
