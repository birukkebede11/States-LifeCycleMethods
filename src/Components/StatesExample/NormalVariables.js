import React, { Component } from "react";

class NormalVariables extends Component {
	render() {
		let x = 1;
		const add = () => {
			x = x + 1;
			console.log(x); // the value is updating but it won't show on the return because our component is not re-rendering (only setState can make it to re-render)
		};
		return (
			<div>
				<h1>Why Using Normal Variable won't work in React as states</h1>
				<h1>{x}</h1>
				<button onClick={add}>Add - 1</button>
			</div>
		);
	}
}

export default NormalVariables;
