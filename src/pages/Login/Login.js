import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // const {email,value} = e.target
    setUser({
      ...user, //spread operator
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    const { email, password } = e.target.elements;
    e.preventDefault();
    const user = { email: email.value, password: password.value };
    console.log(user);
    axios.post("http://localhost:5000/api/auth", user).then((res) => {
        localStorage.setItem("token",res.data)
        // console.log(res);
        history.push("/")
    }).catch(err => {
        console.log(err);
        alert("Email or password are invalid!");
    });
  };

  return (
    <div className="signup-page">
      <div className="signupFrm">
        <form onSubmit={login} className="form">
          <h1 className="title" align="center">
            Log In
          </h1>
          <div className="inputContainer">
            <input
              name="email"
              type="email"
              className="input"
              placeholder="a"
              id="email"
              onChange={handleChange}
              required
            />
            <label htmlFor="" className="label">
              Email
            </label>
          </div>
          <div className="inputContainer">
            <input
              name="password"
              type="password"
              className="input"
              placeholder="a"
              id="password"
              onChange={handleChange}
              required
            />
            <label htmlFor="" className="label">
              Password
            </label>
          </div>
          <div className="switching">
            <button type="submit" className="submitBtn">
              Submit
            </button>
            <p className="switchLogin">
              Don't have an account?{" "}
              <NavLink to="/signup">
                <span>Sign up.</span>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
