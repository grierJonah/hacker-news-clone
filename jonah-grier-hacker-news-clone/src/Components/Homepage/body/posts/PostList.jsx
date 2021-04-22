import React from "react";
import axios from "axios";
import "./PostList.css";

class PostList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	checkLinkExists(url) {
		if (url === undefined) {
			return "";
		} else if (url.length !== 0) {
			return (
				<span className="db-post-url">
					<a href={url} target={url}>
						({url})
					</a>
				</span>
			);
		}
	}

	showPosts() {
		return this.state.posts.map((post, index) => {
			return (
				<div>
					<div className="db-posts">
						<span className="db-post-index">
							{index}.<span id="db-post-triangle">▲</span>
						</span>
						<h6 className="db-post-title">
							<a href={post.title}>{post.title}</a>
						</h6>
						<span className="db-post-url">
							<small>{this.checkLinkExists(post.url)}</small>
						</span>
					</div>
					<div className="db-post-information">
						<ul id="ul-post">
							<li id="ul-post-username">{post.username}</li>
							<li id="ul-post-comments">comments</li>
						</ul>
					</div>
				</div>
			);
		});
	}

	componentDidMount() {
		this.getPosts();
	}

	getPosts() {
		axios
			.get("/posts/getAllPosts")
			.then((response) => {
				console.log(response);
				const data = response.data;
				this.setState({ posts: data });
			})
			.catch(() => {
				console.log("Error retrieving data!");
			});
	}

	render() {
		return <div className="list_of_posts">{this.showPosts()}</div>;
	}
}

export default PostList;
