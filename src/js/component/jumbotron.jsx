import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	let loremText =
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam rem obcaecati cupiditate eum autem enim dolorum provident voluptatum illum reiciendis voluptatibus a culpa recusandae placeat quis, exercitationem itaque ut blanditiis voluptates? Expedita, beatae alias!";

	return (
		<div className="jumbotron py-3 px-4 pb-5 mb-4 back-light">
			<h1 className="display-4 color-dark">{props.title}</h1>
			<p className="lead">{loremText}</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
