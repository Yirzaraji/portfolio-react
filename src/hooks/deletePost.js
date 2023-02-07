import React, { useEffect, useState } from "react";
import axios from "axios";

const useDeletePost = (id) => {
  const [post, setPost] = useState([]);

  //catch the id param of the url when the function useGetPost in called inside the component
  const getId = window.location.pathname.split("/").pop();
  const API_URL = process.env.REACT_APP_URL + "/api/post/delete/" + getId;

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(API_URL);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  });

  return post;
};

export default useDeletePost;
