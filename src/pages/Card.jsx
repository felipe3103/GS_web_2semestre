import React from 'react';

function Card({ image, title, description }) {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full max-w-xs transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Card;