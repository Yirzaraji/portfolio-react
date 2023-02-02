import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarBurger = () => (
  <div className="container" id="mobile-burger">
    <div className="row">
      <div className="col-md-12 text-center">
        <button className="ham"></button>
        <nav className="navbar-mobile pt-5">
          <li>
            <Link className="menuLink mb-5" to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link className="menuLink mb-5" to="/cv">
              <i className="fas fa-file-pdf"></i> Cv
            </Link>
          </li>
          <li>
            <Link className="menuLink mb-5" to="#ankor_aboutMe">
              <i className="fas fa-address-card"></i> About
            </Link>
          </li>
          <li>
            <Link className="menuLink mb-5" to="#ankor_contact">
              <i className="fas fa-envelope-open-text"></i> Contact
            </Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
);

export default NavbarBurger;
