import "./login.css";
import React from "react";
import "../post/node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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

	getFromDatabase(event) {
		event.preventDefault();

		const loginUser = {
			username: this.state.username,
			password: this.state.password,
		};

		axios
			.get("http://localhost:4000/user/:username", loginUser.username)
			.then((response) => console.log(response));
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

export default Register;
