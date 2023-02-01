import "./App.css";
import { Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./components/Button/ThemeSwitcher";
import ThemeContext from "./store/ThemeContext";
import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Administration from "./pages/Administration/Administration";
import PDFViewer from "./components/PDFViewer/PDFViewer";
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
      <Route
        path="/cv"
        render={() => <PDFViewer url="/public/images/CV_Remi_Larrauri.pdf" />}
      />
    </Routes>
    // </ThemeContext.Provider>
  );
}
export default App;
