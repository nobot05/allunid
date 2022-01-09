import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import { resolveContent } from "nodemailer/lib/shared";

const Signup = () => {
  //     const createUser = async (user) => {
  //         try {
  //           const response = await axios.Post(`localhost:5000/api/users`, user);
  //           console.log("Response: ",response);
  //           const { data: jwt } = response;
  //         //   auth.setToken(jwt);
  //           return response;
  //         } catch (error) {
  //           return error;
  //         }
  //       };

  //       const history = useHistory();
  //     const [formValue, setFormValue] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  //   const [signupError, setSignupError] = useState(false);
  //   const [responseMessage, setResponseMessage] = useState("");

  //   const handleSubmit = async (event) => {
  //       console.log("hi");
  //     const userFormData = {
  //       name: formValue.name,
  //       email: formValue.email,
  //       password: formValue.password,
  //     };
  //     event.preventDefault();

  //     const response = await createUser(userFormData);
  //     if (response.status === 200) {
  //       window.location.replace("/");
  //     } else {
  //       console.log(response);
  //       setSignupError(true);
  //     //   setResponseMessage(response.substring(response.indexOf('[')+1,response.indexOf(']')));
  //     }
  //   };

  //   const handleChange = (event) => {
  //     setFormValue({
  //       ...formValue,
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  //   console.log("hi");

  const [status, setStatus] = useState("Add User");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, password } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    let response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ;charset=utf-8
      },
      body: JSON.stringify(details),
    }).catch((err) => {
      alert("There is an error omg!");
    });
    console.log("here", response);
    setStatus("Add user");
    if (response.status === 200) {
      window.location.href = "/login"
    } else {
    console.log(response)
      alert("Error with status", response.status);
    }
  };

  return (
    <div className="signup-page">
      <div className="signupFrm">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title" align="center">
            Sign up
          </h1>
          <div className="inputContainer">
            {/* <input type="text" className="input" placeholder="a" value={user.name} onChange={handleChange}/> */}
            <input
              type="text"
              className="input"
              placeholder="a"
              id="name"
              required
            />
            <label htmlFor="" className="label">
              Your Full Name
            </label>
          </div>
          <div className="inputContainer">
            {/* <input type="text" className="input" placeholder="a" value={user.email} onChange={handleChange}/> */}
            <input
              type="email"
              className="input"
              placeholder="a"
              id="email"
              required
            />
            <label htmlFor="" className="label">
              Email
            </label>
          </div>
          <div className="inputContainer">
            {/* <input type="text" className="input" placeholder="a" value={user.password} onChange={handleChange}/> */}
            <input
              type="password"
              className="input"
              placeholder="a"
              id="password"
              required
            />
            <label htmlFor="" className="label">
              Password
            </label>
          </div>
          <div className="inputContainer">
            <input type="password" className="input" placeholder="a" required />
            <label htmlFor="" className="label">
              Confirm Password
            </label>
          </div>
          <div className="switching">
            <button type="submit" className="submitBtn">
              {status}
            </button>
            <p className="switchLogin">
              Already have an account?{" "}
              <NavLink to="/login">
                <span>Login.</span>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
