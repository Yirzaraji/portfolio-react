import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetPosts from "../../../../hooks/getPosts";
import TagsColor from "./../../../../hooks/TagsColor";
import "./Card.css";

const Cards = (props) => {
  //custom hooks src/hooks
  const posts = useGetPosts();
  TagsColor();

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
                          {post.tags.map((tag, index) => (
                            <span key={index} className="tagsCards">
                              {tag}
                            </span>
                          ))}
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
                            {post.tags.map((tag, index) => (
                              <span key={index} className="tagsCards">
                                {tag}
                              </span>
                            ))}
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
