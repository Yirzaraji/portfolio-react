import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid banner">
      <div className="row text-center">
        <div className="col-sm-5 col-md-5 blockBanner01 pb-3">
          <img
            src="images/logoround.png"
            alt="banner"
            className="img-responsive img-center logoround"
          />
          <p>DEVELOPPEUR</p>
          <p>
            <span className="text-warning">&#60;React.JS</span> créatif{" "}
            <span className="text-warning">{"/>"}</span>
          </p>
          <p>
            <span>Remi Larrauri</span>
            <br />
            <span>06.29.61.53.66</span>
          </p>
          <Link to="/cv">
            <button className="btn mt-3 mb-5 cv_icon">
              <i className="fas fa-download">
                <br />
                <p className="mt-3">cv</p>
              </i>
            </button>
          </Link>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-12 bandeauContact">
              <Link to="https://www.linkedin.com/in/rl-dev/">
                <img src="images/logo_linkedin.png" alt="" />
              </Link>
              <Link to="#ankor_contact">
                <img src="images/logo_contact.png" alt="" />
              </Link>
              <Link to="https://github.com/Yirzaraji">
                <img src="images/logo_git.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-7 bannerLowpolyImg"></div>
      </div>
    </div>
  );
}

export default Header;
