import React from 'react';

const Login = () => {
  return (
    <div >
     <div class="signinform">
        
     <h1 class="fw-bold">Service Login</h1>
       
        <div class="container">
       
            <div class="w3l-form-info">
                <div class="w3_info">
                    <h2>Login</h2>
                    <form action="#" method="post">
                        <div class="input-group">
                            <span><i class="fas fa-user" aria-hidden="true"></i></span>
                            <input type="email" placeholder=" Email" required=""/>
                        </div>
                        <div class="input-group">
                            <span><i class="fas fa-key" aria-hidden="true"></i></span>
                            <input type="Password" placeholder="Password" required=""/>
                        </div>
                       
                        <button class="btn btn-primary btn-block" type="submit">Login</button>
                    </form>
                    <p class="continue"><span>or Login with</span></p>
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
                    <p class="account">Don't have an account? <a href="#signup">Sign up</a></p>
                </div>
            </div>
           
        </div>
       
        <div style={{}} class="footer">
            <p > All Rights Reserved | Design by Achref
                    </p>
        </div>
  
    </div>


   
    </div>
  );
}

export default Login;
