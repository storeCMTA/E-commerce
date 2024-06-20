import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate()

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
      const response = await axios.post('http://localhost:5500/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success("Product added !");
      setName("")
      setCategory("")
      setDescription("")
      setPrice("")
      setImage("")
      setQuantity("")
      console.log('Product added:', response.data);

    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <>
    <ToastContainer />
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
  <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md  rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Add Product
      </button>
    </form>
  </div>
    </>
  );
};

export default AddProduct;
