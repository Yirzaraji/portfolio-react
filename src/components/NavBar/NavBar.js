import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="NavDesktop d-none d-sm-flex">
        <div className="navButton">
          <a href="{{ path('homepage') }}">HOME</a>
        </div>
        <div className="navButton">
          <a href="{{ path('cv') }}">CV</a>
        </div>
        <div className="navButton">
          <a href="#ankor_aboutMe">ABOUT</a>
        </div>
        <div className="navButton">
          <a href="#ankor_contact">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
