import React from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Description from "./Description";
import TitleCarousel from "./TitleCarousel";
import "./Post.css";
import NavbarSimple from "../Navbar/NavbarSimple";

const Show = () => (
  <div className="section">
    <NavbarSimple />
    <Description />
    <Content />
    <TitleCarousel />
    <Carousel />
  </div>
);

export default Show;
