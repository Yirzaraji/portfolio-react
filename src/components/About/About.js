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
            htmlStyle="text-justify: auto;"
          >
            <b>ABOUT ME...</b>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              nisl mauris. Curabitur placerat nec neque dapibus imperdiet.
              Integer ullamcorper rhoncus ultrices. Donec sodales ligula ac
              neque porta, ac pellentesque risus sagittis. Nunc malesuada quam
              id diam pellentesque posuere. Pellentesque velit libero, tristique
              id mollis eu, facilisis
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
