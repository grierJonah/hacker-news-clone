import React from "react";
import "./MainContent.css";
import ListOfPosts from "../Posts/PostList";

export default class MainContent extends React.Component {
	render() {
		return (
			<section className="main-body-container-section">
				<div className="main-body-container">{<ListOfPosts />}</div>
			</section>
		);
	}
}
