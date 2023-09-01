import React, { Component } from "react";
import LoggedInPage from "./LoggedInPage";
import LoggedOutPage from "./LoggedOutPage";

class MyComponentWillUnmount extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
		};
	}

	changeStatus = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		return (
			<>
				<h1>Component Will Unmount Example</h1>
				<div>{this.state.show ? <LoggedInPage /> : <LoggedOutPage />}</div>

				<button onClick={this.changeStatus}>
					{this.state.show ? "Log Out" : "Log In"}
				</button>
			</>
		);
	}
}

export default MyComponentWillUnmount;
