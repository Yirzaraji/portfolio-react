import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <div className="container d-block d-sm-none" id="mobile-burger">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="ham p-2" onClick={toggleMenu}>
            <i className="fa-solid fa-bars menu-burger-icon"></i>
          </div>
          <nav
            className={`navbar-mobile pt-3 pb-3 ${
              isMenuOpen ? "open" : "closed"
            }`}
          >
            <li>
              <Link className="menuLink" to="/">
                <i className="fas fa-home mb-3"></i> Home
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarBurger;
