import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import Jumbotron from "../component/Jumbotron.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { Footer } from "../component/Footer.jsx";
import CardNewArtist from "../component/CardNewArtist.jsx";

import group1 from "../../img/img-carousel/group1.png";
import group2 from "../../img/img-carousel/group2.png";
import group3 from "../../img/img-carousel/group3.png";
import group4 from "../../img/img-carousel/group4.png";
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
          <div className="row">
          {store.users.slice(0, 6).map((user) => {
            return (
              <div key={user.id} className="col-4">
                <CardNewArtist name={user.nickname} imageNewArtist={img05} />
              </div>
            );
          })}
          </div>

          <div className="d-flex justify-content-center my-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={group1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={group2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={group3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={group4} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
