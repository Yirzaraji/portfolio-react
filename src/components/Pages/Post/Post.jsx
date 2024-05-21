import React from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import "./Post.css";
import useGetPost from "hooks/getPost";
import HeaderPost from "./HeaderPost";
import NavbarPost from "../Navbar/NavbarPost";
import Footer from "../Home/Footer/Footer";
import NavbarBurgerPost from "../Navbar/NavbarBurgerPost";

const Show = () => {
  //custom hooks retrieve one post
  const post = useGetPost();
  return (
    <div className="section">
      <NavbarBurgerPost />
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
