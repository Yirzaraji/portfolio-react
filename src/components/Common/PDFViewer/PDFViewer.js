import React from "react";

const PDFViewer = ({ url }) => (
  <object data={url} type="application/pdf" width="100%" height="1000px">
    <p>
      It appears your browser does not support PDFs. Please click{" "}
      <a href={url}>here</a> to download the file.
    </p>
  </object>
);
export default PDFViewer;
