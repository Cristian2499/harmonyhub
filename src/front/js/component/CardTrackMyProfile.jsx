import React, { useContext } from 'react'
import "../../styles/card-track-my-profile.css";
import img02 from "../../img/img-new-artist/img-02.png";
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardTrackMyProfile = () => {
    const params = useParams();
    const { store, actions } = useContext(Context)
    const descriptionSong = store.songs.filter((song) => song.user_id == params.id)
    console.log(descriptionSong);
    
    return (
        <>
            {descriptionSong.map((song) => {
                return (
                    <div className="card-track-profile bg-dark text-white p-4 rounded" key={song.id}>
                        <div className="row g-0">

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title fs-2" >{song.name}</h5>
                                    <p className="card-text text-wrap">{song.description}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={img02} className="img-fluid rounded" alt="..." />
                            </div>
                        </div>
                    </div>
                )
            })}


        </>
    )
}

export default CardTrackMyProfile