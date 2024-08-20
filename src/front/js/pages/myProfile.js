import React from "react";
import "../../styles/my-profile.css";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import Sidebar from "../component/Sidebar.jsx";
import CardMyProfile from "../component/CardMyProfile.jsx";

export const MyProfile = () => {
  return (
    <div className="base-profile">
      <NavbarLogged />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="container-fluid d-flex">
          <div className="base-card-profile d-flex justify-content-center">
            <CardMyProfile/>
          </div>
        <div className="container-fluid d-flex flex-column">
          <div className="base-statistics container-fluid">
            Aqui van las estadisticas
          </div>
          <div className="base-form-edit container-fluid">
            Aqui va el formulario de editar
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
