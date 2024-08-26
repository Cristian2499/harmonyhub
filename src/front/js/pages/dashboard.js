import React from "react";
import "../../styles/logged.css";
import Sidebar from "../component/Sidebar.jsx";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import { Footer } from "../component/Footer.jsx";
import CardArtistPageLogged from "../component/CardArtistPageLogged.jsx";
import CardExplore from "../component/CardExplore.jsx";


export const Dashboard = () => {

  return (
    <div className="animate__animated animate__fadeIn">
      <NavbarLogged />
      
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        
        <div className="d-flex row m-4 gap-4"> 
          <span className="fs-2 ps-0 fw-bold">Emerging Artists</span>

          <CardArtistPageLogged />
          
          
          <span className="fs-2 ps-0 fw-bold">Explore</span>

          <CardExplore/>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};
