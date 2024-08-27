import React from 'react';
import img02 from "../../img/img-new-artist/img-02.png";
const CardTrackUserProfile = ({ userSongs }) => {
    
  return (
    <div className='row'>
      {userSongs.length > 0 ? (
        userSongs.map((song) => (
            <div className='col-5 m-2'>
                <div className="card-track-profile  bg-dark text-white p-4 rounded" key={song.id}>
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-2" >{song.title}</h5>
                                            <p className="card-text text-wrap">{song.description}</p>
                                            <p>{song.artist}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={img02} className="img-fluid rounded" alt="..." />
                                    </div>
                                </div>
                            </div>

            </div>
        ))
      ) : (
        <p>No songs available for this user.</p>
      )}
    </div>
  );
};

export default CardTrackUserProfile;