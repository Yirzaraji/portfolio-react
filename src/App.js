import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ThemeSwitcher from "./components/Button/ThemeSwitcher";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import About from "./components/About/About";
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

  //logic

  //render
  return (
    <main>
      <NavBar />
      <Header />
      <ThemeSwitcher />
      <WhatIDo />
      <About />
    </main>
  );
}
export default App;
