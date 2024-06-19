import React from 'react';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return (
        <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">ClothingShop</div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 no-underline">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900 no-underline">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 no-underline">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 no-underline">Contact</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900 no-underline">Login</Link>
           
          </div>
        </div>
      </nav>
    )
}
export default Navbar;