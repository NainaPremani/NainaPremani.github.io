// Bootstrap first so our own styles below can override its defaults
// (notably its underlined-anchor rule).
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Introduction } from "./components/About/Introduction";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Banner />
        <Introduction />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
