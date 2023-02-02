import "./App.css";
import { Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./components/Common/Buttons/ThemeSwitcher";
import ThemeContext from "./store/ThemeContext";
import React, { useState } from "react";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Administration from "./components/Pages/Administration/Administration";
import PDFViewer from "./components/Common/PDFViewer/PDFViewer";
import Show from "./components/Pages/Post/Show";
/* import logo from './logo.svg';

export default function App(){
  return (
    <div className="App">
      <h1>Hello there</h1>
      <h2>Start editiong blmadja jdajz dja zd</h2>
    </div>
  );
}
*/

function App() {
  //render
  return (
    // <ThemeContext.Provider value={contextValue}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/administration" element={<Administration />} />
      <Route path="/administration/post-:id" element={<Administration />} />
      <Route path="/post-:id" element={<Show />} />
      <Route
        path="/cv"
        element={<PDFViewer url="images/CV_Remi_Larrauri.pdf" />}
      />
    </Routes>
    // </ThemeContext.Provider>
  );
}
export default App;
