import React from 'react';

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Card Example */}
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://source.unsplash.com/random/400x400?clothes,${product}`} alt="Product" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product Name {product}</h3>
              <p className="text-gray-600 mb-4">$99.99</p>
              <a href="#!" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
