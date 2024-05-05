import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const Content = (post) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-9 paragraphePost p-3" id="para-post">
          <div className="row justify-content-center">
            <div className="col-md-8 text-justify pt-5 pb-5" id="post-txt">
              {/* <pre>
                <code className={`language-${"js"}`}>
                  {'<div className="col-12 text-left tagsBloc">'}
                </code>
              </pre> */}
              {post.value.paragraph}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
