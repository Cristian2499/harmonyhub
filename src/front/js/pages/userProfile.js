import React, { useState, useContext, useEffect } from "react";
import "../../styles/user-profile.css";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import Sidebar from "../component/Sidebar.jsx";
import img01 from "../../img/img-new-artist/img-01.png";
import CardTrackUserProfile from "../component/CardTrackUserProfile.jsx";
import FollowButton from "../component/FollowButton.jsx";
import FollowCounter from "../component/FollowCounter.jsx";
import { Footer } from "../component/Footer.jsx";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    actions.getUserDetails(userId);
    actions.getSongs(); 
  }, [userId]);

  
  const user = store.users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>Loading...</div>;
  }

  const userSongs = store.songs
    .filter(song => song.user_id === parseInt(userId))
    .map((song, index) => ({
      id: index + 1, 
      title: song.name,
      description: song.description || "No description available",
      artist: user.nickname 
    }));

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

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
                <h4 className="music-genders">Music Genders: {user.music_genders.join(", ")}</h4>
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
                <span className="fw-bold fs-5">
                  <FollowCounter 
                    userId={userId} 
                    setFollowerCount={setFollowerCount} 
                    followerCount={followerCount} 
                    isFollowing={isFollowing} 
                    setIsFollowing={setIsFollowing} 
                  />
                </span>
                <span className="statistic-item fw-bold fs-4">Followers</span>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <div>
                  <FollowButton 
                    userId={userId} 
                    setFollowerCount={setFollowerCount} 
                    followerCount={followerCount} 
                    isFollowing={isFollowing} 
                    setIsFollowing={setIsFollowing} 
                  />
                </div>
              </div>
            </div>
            {/* Mostrar canciones del usuario con CardTrackUserProfile */}
            <div>
              {userSongs.length > 0 ? (
                <CardTrackUserProfile userSongs={userSongs} />
              ) : (
                <p>No songs available for this user.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;