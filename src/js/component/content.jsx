import React from "react";

import { Card } from "./card.jsx";

export const Content = props => {
	let cardImg = "https://via.placeholder.com/500x325",
		cardButtonURL = "https://positivepsychology.com/more-more-more/";

	return (
		<div className="container-fluid">
			<div className="row d-flex justify-content-between mb-4">
				<div className="card-col">
					<Card
						imageUrl={cardImg}
						title="Card title"
						buttonUrl={cardButtonURL}
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={cardImg}
						title="Card title"
						buttonUrl={cardButtonURL}
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={cardImg}
						title="Card title"
						buttonUrl={cardButtonURL}
						buttonLabel="Find Out More!"
					/>
				</div>
				<div className="card-col">
					<Card
						imageUrl={cardImg}
						title="Card title"
						buttonUrl={cardButtonURL}
						buttonLabel="Find Out More!"
					/>
				</div>
			</div>
		</div>
	);
};
