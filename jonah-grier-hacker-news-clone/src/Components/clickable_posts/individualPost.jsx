import React from "react";
import axios from "axios";
import "./individualPost.css";
// import PostBodyForm from "../post/body_form/post_body_form";
// import PostBodyForm from "./body_form/post_body_form";
import AddCommentForm from "./CommentForm/addCommentForm";

const url = "http://localhost:4000/posts";

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
		console.log("this.state.post: ", this.state.post);
		return (
			<div className="individual-post-container">
				<div className="individual-post-header-title">
					{this.state.post.title}
				</div>

				<div className="individual-add-comment">
					<div className="post-comment-container">
						{<AddCommentForm title={this.state.title} />}
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

	componentDidMount() {
		this.getPosts();
	}

	getPosts() {
		console.log(this.props.location.pathname);
		let post_title = this.props.location.pathname.replace("/", "");

		post_title = encodeURIComponent(post_title.trim());

		axios
			.get(url + "/getPost/" + post_title)
			.then((response) => {
				const data = response.data;
				this.setState({ post: data });
			})
			.catch(() => {
				console.log("Error retrieving data!");
			});
	}

	render() {
		return <div className="list_of_posts">{this.showPosts()}</div>;
	}

	// render() {
	// 	console.log(this.props);

	// 	return (
	// 		<div className="individual-post-container">
	// 			<div className="individual-post-header-title">
	// 				<h1> {this.props.location.pathname.replace("/", "")}</h1>
	// 			</div>
	// 			<div className="individual-post-body">
	// 				<h6>This is squared off for the body</h6>
	// 			</div>
	// 		</div>
	// 	);
	// }
}
