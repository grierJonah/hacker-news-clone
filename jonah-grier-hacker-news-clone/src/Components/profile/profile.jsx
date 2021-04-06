import React from "react";
import "../homepage/navbar/Navbar.css";
import "./profile.css";

export default class Profile extends React.Component {
	render() {
		return (
			<div className="user-profile-container">
				<section className="nav-section">
					<div className="navigation-bar">
						<ul id="header-navigation">
							<li className="tags" id="user-profile">
								<a href="/profile">Profile</a>
							</li>
							<li className="tags" id="user-settings">
								<a href="/settings-page">Settings</a>
							</li>
							<li id="user-home">
								<a href="../">Homepage</a>
							</li>
						</ul>
					</div>
				</section>

				<section className="user-profile-settings">
					<div className="user-profile-avatar">
						{/* <UserAvatar size="48" name="Will Binns-Smith" /> */}
					</div>
				</section>
			</div>
		);
	}
}
