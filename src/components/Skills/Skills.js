import React, { useState } from "react";
import ContentTabBack from "./ContentTabBack";
import ContentTabEnv from "./ContentTabEnv";
import ContentTabFront from "./ContentTabFront";
import "./Skills.css";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { id: "tab1", label: "Back", content: <ContentTabBack /> },
    { id: "tab2", label: "Env", content: <ContentTabEnv /> },
    { id: "tab3", label: "Front", content: <ContentTabFront /> },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => setSelectedTab(index)}
              id={tab.id}
              className={"tabs mr-1 ml-1 mb-5"}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <div>{tabs[selectedTab].content}</div>
    </div>
  );
};

export default Skills;
