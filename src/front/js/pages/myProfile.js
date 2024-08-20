import React from "react";
import "../../styles/my-profile.css";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import Sidebar from "../component/Sidebar.jsx";

export const MyProfile = () => {
  return (
    <div className="base-profile">
      <NavbarLogged />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="container-fluid d-flex bg-dark">
          <div className="base-card-profile bg-warning">
            Aqui van las cartas
          </div>
        <div className="container-fluid d-flex flex-column bg-info">
          <div className="base-statistics container-fluid bg-danger">
            Aqui van las estadisticas
          </div>
          <div className="base-form-edit container-fluid bg-success">
            Aqui va el formulario de editar
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
