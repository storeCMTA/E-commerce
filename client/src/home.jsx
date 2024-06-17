import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">ClothingShop</div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?fashion')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">New Collection</h1>
          <p className="text-xl md:text-2xl mb-8">Discover the latest trends in fashion</p>
          <Link to="/shop" className="bg-white text-gray-900 py-2 px-4 rounded-full text-lg font-semibold hover:bg-gray-200">Shop Now</Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 mb-8">We are a leading clothing store with the latest trends in fashion. Our mission is to provide high-quality clothing at affordable prices.</p>
        <Link to="/about" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Learn More</Link>
      </section>

      {/* Featured Products Section */}
      <section id="shop" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card */}
          {[1, 2, 3, 4, 5, 6].map((product) => (
            <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={`https://source.unsplash.com/random/400x400?clothes,${product}`} alt="Product" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Product Name {product}</h3>
                <p className="text-gray-600 mb-4">$99.99</p>
                <Link to={`/product/${product}`} className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ClothingShop. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
