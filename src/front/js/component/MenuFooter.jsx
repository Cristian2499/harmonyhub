import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/menu-footer.css";

const MenuFooter = ({direction1, direction2, direction3, direction4, direction5, name1, name2, name3, name4, name5}) => {
  return (
    <>
        <ul className="d-flex list-unstyled gap-2 my-3">
            <li className="nav-item">
              <Link to={direction1} className="nav-link" >
                {name1}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={direction2} className="nav-link">
                {name2}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={direction3} className="nav-link">
                {name3}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={direction4} className="nav-link">
                {name4}
              </Link>
            </li>
            <li className="nav-item me-1">
              <Link to={direction5} className="nav-link">
                {name5}
              </Link>
            </li>
          </ul>
    </>
  )
}

export default MenuFooter