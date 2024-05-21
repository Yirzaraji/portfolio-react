import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import TagsColor from "hooks/TagsColor";
import "./HeaderPost.css";

function HeaderPost(post) {
  const navigate = useNavigate();
  //Hook the logic to colorise tags
  TagsColor();
  const spanref = useRef();

  const imageStyle = {
    filter: "grayscale(100%), brightness(20%)",
    backgroundImage: `url("../images/carousel/escargeddon-jaquette.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  if (post.value.demo) {
    console.log(post);
    console.log(post.value.images[0]);
  }

  // Function to format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="container-fluid banner">
      <div className="row text-center">
        <div className="col-12 col-sm-12 col-md-6 col-xl-5 blockBanner01Post pb-3">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <img
                src="../images/logoround-header-post.png"
                alt="banner"
                className="img-responsive img-center logoround-reduced"
              />
              <p className="project-header-post">PROJET:</p>
              <p>
                <span className="projtitle text-uppercase">
                  {post.value.title}
                </span>
              </p>
              <p className="text-justify pl-5 pr-5 mb-4">
                <span>{post.value.description}</span>
                <br />
              </p>
              <div className="col-md-12 text-justify-header-post text-center">
                <p className="git-demo-links-header-post d-flex justify-content-center">
                  {post.value.git ? (
                    <Link
                      className="font-weight-bold text-center"
                      to={post.value.git}
                      target="_blank"
                    >
                      <i className="fab fa-github-alt"></i> REPO GIT
                    </Link>
                  ) : null}
                  {post.value.demo ? (
                    <Link
                      className="font-weight-bold"
                      to={post.value.demo}
                      target="_blank"
                    >
                      <i className="fas fa-laptop-code"></i> DEMO LIVE
                    </Link>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
          <div className="row w-100 tagsBloc ">
            <div className="col-12 text-left text-center font-weight-light">
              <span>Modifié: {formatDate(post.value.createdAt)}</span>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center">
              {post.value.tags &&
                post.value.tags.map((tag, index) => (
                  <span
                    ref={spanref}
                    key={index}
                    className="tags-cards-header-post"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div
          className="d-none d-sm-block col-sm-12 col-md-6 col-xl-7 bannerPost"
          style={{
            filter: "grayscale(50%)",
            backgroundImage: `url("../${
              post.value.images && post.value.images[0]
            }")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default HeaderPost;
