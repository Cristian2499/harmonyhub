import React from "react";
import "../../styles/search.css";
import Sidebar from "../component/Sidebar.jsx";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import { Footer } from "../component/Footer.jsx";
import CardExploreSearch from "../component/CardExploreSearch.jsx";

const Search = () => {
  return (
    <div>
      <NavbarLogged />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="d-flex container justify-content-center row m-4 gap-3">
          <span className="fs-2 ps-0 fw-bold">Look for new Band Members</span>
          <div className="w-75">
            <CardExploreSearch />
            <CardExploreSearch />
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
