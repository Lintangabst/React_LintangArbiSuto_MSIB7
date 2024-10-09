import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/img/logoportofolio.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-2xl font-bold">
          <Link to="/"> 
            <img src={logo} alt="Logo" className="h-full" />
          </Link>
        </div>


        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Works</a>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className="block hover:text-blue-500">Home</a>
          <a href="#" className="block hover:text-blue-500">Works</a>
          <Link to="/about" className="block hover:text-blue-500">About</Link>
          <a href="#" className="block hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
