import './App.css';
import Activities from './components/Activities';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activities/>
    </div>
  );
}

export default App;
