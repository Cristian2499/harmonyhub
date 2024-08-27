import React, { useContext, useEffect, useState } from "react";
import "../../styles/my-profile.css";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import Sidebar from "../component/Sidebar.jsx";
import CardMyProfile from "../component/CardMyProfile.jsx";
import img04 from "../../img/img-new-artist/img-04.png";
import CardTrackMyProfile from "../component/CardTrackMyProfile.jsx";
import FollowCounter from "../component/FollowCounter.jsx";
import { Footer } from "../component/Footer.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";


export const MyProfile = () => {
  const params = useParams()
  const { store, actions } = useContext(Context);
  const descriptionUserId = store.users.find((user) => user.id == params.id)
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  
  console.log(descriptionUserId.id);

  const [song, setSong] = useState({
    name: "",
    description: ""
  })

  function handleChange(e) {
    setSong({ ...song, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.target.value = "";
    try {
      const response = await actions.postSong(song);
      if (response) {
        console.log(response);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error al enviar la canción:", error);
    }
    actions.getSongs();
  }

  useEffect(() => {

  }, [store.songs])



  return (

    <div className="base-profile">
      <NavbarLogged />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="container-fluid d-flex">
          <div className="base-card-profile d-flex flex-column align-items-center">
            <CardMyProfile />
          </div>
          <div className="container-fluid d-flex flex-column">
            <div className="base-statistics row d-flex justify-content-center mt-2 container-fluid">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5">
                <FollowCounter 
                    userId={descriptionUserId.id} 
                    setFollowerCount={setFollowerCount} 
                    followerCount={followerCount} 
                    isFollowing={isFollowing} 
                    setIsFollowing={setIsFollowing} 
                  />
                </span>
                <span className="statistic-item fw-bold fs-4">Followers</span>
              </div>
            </div>
            <div className="base-form-edit container-fluid d-flex flex-column">
              <h3 className="fw-bold py-3 fs-1">Upload you Music</h3>
              <div className="card mb-3  border-0">
                <div className="row g-0">
                  <div className="col-md-4 text-end">
                    <img
                      src={img04}
                      className="img-fluid rounded-start w-50"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">

                    <form className="card-body" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Song Title"
                          name="name"
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          placeholder="Description Song"
                          rows="3"
                          name="description"
                          onChange={(e) => handleChange(e)}
                          required
                        ></textarea>
                      </div>
                      <div className="mb-3 text-end">
                        <button type="submit" className="btn-upload ms-auto">Upload</button>
                      </div>
                    </form>


                  </div>
                </div>
              </div>
              <div className="d-flex row gap-1 mb-1 ms-1">
                <CardTrackMyProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
