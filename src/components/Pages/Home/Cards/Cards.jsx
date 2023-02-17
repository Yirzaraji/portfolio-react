import React, { useState, useEffect } from "react";
import TagsColor from "hooks/TagsColor";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Card.css";

const Cards = () => {
  const API_URL = process.env.REACT_APP_URL;
  TagsColor();

  const [posts, setPosts] = useState([]);
  const [alteredPosts, setAlteredPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts`);
      setAlteredPosts(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //filter method create a new array for each post that return true
  //includes() method return true if a word match with the input value
  const handleFilter = (event) => {
    const filteredPosts = posts.filter((post) => {
      const words = post.description.split(/\s+/);

      //work with just return words.includes(event.target.value);
      //but some() method allow to match with only few letters
      return words.some((word) => word.includes(event.target.value));
    });
    setAlteredPosts(filteredPosts);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-3 text-center mb-5 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
            name="searchbar"
            onChange={handleFilter}
          />
        </div>
      </div>
      <div className="box devBox active">
        <div className="row justify-content-center">
          {alteredPosts.map((post, index) => (
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
