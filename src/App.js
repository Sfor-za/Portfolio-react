import './App.css';
import Cardgrid from './components/Cardgrid';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Cardgrid />
        </div>
    </div>
  );
}

export default App;
