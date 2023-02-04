import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarSimple = () => (
  <div className="container-fluid simpleNavBar">
    <div className="row justify-content-between">
      <div className="md-5 NavDesktopSimple align-items-center ml-5">
        <Link to="/">
          <img src="./images/logoround-simple.png" />
        </Link>
      </div>
      <div className="md-5 NavDesktopSimple align-items-center mr-5">
        <div className="navButton">
          <Link to="/">HOME</Link>
        </div>
        <div className="navButton">
          <Link to="/cv">CV</Link>
        </div>
        <div className="navButton">
          <Link to="#ankor_aboutMe">ABOUT</Link>
        </div>
        <div className="navButton">
          <Link to="#ankor_contact">CONTACT</Link>
        </div>
      </div>
    </div>
  </div>
);

export default NavbarSimple;
