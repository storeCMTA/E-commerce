import './index.css';
import React, { useEffect, useState } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from './components/home.jsx';
import Shop from './components/Shop.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Login from './components/login.jsx';
import Product from './components/product.jsx';
import Register from './components/register.jsx';
import Dashboard from './components/dashboard.jsx';
import Men from './components/pages/men.jsx'
import Women from './components/pages/women.jsx'
import Kids from './components/pages/kids.jsx'
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
const App = () => {
  const [products, setProducts] = useState([]);
  const [token,setToken] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5500/getProducts')
      .then((res) => {
        console.log(res.data); // Log the response data
        setProducts(res.data); // Update the state with the fetched products
        console.log(products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const location = useLocation()

  const hundeltoken = (value)=>{
  setToken(value)
  }



  return (
    <div>
 {location.pathname !== '/dashboard' && <Navbar hundeltoken={hundeltoken} token={token} />}
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login hundeltoken={hundeltoken} />} />
        <Route path='/dashboard' element={<Dashboard token={token} hundeltoken={hundeltoken} />}  />
        <Route path='/register' element = {<Register/>}  />
        <Route path="/product/:id" element={<Product />} />
        <Route path='/shop/men' element = {<Men products={products}/>}  />
        <Route path='/shop/women' element = {<Women products={products}/>}  />
        <Route path='/shop/kids' element = {<Kids products={products}/>}  />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
