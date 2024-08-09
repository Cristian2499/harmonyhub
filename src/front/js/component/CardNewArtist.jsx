import React from "react";
import "../../styles/cardnewartist.css";
import imgPlay from "../../img/img-new-artist/img-play.png";

const CardNewArtist = ({ name, imageNewArtist }) => {
  return (
    <div className="bg-card card m-1 py-1 px-4 border-0">
      <div className="text-white fs-5 mb-1">{name}</div>
      <div className="d-flex">
        <img className="img-new-artist" src={imageNewArtist} alt="" />
        <div className="base-play bg-light d-flex justify-content-center align-items-center">
          <button className="btn-play">
            <i className="fa-solid fa-play fs-1"></i>
          </button>
        </div>
      </div>
      <div className="footer-card d-flex my-2 text-white">
        <button className="btn-like me-1">
          <i className="fa-regular fa-heart"></i>
        </button>
        <button className="btn-user-plus">
          <i className="fa-solid fa-user-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default CardNewArtist;
