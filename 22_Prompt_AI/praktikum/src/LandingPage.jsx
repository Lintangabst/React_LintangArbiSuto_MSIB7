import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Chatbot</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Selamat datang di chatbot kesehatan mental kami. Kami siap mendengarkan
        dan memberikan dukungan yang Anda butuhkan. Mulailah berbicara dan 
        temukan bantuan yang dapat meningkatkan kesejahteraan Anda.
      </p>
      <Link to="/chatbot">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Mulai Chat
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
