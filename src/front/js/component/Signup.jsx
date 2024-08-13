import React from "react";
import bgImage from "../../img/morenito.png";
import "../../styles/signup.css";

const Signup = () => {
  return (
    <>
      <div className="body" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1>Welcome to Harmony Hub!</h1>
        <h2>Create Your Account</h2>
        <div className="form-container">
          <div className="form-content">
            <form>
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellido" required />
              <input type="email" placeholder="Email address" required />
              <input type="text" placeholder="Nickname" required />
              <input type="text" placeholder="Género" required />
              <input type="text" placeholder="País" required />
              <input type="text" placeholder="Género Musical" required />
              <input type="text" placeholder="Rol Musical" required />
              <button type="submit">Registrarse</button>
            </form>
            <p>
              Already have an account? <a href="#">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
