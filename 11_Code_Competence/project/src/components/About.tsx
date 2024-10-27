import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <h1 className="text-4xl font-bold mb-4 text-blue-500">About Us</h1>
          <p className="text-lg mb-6">
            I am a student at Universitas Paramadina majoring in Informatics Engineering. 
            I live in Tangerang City and am focusing on becoming a web developer. 
            I became interested in web development during my second semester. 
            Initially, I was just experimenting, but over time I felt comfortable 
            building applications, and now I want to dive deeper into application development.
          </p>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <img 
            src="./img/about.png" 
            alt="About Us" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
