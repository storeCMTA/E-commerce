import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const register = () => {
    axios
      .post("http://localhost:5500/register", { name, email, password })
      .then((res) => {
       
        if (res.data.newuser[0]) {
          navigate("/login");
        } 
      })
      .catch((err) => {
        setError("Email already used !!!");
      });
  };

  return (
    <div>
      <div class="signinform">
        <h1 class="fw-bold">Service Register</h1>

        <div class="container">
          <div class="w3l-form-info">
            <div class="w3_info">
              <h2>Register</h2>
              {error ?  <div className="alert alert-danger">{error}</div> : <p></p>}
              <div>
                <div class="input-group">
                  <span>
                    <i class="fas fa-user" aria-hidden="true"></i>
                  </span>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div class="input-group">
                  <span>
                    <i class="fas fa-key" aria-hidden="true"></i>
                  </span>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="email"
                  />
                </div>
                <div class="input-group">
                  <span>
                    <i class="fas fa-key" aria-hidden="true"></i>
                  </span>
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="Password"
                    placeholder="Password"
                  />
                </div>

                <button onClick={()=>{register()}} class="btn btn-primary btn-block">Register</button>
              </div>
              <p class="continue">
                <span>or Register with</span>
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
                Already have an account <a href="#signup">Login</a>
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <p> All Rights Reserved | Design by Achref</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
