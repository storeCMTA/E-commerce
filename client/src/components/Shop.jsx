import React from 'react';
import { Link } from "react-router-dom";
const Shop = ({products}) => {
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Card Example */}
        {products.map((product) => (
          <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/product/${product._id}`}>
            <img src={product.image} alt="Product" className="w-100 h-120 object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}$</p>
              <a href="#!" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
