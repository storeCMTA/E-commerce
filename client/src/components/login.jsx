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
      <div class="signinform">
        <h1 class="fw-bold">Service Login</h1>

        <div class="container">
          <div class="w3l-form-info">
            <div class="w3_info">
              <h2>Login</h2>
              {error ?  <div className="alert alert-danger">{error}</div> : null}
              <div >
                <div class="input-group">
                  <span>
                    <i class="fas fa-user" aria-hidden="true"></i>
                  </span>
                  <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder=" Email" />
                </div>
                <div class="input-group">
                  <span>
                    <i class="fas fa-key" aria-hidden="true"></i>
                  </span>
                  <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder="Password"  />
                </div>

                <button onClick={()=>{login()}} class="btn btn-primary btn-block" >
                  Login
                </button>
              </div>
              <p class="continue">
                <span>or Login with</span>
              </p>
              <div class="social-login">
                <a href="#facebook">
                  <div class="facebook">
                    <span class="fab fa-facebook-f" aria-hidden="true"></span>
                  </div>
                </a>
                <a href="#twitter">
                  <div class="twitter">
                    <span class="fab fa-twitter" aria-hidden="true"></span>
                  </div>
                </a>
                <a href="#google">
                  <div class="google">
                    <span class="fab fa-google" aria-hidden="true"></span>
                  </div>
                </a>
              </div>
              <p class="account">
                Don't have an account? <a href="/register">Sign up</a>
              </p>
            </div>
          </div>
        </div>

        <div style={{}} class="footer">
          <p> All Rights Reserved | Design by Achref</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
