import React, { useContext } from "react";
import "../../styles/card-my-profile.css";
import img01 from "../../img/img-new-artist/img-01.png";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CardMyProfile = () => {
  const params = useParams();
  const { store, actions } = useContext(Context)
  const descriptionUser = store.users.find((user) => user.id == params.id)
  console.log(descriptionUser);

  return (
    <div className="base-card-profile p-3 rounded">
      <img src={img01} className="card-img-top rounded" alt="..." />
      <div className="card-body">
        <h3 className="name">{`${descriptionUser.name} ${descriptionUser.lastname}`}</h3>
        <p>
          {descriptionUser.description}
        </p>
      </div>
    </div>
  );
};

export default CardMyProfile;
