import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NavBar from "../pages/NavBar";
import "../styles/GlobalStyle.css";
function AppLayout() {
  return (
    <div className="dark-mode">
      <NavBar />
      <div className="pt-16">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default AppLayout;
