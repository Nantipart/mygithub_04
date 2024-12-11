import logo from './logo.svg';
import './App.css';
import Navbar from './components/Narbar';
import Carousel from './pages/Carousel';
import Font1 from './pages/Font1';
import Card from './pages/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Font1 />
      <Card />
    </div>
  );
}

export default App;
