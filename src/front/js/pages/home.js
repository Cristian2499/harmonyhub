import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import Jumbotron from "../component/Jumbotron.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { Footer } from "../component/Footer.jsx";
import CardConnect from "../component/CardConnect.jsx";







import img10 from "../../img/img-connect/img-10.png";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="animate__animated animate__fadeIn">
		<Navbar />
		<Jumbotron/>
		
		















		<div className="container-fluid d-flex row justify-content-center align-items-center m-0">
		<div className="container d-flex justify-content-center my-2 py-2"><h2>Connect with them</h2></div>
		<CardConnect name="Emily White" imageCardConnect={img10}/>


		</div>
		<Footer />
		</div>
	);
};
