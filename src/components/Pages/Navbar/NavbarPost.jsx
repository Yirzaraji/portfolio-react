import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useAuth from "hooks/useAuth";
import axios from "api/axios";

function NavBar() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  //console.log(auth);

  const handleClick = async (event) => {
    event.preventDefault();
    console.log("click");
    try {
      const response = await axios.post(
        "/api/users/loggout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setAuth({ ...auth, isAuthenticated: false });
      //navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav>
      <div className="NavDesktop d-none d-sm-flex">
        <div className="navButton">
          <Link to="/">HOME</Link>
        </div>
        {auth?.isAuthenticated ? (
          <>
            <div className="navButton">
              <Link to="/administration">
                <i className="fas fa-users-cog fas-navbar"></i>
              </Link>
            </div>
            <div className="navButton">
              <Link to="" onClick={handleClick}>
                <i className="fa-solid fa-right-from-bracket fas-navbar"></i>
              </Link>
            </div>
          </>
        ) : (
          <div className="navButton">
            <Link to="/login">
              <i className="fas fa-user-lock fas-navbar"></i>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
