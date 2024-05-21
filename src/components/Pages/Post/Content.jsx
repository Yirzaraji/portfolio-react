import { React, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const Content = (post) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!post.value.paragraph) {
    return console.log("paragraphe null");
  }

  //console.log(post.value.paragraph.split("\\n\\n"));
  const paragraphes = post.value.paragraph.split("\\n\\n");

  //const code = `<div className="div"><h1>test</h1></div>`;

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12 paragraphePost p-3" id="para-post">
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              {paragraphes.map((paragraphe, index) => {
                return (
                  <div
                    key={index}
                    className="col-10 col-sm-7 col-md-7 col-xl-4 content-para d-flex justify-content-center pb-5"
                  >
                    {/* <pre className="line-numbers">
                          <code className="language-js"> {code}</code>
                        </pre> */}
                    <span
                      key={index}
                      dangerouslySetInnerHTML={{ __html: paragraphe }}
                    ></span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
