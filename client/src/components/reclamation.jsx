import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const Reclamations = () => {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    fetchRecs();
  }, []);
  const fetchRecs = async () => {
    try {
      const response = await axios.get('http://localhost:5500/getRecs');
      setRecs(response.data);
    } catch (error) {
      console.error('Error fetching reclmations:', error);
    }
  };
  const handleDelete = async (id) => {


    try {
      await axios.delete(`http://localhost:5500/deleteRec/${id}`);
      fetchRecs();
    } catch (error) {
      console.error('Error deleting reclamation:', error);
    }

  };


  return (
<div  className='margin'>
      <form id="form">
  
  
        <table id="example" className="table table-striped table-bordered" width="100%">
          <thead>
            <tr>
              <th className="head">Name</th>
              <th className="head">Phone Number</th>
              <th className="head">E-mail</th>
              <th className="head">Message</th>
              <th className="head">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recs.map((rec, i) => (
              <tr key={i}>
                <td>{rec.name}</td>
                <td>{rec.number}</td>
                <td>{rec.email}</td>
                <td>{rec.message}</td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => { handleDelete(rec._id) }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
</div>
  );
}
export default Reclamations;