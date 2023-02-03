import React from "react";
import { Link } from "react-router-dom";
import useGetPosts from "../../../../hooks/Posts";
import "./Card.css";

const Cards = (props) => {
  //custom hooks src/hooks
  const posts = useGetPosts();

  return (
    <div className="container-fluid mt-5">
      <div className="box devBox active">
        <div className="row justify-content-center flex-wrap">
          {posts
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
