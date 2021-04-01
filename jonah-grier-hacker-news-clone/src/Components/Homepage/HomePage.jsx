import "./HomePage.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import MainContent from "./MainContent/MainContent";

export default class HomePage extends React.Component {
	render() {
		return (
			<div className="main-container">
				<Navbar />
				<MainContent />
			</div>
		);
	}
}
