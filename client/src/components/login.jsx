import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  axios.defaults.withCredentials = true
  const navigate = useNavigate()

  const login = ()=>{
    axios.post('http://localhost:5500/login',{email,password}).then((res)=>{
      
     if (res.data.token){
      localStorage.setItem("token",res.data.token)
      props.hundeltoken(res.data.token)
      
      if (res.data.role==="admin"){
        navigate('/dashboard')
      }
      else {
        navigate('/')
      }
     
     }else {
      setError(res.data.err)
     }
    }).catch((err)=>{
      setError(err.message)
    })
  }

  return (
    <div>
      <div className="signinform">
        <h1 className="fw-bold">Service Login</h1>

        <div className="container">
          <div className="w3l-form-info">
            <div className="w3_info">
              <h2>Login</h2>
              {error ?  <div className="alert alert-danger">{error}</div> : null}
              <div >
                <div className="input-group">
                  <span>
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </span>
                  <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder=" Email" />
                </div>
                <div className="input-group">
                  <span>
                    <i className="fas fa-key" aria-hidden="true"></i>
                  </span>
                  <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder="Password"  />
                </div>

                <button onClick={()=>{login()}} className="btn btn-primary btn-block" >
                  Login
                </button>
              </div>
              <p className="continue">
                <span>or Login with</span>
              </p>
              <div className="social-login">
                <a href="#facebook">
                  <div className="facebook">
                    <span className="fab fa-facebook-f" aria-hidden="true"></span>
                  </div>
                </a>
                <a href="#twitter">
                  <div className="twitter">
                    <span className="fab fa-twitter" aria-hidden="true"></span>
                  </div>
                </a>
                <a href="#google">
                  <div className="google">
                    <span className="fab fa-google" aria-hidden="true"></span>
                  </div>
                </a>
              </div>
              <p className="account">
                Don't have an account? <a href="/register">Sign up</a>
              </p>
            </div>
          </div>
        </div>

        <div style={{}} className="footer">
          <p> All Rights Reserved | Design by Achref</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
