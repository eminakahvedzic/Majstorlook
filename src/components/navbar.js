import React from "react";
import "../styles/Navbar.css"; 
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-content">
        <div className="navbar-items">
          <ul>
            <li>
              <a href="#">Početna</a>
            </li>
            <li>
              <a href="#">Notifikacije</a>
            </li>
            <li>
              <a href="#">Poruke</a>
            </li>
            <li>
              <a id="pomoc" href="#">
                Pomoć
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-profile">
          <button className="profile-button">
            <div className="profile-icon">
              <img src="/images/profileicon.png" alt="ProfileIcon" />
            </div>
            Moj Profil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
