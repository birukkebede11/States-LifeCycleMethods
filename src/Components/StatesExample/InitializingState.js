import React, { Component } from "react";

class InitializingState extends Component {
	constructor() {
		super();
		this.state = {
			name: "Abebe",
			bootCamp: "Evangadi",
			group: 1,
		};
	}

	render() {
		return (
			<div>
				<h1>Initializing State Example</h1>
				<h2>{this.state.name}</h2>
				<h2>{this.state.group}</h2>
				<h2>School name : {this.state.bootCamp}</h2>
			</div>
		);
	}
}

export default InitializingState;
