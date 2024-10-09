import React from 'react';
import profileImg from '../assets/img/profilelintang.png';

const phoneNumber = '6281317157363';
const message = 'Halo, saya tertarik untuk berbicara!';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); 
  };


  const heroContent = [
    {
      title: 'Web Developer Based',
      subtitle: 'in Tangerang',
      description:
        "Hello! I'm Lintang, a 3rd-year student at Paramadina University and a Web Developer specializing in creating dynamic and interactive websites. With expertise in modern web technologies and responsive design.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">

        <div className="md:w-1/2 text-center md:text-left md:pr-8">
          {heroContent.map((content, index) => (
            <div key={index}>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                {content.title} <span className="text-blue-500">{content.subtitle}</span>
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                {content.description}
              </p>
            </div>
          ))}
          <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            onClick={handleWhatsAppClick}
          >
            Let's Talk!
          </button>
        </div>


        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full right-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
