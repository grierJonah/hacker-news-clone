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
		return this.state.posts.map((post) => {
			return (
				<div className="db-posts">
					<h6 className="db-post-title">{post.title}</h6>
					<span className="db-post-url">
						<a href={post.url}>({post.url})</a>
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
		return (
			<div className="list_of_posts">
				List of Posts:
				{this.showPosts()}
			</div>
		);
	}
}

export default PostList;
