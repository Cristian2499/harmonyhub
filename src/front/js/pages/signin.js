import React from "react";
import "../../styles/signin.css";
import logoHarmonyHub from "../../img/logo_harmony_hub.png";
import bgImage from "../../img/fondo-signin.jpg";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div
      className="fondo-signin animate__animated animate__fadeIn vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="base-form bg-white flex-column d-flex justify-content-center align-items-center w-75 pb-5 pt-3 rounded">
        <div className="container-fluid d-flex justify-content-end">
          <Link to="/">
            <button className="btn ">
              <i className="fa-solid fa-xmark fs-4"></i>
            </button>
          </Link>
        </div>
        <img className="img-brand-signin m-4" src={logoHarmonyHub} />
        <form className="w-75 d-flex flex-column align-items-center">
          <div className="mb-3 w-75">
            <input
              type="email"
              className="input-email form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3 w-75">
            <input
              type="password"
              className="input-password form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn-login">
            Login
          </button>
          <Link className="mb-4" to="/">
            Forgot password?
          </Link>
          <span className="mb-1">Don't have an account? Sign up</span>
          <Link className="scale-btn" to="/signup">
            <button className="btn-create-account">Sign up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};