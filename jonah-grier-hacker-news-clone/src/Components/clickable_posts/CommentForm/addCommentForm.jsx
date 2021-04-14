import React from "react";
import axios from "axios";
import "./addCommentForm.css";

export default class post_body_form extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			body: "",
			username: "",
			isActive: false,
		};
		this.changeTitle = this.changeTitle.bind(this);
		this.changeBody = this.changeBody.bind(this);
		this.addCommentFunc = this.addCommentFunc.bind(this);
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

	sanitizeTitle(title) {
		return title.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
	}

	addCommentFunc() {
		console.log(this.state.isActive);
		this.setState({
			isActive: !this.state.isActive,
		});
	}

	sendToDatabase(event) {
		event.preventDefault();

		if (sessionStorage.getItem("cookie")) {
			const newBlogPost = {
				title: this.sanitizeTitle(this.state.title),
				url: "",
				body: this.state.body,
				username: sessionStorage.getItem("username"),
			};

			axios
				.post("http://localhost:4000/posts/add_blog_post", newBlogPost)
				.then((response) => {
					console.log(response);
				});

			document.location = "../";
			this.setState({
				title: "",
				body: "",
				username: "",
			});
		} else {
			document.location = "../authenticate";
		}
	}

	render() {
		return (
			<div id="something">
				{this.state.isActive ? (
					<div className="form-group">
						<form onSubmit={this.sendToDatabase.bind(this)}>
							<div className="mb-1">
								<textarea
									className="form-control"
									rows={3}
									cols={50}
									onChange={this.changeBody}
									value={this.state.body}
									id="postBody"
									required={true}
									placeholder="Add Comment"
								/>
							</div>
							<div
								className="form-group"
								id="register-outer-button">
								<input
									type="submit"
									className="btn btn-primary"
									value="Submit"
								/>
							</div>
							<div id="back-button">
								<a href="../">Cancel</a>
							</div>
						</form>
					</div>
				) : null}
				<div id="add-comment-button">
					<button onClick={this.addCommentFunc}>Add Comment</button>
				</div>
			</div>
		);
	}
}
