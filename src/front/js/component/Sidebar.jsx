import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/sidebar.css";
import { Link } from "react-router-dom";
import logoHarmonyHub from "../../img/logo_harmony_hub.png";

const Sidebar = () => {
  const { store } = useContext(Context);

  return (
    <div className="base-sidebar d-flex flex-column align-items-center  border-end">
      <ul className="sidebar-list p-3 d-flex flex-column">
        <li className="d-flex row align-items-center my-2">
          <div className="col-3">
            <img className="img-user" src={logoHarmonyHub}></img>
          </div>
          {store.currentUser &&
            <div className="col-9">
              <h3>{store.currentUser.name}{" "} {store.currentUser.lastname}</h3>
              <span>Connected</span>
            </div>
          }
        </li>
        <li className="sidebar-item fs-4 mt-3">
          <Link
            className="link-sidebar d-flex align-items-center ps-3 py-1 w-100"
            to="/dashboard"
          >
            <i className="fa-solid fa-house me-3"></i>Home
          </Link>
        </li>
        <li className="sidebar-item fs-4 mt-3">
          <Link
            className="link-sidebar d-flex align-items-center ps-3 py-1 w-100"
            to="/search"
          >
            <i className="fa-solid fa-magnifying-glass me-3"></i>Search New
            People
          </Link>
        </li>
        <li className="sidebar-item fs-4 mt-3">
          <Link
            className="link-sidebar d-flex align-items-center ps-3 py-1 w-100"
            to="/connected"
          >
            <i className="fa-regular fa-message me-3"></i>Connected
          </Link>
        </li>
        <li className="sidebar-item fs-4 mt-3">
          <Link
            className="link-sidebar d-flex align-items-center ps-3 py-1 w-100"
            to="#"
          >
            <i className="fa-solid fa-bell me-3"></i>Notifications
          </Link>
        </li>
        {store.currentUser &&
          <li className="sidebar-item fs-4 mt-3">
            <Link
              className="link-sidebar d-flex align-items-center ps-3 py-1 w-100"
              to={"/myprofile/" + store.currentUser.id}
            >
              <i className="fa-solid fa-user me-3"></i>My Profile
            </Link>
          </li>
        }
      </ul>
    </div>
  );
};

export default Sidebar;
