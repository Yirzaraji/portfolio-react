import "./App.css";
import { Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./components/Common/Buttons/ThemeSwitcher";
import ThemeContext from "./store/ThemeContext";
import React, { useState, useEffect } from "react";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Administration from "./components/Pages/Administration/Administration";
import PDFViewer from "./components/Common/PDFViewer/PDFViewer";
import Post from "./components/Pages/Post/Post";
import Create from "./components/Pages/Post/Form/Create";
require("dotenv").config();

function App() {
  const API_URL = process.env.API_URL;
  console.log("targ " + API_URL);
  //render
  return (
    // <ThemeContext.Provider value={contextValue}>
    <div className="app">
      {/* <h1>{messageh}</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/administration/post-:id" element={<Administration />} />
        <Route path="/administration/post/create" element={<Create />} />
        <Route path="/administration/post/delete/:id" />
        <Route path="/post/:id" element={<Post />} />
        <Route
          path="/cv"
          element={<PDFViewer url="images/CV_Remi_Larrauri.pdf" />}
        />
      </Routes>
    </div>
    // </ThemeContext.Provider>
  );
}
export default App;
