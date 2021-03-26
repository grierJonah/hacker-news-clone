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
							<li>new</li> |<li>&nbsp;past</li> |
							<li>&nbsp;comments</li> |<li>&nbsp;ask</li> |
							<li>&nbsp;show</li> |<li>&nbsp;jobs</li> |
							<li>&nbsp;submit</li>
							<li className="user-login">
								<a href="">login</a>
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
						</ol>
					</div>

					<div className="footer-container">
						<div className="center-footer">
							<li>Guidelines</li>|<li>FAQ</li>|<li>LISTS</li>|
							<li>API</li>|<li>Security</li>|<li>Legal</li>|
							<li>Apply to YC</li>|<li>Contact</li>
							<br />
						</div>
						<div id="search-bar">
							<p id="search-bar">Search:</p>
							<input type="text"></input>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
