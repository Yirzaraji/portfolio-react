import React from "react";
import "./Card.css";

const Cards = () => (
  <div className="container-fluid pb-5 pt-5">
    <div className="container-fluid pb-5 pt-5">
      <div className="row">
        <div className="col-md-12 text-center color titleColor mt-3 ml-3">
          <img
            src="{{ asset('images/rosace-title.png') }}"
            alt=""
            className="mb-2"
          />
          <h4 className="titlecolor">
            <b>QUELQUES</b> PROJET...
          </h4>
          <img
            src="{{ asset('images/trait.png') }}"
            alt=""
            style={{ width: "14%" }}
            className="mb-2"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center mb-5">
          <ul className="navTabs list_js">
            <li className="active">
              <a href="#tab1">Dev</a>
            </li>
            <li>
              <a href="#tab2">Design</a>
            </li>
            <li>
              <a href="#tab3">Print</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div id="tab1" className="box devBox active">
        <div className="row justify-content-center flex-wrap">
          {/* for devPost in devPosts */}
          <a href={"{{ path('post_show', {'id': devPost.id}) }}"}>
            <div className="newsCard news-Slide-up m-1">
              <img alt="" src={"images/escargeddon.jpg"} />
              <div className="newsCaption">
                <div className="newsCaption-title">project</div>
                <span className="projectTitle">{"devPost.title"}</span>
                <div className="dottedLine mb-3 mt-1"></div>
                <span className="techTxt">Description</span>
                <p>{"devPost.projectDescription"}</p>
                <div className="mb-5 mt-1"></div>
                <div className="newsCaption-content col-12">
                  <span className="techTxt">Technologies</span>
                  <p className="mt-1">
                    {/* for tag in devPost.tags */}
                    <span className="tagsCards">{"tag.name"}</span>
                    {/* endfor */}
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* endfor */}
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
