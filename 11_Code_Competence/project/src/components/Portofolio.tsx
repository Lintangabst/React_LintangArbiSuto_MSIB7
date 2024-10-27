import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const portfolioItems = [
  {
    id: 1,
    image: 'src/assets/img/project1.png',
    description: 'MOOD: A math operations learning application for elementary school students in grades 1 to 3.',
  },
  {
    id: 2,
    image: 'src/assets/img/project2.png',
    description: 'Straweyi: A portfolio website for a pearl bag brand.',
  },
  {
    id: 3,
    image: 'src/assets/img/project3.png',
    description: 'BengkelIT: A service application for electronic devices at Paramadina University.',
  },
  {
    id: 4,
    image: 'src/assets/img/project4.png',
    description: 'Birthday Greeting Website.',
  },
  {
    id: 5,
    image: 'src/assets/img/project5.png',
    description: 'AMANTIX: A ticket sales application for events at Paramadina University.',
  },
];

const Portofolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleGithubClick = () => {
    const discordLink = 'https://github.com/lintangabst'; 
    window.open(discordLink, '_blank');
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">

        <h1 className="text-4xl font-bold text-center mb-4">My <span className='text-blue-500'> Portofolio </span></h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Here are some of my recent works showcasing my expertise in web development.
        </p>

        <div className="text-center mb-8">
          <button
            onClick={handleGithubClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            View all my work.
          </button>
        </div>

        <Slider {...settings}>
          {portfolioItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={`Portfolio ${item.id}`}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => openModal(item.image)} 
                />
                <div className="p-4">
                  <p className="text-gray-700 text-center">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative">
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portofolio;
