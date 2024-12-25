import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Carousel from './pages/Carousel';
import Font1 from './pages/Font1';
import Card from './pages/Card';
import Font2 from './pages/Font2';
import Card2 from './pages/Card2';
import Footer from './pages/Footer';


function HomePage() {
  return (
    <div className="HomePage">
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

export default HomePage;
