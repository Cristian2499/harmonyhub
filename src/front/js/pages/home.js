import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import Jumbotron from "../component/Jumbotron.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { Footer } from "../component/Footer.jsx";
import CardNewArtist from "../component/CardNewArtist.jsx";
//test images for cards
import img01 from "../../img/img-new-artist/img-01.png";
import img02 from "../../img/img-new-artist/img-02.png";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="animate__animated animate__fadeIn">
		<Navbar />
		<Jumbotron/>
		<div className="d-flex justify-content-center align-items-center">
		<CardNewArtist name="John Doe - Guitarist" imageNewArtist={img01} footer="Soy el footer" />
		</div>
		<Footer />
		</div>
	);
};
