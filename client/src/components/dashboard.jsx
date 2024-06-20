import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './App.css'; // Assurez-vous d'importer le fichier CSS

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const [deletedID,setdeletedID]=useState(null);
             


const navigate = useNavigate()



  const logout = () => {
    axios.get("http://localhost:5500/logout").then((res) => {
      props.hundeltoken("");
      navigate('/login')
    });
  };



  useEffect(() => {
    fetchProducts();
  }, []);
const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5500/getProducts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
};
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/deleteProduct/${id}`);
      fetchProducts()
    } catch (error) {
      console.error('Error deleting Product:', error);
    }
};
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <h3 className="navbar-brand" >Admin Dashboard</h3>
          <button onClick={()=>{logout()}} className="btn btn-outline-danger ms-auto" type="button" >Logout</button>
        </div>
      </nav>

      <div style={{ marginTop: "500px" }} className="container mt-5 card-cnt">
        <div className="row mt-5">
          {data.map((element, index) => (
            <div className="col-md-3 mt-5" key={index}>
              <div style={{ height: "600px" }} className="card mb-4">
                <img
                  style={{ height: "300px" }}
                  src={element.image}
                  className="card-img-top"
                  alt={element.name}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{element.name}</h5>
                  <p style={{ textAlign: 'center', marginTop: '30px' }} className="card-text fw-semibold">${element.price}</p>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <button
                    type="button"
                    className="btn btn-success me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => setdeletedID(element._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div style={{ backgroundColor: '#d3d3d3' }} className="modal-body fw-semibold">
                  Are you sure you want to delete this product  !!!
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button

                  onClick={()=>handleDelete(deletedID)}
                    data-bs-dismiss="modal"
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">
                    Update This Product
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label fw-medium"
                      >
                        Image:
                      </label>
                      <input
                        placeholder="Product Image ..."
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label fw-medium"
                      >
                        Name:
                      </label>
                      <input
                        placeholder="Name of Product ..."
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label fw-medium">
                        Price:
                      </label>
                      <input
                        placeholder="Price of product..."
                        className="form-control"
                        id="message-text"
                        type = 'Number'
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                  //// taha put the function of update
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-success"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

