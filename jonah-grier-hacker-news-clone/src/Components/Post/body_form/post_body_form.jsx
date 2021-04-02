import React from "react";
import "../../login/node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class post_body_form extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			url: "",
			body: "",
		};
		this.changeTitle = this.changeTitle.bind(this);
		this.changeBody = this.changeBody.bind(this);
	}

	changeTitle(event) {
		this.setState({
			title: event.target.value,
		});
	}

	changeBody(event) {
		this.setState({
			body: event.target.value,
		});
	}

	sendToDatabase(event) {
		// Prevents the form to act in a default way --> don't want whole page to refresh, we want redirection
		event.preventDefault();

		const newBlogPost = {
			title: this.state.title,
			url: "",
			body: this.state.body,
		};

		axios
			.post("http://localhost:4000/add_post", newBlogPost)
			.then((response) => console.log(response.data));

		document.location = "../";
		this.setState({
			title: "",
			url: "",
			body: "",
		});
	}

	render() {
		return (
			<div className="form-group">
				<form onSubmit={this.sendToDatabase.bind(this)}>
					<div className="form-group">
						<label className="col-xs-3 col-form-label mr-2">
							Post Title:
						</label>
						<div className="col-xs-9">
							<input
								className="form-control"
								type="text"
								placeholder="Posts Title"
								onChange={this.changeTitle}
								value={this.state.title}
								required={true}
							/>
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="postBody" className="form-label">
							Body:
						</label>
						<textarea
							className="form-control"
							rows={5}
							cols={80}
							onChange={this.changeBody}
							value={this.state.body}
							id="postBody"
							required={true}
						/>
					</div>
					<div className="form-group" id="register-outer-button">
						<input
							type="submit"
							className="btn btn-primary"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		);
	}
}
