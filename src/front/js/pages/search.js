import React, { useState } from "react";
import "../../styles/search.css";
import Sidebar from "../component/Sidebar.jsx";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import { Footer } from "../component/Footer.jsx";
import CardExploreSearch from "../component/CardExploreSearch.jsx";
import SearchBar from "../component/SearchBar.jsx";

const Search = () => {
  const [users, setUsers] = useState([])
  return (
    <div>
      <NavbarLogged />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="d-flex container-fluid justify-content-center row m-4 gap-3">
          <span className="fs-2 ps-0 fw-bold">Look for new Band Members</span>
          <div className="d-flex align-items-center p-2 mb-2">
            <SearchBar setUsers={setUsers} />
          </div>
          <div className="w-75">
            {users && users.length > 0 ? users.map(item => {
              return (
                <CardExploreSearch key={item.id} id={item.id} name={item.name} lastname={item.lastname} music_roles={item.music_roles} music_genders={item.music_genders} country={item.country}/>
              )
            }):
            <h1>no hay usuarios</h1>
          }
            <div className="btn-more text-end">
              <p> more </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
