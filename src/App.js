
import { Route, Routes } from 'react-router-dom';
import './index.css';
import About from './routes/About';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Skills from './routes/Skills';
import Contact from './routes/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
