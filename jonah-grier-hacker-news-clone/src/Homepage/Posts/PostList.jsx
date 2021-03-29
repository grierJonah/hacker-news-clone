import React from "react";
import axios from "axios";

class PostList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	componentDidMount = () => {
		this.getPosts();
	};

	getPosts = () => {
		axios
			.get("/get_posts")
			.then((response) => {
				const data = response.data;
				this.setState({ posts: data });
				console.log("Data has been received");
			})
			.catch(() => {
				console.log("Error retrieving data!");
			});
	};

	render() {
		return <div className="list_of_posts">List of Posts:</div>;
	}
}

export default PostList;
