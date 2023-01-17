import React, { Component } from "react";
import Bob from "./Bob";
class PassingPropsToState extends Component {
	constructor(props) {
		super();
		this.state = {
			name: "Kebede",
			group: 2,
			batch: props.batchNumber,
			sampleText: "Hello World",
		};
	}

	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<h2>{this.state.group}</h2>
				<h3>{this.state.batch}</h3>

				<Bob text={this.state.sampleText} />
			</div>
		);
	}
}

export default PassingPropsToState;
