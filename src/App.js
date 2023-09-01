import React, { Component } from "react";
import "./App.css";
import MyComponentDidUpdate from "./Components/LifeCycleMethods/MyComponentDidUpdate";
import MyComponentWillUnmount from "./Components/LifeCycleMethods/MyComponentWillUnmount";
import MyWillMountAndDidMount from "./Components/LifeCycleMethods/MyWillMountAndDidMount";
import InitializingState from "./Components/StatesExample/InitializingState";
import HandlingEvents from "./Components/StatesExample/HandlingEvents";
import NormalVariables from "./Components/StatesExample/NormalVariables";
import UpdatingState from "./Components/StatesExample/UpdatingState";
import PassingPropsToState from "./Components/StatesExample/PassingPropsToState";

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <NormalVariables /> */}

				{/* <InitializingState /> */}
				{/* <PassingPropsToState batchNumber="April 2023" /> */}

				{/* <HandlingEvents /> */}

				{/* <UpdatingState /> */}

				{/* <MyWillMountAndDidMount /> */}
				{/* <MyComponentDidUpdate /> */}
				<MyComponentWillUnmount />
			</div>
		);
	}
}

export default App;
