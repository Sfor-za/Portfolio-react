import './App.css';
import Cardgrid from './components/Cardgrid';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container" id="About">
        <About/>
      </div>
      <div className="container" id="Projects">
        <Cardgrid />
      </div>
      
      <div className="container" id="Contact">
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
