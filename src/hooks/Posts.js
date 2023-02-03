import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const API_URL = process.env.API_URL;
  console.log(process.env.API_URL);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  return posts;
};

export default useGetPosts;
