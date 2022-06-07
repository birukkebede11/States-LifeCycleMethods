import React, { Component } from "react";

class InitializingState extends Component {
	constructor() {
		super();
		this.state = {
			name: "Abebe",
			bootcamp: "Evangadi",
			group: "1",
		};
	}

	render() {
		return (
			<div>
				<h1>Initializing State Example</h1>
				<h3>{this.state.name}</h3>
				<h3>{this.state.group}</h3>
				<h3>School name : {this.state.bootcamp}</h3>
			</div>
		);
	}
}

export default InitializingState;
