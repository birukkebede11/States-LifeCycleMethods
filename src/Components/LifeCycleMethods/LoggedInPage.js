import React, { Component } from "react";

class LoggedInPage extends Component {
	constructor() {
		super();
		this.state = {
			name: "Abebe",
			bootcamp: "Evangadi",
			group: "1",
		};
	}

	componentWillUnmount() {
		console.log("component is unmounting");
		alert("You have successfully logged out.");
	}

	render() {
		return (
			<div>
				<h1>User Logged In</h1>
				<h3>Name : {this.state.name}</h3>
				<h3>Group : {this.state.group}</h3>
				<h3>School name : {this.state.bootcamp}</h3>
			</div>
		);
	}
}

export default LoggedInPage;
