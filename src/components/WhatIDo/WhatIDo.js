import React from "react";
import "./WhatIDo.css";

const Services = () => (
  <div className="container-fluid blockiDO pb-5 pt-5">
    <div className="row justify-content-center">
      <div className="col-md-4 text-center color titleColor mt-3 mb-5">
        <img src="images/rosace-title.png" alt="" className="mb-2" />
        <h4>
          <b>CE QUE JE</b> SAIS FAIRE...
        </h4>
      </div>
    </div>
    <div className="row text-center justify-content-center">
      <div className="col-sm-4 col-md-3 tripleCard">
        <img src="images/logo_print.png" alt="" className="mb-4" />
        <br />
        <span className="triplecard_txt">PRINT</span>
        <br />
        <p className="mt-1">
          Que ce soit des flyers, des logos, des brochures,
          <br />
          Je peux mener a bien votre commmunication imprimée
        </p>
      </div>
      <div className="col-sm-4 col-md-3 tripleCard">
        <img src="images/logo_dev.png" alt="" className="mb-4" />
        <br />
        <span className="triplecard_txt">DEV</span>
        <br />
        <p className="mt-1">
          Un projet web, une fonctionnalité a developper,
          <br />
          J'ai de large competence dans le domaine du web
        </p>
      </div>
      <div className="col-sm-4 col-md-3 tripleCard">
        <img src="images/logo_design.png" alt="" className="mb-4" />
        <br />
        <span className="triplecard_txt">DESIGN</span>
        <br />
        <p className="mt-1">
          Design numerique, communication visuelle
          <br />
          Je suis en capacité de creer des mockup pour vos projets web
        </p>
      </div>
    </div>
  </div>
);

export default Services;
