import React, { useEffect, useState } from "react";
import axios from "api/axios";

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(`/api/posts`);
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
