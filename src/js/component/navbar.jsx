import React from "react";
// import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<header className="navbar navbar-expand-md back-dark sticky-top">
			<div className="container-xxl">
				<a className="navbar-brand color-light" href="#">
					Start Bootstrap
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-item nav-link mx-2 active color-light"
							href="#">
							Home
						</a>
						<a
							className="nav-item nav-link mx-2 color-light"
							href="#">
							About
						</a>
						<a
							className="nav-item nav-link mx-2 color-light"
							href="#">
							Services
						</a>
						<a
							className="nav-item nav-link mx-2 color-light"
							href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};
