import React, { useEffect, useState } from "react";

const TagsColor = () => {
  //without setter as i dont need
  const [colors] = useState({
    sql: "#ff8f00",
    php: "#004480",
    symfony: "#4242c8",
    js: "rgb(255, 241, 42)",
    photoshop: "rgb(0, 112, 255)",
    indesign: "rgb(255, 0, 72)",
    illustrator: "rgb(255, 72, 0)",
    "vue.js": "#42b983",
    "react.js": "#61dafb",
    twig: "#71b236",
    mongo: "#116149",
    nosql: "#954495",
    "node.js": "#026e00",
    bootstrap: "#7952b3",
    html: "#e44d26",
    css: "#264de4",
    "c#": "#690081",
    unity: "#002835",
  });

  useEffect(() => {
    const spanTags = document.querySelectorAll("span");
    spanTags.forEach((spanTag) => {
      if (colors.hasOwnProperty(spanTag.textContent)) {
        spanTag.style.background = colors[spanTag.textContent];
      }
    });
  });
};

export default TagsColor;
