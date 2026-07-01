import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Cardgrid from './components/Cardgrid';
import Publication from './components/Publication';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Cardgrid />
      <Publication />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
