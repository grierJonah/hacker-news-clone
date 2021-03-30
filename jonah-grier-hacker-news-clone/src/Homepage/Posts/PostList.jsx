import React from "react";
import axios from "axios";
import "./PostList.css";

const url = "http://localhost:4000";

class PostList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	showPosts() {
		return this.state.posts.map((post, index) => {
			return (
				<div className="db-posts">
					<span className="db-post-index">
						{index + 1}.<span id="db-post-triangle">▲</span>
					</span>
					<h6 className="db-post-title">
						<a href={post.title}>{post.title}</a>
					</h6>
					<span className="db-post-url">
						<small>
							<a href={post.url} target={post.url}>
								({post.url})
							</a>
						</small>
					</span>
				</div>
			);
		});
	}

	componentDidMount() {
		this.getPosts();
	}

	getPosts() {
		axios
			.get(url + "/")
			.then((response) => {
				const data = response.data;
				this.setState({ posts: data });
				console.log("Data has been received");
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
