import React from "react";
import "../../styles/card-my-profile.css";
import img01 from "../../img/img-new-artist/img-01.png";

const CardMyProfile = () => {
  return (
    <div className="base-card-profile p-3 rounded">
      <img src={img01} className="card-img-top rounded" alt="..." />
      <div className="card-body">
        <h3 className="name">Mr. Doe</h3>
        <h4 className="card-text">Jhon Doe</h4>
        <h5 className="card-text">28 yrs</h5>
        <p>
          Hi, I'm a progressive electronic music producer seeking collaborators.
          Let's join forces to create unique, innovative tracks. Interested?
          Let's connect!
        </p>
        <div className="d-flex">
        <button className="edit-profile ms-auto">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default CardMyProfile;
