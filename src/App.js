import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Address from "./Components/Pages/Address";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Navbar";
export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/Address" element={<Address />}></Route>
				</Routes>
			</div>
		);
	}
}

export default App;
