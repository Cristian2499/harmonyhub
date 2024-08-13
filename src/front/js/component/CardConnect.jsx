import React from 'react'
import "../../styles/cardconnect.css";

const CardConnect = ({name, imageCardConnect}) => {
  return (
    <div className="bg-card-connect card m-1 border-0 bg-light">
      
      <div className="d-flex justify-content-center mt-2">
        <img className="img-connect" src={imageCardConnect} alt="" />
      </div>

      <div className="fs-4 mb-1">{name}</div>
      <div>Your latest song is amazing!</div>

      <div className="footer-card d-flex justify-content-end my-2 text-white">
        
        
      </div>
    </div>
  )
}

export default CardConnect