import React from 'react';
import "../../styles/signup.css";
import bgImage from "../../img/morenito.png";

const Signup = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-signup">
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
          <header className="Signup-header">
            <h1 className="text-white">Welcome to Harmony Hub!</h1>
            <p className="text-white">Create Your Account</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control mb-3" placeholder="Email address"/>
              </div>
              <button type="submit" className="btn btn-primary mb-3">Sign up</button>
            </form>
            <p className="text-white">or</p>
            <div className="social-login">
              <button className="btn btn-outline-light mb-2 w-100 google">Continue with Google</button>
              <button className="btn btn-outline-light mb-2 w-100 facebook">Continue with Facebook</button>
              <button className="btn btn-outline-light mb-2 w-100 twitter">Continue with Twitter</button>
            </div>
            <p className="text-white">
              Already have an account? <a href="/signin" className="text-white">Sign in</a>
            </p>
          </header>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img className="img-fluid morenito" src={bgImage} alt="Morenito" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
