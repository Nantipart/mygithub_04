import logo from './logo.svg';
import './App.css';
import Navbar from './components/Narbar';
import Carousel from './pages/Carousel';
import Font1 from './pages/Font1';
import Card from './pages/Card';
import Font2 from './pages/Font2';
import Card2 from './pages/Card2';
import Footer from './pages/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Font1 />
      <Card />
      <Font2 />
      <Card2 />
      <Footer />
    </div>
  );
}

export default App;
