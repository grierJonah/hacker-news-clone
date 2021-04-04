import "./login.css";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

const jwt = require("jsonwebtoken");

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
		};
		this.changeUsername = this.changeUsername.bind(this);
		this.changePassword = this.changePassword.bind(this);
	}

	changeUsername(event) {
		this.setState({
			username: event.target.value,
		});
	}

	changePassword(event) {
		this.setState({
			password: event.target.value,
		});
	}

	authenticateUser(action, name, pass, db_user) {
		this.props.dispatch({
			type: action,
			username: name,
			password: pass,
			auth: db_user,
		});
	}

	getFromDatabase(event) {
		event.preventDefault();
		const loginUser = {
			username: this.state.username,
			password: this.state.password,
		};

		console.log("User Logging in:", loginUser);

		axios
			.post("http://localhost:4000/users/authenticate", loginUser)
			.then((res) => {
				console.log("Cookie Token:", res.data.token);
				let cookie = "token=" + res.data.token;
				document.cookie = cookie;
				document.location = "../";
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div className="container">
				<div className="form-group">
					<form onSubmit={this.getFromDatabase.bind(this)}>
						<div className="form-group row">
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								placeholder="Username"
								onChange={this.changeUsername}
								value={this.state.username}
								className="form-control form-group"
								required={true}
							/>
						</div>
						<div className="form-group row">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								placeholder="Password"
								minLength="8"
								onChange={this.changePassword}
								value={this.state.password}
								className="form-control form-group register"
								required={true}
							/>
						</div>
						<small id="login-help" className="form-text text-muted">
							Enter your username and password to login!
						</small>
						<div className="form-group" id="register-outer-button">
							<input
								type="submit"
								className="btn btn-primary"
								value="Login"
							/>
						</div>
						<div id="login-back-button">
							<a href="../">Cancel</a>
						</div>
					</form>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
