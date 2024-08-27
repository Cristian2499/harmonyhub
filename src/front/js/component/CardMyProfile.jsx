import React, { useContext, useEffect, useState } from "react";
import "../../styles/card-my-profile.css";
import img01 from "../../img/img-new-artist/img-01.png";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CardMyProfile = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [musicRoles, setMusicRoles] = useState([]);
  const [musicGenders, setMusicGenders] = useState([]);
  const [selectedRole, setSelectedRole] = useState("default");
  const [selectedGender, setSelectedGender] = useState("default");
  const [hasRole, setHasRole] = useState(false);
  const [hasGender, setHasGender] = useState(false);

  const handleAddOrUpdateRole = async () => {
    const userId = store.currentUser.id;
    const selectedRoleId = selectedRole;
  
    if (hasRole) {
      await actions.updateRoleOfUser(userId, selectedRoleId);
    } else {
      await actions.addRoleToUser(userId, selectedRoleId);
    }

    
    await actions.getMyInfo();
  };

  const handleAddOrUpdateGender = async () => {
    const userId = store.currentUser.id;
    const selectedGenderId = selectedGender;

    if (hasGender) {
      await actions.updateGenderOfUser(userId, selectedGenderId);
    } else {
      await actions.addGenderToUser(userId, selectedGenderId);
    }

    
    await actions.getMyInfo();
  };

  useEffect(() => {
    const fetchMusicRoles = async () => {
      const roles = await actions.getAllMusicRoles();
      setMusicRoles(roles);

      if (store.currentUser && store.currentUser.music_roles && store.currentUser.music_roles.length > 0) {
        setSelectedRole(store.currentUser.music_roles[0].id);
        setHasRole(true);
      }
    };

    const fetchMusicGenders = async () => {
      const genders = await actions.getAllMusicGenders();
      setMusicGenders(genders);

      if (store.currentUser && store.currentUser.music_genders && store.currentUser.music_genders.length > 0) {
        setSelectedGender(store.currentUser.music_genders[0].id);
        setHasGender(true);
      }
    };

    fetchMusicRoles();
    fetchMusicGenders();
  }, [store.currentUser]);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    store.currentUser && (
      <div className="base-card-profile p-3 rounded">
        <img src={img01} className="card-img-top rounded" alt="..." />
        <div className="card-body text-center">
          <h3 className="name mb-5">{`${store.currentUser.name} ${store.currentUser.lastname}`}</h3>

          {/* Music Roles Section */}
          <h4 className="music-roles">Music Roles</h4>
          <label className="fw-bold ps-0 mb-1" htmlFor="">
            Choose a role
          </label>
          <select
            onChange={handleRoleChange}
            value={selectedRole}
            className="form-select form-select-sm text-capitalize"
            aria-label="Small select example"
            disabled={hasRole}
          >
            <option disabled value="default">
              -
            </option>
            {musicRoles &&
              musicRoles.length > 0 &&
              musicRoles.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>

          {!hasRole && (
            <button
              className="btn btn-outline fontcolor mt-3 backcolor"
              onClick={handleAddOrUpdateRole}
            >
              Add Role
            </button>
          )}

          {/* Music Genders Section */}
          <h4 className="music-genders mt-4">Music Genders</h4>
          <label className="fw-bold ps-0 mb-1" htmlFor="">
            Choose a gender
          </label>
          <select
            onChange={handleGenderChange}
            value={selectedGender}
            className="form-select form-select-sm text-capitalize"
            aria-label="Small select example"
            disabled={hasGender}
          >
            <option disabled value="default">
              -
            </option>
            {musicGenders &&
              musicGenders.length > 0 &&
              musicGenders.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>

          {!hasGender && (
            <button
              className="btn btn-outline fontcolor mt-3 backcolor"
              onClick={handleAddOrUpdateGender}
            >
              Add Gender
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default CardMyProfile;