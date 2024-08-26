import React, { useContext, useEffect } from "react";
import "../../styles/user-profile.css";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import Sidebar from "../component/Sidebar.jsx";
import CardMyProfile from "../component/CardMyProfile.jsx";
import img04 from "../../img/img-new-artist/img-04.png";
import CardTrackMyProfile from "../component/CardTrackMyProfile.jsx";
import img01 from "../../img/img-new-artist/img-01.png";
import FollowButton from "../component/FollowButton.jsx";
import FollowCounter from "../component/FollowCounter.jsx";
import { Footer } from "../component/Footer.jsx";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    // Llama a una acción para obtener detalles del usuario si es necesario
    actions.getUserDetails(userId);
  }, [userId]);

  const user = store.users.find((user) => user.id === parseInt(userId));

  if (!user) return <div>Loading...</div>;

  return (
    <div className="base-profile">
      <NavbarLogged />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="container-fluid d-flex">
          <div className="base-card-profile d-flex flex-column align-items-center">
            <div className="base-card-profile p-3 rounded">
              <img src={img01} className="card-img-top rounded" alt="..." />
              <div className="card-body text-center">
                <h3 className="name mb-5">{user.name} {user.lastname}</h3>
                <p>{user.country}</p>
                <p>{user.email}</p>
                <h4 className="music-roles">Music Roles: {user.music_roles.join(", ")}</h4>
                <h4 className="music-roles">Music Genders: {user.music_genders.join(", ")}</h4>
                {/* Puedes agregar más detalles del usuario aquí */}
                <button
                  className="userprofilebackcolor"
                  onClick={handleDashboardClick}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
          <div className="container-fluid d-flex flex-column">
            <div className="base-statistics row d-flex justify-content-center mt-2 container-fluid">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5">{store.songs.length}</span>
                <span className="statistic-item fw-bold fs-4">Tracks</span>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5"><FollowCounter userId={userId} /></span>
                <span className="statistic-item fw-bold fs-4">Followers</span>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold fs-5">HC</span>
                <span className="statistic-item fw-bold fs-4">Following</span>
              </div>
            </div>
            <div>
              <FollowButton userId={userId} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;