import React from "react";
import "../../styles/signin.css";
import logoHarmonyHub from "../../img/logo_harmony_hub.png"; 
import bgImage from "../../img/jumbotron_fondo.png";


export const Signin = () => {
  return (
    <div className="fondo-signin vh-100 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="base-form bg-success flex-column d-flex justify-content-center align-items-center">
        <img className="img-brand mb-4" src={logoHarmonyHub} />
      <form className="w-75 d-flex flex-column align-items-center">
        <div class="mb-3">
          
          <input
            type="email"
            className="input-email form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
          
        </div>
        <div className="mb-3">
          
          <input
            type="password"
            className="input-password form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-25">
          Login
        </button>
      </form>
      </div>
    </div>
  );
};
