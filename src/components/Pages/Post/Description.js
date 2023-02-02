import React from "react";
const Description = () => (
  <div className="container-fluid mx-0 mb-5">
    <div className="row mt-5 mb-5 justify-content-center">
      <div className="col-sm-10 col-md-7 col-lg-4 col-xl-3 p-0 text-right">
        <div
          className="img-fluid imgPost"
          style={{ background: `url('http://127.0.0.1:8000/post.image')` }}
          alt="Responsive image"
        ></div>
      </div>
      <div className="col-sm-10 col-md-7 col-lg-7 col-xl-6 bg-white PostDescription border">
        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-between postTitle">
            <div className="project-title ml-5">
              <b className="project">PROJECT:</b> <br />
              <b className="projtitle text-uppercase">post.title</b>
            </div>
            <div className="img-icon-post d-flex align-items-center">
              <i className="fab fa-github-square"></i>
            </div>
          </div>
          <div className="col-md-9 line_leftBlack mt-4 mb-5 text-justify contentPost">
            post.projectDescription | raw
            <br />
            <br />
            {/* {% if post.git is not null %} */}
            <br />
            <br />
            <a className="font-weight-bold" href="{post.git}" target="_blank">
              <i className="fab fa-github-alt"></i> REPO GIT
            </a>
            <a className="font-weight-bold" href="{post.lien}" target="_blank">
              <i className="fas fa-laptop-code"></i> DEMO LIVE
            </a>
            {/* {% endif %} */}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-left tagsBloc">
            <span>
              {/* {% if post.date is not null %} */}
              Mofifié le : post.date|dated/m/y
            </span>
            {/* {% else %} */}

            {/* {% endif %} */}
          </div>
          <div className="col-12 tagsBloc">
            Tags :{/* {% for tag in post.tags %} */}
            <span className="tagsPost">tag.name</span>
            {/* {% endfor %} */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Description;
