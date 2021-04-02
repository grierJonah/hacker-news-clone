import "./HomePage.css";
import React from "react";
import Navbar from "./navbar/Navbar";
import MainContent from "./maincontent/MainContent";
import { connect } from "react-redux";

class HomePage extends React.Component {
	render() {
		return (
			<div className="main-container">
				<Navbar loggedOn={this.props.state_is_verified} />
				<MainContent loggedOn={this.props.state_is_verified} />
			</div>
		);
	}
}

let mapDispatchToProps = function (dispatch, props) {
	return {
		dispatch: dispatch,
	};
};

let mapStateToProps = function (state, props) {
	return {
		state_is_verified: state.verified,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
