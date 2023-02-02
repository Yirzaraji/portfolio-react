import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="container pb-5 pt-5">
      <div className="row justify-content-center">
        <div className="col col-md-2 footerCard">
          <b>Projects#1</b>
          <br />
          <a href="https://old.remidelarue.ovh/simlon/app_glycemic">
            App-glycemic
          </a>
          <br />
          <a href="http://old.remidelarue.ovh/simlon/sw_battle/">
            Star wars battle
          </a>
          <br />
          <a href="https://old.remidelarue.ovh/heleor">Heleor</a>
          <br />
          <a href="https://eventorizon.itch.io/escargeddon">Escargeddon</a>
          <br />
        </div>
        <div className="col col-md-2 footerCard">
          <b>Projects#2</b>
          <br />
          <a href="https://old.remidelarue.ovh/simlon/js_stopwatch/">
            Chrono JS
          </a>
          <br />
          <a href="https://old.remidelarue.ovh/simlon/kaamelot/">
            Citation generator
          </a>
          <br />
          <a href="http://lfp.remidelarue.ovh/">Looking for pals</a>
          <br />
        </div>
        <div className="col col-md-2 footerCard">
          <b>Projects#3</b>
          <br />
          <a href="https://remidelarue.ovh/portfolio/logo-methode-ancestrale/Logo">
            Logo Methode
          </a>
          <br />
          <a href="https://remidelarue.ovh/portfolio/charts-affiche/">Poster</a>
          <br />
          <a href="https://remidelarue.ovh/portfolio/nerdy-girl/">
            Teechirt Brand
          </a>
          <br />
        </div>
        <div className="col col-md-2 footerCard">
          <b>Liens</b>
          <br />
          <a href="{{ path('homepage') }}">Home</a>
          <br />
          <a href="#ankor_contact">Contact</a>
          <br />
          <a href="{{ path('cv') }}">Curriculum</a>
          <br />
          <a href="https://old.remidelarue.ovh/">Wordpress</a>
          <br />
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row text-center justify-content-center">
        <div className="col-md-12 footerBlock">
          Copyright ©2020 | Yirzaraji | All rights reserved | Symfony project
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
