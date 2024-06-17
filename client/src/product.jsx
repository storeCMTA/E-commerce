import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  // Fetch product details using the id
  // For simplicity, we use dummy data here
  const product = {
    name: `Product Name ${id}`,
    price: 99.99,
    description: 'This is a detailed description of the product.',
    image: `https://source.unsplash.com/random/400x400?clothes,${id}`
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
