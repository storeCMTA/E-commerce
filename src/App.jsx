import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home.jsx';
import Shop from './Shop.jsx';
import About from './about';
import Contact from './contact';
import Login from './login';
import Product from './product';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
