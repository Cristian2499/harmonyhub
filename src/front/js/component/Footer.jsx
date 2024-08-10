import React, { Component } from "react";
import "../../styles/footer.css";
import logoHarmonyHub from "../../img/logo_harmony_hub.png";
import MenuFooter from "./MenuFooter.jsx";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer container-fluid mt-auto py-3 d-flex">
      <div className="container d-flex flex-column justify-content-end">
        <div className="footer-form container-fluid d-flex flex-column h-50 justify-content-center align-items-center text-center">
          <label className="w-50 text-white mb-4" htmlFor="">
            Subscribe to Harmony Hub!
          </label>
          <div className="input-group mb-3 w-50">
            <input
              type="text"
              className="input-form-footer form-control"
              placeholder="input your email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn-form-footer"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>

        <div className="footer-menu container-fluid d-flex justify-content-center">
          <MenuFooter
            direction1="/1"
            name1="About us"
            direction2="/2"
            name2="Features"
            direction3="/3"
            name3="Contact us"
            direction4="/4"
            name4="FAQs"
            direction5="/5"
            name5="Careers"
          />
        </div>

        <div className="container-fluid justify-content-center">
          <div className="line container border border-black"></div>
        </div>

        <div className="footer-end container mb-2 py-2">
          <ul className="d-flex flex-wrap list-unstyled justify-content-between align-items-center text-white mt-1">
            <li>
              <select
                className="languaje-select"
                aria-label="Default select example"
              >
                <option selected>English</option>
                <option value="1">Idioma2</option>
                <option value="2">Idioma3</option>
                <option value="3">Idioma4</option>
              </select>
            </li>
            <li className="d-flex flex-column align-items-center">
              <img className="img-brand" src={logoHarmonyHub} />
              <span className="text-white">© 2024 Harmony Hub, Inc.</span>
            </li>
            <li className="networks">
              <Link to=""><i className="fa-brands fa-twitter me-2 text-info"></i></Link>
              <Link to=""><i className="fa-brands fa-facebook me-2 text-primary"></i></Link>
              <Link to=""><i className="fa-brands fa-youtube me-2 text-danger"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
