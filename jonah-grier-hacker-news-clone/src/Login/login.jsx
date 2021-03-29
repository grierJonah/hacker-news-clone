import "./login.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

	sendToDatabase(event) {
		// Prevents the form to act in a default way --> don't want whole page to refresh, we want redirection
		event.preventDefault();

		const newRegisteredUser = {
			username: this.state.username,
			password: this.state.password,
		};

		axios
			.post("http://localhost:4000/signup", newRegisteredUser)
			.then((response) => console.log(response.data));

		document.location = "../";
		this.setState({
			username: "",
			password: "",
		});
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="form-group">
						<form onSubmit={this.sendToDatabase.bind(this)}>
							<div class="form-group">
								<label for="username">Username:</label>
								<input
									type="text"
									placeholder="Username"
									onChange={this.changeUsername}
									value={this.state.username}
									className="form-control form-group"
								/>
							</div>
							<div lass="form-group">
								<input
									type="password"
									placeholder="Password"
									minLength="8"
									onChange={this.changePassword}
									value={this.state.password}
									className="form-control form-group register"
								/>
							</div>
							<small id="login-help" class="form-text text-muted">
								Enter your username and password to login!
							</small>
							<div class="form-group" id="register-outer-button">
								<input
									type="submit"
									className="btn btn-primary"
									value="Login"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
