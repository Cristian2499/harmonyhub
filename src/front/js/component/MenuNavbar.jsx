import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/menunavbar.css";
const MenuNavbar = ({direction1, direction2, direction3, name1, name2, name3}) => {
  return (
    <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <Link to={direction1} className="nav-link active" aria-current="page">
                {name1}
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to={direction2} className="nav-link">
                {name2}
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to={direction3} className="nav-link">
                {name3}
              </Link>
            </li>
          </ul>
    </>
  )
}

export default MenuNavbar