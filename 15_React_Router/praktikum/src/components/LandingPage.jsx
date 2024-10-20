// src/components/LandingPage.jsx
import React from 'react';
import heromsibImage from '../img/heromsib.png'; // Import gambar

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold">Simple header</div>
          {/* Navigation Links */}
          <div className="space-x-8">
            <a href="/" className="text-white bg-blue-600 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-800">Home</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">Features</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">Pricing</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">FAQs</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#37517E] text-white py-24 transition-colors duration-500 ease-in-out hover:bg-[#1c3a5f]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text on the left */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Better Solutions For Your Business</h1>
              <p className="text-lg mb-6">We are a team of talented designers making websites with Bootstrap</p>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <a href="/create-product" className="bg-[#47B2E4] text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#2093c7]">Add Product</a>
                <a href="/users" className="bg-transparent border border-white text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#37517E]">  Users</a>
              </div>
            </div>

            {/* Image on the right */}
            <div className="md:w-1/2 text-center mt-12 md:mt-0">
              <img src={heromsibImage} alt="Illustration" className="w-[636px] h-[527px] transition-transform duration-300 ease-in-out hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-200 text-center py-[50px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-[#37517E] font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6">Tamen quem nulla quae legam multos aute sint culpa legam nosterm magna</p>
          <div className="flex justify-center">
            <input type="email" className="form-input w-full max-w-md py-2 px-4 border border-gray-300 rounded-l-md" placeholder="Enter your email" />
            <button className="bg-[#47B2E4] text-white py-2 px-6 rounded-r-md transition duration-300 ease-in-out hover:bg-[#2093c7]">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-[60px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap pb-28">
            {/* Contact Info */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h5 className="text-[#37517E] text-xl font-bold mb-4">ARSHA</h5>
              <p>A108 Adam Street<br />New York, NY 535022<br />United States</p>
              <p><strong>Phone:</strong> +1 5589 55488 55</p>
              <p><strong>Email:</strong> info@example.com</p>
            </div>

            {/* Useful Links */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0 ">
              <h5 className="text-[#37517E] text-xl font-bold mb-4">Useful Links</h5>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Home</a></li>
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">About us</a></li>
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Services</a></li>
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Terms of service</a></li>
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Privacy policy</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h5 className="text-[#37517E] text-xl font-bold mb-4">Our Services</h5>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Web Design</a></li>
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Web Development</a></li>
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Product Management</a></li>
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Marketing</a></li>
                <li><a href="#" className="text-black hover:underline transition-colors duration-300 ease-in-out hover:text-[#47B2E4]">Graphic Design</a></li>
              </ul>
            </div>

            {/* Social Networks */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h5 className="text-[#37517E] text-xl font-bold mb-4">Our Social Networks</h5>
              <p className="mb-4">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
              <ul className="flex space-x-3">
                <li><a href="#" className="text-white bg-[#47B2E4] hover:bg-[#2093c7] p-3 rounded-full transition-colors duration-300 ease-in-out"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="text-white bg-[#47B2E4] hover:bg-[#2093c7] p-3 rounded-full transition-colors duration-300 ease-in-out"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#" className="text-white bg-[#47B2E4] hover:bg-[#2093c7] p-3 rounded-full transition-colors duration-300 ease-in-out"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" className="text-white bg-[#47B2E4] hover:bg-[#2093c7] p-3 rounded-full transition-colors duration-300 ease-in-out"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">© 2024 Your Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
