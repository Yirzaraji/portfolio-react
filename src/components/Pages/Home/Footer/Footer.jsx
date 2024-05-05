import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="container pb-5 pt-5">
        <div className="row justify-content-center">
          <div className="col col-md-2 footerCard">
            <b>Projects#1</b>
            <br />
            App-glycemic
            <br />
            <Link to="http://remidelarue.ovh/sw_battle/">Star wars battle</Link>
            <br />
            <Link to="https://remidelarue.ovh/heleor">Heleor</Link>
            <br />
            <Link to="https://eventorizon.itch.io/escargeddon">
              Escargeddon
            </Link>
            <br />
          </div>
          <div className="col col-md-2 footerCard">
            <b>Projects#2</b>
            <br />
            <Link to="https://remidelarue.ovh/js-stopwatch/">Chrono JS</Link>
            <br />
            Citation generator
            <br />
            Looking for pals
            <br />
          </div>
          <div className="col col-md-2 footerCard">
            <b>Projects#3</b>
            <br />
            Logo Methode
            <br />
            Poster
            <br />
            Teechirt Brand
            <br />
          </div>
          <div className="col col-md-2 footerCard">
            <b>Liens</b>
            <br />
            <Link to="/">Home</Link>
            <br />
            <Link to="#ankor_contact">Contact</Link>
            <br />
            <Link to="/cv">Curriculum</Link>
            <br />
            Wordpress
            <br />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row text-center justify-content-center">
          <div className="col-md-12 footerBlock">
            Copyright ©2024 | Yirzaraji | All rights reserved | React Node
            project
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
