import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import '../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
     <App />
     <ToastContainer />
 </BrowserRouter>


);


reportWebVitals();