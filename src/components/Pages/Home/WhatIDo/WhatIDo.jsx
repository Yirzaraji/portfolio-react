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
        <span className="triplecard_txt">CMS</span>
        <br />
        <p className="mt-1">
          Site vitrine ? Ecommerce ?
          <br />
          Profitez d'une solution clé en main tres rapidement afin de valoriser
          votre activité.
        </p>
      </div>
      <div className="col-sm-4 col-md-3 tripleCard">
        <img src="images/logo_dev.png" alt="" className="mb-4" />
        <br />
        <span className="triplecard_txt">DEV</span>
        <br />
        <p className="mt-1">
          Un projet web, une fonctionnalité a developper ? Mes compétences
          pemettront surement de repondre à vos attentes.
        </p>
      </div>
      <div className="col-sm-4 col-md-3 tripleCard">
        <img src="images/logo_design.png" alt="" className="mb-4" />
        <br />
        <span className="triplecard_txt">DESIGN</span>
        <br />
        <p className="mt-1">
          Design numerique, communication visuelle.
          <br />
          Je suis en capacité de creer l'identité visuelle de votre produit ou
          votre entreprise.
        </p>
      </div>
    </div>
  </div>
);

export default Services;
