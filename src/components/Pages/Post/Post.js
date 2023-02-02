import React from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Description from "./Description";
import TitleCarousel from "./TitleCarousel";

const Show = () => (
  <div className="section">
    <Description />
    <Content />
    <TitleCarousel />
    <Carousel />
  </div>
);

export default Show;
