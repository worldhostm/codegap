import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-1">{description}</p>
        <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
