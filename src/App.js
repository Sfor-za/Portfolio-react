import './App.css';
import Cardgrid from './components/Cardgrid';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app" >
      <Navbar />
      <div className="container" id="Projects-section">
        <Cardgrid />
      </div>
      <div className="container">

      </div>
      <div className="container">

      </div>
    </div>
  );
}

export default App;
