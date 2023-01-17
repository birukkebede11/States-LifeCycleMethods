import React, { Component } from "react";

class Reset extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.resetBtn}>Reset btn passed as props</button>
			</div>
		);
	}
}

export default Reset;
