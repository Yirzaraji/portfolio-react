import "./Header.css";

function Header() {
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
          <button className="btn mt-3 mb-5 cv_icon">
            <a href="cv">
              {" "}
              <i className="fas fa-download">
                <br />
                <p className="mt-3">cv</p>
              </i>
            </a>
          </button>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-12 bandeauContact">
              <a href="https://www.linkedin.com/in/rl-dev/">
                <img src="images/logo_linkedin.png" alt="" />
              </a>
              <a href="#ankor_contact">
                <img src="images/logo_contact.png" alt="" />
              </a>
              <a href="https://github.com/Yirzaraji">
                <img src="images/logo_git.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-7 bannerLowpolyImg">
          <img
            src="images/lowpoly_banner02.jpg"
            alt="banner"
            className="w-100 h-100 img-responsive cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
