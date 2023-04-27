
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";

import { Contact } from "./components/Contact/Contact";

import { Projects } from './components/Projects/Projects';
import { Introduction } from './components/About/Introduction';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
