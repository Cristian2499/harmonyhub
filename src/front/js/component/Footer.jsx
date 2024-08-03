import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer container-fluid mt-auto py-3 d-flex justify-content-center">
		<div className="container bg-light d-flex flex-column justify-content-center align-items-center">

			<div className="footer-form d-flex flex-column">
				<label htmlFor="">Subscribe to Harmony Hub!</label>
				<input type="text" />
			</div>

			<div className="footer-menu container-fluid justify-content-end">
				<ul className="d-flex flex-wrap list-unstyled bg-warning">
					<li className="footer-link ms-4">About us</li>
					<li className="footer-link ms-4">Features</li>
					<li className="footer-link ms-4">Contact us</li>
					<li className="footer-link ms-4">FAQs</li>
					<li className="footer-link ms-4">Careers</li>
				</ul>
			</div>

			<div>Linea</div>

			<div className="footer-end">
				<ul>
					<li>Idiomas</li>
					<li>Logo Central</li>
					<li>RRSS</li>
				</ul>
			</div>

		</div>
	</footer>
);
