import React from "react";
// import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<header className="navbar navbar-expand-md navbar-dark bd-navbar back-dark sticky-top">
			<nav className="container-xxl flex-wrap flex-md-nowrap">
				<a className="navbar-brand color-light" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-light"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
