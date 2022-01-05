import React from "react";
import { NavLink } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    // <div className="container">
    //     <h1 className="text-center" style={{paddingTop: "30%"}}>
    //         Signup
    //     </h1>
    // </div>
        <div className="signup-page">
            <div className="signupFrm">
                <form action="" class="form">
                    <h1 className="title" align="center">Contact us!</h1>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">Name</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">Email</label>
                    </div>
                    <div className="inputContainer usermsg">
                        <input type="text" className="input" placeholder="a"/>
                        <label for="" className="label">Write your message here!</label>
                    </div>
                    <div>
                        <input type="submit" className="submitBtn" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Contact;
