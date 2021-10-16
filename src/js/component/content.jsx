import React from "react";

import { Card } from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export const Content = props => {
	return (
		<div className="container-fluid">
			<div className="row d-flex justify-content-between">
				<div className="card-col">
					<Card
						imageUrl={rigoImage}
						title="Card 1"
						buttonUrl="https://react-hello-webapp-iota.vercel.app/"
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={rigoImage}
						title="Card 2"
						buttonUrl="https://react-hello-webapp-iota.vercel.app/"
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={rigoImage}
						title="Card 3"
						buttonUrl="https://react-hello-webapp-iota.vercel.app/"
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={rigoImage}
						title="Card 4"
						buttonUrl="https://react-hello-webapp-iota.vercel.app/"
						buttonLabel="Find Out More!"
					/>
				</div>
			</div>
		</div>
	);
};
