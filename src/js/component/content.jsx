import React from "react";

import { Card } from "./card.jsx";

export const Content = props => {
	let cardImg = "https://via.placeholder.com/500x325";

	return (
		<div className="container-fluid">
			<div className="row d-flex justify-content-between mb-4">
				<div className="card-col">
					<Card
						imageUrl={cardImg}
						title="Card 1"
						buttonUrl="https://react-hello-webapp-iota.vercel.app/"
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={cardImg}
						title="Card 2"
						buttonUrl="https://react-hello-webapp-iota.vercel.app/"
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={cardImg}
						title="Card 3"
						buttonUrl="https://react-hello-webapp-iota.vercel.app/"
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={cardImg}
						title="Card 4"
						buttonUrl="https://react-hello-webapp-iota.vercel.app/"
						buttonLabel="Find Out More!"
					/>
				</div>
			</div>
		</div>
	);
};
