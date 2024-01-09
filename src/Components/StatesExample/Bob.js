import React, { Component } from "react";

class Bob extends Component {
	render() {
		return (
			<div>
				<h2>Hello this is bob Component</h2>
				<h3>{this.props.text}</h3>
			</div>
		);
	}
}

export default Bob;
