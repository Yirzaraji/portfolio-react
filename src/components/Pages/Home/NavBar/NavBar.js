import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="NavDesktop d-none d-sm-flex">
        <div className="navButton">
          <Link to="/">HOME</Link>
        </div>
        <div className="navButton">
          <a href="/cv">CV</a>
        </div>
        <div className="navButton">
          <a href="#ankor_aboutMe">ABOUT</a>
        </div>
        <div className="navButton">
          <a href="#ankor_contact">CONTACT</a>
        </div>
        <div className="navButton">
          <Link to="/administration">
            <i className="fas fa-users-cog"></i>
          </Link>
        </div>
        <div className="navButton">
          <Link to="/login">
            <i className="fas fa-user-lock"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
