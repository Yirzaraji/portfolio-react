import React from "react";
import "./About.css";

const About = ({ theme }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 aboutBlock">
        <div className="row pb-5 pt-5">
          <div className="col-md-5 d-none d-md-flex justify-content-end">
            <img
              src="images/avatar1_small.jpg"
              className="img-fluid avatar"
              alt=""
            />
          </div>
          <div
            className="col-md-5 line_left ml-2 pt-4 about-title"
            id="ankor_aboutMe"
            style={{ textAlign: "justify" }}
          >
            <b>ABOUT ME...</b>
            <br />
            <br />
            <p>
              Bonjour ! Je suis un développeur web passionné par la création
              d'applications web dynamiques et attractives. Mon portfolio
              présente divers projets qui démontrent ma capacité à relever des
              défis complexes et à produire du code efficace. Je suis
              enthousiaste à l'idée de contribuer à des projets passionnants et
              de collaborer avec d'autres professionnels du domaine.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

/*<div className={`ThemeSwitcher ${theme}-theme`}>
     <p>The current theme is: {theme}</p> 
  </div>*/
