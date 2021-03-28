import "./HomePage.css";
import React from "react";

export default class HomePage extends React.Component {
	render() {
		return (
			<div className="main-container">
				<section className="nav-section">
					<div className="navigation-bar">
						<ul id="header-navigation">
							<div id="hack-news-logo-container">
								<p id="hacker-news-logo">Y</p>
							</div>
							<li>
								<b>Hacker News Clone</b>&nbsp;
							</li>
							<li className="tags" id="new-tag">
								new
							</li>
							<li className="tags" id="past-tag">
								&nbsp;past
							</li>
							<li className="tags" id="comments-tag">
								&nbsp;comments
							</li>
							<li className="tags" id="ask-tag">
								&nbsp;ask
							</li>
							<li className="tags" id="show-tag">
								&nbsp;show
							</li>
							<li className="tags" id="jobs-tag">
								&nbsp;jobs
							</li>
							<li className="tags" id="submit-tag">
								&nbsp;submit
							</li>
							<li className="user-login">
								<a href="../login/">login</a>
							</li>
							<li className="user-register">
								&nbsp;
								<a href="../signup/">register</a>
							</li>
						</ul>
					</div>
				</section>
				<section className="main-body-container-section">
					<div className="main-body-container">
						<ol>
							<li>
								<p>Here is first post</p>
							</li>
							<li>
								<p>Here is second post</p>
							</li>
							<li>
								<p>Here is third post</p>
							</li>
							<li>
								<p>Here is fourth post</p>
							</li>
							<li>
								<p>Here is fifth post</p>
							</li>
							<li>
								<p>Here is sixth post</p>
							</li>
						</ol>
					</div>
				</section>
			</div>
		);
	}
}
