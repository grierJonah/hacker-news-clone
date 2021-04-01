import React from "react";
import "./Navbar.css";

export default class Navbar extends React.Component {
	render() {
		return (
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
		);
	}
}
