import React, { Component } from "react";
import LoggedInPage from "./LoggedInPage";
import LoggedOutPage from "./LoggedOutPage";

class MyComponentWillUnmount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
		};
	}
	render() {
		return (
			<>
				<div>{this.state.show ? <LoggedInPage /> : <LoggedOutPage />}</div>
				<button
					onClick={() => {
						this.setState({ show: !this.state.show });
					}}>
					{this.state.show ? "Log Out" : "Log In"}
				</button>
			</>
		);
	}
}

export default MyComponentWillUnmount;
