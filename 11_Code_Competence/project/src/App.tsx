import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import router
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Portofolio />
            <Contact />
            <Footer />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
