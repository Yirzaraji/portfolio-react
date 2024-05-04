import React from "react";
import "./Curriculum.css";

const Curriculum = () => (
  <div className="container-fluid pb-5 pt-5 mt-5">
    <div className="row justify-content-center blocExp">
      <div className="col-md-3 color mt-5 mb-5">
        <img
          src="{{ asset('images/rosaceb_blanc.png') }}"
          alt=""
          style={{ width: "22%" }}
        />
        <h4>
          <b>EXPERIENCES</b>
          <br /> PROFESSIONNELLES...
        </h4>
      </div>
      <div className="col-md-6 line_left mt-5 mb-5">
        <p>
          <b>
            DEVELOPPEUR PHP | SYMFONY
            <br />
            <span className="redfont">EVALANDGO MONTPELLIER</span>
          </b>
          <br />
          AVRIL 2021
        </p>
        <p>
          Dans le cadre d'un contrat de travail en CDD j'ai developpé sur
          l'application de l'entreprise essentiellement sur du debug et la
          resolution des tickets clients.
        </p>
        <ul>
          <li>PHP</li>
          <li>Twig Doctrine</li>
          <li>Javascript</li>
        </ul>
        <div className="mt-5"></div>
        <p>
          <b>
            DEVELOPPEUR PHP | SYMFONY
            <br />
            <span className="redfont">DIGEAT</span>
          </b>
          <br />
          MARS 2020
        </p>
        <p>
          Dans le cadre d'un stage de 3 mois j'ai pu m'initier au fonctionnement
          du framework PHP Symfony 3 & 4. En l'espace d'un mois j'ai pu
          maitriser ce nouvel environnement de travail et par la suite pu
          developper mes premiers composant d'acces aux données sur
          l'application de l'entreprise Digeat et Sacre Fernand.
        </p>
        <br />
        <ul>
          <li>Javascript, Jquery, Ajax</li>
          <li>Html, Css, Twig, Boostrap</li>
          <li>Php, Sql, Uml, Doctrine, gitlab</li>
        </ul>
      </div>
    </div>

    <div className="row justify-content-center blocDip">
      <div className="col-md-3 color mt-5 mb-5">
        <img
          src="{{ asset('images/rosace.png') }}"
          alt=""
          style={{ width: "22%" }}
        />
        <h4 className="gradientPurpleFont titleh4">
          <b>PARCOURS &</b>
          <br /> CURSUS SCOLAIRE...
        </h4>
      </div>
      <div className="col-md-6 line_leftBlack mt-5 mb-5">
        <p>
          <b>
            Online course React & Javascript
            <br />
            <span className="gradientPurpleFont">UDEMY</span>
          </b>
          <br />
          2022 - 2024
        </p>

        <p>
          En tant qu'autodidacte, j'ai enrichi mes compétences grâce à des
          formations en ligne, principalement sur des plateformes telles que
          Udemy. Ces cours m'ont permis de plonger dans l'univers de React, en
          assimilant ses fondamentaux et en explorant des fonctionnalités
          avancées. J'ai également approfondi mes connaissances en développant
          des API basiques avec Node.js, où j'ai pu mettre en pratique des
          opérations CRUD et mettre en place une authentification sécurisée
          basée sur des tokens JWT.
        </p>
        <div className="mt-2"></div>
        <p>
          <b>
            DEVELOPPEUR WEB Bac +2
            <br />
            <span className="gradientPurpleFont">SIMPLON.CO</span>
          </b>
          <br />
          2020
        </p>

        <p>
          Le Réseau des Fabriques Simplon.co compte en France et à
          l’international plus de 100 Fabriques inclusives qui partagent des
          valeurs, une méthode et le même objectif : l’insertion professionnelle
          de talents sur des métiers techniques du numérique.
        </p>
        <div className="mt-2"></div>
        <p>
          <b>
            DESIGNER MULTIMEDIA
            <br />
            <span className="gradientPurpleFont">
              IDEM CREATIVE ARTS SCHOOL
            </span>
          </b>
          <br />
          2014
        </p>

        <p>
          l'Idem propose de se former aux métiers du graphisme, de la publicité,
          de l’édition et du multimédia. Imaginer des concepts créatifs,
          réaliser des campagnes publicitaires, donner vie à des visuels
          innovants et impactants, interfacer une application mobile ou un site
          internet… |
        </p>
        <div className="mt-2"></div>
        <p>
          <b>
            INFORGRAPHISTE METTEUR EN PAGE
            <br />
            <span className="gradientPurpleFont">GRETA</span>
          </b>
          <br />
          2020
        </p>

        <p>Le Greta est une organisme proposant des formations diplomantes.</p>
      </div>
    </div>
  </div>
);

export default Curriculum;
