import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetPosts from "../../../../hooks/Posts";
import "./Card.css";

const Cards = (props) => {
  //custom hooks src/hooks
  const posts = useGetPosts();

  //without setter as i dont need
  const [colors] = useState({
    sql: "#ff8f00",
    php: "#004480",
    symfony: "#4242c8",
    js: "rgb(255, 241, 42)",
    photoshop: "rgb(0, 112, 255)",
    indesign: "rgb(255, 0, 72)",
    illustrator: "rgb(255, 72, 0)",
    "vue.js": "#42b983",
    "react.js": "#61dafb",
    twig: "#71b236",
    mongo: "#116149",
    nosql: "#954495",
    "node.js": "#026e00",
    bootstrap: "#7952b3",
    html: "#e44d26",
    css: "#264de4",
    "c#": "#690081",
    unity: "#002835",
  });

  useEffect(() => {
    const spanTags = document.querySelectorAll("span");
    spanTags.forEach((spanTag) => {
      if (colors.hasOwnProperty(spanTag.textContent)) {
        spanTag.style.background = colors[spanTag.textContent];
      }
    });
  });

  //Having a ternary condition to render cards with .filter() method or without it and so, showing all cards
  return (
    <div className="container-fluid mt-5">
      <div className="box devBox active">
        <div className="row justify-content-center flex-wrap">
          {props.value === "All"
            ? posts.map((post, index) => (
                <Link key={index} to={`/post/${post.id}`}>
                  <div className="newsCard news-Slide-up m-1">
                    <img alt="" src={post.image} />
                    <div className="newsCaption text-left">
                      <div className="newsCaption-title">project</div>
                      <span className="projectTitle">{post.title}</span>
                      <div className="dottedLine mb-3 mt-1"></div>
                      <span className="techTxt">Description</span>
                      <p>{post.description}</p>
                      <div className="mb-5 mt-1"></div>
                      <div className="newsCaption-content col-12">
                        <span className="techTxt">Technologies</span>
                        <p className="mt-1">
                          {console.log("taggt: " + post.tags)}
                          <span className="tagsCards">{post.tags}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : posts
                .filter((post) => post.category === props.value)
                .map((post, index) => (
                  <Link key={index} to={`/post/${post.id}`}>
                    <div className="newsCard news-Slide-up m-1">
                      <img alt="" src={post.image} />
                      <div className="newsCaption text-left">
                        <div className="newsCaption-title">project</div>
                        <span className="projectTitle">{post.title}</span>
                        <div className="dottedLine mb-3 mt-1"></div>
                        <span className="techTxt">Description</span>
                        <p>{post.description}</p>
                        <div className="mb-5 mt-1"></div>
                        <div className="newsCaption-content col-12">
                          <span className="techTxt">Technologies</span>
                          <p className="mt-1">
                            {console.log("taggt: " + post.tags)}
                            <span className="tagsCards">{post.tags}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
