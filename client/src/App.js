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
import Men from './components/pages/men.jsx';
import Women from './components/pages/women.jsx';
import Kids from './components/pages/kids.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Cart from './components/cart.jsx';
import Reclamations from './components/reclamation.jsx';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5500/getProducts')
      .then((res) => {
        setProducts(res.data);
        const cartItems = res.data.filter(product => product.quantity > 0);
        setCart(cartItems);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
  }, []);

  const location = useLocation();

  const handleToken = (value) => {
    setToken(value);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item._id === product._id);
    if (existingProduct) {
      increaseQuantity(product._id);
    } else {
      const updatedProduct = { ...product, quantity: 1 };
      setCart((prevCart) => [...prevCart, updatedProduct]);
      axios.patch(`http://localhost:5500/updateProduct/${product._id}`, { quantity: 1 })
        .catch(error => console.error('Error updating product:', error));
    }
  };

  const increaseQuantity = (productId) => {
    const existingProduct = cart.find(item => item._id === productId);
    if (existingProduct) {
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
      axios.patch(`http://localhost:5500/updateProduct/${productId}`, updatedProduct)
        .then((res) => {
          setCart((prevCart) => prevCart.map(item => item._id === productId ? res.data : item));
        })
        .catch(error => console.error('Error updating product:', error));
    }
  };

  const decreaseQuantity = (productId) => {
    const existingProduct = cart.find(item => item._id === productId);
    if (existingProduct && existingProduct.quantity > 1) {
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity - 1 };
      axios.patch(`http://localhost:5500/updateProduct/${productId}`, updatedProduct)
        .then((res) => {
          setCart((prevCart) => prevCart.map(item => item._id === productId ? res.data : item));
        })
        .catch(error => console.error('Error updating product:', error));
    } else {
      removeFromCart(productId);
    }
  };

  const removeFromCart = (productId) => {
    axios.patch(`http://localhost:5500/updateProduct/${productId}`, { quantity: 0 })
      .then(() => {
        setCart((prevCart) => prevCart.filter(item => item._id !== productId));
      })
      .catch(error => console.error('Error updating product:', error));
  };


  return (
    <div>
      {location.pathname !== '/dashboard' && <Navbar handleToken={handleToken} token={token} cart={cart} />}
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/shop" element={<Shop products={products} addToCart={addToCart} cart={cart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/dashboard" element={<Dashboard token={token} handleToken={handleToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shop/men" element={<Men products={products} addToCart={addToCart} />} />
        <Route path="/shop/women" element={<Women products={products} addToCart={addToCart} />} />
        <Route path="/shop/kids" element={<Kids products={products} addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} setCart={setCart} />}
        />
        <Route path="/reclamation" element={<Reclamations/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
