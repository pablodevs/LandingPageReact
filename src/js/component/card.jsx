import React from "react"; //import the react library
import PropTypes from "prop-types";

let loremText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error repudiandae libero cupiditate, doloremque mollitia.";

export const Card = props => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<div className="card-body text-center">
				<h5 className="card-title color-dark">{props.title}</h5>
				<p className="card-text">{loremText}</p>
				<a
					href={props.buttonUrl}
					className="btn btn-primary"
					target="_blank"
					rel="noreferrer">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};
