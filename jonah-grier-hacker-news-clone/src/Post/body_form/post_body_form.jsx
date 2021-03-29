import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class post_body_form extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			url_link: "",
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
			url_link: "",
			body: this.state.body,
		};

		console.log(newBlogPost.body);

		axios
			.post("http://localhost:4000/add_post", newBlogPost)
			.then((response) => console.log(response.data));

		// document.location = "../";
		this.setState({
			title: "",
			url_link: "",
			body: "",
		});
	}

	render() {
		return (
			<div className="form-group">
				<label className="col-xs-3 col-form-label mr-2">
					Post Title:
				</label>
				<div className="col-xs-9">
					<input
						type="text"
						placeholder="Enter your Posts title"
						className="form-control"
						onChange={this.changeTitle}
						value={this.state.title}
						id="Title"
						name="title"
						required={true}
					/>
				</div>
				<form id="postBody" onSubmit={this.sendToDatabase.bind(this)}>
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
						/>
					</div>
					<div className="form-group row">
						<div className="offset-xs-3 col-xs-9">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
