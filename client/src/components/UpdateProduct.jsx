// src/components/UpdateProduct.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/getProduct/${id}`);
        const product = response.data;
        setName(product.name);
        setCategory(product.category);
        setDescription(product.description);
        setPrice(product.price);
        setQuantity(product.quantity);
      } catch (error) {
        toast.error('There was an error fetching the product!');
      }
    };

    fetchProduct();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('quantity', quantity);

    try {
      const response = await axios.put(`http://localhost:5500/updateProduct/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setName(response.data.name);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setQuantity(response.data.quantity);
      toast.success('Product updated successfully!');
      console.log('Product updated:', response.data);
    } catch (error) {
      toast.error('There was an error updating the product!');
      console.error('There was an error updating the product!', error);
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-custom">
    <div className="container-fluid">
      <div className='flex justify-between'>
        <div className='flex space-x-5'>
          <button onClick={()=>{navigate('/dashboard/')}} className="btn btn-outline-danger ms-auto" type="button" >Admin Dashboard</button>

          <button onClick={()=>{navigate('/dashboard/addProduct')}} className="btn btn-outline-danger ms-auto" type="button" >Add product</button>
        </div>
        <div>
            <button onClick={()=>{logout()}} className="btn btn-outline-danger mr-2 " type="button" >Logout</button>
        </div>
      </div>
    </div>
  </nav>
  <div className="py-8">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-md">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        required
      ></textarea>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="file"
        onChange={handleImageChange}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Update Product</button>
    </form>
  </div>
</>
  );
};

export default UpdateProduct;
