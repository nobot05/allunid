import React from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    // <div className="container">
    //     <h1 className="text-center" style={{paddingTop: "30%"}}>
    //         Signup
    //     </h1>
    // </div>
        <div className="signup-page">
            <div className="signupFrm">
                <form action="" class="form">
                    <h1 className="title" align="center">Sign up</h1>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">First Name</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">Last Name</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">Email</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">Password</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">Confirm Password</label>
                    </div>
                    <div className="switching">
                        <input type="submit" className="submitBtn" value="Sign up"/>
                        <p className="switchLogin">Already have an account? <NavLink to="/login"><span>Login.</span></NavLink></p>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Signup;
