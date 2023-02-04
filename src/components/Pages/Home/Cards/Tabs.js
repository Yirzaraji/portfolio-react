import React, { useState } from "react";
import Cards from "./Cards";
const Tabs = () => {
  const [tabs, setTabs] = useState(0);
  const datas = [
    { id: 0, content: "Front" },
    { id: 1, content: "All" },
    { id: 2, content: "Back" },
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
            {datas.map((data, index) => (
              <li key={index} onClick={() => setTabs(index)} id={data.id}>
                {data.content}
              </li>
            ))}
            <Cards value={datas[tabs].content} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
