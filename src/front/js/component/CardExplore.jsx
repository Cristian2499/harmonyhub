import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card-explore.css";
import img02 from "../../img/img-new-artist/img-02.png";
import { useNavigate }  from "react-router-dom";

const CardExplore = () => {
  const { store } = useContext(Context);
  console.log(store.users);
  const navigate = useNavigate();

  const handleProfileClick = (userId) => {
    if (userId === store.currentUser.id) {
      navigate(`/myprofile/${userId}`);
    } else {
      navigate(`/profile/${userId}`);
    }
  };
  return (
    <div>
      {store.users.slice(9, 18).map((user) => {
        return (
          <div key={user.id}>
            <div className="card-explore mb-3 bg-dark text-white p-4 rounded">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">{user.nickname}</h5>
                    <p className="card-text text-wrap">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <button
                      className="btn backcolor"
                      onClick={() => handleProfileClick(user.id)}
                    >
                      Profile
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={img02} className="img-fluid rounded" alt="..." />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardExplore;
