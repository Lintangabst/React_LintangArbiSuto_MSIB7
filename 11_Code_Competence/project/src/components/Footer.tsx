import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className='text-3xl font-bold'>Lintangabst.</h1>
        </div>

        <div className="mb-4 md:mb-0">
          <p className="text-sm">Phone: (+62) 813-1715-7363</p>
          <p className="text-sm">Address: Tangerang City, Banten, Indonesia</p>
        </div>

        <div className="flex space-x-4 ">
          <a href="https://www.instagram.com/" className="hover:text-gray-400">
            <img src="src/assets/github.svg" alt="Github" className="w-6 h-6" />
          </a>
          <a href="https://discord.com/" className="hover:text-gray-400">
            <img src="src/assets/google.svg" alt="Gmail" className="w-6 h-6" />
          </a>
          <a href="https://www.whatsapp.com/" className="hover:text-gray-400">
            <img src="src/assets/wa.svg" alt="WhatsApp" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
