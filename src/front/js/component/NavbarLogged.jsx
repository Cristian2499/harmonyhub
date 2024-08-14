import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/navbar.css";
import logoHarmonyHub from "../../img/logo_harmony_hub.png";

export const NavbarLogged = () => {
    return (
        <nav className="navbar container-fluid navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link to="/" className="link-home d-flex align-items-center">
                    <img className="img-brand" src={logoHarmonyHub} />
                    <span className="navbar-brand mb-0 ms-1 fs-3">Harmony Hub</span>
                </Link>
                <div className="buttons-navbar d-flex ms-auto">
                    <Link to="/"><button className="logout me-2"><i className="fa-solid fa-arrow-right-from-bracket fs-2"></i></button></Link>
                </div>
            </div>
        </nav>
    )
}
