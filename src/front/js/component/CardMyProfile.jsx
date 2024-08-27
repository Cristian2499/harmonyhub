import React, { useContext, useState } from "react";
import "../../styles/card-my-profile.css";
import img01 from "../../img/img-new-artist/img-01.png";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CardMyProfile = () => {
  const params = useParams();
  const { store, actions } = useContext(Context)
  
 

  return  store.currentUser &&(
    <div className="base-card-profile p-3 rounded">
      <img src={img01} className="card-img-top rounded" alt="..." />
      <div className="card-body text-center">
        <h3 className="name mb-5">{`${store.currentUser.name} ${store.currentUser.lastname}`}</h3>
        <h4 className="music-roles">Music Roles</h4>
        <div>
          {store.currentUser.music_roles.map((role) => {
            return (
              <p key={role}>{role}</p>
            )
          })}
        </div>
        <form className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Music Role" name="name"
            onChange={(e) => handleChange(e)}
            required />
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
        </form>
        <h4 className="music-roles">Music Genders</h4>
        <div>
          {store.currentUser.music_genders.map((gender) => {
            return (
              <p key={gender}>{gender}</p>
            )
          })}
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
      </div>
    </div>
  );
};

export default CardMyProfile;
