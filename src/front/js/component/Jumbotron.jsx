import React from "react";
import "../../styles/jumbotron.css";


const Jumbotron = () => {
  return (
    <div className="container-fluid p-0">
      <div className="jumbotron p-5">
        <h1 className="display-5 fw-semibold mt-5">Explore Emerging Artists!</h1>
        <p className="col-md-8 fs-4">
          Your gateway to the latest
        </p>
        <p className="col-md-8 fs-4">
          and greatest in music
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
