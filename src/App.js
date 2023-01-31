import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ThemeSwitcher from "./components/Button/ThemeSwitcher";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import About from "./components/About/About";
import ThemeContext from "./store/ThemeContext";
import React, { useState } from "react";
import Curriculum from "./components/Curriculum/Curriculum";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Tabs from "./components/Cards/Tabs";
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
  //state
  const [theme, setTheme] = useState("light");

  //logic
  const contextValue = {
    theme: theme,
    updateTheme: setTheme,
  };

  //render
  return (
    <ThemeContext.Provider value={contextValue}>
      <main>
        <ThemeSwitcher />
        <NavBar />
        <Header />
        <WhatIDo />
        <About />
        <Tabs />
        <Curriculum />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}
export default App;
