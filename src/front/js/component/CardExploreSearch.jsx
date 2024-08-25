import React from 'react'
import "../../styles/card-explore-search.css";
import img02 from "../../img/img-new-artist/img-02.png";
import { Link } from 'react-router-dom';

const CardExploreSearch = ({name,lastname,music_roles, music_genders, country}) => {
    return (
        <div className="card-explore-search mb-3 bg-dark text-white p-4 rounded">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img02} className="img-fluid rounded float-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{name} {lastname}</h5>
                        <p className="card-text text-wrap">Genere: {music_genders.join(", ")}</p>
                        <p className="card-text text-wrap">Role: {music_roles.join(", ")}</p>
                        <p className="card-text text-wrap">Location: {country}</p>
                    </div>
                </div>
                <Link to="/person" className='d-flex container-fluid justify-content-end'>
                <button className="btn-look-profile">Look Profile</button>
                </Link>
            </div>
        </div>
    )
}

export default CardExploreSearch