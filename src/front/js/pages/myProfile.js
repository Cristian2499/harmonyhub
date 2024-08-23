import React, { useContext } from "react";
import "../../styles/my-profile.css";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import Sidebar from "../component/Sidebar.jsx";
import CardMyProfile from "../component/CardMyProfile.jsx";
import img04 from "../../img/img-new-artist/img-04.png";
import CardTrackMyProfile from "../component/CardTrackMyProfile.jsx";
import { Footer } from "../component/Footer.jsx";
import { Context } from "../store/appContext.js";

export const MyProfile = () => {
  const [store, actions] = useContext(Context)
  
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
            <div className="">
              <div className="d-flex flex-column align-items-center mb-5">
                <span className="fs-2 fw-bold mb-2">Role in the band</span>
                <label className="border rounded p-2 mb-2">SINGER</label>
                <label className="border rounded p-2 mb-2">GUITARRIST</label>
              </div>
              <div className="d-flex flex-column align-items-center mb-5">
                <span className="fs-2 fw-bold mb-2">Music played</span>
                <label className="border rounded p-2 mb-2">METAL</label>
                <label className="border rounded p-2 mb-2">ROCK</label>
              </div>
            </div>
          </div>
          <div className="container-fluid d-flex flex-column">
            <div className="base-statistics row d-flex justify-content-center mt-2 container-fluid">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5">6</span>
                <span className="statistic-item fw-bold fs-4">Tracks</span>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5">47</span>
                <span className="statistic-item fw-bold fs-4">Followers</span>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5">32</span>
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
                    <div className="card-body">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Track Title"
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="What genre of music is? and what were you playing?"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Youtube URL"
                        />
                      </div>
                      <div className="mb-3 text-end">
                        <button className="btn-upload ms-auto">Upload</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex row gap-1 mb-1 ms-1">
                <CardTrackMyProfile />
                <CardTrackMyProfile />
                <CardTrackMyProfile />
                <CardTrackMyProfile />
                <CardTrackMyProfile />
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
