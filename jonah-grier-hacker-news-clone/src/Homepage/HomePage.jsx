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
							<li className="tags" id="submit-tag">
								<a href="../add_post">&nbsp;submit</a>
							</li>
							<li className="tags" id="comments-tag">
								<a href="/">&nbsp;comments</a>
							</li>
							<li className="tags" id="ask-tag">
								<a href="/">&nbsp;ask</a>
							</li>
							<li className="tags" id="show-tag">
								<a href="/">&nbsp;show</a>
							</li>
							<li className="tags" id="jobs-tag">
								<a href="/">&nbsp;jobs</a>
							</li>

							<li className="tags" id="user-login">
								<a href="../login/">login</a>
							</li>
							<li className="tags" id="user-register">
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
