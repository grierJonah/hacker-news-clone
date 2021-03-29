import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class post_url_form extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			url_link: "",
		};
		this.changeTitle = this.changeTitle.bind(this);
		this.changeURL = this.changeURL.bind(this);
	}

	changeTitle(event) {
		this.setState({
			title: event.target.value,
		});
	}

	changeURL(event) {
		this.setState({
			url_link: event.target.value,
		});
	}

	sendToDatabase(event) {
		// Prevents the form to act in a default way --> don't want whole page to refresh, we want redirection
		event.preventDefault();

		const newBlogPost = {
			title: this.state.title,
			url_link: this.state.url_link,
			body: "----",
		};

		console.log(newBlogPost);

		axios
			.post("http://localhost:4000/add_post", newBlogPost)
			.then((response) => console.log(response.data));

		// document.location = "../";
		this.setState({
			title: "",
			url_link: "",
		});
	}

	render() {
		return (
			<div className="url-container">
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
				</div>
				<div className="form-group">
					<label for="URL" className="col-xs-3 col-form-label mr-2">
						URL:
					</label>
					<div className="col-xs-9">
						<input
							type="text"
							placeholder="Link to article"
							className="form-control"
							onChange={this.changeURL}
							value={this.state.url_link}
							id="url_link"
							name="url_link"
						/>
					</div>
				</div>
				<form onSubmit={this.sendToDatabase.bind(this)}>
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
