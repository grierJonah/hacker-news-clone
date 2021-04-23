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

	editPost(index) {
		console.log("To be implemented in PostList.jsx");
	}

	deletePost(index) {
		let post = this.state.posts[index]._id;

		let postPath = "http://localhost:4000/posts/getPostById/" + post;
		console.log("POST PATH", postPath);
		axios.delete(postPath, {}).then((response) => {
			this.setState({
				posts: this.state.posts.filter(
					(posts) => posts.title !== post.title
				),
			});
		});
		console.log(this.state.posts);
		this.getPosts();
	}

	showPosts() {
		return this.state.posts.map((post, index) => {
			if (post.username === sessionStorage.getItem("username")) {
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
								<li id="ul-post-edit">
									<a onClick={() => this.editPost(index)}>
										edit
									</a>
								</li>
								<li id="ul-post-delete">
									<a onClick={() => this.deletePost(index)}>
										delete
									</a>
								</li>
							</ul>
						</div>
					</div>
				);
			} else {
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
			}
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
