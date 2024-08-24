import React, { useContext } from 'react'
import "../../styles/card-track-my-profile.css";
import img02 from "../../img/img-new-artist/img-02.png";
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardTrackMyProfile = () => {
    const params = useParams();
    const { store, actions } = useContext(Context)
    const descriptionUser = store.users.find((user) => user.id == params.id)

    return (
        <>
            {descriptionUser.songs.map((song) => {
                return (
                    <div className="card-track-profile bg-dark text-white p-4 rounded" key={song}>
                        <div className="row g-0">

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title fs-2" >{song}</h5>
                                    <p className="card-text text-wrap">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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