import React from "react";
import axios from "axios";
import "./individualPost.css";
import AddCommentForm from "./CommentForm/addCommentForm";

const url = "http://localhost:4000/posts";
const comment_url = "http://localhost:4000/comments";

export default class Random extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [],
			title: props.title,
			comments: [],
		};
	}

	showPosts() {
		return (
			<div className="individual-post-container">
				<div className="individual-post-header-title">
					{this.state.post.title}
				</div>

				<div className="individual-add-comment">
					<div className="post-comment-container">
						{sessionStorage.getItem("username") ? (
							<AddCommentForm
								blog_title={this.state.post.title}
							/>
						) : null}
					</div>
					<div id="individual-post-back-button">
						<a href="../">Go Back</a>
					</div>
				</div>

				<div className="individual-post-body">
					{this.state.post.body
						? this.state.post.body
						: this.state.post.url}
				</div>

				<div className="individual-comments-section"></div>
			</div>
		);
	}

	generateCommentsList() {
		this.setState({
			comments: this.showComments(),
		});
	}

	showComments() {
		return this.state.comments.map((comment, index) => {
			if (comment.title === this.state.post.title) {
				return <div>{comment.title}</div>;
			}
		});
		// return Object.values(this.state.comments).map((comment, index) => {
		// 	return comment;
		// })
	}

	componentDidMount() {
		this.getPosts();
		this.getComments();
	}

	getPosts() {
		let post_title = this.props.location.pathname.replace("/", "");

		post_title = encodeURIComponent(post_title.trim());

		axios
			.get(url + "/getPost/" + post_title)
			.then((response) => {
				console.log("Getting post response:", response);

				const data = response.data;
				this.setState({ post: data });
			})
			.catch(() => {
				console.log("Error retrieving data!");
			});
	}

	getComments() {
		let post_title = this.props.location.pathname.replace("/", "");

		post_title = encodeURIComponent(post_title.trim());

		axios
			.get(comment_url + "/get_comments")
			.then((response) => {
				console.log("Getting comments:", response);

				let data = response.data;
				this.setState({ comments: data });
			})
			.catch(() => {
				console.log("Error retrieving comment data!");
			});
	}

	render() {
		return (
			<div className="outer-individual-post-container">
				<div className="list_of_posts">{this.showPosts()}</div>
				<div className="comments-section">{this.showComments()}</div>
			</div>
		);
	}
}
