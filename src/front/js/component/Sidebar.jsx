import React from 'react'
import "../../styles/sidebar.css";
import { Link } from 'react-router-dom';
import logoHarmonyHub from "../../img/logo_harmony_hub.png";

const Sidebar = () => {
    return (
        <div className='base-sidebar d-flex flex-column flex-shrink-0 p-3 bg-light'>

            <ul className='sidebar-list flex-column mb-auto bg-info'>
                <li className='d-flex row align-items-center'>
                    <div className='col-3'>
                        <img className='img-user' src={logoHarmonyHub}></img>
                    </div>
                    <div className='col-9'>
                        <h3>Jhon Doe</h3>
                        <span>Connected</span>
                    </div>
                </li>
                <Link to="#"><li className='fs-5 mt-3 ms-3'><i className="fa-solid fa-house me-3"></i></li><span>Home</span></Link>
                <Link to="#"><li className='fs-5 mt-3 ms-3'><i className="fa-solid fa-magnifying-glass me-3"></i><span>Search New People</span></li></Link>
                <Link to="#"><li className='fs-5 mt-3 ms-3'><i className="fa-regular fa-message me-3"></i><span>Message</span></li></Link>
                <Link to="#"><li className='fs-5 mt-3 ms-3'><i className="fa-solid fa-bell me-3"></i><span>Notifications</span></li></Link>
                <Link to="#"><li className='fs-5 mt-3 ms-3'><i className="fa-solid fa-user me-3"></i><span>My Profile</span></li></Link>
            </ul>
        </div>
    )
}

export default Sidebar