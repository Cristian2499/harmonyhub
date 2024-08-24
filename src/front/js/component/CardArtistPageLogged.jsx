import React from 'react'
import "../../styles/card-artist-page-logged.css";
import img01 from "../../img/img-new-artist/img-01.png";

const CardArtistPageLogged = () => {
  return (
    <div className="base-card-artist p-3 bg-dark rounded">
      <img src={img01} className="card-img-top rounded" alt="..." />
      <div className="card-body">
        <h5 className='text-white'>Jhon Doe</h5>
        <p className="card-text text-white">Lorem ipsum dolor sit amet.</p>
        <p className="card-text text-white">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default CardArtistPageLogged