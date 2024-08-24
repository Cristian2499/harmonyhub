import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/card-artist-page-logged.css";
import img01 from "../../img/img-new-artist/img-01.png";

const CardArtistPageLogged = () => {

  const {store} =  useContext(Context);
  console.log(store.users);

  return (
    <div className="row">
      
      {store.users.slice(0, 8).map((user) => {
        
        return (
          <div key={user.id} className="col-3 pb-2 pt-2">
            <div className="base-card-artist p-3 bg-dark shadow rounded">
              <img src={img01} className="card-img-top rounded" alt="..." />
              <div className="card-body">
                <h5 className="text-white">{user.nickname}</h5>
                <p className="card-text text-white">{user.description}</p>
                <p className="card-text text-white">{user.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default CardArtistPageLogged