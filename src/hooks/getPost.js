import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetPost = (id) => {
  const [post, setPost] = useState([]);
  const API_URL = process.env.API_URL;

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api${window.location.pathname}`
        );
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  return post;
};

export default useGetPost;
