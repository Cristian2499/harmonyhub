import React from "react";
import Sidebar from "../component/Sidebar.jsx";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import { Footer } from "../component/Footer.jsx";
import CardArtistPageLogged from "../component/CardArtistPageLogged.jsx";

const Connected = () => {
  return (
    <div>
      <NavbarLogged />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="-d-flex container justify-content-center row m-4 gap-3">
          <div className="d-flex row m-4 gap-3">
            <span className="fs-2 ps-0 fw-bold">
              Band Members you connected
            </span>
            <CardArtistPageLogged />
            <CardArtistPageLogged />
            <CardArtistPageLogged />
            <CardArtistPageLogged />
            <CardArtistPageLogged />
            <CardArtistPageLogged />
            <div className="btn-more text-end">
              <p>see more</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Connected;
