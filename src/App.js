import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Administration from "./components/Pages/Administration/Administration";
import PDFViewer from "./components/Common/PDFViewer/PDFViewer";
import Post from "./components/Pages/Post/Post";
import Create from "./components/Pages/Post/Form/Create";
import Update from "./components/Pages/Post/Form/Update";
import Providers from "stores/Providers";

function App() {
  //render
  return (
    <Providers>
      <div className="app">
        {/* <h1>{messageh}</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/administration/post/create" element={<Create />} />
          <Route path="/administration/post/delete/:id" />
          <Route path="/administration/post/update/:id" element={<Update />} />
          <Route path="/post/:id" element={<Post />} />
          <Route
            path="/cv"
            element={<PDFViewer url="images/CV_Remi_Larrauri.pdf" />}
          />
        </Routes>
      </div>
    </Providers>
  );
}
export default App;
