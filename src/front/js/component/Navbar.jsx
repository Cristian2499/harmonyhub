import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logoHarmonyHub from "../../img/logo_harmony_hub.png";

export const Navbar = () => {
  return (
    <nav
      className="navbar container-fluid navbar-expand-lg fixed-top"
    >
      <div className="container">
        <Link to="/" className="link-home d-flex align-items-center">
            <img className="img-brand" src={logoHarmonyHub} />
            <span className="navbar-brand mb-0 ms-1 h1 ">Harmony Hub</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon d-flex justify-content-center align-items-center m-0 p-0"><i className="fa-solid fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to="/2" className="nav-link">
                Discover
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to="/3" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
          <div className="buttons-navbar d-flex">
            <button className="signin me-2">Sign in</button>
            <button className="create-account">Create account</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
