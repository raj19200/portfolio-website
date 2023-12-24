import { Element } from "react-scroll";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Home from "../pages/Home";
import NavBar from "../pages/NavBar";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import "../styles/GlobalStyle.css";
function AppLayout() {
  return (
    <div className="container">
      <div className="dark-mode px-10 py-3">
        <NavBar />
        <Element default id="home">
          <Home />
        </Element>
        <Element id="about">
          <About />
        </Element>
        <Element id="experience">
          <Experience />
        </Element>
        <Element id="skills">
          <Skills />
        </Element>
        <Element id="projects">
          <Projects />
        </Element>
        <Element id="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default AppLayout;