import React, { Component } from 'react';

class UpdatingState extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};

		// this.increment = this.increment.bind(this); //binding to use regular function instead of arrow function
	}

	// increment() {
	// // 👆 if normal function used instead of arrow function, it requires binding
	increment = () => {
		// this.setState({
		// 	counter: this.state.counter + 1,
		// });

		this.setState((x) => {
			return {
				counter: x.counter + 1,
			};
		}); // use call back functions inside setState method to avoid errors. (Mostly errors happen as your project gets bigger and bigger)
	};

	render() {
		return (
			<div>
				<h1>Updating State</h1>
				<h2>{this.state.counter}</h2>
				<button onClick={this.increment}>Add 1</button>
				<br />
			</div>
		);
	}
}

export default UpdatingState;
