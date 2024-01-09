import React, { Component } from "react";
import Reset from "./Reset";

class UpdatingState extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};
	}

	increment = () => {
		// this.setState({ counter: this.state.counter + 1 });

		this.setState((x) => {
			// console.log(x);
			return { counter: x.counter + 1 };
		}); // use call back functions inside setState method to avoid errors. (Mostly errors happen as your project gets bigger and bigger)
	};

	decrement = () => {
		this.setState((prevState) => ({ counter: prevState.counter - 1 }));
	};

	reset = () => {
		this.setState(() => ({ counter: 0 }));
	};

	render() {
		return (
			<div>
				<h1>Updating State</h1>

				<h2>{this.state.counter}</h2>

				<button onClick={this.increment}>Add 1</button>

				<button onClick={this.decrement}>Minus 1</button>

				<button onClick={this.reset}>reset</button>

				<Reset resetBtn={this.reset} />
			</div>
		);
	}
}

export default UpdatingState;
