import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/user-profile.css";

const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    // Llama a una acción para obtener detalles del usuario si es necesario
    actions.getUserDetails(userId);
  }, [userId]);

  const user = store.users.find((user) => user.id === parseInt(userId));

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Perfil de {user.nickname}</h2>
      <p>País: {user.country}</p>
      <p>Géneros Musicales: {user.music_genders.join(", ")}</p>
      <p>Roles Musicales: {user.music_roles.join(", ")}</p>
      {/* Puedes agregar más detalles del usuario aquí */}
      <button
        className="userprofilebackcolor"
        onClick={handleDashboardClick}
        >
        Back
        </button>
    </div>
  );
};

export default UserProfile;