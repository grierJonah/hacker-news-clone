import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends React.Component {
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

		// window.location();
		this.setState({
			username: "",
			password: "",
		});
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="form-div">
						<form onSubmit={this.sendToDatabase.bind(this)}>
							<input
								type="text"
								placeholder="Username"
								onChange={this.changeUsername}
								value={this.state.username}
								className="form-control form-group"
							/>
							<input
								type="password"
								placeholder="Password"
								onChange={this.changePassword}
								value={this.state.password}
								className="form-control form-group"
							/>
							<input
								type="submit"
								className="btn btn-success btn-block"
								value="Submit"
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
