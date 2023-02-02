import React from "react";
import "./Card.css";

const Cards = (props) => {
  const fetchCards = [
    {
      id: 0,
      title: "test",
      image: "images/escargeddon.jpg",
      description: "blabla",
      demo: "pathlink",
      category: "Dev",
      git: "pathgit",
      gallery: "pathimages",
      tags: "Js, React, Node",
      data: "22/12/2023",
    },
    {
      id: 1,
      title: "test",
      image: "images/lfp.jpg",
      description: "blabla",
      demo: "pathlink",
      category: "Design",
      git: "pathgit",
      gallery: "pathimages",
      tags: "Js, React, Node",
      data: "22/12/2023",
    },
    {
      id: 2,
      title: "test",
      image: "images/escargeddon.jpg",
      description: "blabla",
      demo: "pathlink",
      category: "Design",
      git: "pathgit",
      gallery: "pathimages",
      tags: "Js, React, Node",
      data: "22/12/2023",
    },
    {
      id: 3,
      title: "test",
      image: "images/lfp.jpg",
      description: "blabla",
      demo: "pathlink",
      category: "Dev",
      git: "pathgit",
      gallery: "pathimages",
      tags: "Js, React, Node",
      data: "22/12/2023",
    },
    {
      id: 4,
      title: "test",
      image: "images/escargeddon.jpg",
      description: "blabla",
      demo: "pathlink",
      category: "Print",
      git: "pathgit",
      gallery: "pathimages",
      tags: "Js, React, Node",
      data: "22/12/2023",
    },
    {
      id: 5,
      title: "test",
      image: "images/lfp.jpg",
      description: "blabla",
      demo: "pathlink",
      category: "Dev",
      git: "pathgit",
      gallery: "pathimages",
      tags: "Js, React, Node",
      data: "22/12/2023",
    },
    {
      id: 6,
      title: "test",
      image: "images/escargeddon.jpg",
      description: "blabla",
      demo: "pathlink",
      category: "Dev",
      git: "pathgit",
      gallery: "pathimages",
      tags: "Js, React, Node",
      data: "22/12/2023",
    },
    {
      id: 7,
      title: "test",
      image: "images/lfp.jpg",
      description: "blabla",
      demo: "pathlink",
      category: "Dev",
      git: "pathgit",
      gallery: "pathimages",
      tags: "Js, React, Node",
      data: "22/12/2023",
    },
  ];

  return (
    <div className="container-fluid mt-5">
      <div className="box devBox active">
        <div className="row justify-content-center flex-wrap">
          {fetchCards
            .filter((card) => card.category === props.value)
            .map((card, index) => (
              <a key={index} href={"/route"}>
                <div className="newsCard news-Slide-up m-1">
                  <img alt="" src={card.image} />
                  <div className="newsCaption text-left">
                    <div className="newsCaption-title">project</div>
                    <span className="projectTitle">{card.title}</span>
                    <div className="dottedLine mb-3 mt-1"></div>
                    <span className="techTxt">Description</span>
                    <p>{card.description}</p>
                    <div className="mb-5 mt-1"></div>
                    <div className="newsCaption-content col-12">
                      <span className="techTxt">Technologies</span>
                      <p className="mt-1">
                        <span className="tagsCards">{card.tags}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
