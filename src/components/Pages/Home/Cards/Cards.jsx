import React, { useState, useEffect } from "react";
import useTagsColor from "hooks/TagsColor";
import { Link } from "react-router-dom";
import axios from "api/axios";
import "./Card.css";
import SearchBar from "components/Forms/SearchBar";

const Cards = () => {
  useTagsColor();
  const [posts, setPosts] = useState([]);
  const [alteredPosts, setAlteredPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`api/posts`);
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
      <SearchBar handleFilter={handleFilter} />
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
