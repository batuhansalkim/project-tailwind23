import './App.css';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Form from './components/Form';
import Gallery from './components/Gallery';
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
      <Booking/>
      <Gallery/>
      <Form/>
    </div>
  );
}

export default App;
