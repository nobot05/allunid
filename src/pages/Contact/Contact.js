import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./contact.css";

const Contact = () => {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
        <div className="signup-page">
            <div className="signupFrm">
                <form action="" class="form" onSubmit={handleSubmit}>
                    <h1 className="title" align="center">Contact us!</h1>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a" id="name" required/>
                        <label for="" htmlFor="name" className="label">Name</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a" id="email" required/>
                        <label for="" htmlFor="email" className="label">Email</label>
                    </div>
                    <div className="inputContainer usermsg">
                        <input type="text" className="input" placeholder="a" id="message" required/>
                        {/* <textarea className="input" rows="5"></textarea> */}
                        <label for="" htmlFor="message" className="label">Write your message here!</label>
                    </div>
                    <div>
                        <button type="submit" className="submitBtn" value="Send">{status}</button>
                    </div>
                </form>
            </div>
        </div>
  )
}


export default Contact;
