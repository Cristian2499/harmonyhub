import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logoHarmonyHub from "../../img/logo_harmony_hub.png";


export const Navbar = () => {
  return (
    <nav className="navbar container-fluid navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link to="/" className="link-home d-flex align-items-center">
          <img className="img-brand" src={logoHarmonyHub} />
          <span className="navbar-brand mb-0 ms-1 fs-3">Harmony Hub</span>
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
          <span className="navbar-toggler-icon d-flex justify-content-center align-items-center m-0 p-0">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <div className="buttons-navbar d-flex ms-auto">
            <Link to="/signin"><button className="signin me-2">Sign in</button></Link>
            <Link to="/signup"><button className="create-account">Create account</button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
