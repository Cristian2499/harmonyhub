import React from 'react'
import "../../styles/card-explore-search.css";
import img02 from "../../img/img-new-artist/img-02.png";
import { Link } from 'react-router-dom';

const CardExploreSearch = () => {
    return (
        <div className="card-explore-search mb-3 bg-dark text-white p-4 rounded">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img02} className="img-fluid rounded float-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fs-2">Jane Smith</h5>
                        <p className="card-text text-wrap">Genere: Indie Pop</p>
                        <p className="card-text text-wrap">Role: Guitarrist - Singer</p>
                        <p className="card-text text-wrap">Location: Lima - Peru</p>
                    </div>
                </div>
                <Link to="/person" className='d-flex container-fluid justify-content-end'>
                <button className="btn-create-account ">Look Profile</button>
                </Link>
            </div>
        </div>
    )
}

export default CardExploreSearch