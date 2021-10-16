import React from "react"; //import the react library

import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Content } from "./content.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<main className="container-xxl">
				<Jumbotron
					title="A Warm Welcome!"
					buttonLabel="Call to action!"
				/>
				<Content />
			</main>
		</>
	);
};

export default Home;
