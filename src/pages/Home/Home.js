import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import WhatIDo from "../../components/WhatIDo/WhatIDo";
import About from "../../components/About/About";
import Curriculum from "../../components/Curriculum/Curriculum";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Tabs from "../../components/Cards/Tabs";

const Home = () => (
  <div className="main">
    <NavBar />
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
