import Header from "./Header/Header";
import Navbar from "../Navbar/Navbar";
import WhatIDo from "./WhatIDo/WhatIDo";
import About from "./About/About";
import Curriculum from "./Curriculum/Curriculum";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Cards from "./Cards/Cards";
import NavbarBurger from "../Navbar/NavbarBurger";
/* import PwaBtn from "../../Common/Buttons/PwaBtn"; */

const Home = () => (
  <div className="main">
    <NavbarBurger />
    <Navbar />
    {/* <PwaBtn /> */}
    <Header />
    <WhatIDo />
    <About />
    <Cards />
    <Curriculum />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default Home;
