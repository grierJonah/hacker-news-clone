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

		const res = axios
			.post("http://localhost:4000/api/users/" + loginUser.username)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));

		// axios
		// .post("http://localhost:4000/api/users/" + loginUser.username)
		// .then((response) => {
		// 	console.log("Response:", response.data);
		// this.authenticateUser(
		// 	"LOG_IN",
		// 	loginUser.username,
		// 	loginUser.password,
		// 	response.data
		// );
		// if (this.props.state_is_verified.loggedIn) {
		// let acct = this.state.username;
		// console.log(`Account: ${acct} successfully logged in`);

		// const payload = { username: loginUser.username };
		// const token = jwt.sign(
		// 	payload.username,
		// 	process.env.SUPER_SECRET,
		// 	{
		// 		expiresIn: "1d",
		// 	}
		// );

		// console.log("Super Secret:?", process.env.SUPER_SECRET);
		// return response
		// 	.cookie("token", token, { httpOnly: true })
		// 	.status(200)
		// 	.send(payload.username);

		// document.location = this.props.state_is_verified.redirect;
		// })
		// .catch((error) => console.log(error));
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
							<label htmlFor="username">Password:</label>
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
