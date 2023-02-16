import React from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Description from "./Description";
import TitleCarousel from "./TitleCarousel";
import "./Post.css";
import NavbarSimple from "components/Pages/Navbar/NavbarSimple";
import useGetPost from "hooks/getPost";

const Show = () => {
  //custom hooks retrieve one post
  const post = useGetPost();
  return (
    <div className="section">
      <NavbarSimple />
      <Description value={post} />
      <Content value={post} />
      <TitleCarousel />
      <Carousel value={post} />
    </div>
  );
};

export default Show;
