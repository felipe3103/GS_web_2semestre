import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.webp';

const images = [img1, img2, img3]; // Lista de imagens

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Roda automaticamente as imagens a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover transition-opacity duration-500"
        />
      </div>
      
      {/* Botão de Anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-3 hover:bg-gray-900"
      >
        &#10094;
      </button>

      {/* Botão de Próximo */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-3 hover:bg-gray-900"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slideshow;