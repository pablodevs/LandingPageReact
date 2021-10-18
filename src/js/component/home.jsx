import React from "react"; //import the react library

import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Content } from "./content.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<main className="container-xxl" id="style-1">
				<Jumbotron
					title="A Warm Welcome!"
					buttonLabel="Call to action!"
				/>
				<Content />
			</main>
			<div className="bg-dark text-light p-5 sticky-bottom text-center">
				Copyright &copy; Your Website 2021
			</div>
		</>
	);
};

export default Home;
