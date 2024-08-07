import React from 'react'
import "../../styles/signup.css";
import bgImage from "../../img/morenito.png";


const Singup = () => {
  return (
    <div className='bg-signup vh-100 d-flex justify-content-center align-items-center'><h1>Hola soy el Sign up</h1><img className='morenito' src={bgImage} /></div>
  )
}

export default Singup