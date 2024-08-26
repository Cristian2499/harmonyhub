import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card-artist-page-logged.css";
import img01 from "../../img/img-new-artist/img-01.png";

const CardArtistPageLogged = () => {

  const {store} =  useContext(Context);
  const navigate = useNavigate();

  const handleProfileClick = (userId) => {
    if (userId == store.currentUser.id) {
        navigate(`/myprofile/${userId}`)
    } else {
        navigate(`/profile/${userId}`);
    }
    
  };

  return (
    <div className="row">
      
      {store.users.slice(0, 8).map((user) => {
        return (
          <div key={user.id} className="col-3 pb-2 pt-2">
            <div className="base-card-artist p-3 bg-dark shadow rounded">
              <img src={img01} className="card-img-top rounded" alt="..." />
              <div className="card-body">
                <h5 className="text-white">{user.nickname}</h5>
                <p className="card-text text-white">País: {user.country}</p>
                <p className="card-text text-white">Géneros Musicales: {user.music_genders.join(', ')}</p>
                <p className="card-text text-white">Roles Musicales: {user.music_roles.join(', ')}</p>
                <button
                  className="btn backcolor"
                  onClick={() => handleProfileClick(user.id)}
                >
                  Profile
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default CardArtistPageLogged