import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import Jumbotron from "../component/Jumbotron.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { Footer } from "../component/Footer.jsx";
import CardConnect from "../component/CardConnect.jsx";
import CardNewArtist from "../component/CardNewArtist.jsx";
//test images for cards
import img01 from "../../img/img-new-artist/img-01.png";
import img02 from "../../img/img-new-artist/img-02.png";
import img03 from "../../img/img-new-artist/img-03.png";
import img04 from "../../img/img-new-artist/img-04.png";
import img05 from "../../img/img-new-artist/img-05.png";
import img06 from "../../img/img-new-artist/img-06.png";
import img10 from "../../img/img-connect/img-10.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="animate__animated animate__fadeIn">
      <Navbar />
      <Jumbotron />
      <div className="container-fluid d-flex row justify-content-center align-items-center m-0">
        <div className="container d-flex row justify-content-center align-items-center m-0">
          <div className="container d-flex justify-content-center my-2 py-2">
            <h2>Discover New Artists</h2>
          </div>
          <CardNewArtist name="John Doe - Guitarist" imageNewArtist={img01} />
          <CardNewArtist name="Jane Smith - Singer" imageNewArtist={img02} />
          <CardNewArtist
            name="Mike Johnson - M. Producer"
            imageNewArtist={img03}
          />
          <CardNewArtist
            name="Emily Davis - Guitarist"
            imageNewArtist={img04}
          />
          <CardNewArtist name="Chris Lee - Cellist" imageNewArtist={img05} />
          <CardNewArtist
            name="Anna Brown - M. Producer"
            imageNewArtist={img06}
          />
        

        <div className="container d-flex justify-content-center my-2 py-2">
          <h2>Connect with them</h2>
        </div>
        <CardConnect name="Emily White" imageCardConnect={img10} />
        <CardConnect name="Emily White" imageCardConnect={img10} />
        <CardConnect name="Emily White" imageCardConnect={img10} />
        <CardConnect name="Emily White" imageCardConnect={img10} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
