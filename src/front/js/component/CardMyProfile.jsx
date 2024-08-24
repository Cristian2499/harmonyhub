import React, { useContext } from "react";
import "../../styles/card-my-profile.css";
import img01 from "../../img/img-new-artist/img-01.png";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CardMyProfile = () => {
  const params = useParams();
  const { store, actions } = useContext(Context)
  const descritionUser = store.users.find((user) => user.id == params.id)
  console.log(descritionUser);

  return (
    <div className="base-card-profile p-3 rounded">
      <img src={img01} className="card-img-top rounded" alt="..." />
      <div className="card-body">
        <h3 className="name">{`${descritionUser.name} ${descritionUser.lastname}`}</h3>
        <h4 className="card-text">{descritionUser.gender}</h4>

        <p>
          {descritionUser.description}
        </p>
        <div className="d-flex">
          <button className="edit-profile ms-auto">Edit</button>
        </div>
      </div>

      <div className="">
        <div className="d-flex flex-column align-items-center mb-5">
          <span className="fs-2 fw-bold mb-2">Role in the band</span>
          <label className="border rounded p-2 mb-2">SINGER</label>
          <label className="border rounded p-2 mb-2">GUITARRIST</label>
        </div>
        <div className="d-flex flex-column align-items-center mb-5">
          <span className="fs-2 fw-bold mb-2">Music played</span>
          <label className="border rounded p-2 mb-2">METAL</label>
          <label className="border rounded p-2 mb-2">ROCK</label>
        </div>
      </div>
    </div>
  );
};

export default CardMyProfile;
