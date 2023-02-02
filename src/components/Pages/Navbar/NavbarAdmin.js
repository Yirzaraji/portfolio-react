import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarAdmin = () => (
  <div className="container-fluid simpleNavBar">
    <div className="row justify-content-between">
      <div className="md-5 NavDesktopSimple align-items-center ml-5">
        <Link to="/">
          <span className="adminTitle">
            <i className="fas fa-user-shield"></i> Admin v1.0
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default NavbarAdmin;
