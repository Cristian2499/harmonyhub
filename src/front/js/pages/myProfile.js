import React, { useContext, useState } from "react";
import "../../styles/my-profile.css";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import Sidebar from "../component/Sidebar.jsx";
import CardMyProfile from "../component/CardMyProfile.jsx";
import img04 from "../../img/img-new-artist/img-04.png";
import CardTrackMyProfile from "../component/CardTrackMyProfile.jsx";
import { Footer } from "../component/Footer.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";


export const MyProfile = () => {
  const params = useParams()
  const {store, actions} = useContext(Context);
  const descriptionUserId = store.users.find((user) => user.id == params.id)
  const [song, setSong] = useState({
    user_id: descriptionUserId.id,
    name:"",
    description:""
  })

  function handleChange(e){
    setSong({...song, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await actions.postSong(song);
    if (response){
      console.log(response);
      
    } else{
      console.log("Error");
      
    }
    
  }



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
                <span className="fw-bold fs-5">HC</span>
                <span className="statistic-item fw-bold fs-4">Tracks</span>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5">HC</span>
                <span className="statistic-item fw-bold fs-4">Followers</span>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5">HC</span>
                <span className="statistic-item fw-bold fs-4">Following</span>
              </div>
            </div>
            <div className="base-form-edit container-fluid d-flex flex-column">
              <h3 className="fw-bold py-3 fs-1">Upload you Music</h3>
              <div className="card mb-3  border-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={img04}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">

                    <form className="card-body" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Track Title"
                          name="name"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Description Track"
                          rows="3"
                          name="description"
                          onChange={(e) => handleChange(e)}
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
