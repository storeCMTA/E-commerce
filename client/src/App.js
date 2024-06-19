import './index.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from './components/home.jsx';
import Shop from './components/Shop.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Login from './components/login.jsx';
import Product from './components/product.jsx';
import Register from './components/register.jsx';
import Dashboard from './components/dashboard.jsx';


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/getProducts')
      .then((res) => {
        console.log(res.data); // Log the response data
        setProducts(res.data); // Update the state with the fetched products
        console.log(products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>}  />
        <Route path='/register' element = {<Register/>}  />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
