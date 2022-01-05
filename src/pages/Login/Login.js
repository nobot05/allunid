import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
        <div className="signup-page">
            <div className="signupFrm">
                <form action="" class="form">
                    <h1 className="title" align="center">Log In</h1>
                    <div className="inputContainer">
                        <input type="text" class="input" placeholder="a"/>
                        <label for="" className="label">Email</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">Password</label>
                    </div>
                    <div className="switching">
                        <input type="submit" className="submitBtn" value="Login"/>
                        <p className="switchLogin">Don't have an account? <NavLink to="/signup"><span>Sign up.</span></NavLink></p>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login;
