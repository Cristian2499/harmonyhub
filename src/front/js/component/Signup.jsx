import React, { useContext, useState } from "react";
import bgImage from "../../img/morenito.png";
import "../../styles/signup.css";
import { Context } from "../store/appContext";


const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log(email, password, name, lastname, nickname, gender, country);
  }
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };


  return (
    <>
      <div className="body" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1>Welcome to Harmony Hub!</h1>
        <h2>Create Your Account</h2>
        <div className="form-container">
          <div className="form-content">
            <form onSubmit={handleSubmitRegister}>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Lastname"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nickname"
                required
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <input
                type="text"
                placeholder="Gender"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              /> */}
              {/* <input
                type="text"
                placeholder="Country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              /> */}
              <select
                id="gender-select"
                className="form-select"
                value={gender}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              <select
                id="gender-select"
                className="form-select"
                value={country}
                onChange={handleChangeCountry}
                aria-label="Default select example"
              >
                <option value="" disabled>Select your country</option>
                <option value="Colombia-Bogota">Colombia-Bogota</option>
                <option value="Venezuela-Caracas">Venezuela-Caracas</option>
                <option value="Ecuador-Quito">Ecuador-Quito</option>
                <option value="Peru-Lima">Peru-Lima</option>
                <option value="Bolivia-La paz">Bolivia-La paz</option>
                <option value="Mexico-CDMX">Mexico-CDMX</option>
                <option value="Chile-Santiago">Chile-Santiago</option>
                <option value="Paraguay-Asuncion">Paraguay-Asuncion</option>
                <option value="Uruguay-Montevideo"> Uruguay-Montevideo</option>
                <option value="Argentina-BSAS">Argentina-BSAS</option>
              </select>
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
