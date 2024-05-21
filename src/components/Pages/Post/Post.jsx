import React from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import TitleCarousel from "./TitleCarousel";
import "./Post.css";
import useGetPost from "hooks/getPost";
import HeaderPost from "./HeaderPost";
import NavbarPost from "../Navbar/NavbarPost";
import Footer from "../Home/Footer/Footer";

const Show = () => {
  //custom hooks retrieve one post
  const post = useGetPost();
  return (
    <div className="section">
      <NavbarPost />
      <HeaderPost value={post} />
      {/* <Description value={post} /> */}
      <Content value={post} />
      <Carousel value={post} />
      <Footer />
    </div>
  );
};

export default Show;
