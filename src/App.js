import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Carousel from './pages/Carousel';
import Font1 from './pages/Font1';
import Card from './pages/Card';
import Font2 from './pages/Font2';
import Card2 from './pages/Card2';
import Footer from './pages/Footer';

import Room from './pages/Room';


function HomePage() {
  return (
    <>
      <Carousel />
      <Font1 />
      <Card />
      <Font2 />
      <Card2 />
      <Footer />
    </>
  );
}

function RoomPage() {
  return <Room />
}

function ContactPage() {
  return <h1>Contact Us Page</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
