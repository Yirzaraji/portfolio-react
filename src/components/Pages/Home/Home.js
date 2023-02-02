import Header from "./Header/Header";
import Navbar from "../Navbar/Navbar";
import WhatIDo from "./WhatIDo/WhatIDo";
import About from "./About/About";
import Curriculum from "./Curriculum/Curriculum";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Tabs from "./Cards/Tabs";

const Home = () => (
  <div className="main">
    <Navbar />
    <Header />
    <WhatIDo />
    <About />
    <Tabs />
    <Curriculum />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default Home;
