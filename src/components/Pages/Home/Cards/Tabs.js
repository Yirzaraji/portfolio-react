import React, { useState } from "react";
import Cards from "./Cards";
const Tabs = () => {
  const [selectedCardsTab, setSelectedCardsTab] = useState(1);
  const cardsTab = [
    { id: 0, content: "Dev", test: "test0" },
    { id: 1, content: "Design", test: "test1" },
    { id: 2, content: "Print", test: "test2" },
  ];

  return (
    <div className="container-fluid pb-5 pt-5">
      <div className="row">
        <div className="col-md-12 text-center color titleColor mt-3 ml-3">
          <img src="images/rosace-title.png" alt="" className="mb-2" />
          <h4 className="titlecolor">
            <b>QUELQUES</b> PROJET...
          </h4>
          <img
            src="images/trait.png"
            alt=""
            style={{ width: "14%" }}
            className="mb-2"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center mb-5">
          <ul className="navTabs list_js">
            {cardsTab.map((selectedTab, index) => (
              <li
                key={index}
                onClick={() => setSelectedCardsTab(index)}
                id={selectedTab.id}
              >
                {selectedTab.content}
              </li>
            ))}
            <Cards value={cardsTab[selectedCardsTab].content} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
