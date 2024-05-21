import React, { useEffect, useState } from "react";
import axios from "api/axios";

const useGetPost = () => {
  const [post, setPost] = useState([]);

  //catch the id param of the url when the function useGetPost in called inside the component
  const getId = window.location.pathname.split("/").pop();
  const API_URL = "/api/post/" + getId;

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(API_URL);
        //console.log(response.data.paragraph);
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
