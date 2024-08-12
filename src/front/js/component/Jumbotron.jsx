import React from "react";
import "../../styles/jumbotron.css";
import jumbotronFondo from "../../img/jumbotron-fondo.png";

const Jumbotron = () => {

  return (
    <div className="container-fluid p-0">
      <div className="jumbotron p-5 d-flex align-items-end" style={{ backgroundImage: `url(${jumbotronFondo})`}}>
        <h1 className="title-jumbotron display-5 fw-semibold">Explore Emerging <span>Artists!</span></h1>
      </div>
    </div>
  );
};

export default Jumbotron;
