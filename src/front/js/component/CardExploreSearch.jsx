import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/card-explore-search.css";
import img02 from "../../img/img-new-artist/img-02.png";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";



const CardExploreSearch = ({id,name,lastname,music_roles, music_genders, country}) => {
    const navigate = useNavigate();
    const {store} =  useContext(Context);

    const handleProfileClick = (userId) => {
        if (userId == store.currentUser.id) {
            navigate(`/myprofile/${userId}`)
        } else {
            navigate(`/profile/${userId}`);
        }
        
      };
    return (
        <div className="card-explore-search mb-3 bg-dark text-white p-4 rounded">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img02} className="img-fluid rounded float-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{name} {lastname}</h5>
                        <p className="card-text text-wrap">Genre: {music_genders.join(", ")}</p>
                        <p className="card-text text-wrap">Role: {music_roles.join(", ")}</p>
                        <p className="card-text text-wrap">Location: {country}</p>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <button
                    className="btn btn-upload ms-auto p-2"
                    onClick={() => handleProfileClick(id)}
                    >
                    Profile
                    </button>
                </div>
                
                
            </div>
        </div>
    )
}

export default CardExploreSearch