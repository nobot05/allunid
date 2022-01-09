import React, {useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./login.css";
import axios from 'axios';

const Login = ({setLoginUser}) => {

    const history = useHistory()
    const [user,setUser] = useState({
        name:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }

    const login =()=>{
        axios.post("http://localhost:3000/login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    history.push("/")})
    }

  return (
        <div className="signup-page">
            <div className="signupFrm">
                <form action="" className="form">
                    <h1 className="title" align="center">Log In</h1>
                    <div className="inputContainer">
                        <input type="email" className="input" placeholder="a" id="email"  onChange={handleChange} required/>
                        <label htmlFor="" className="label">Email</label>
                    </div>
                    <div className="inputContainer">
                        <input type="password" className="input" placeholder="a" id="password" onChange={handleChange} required/>
                        <label htmlFor="" className="label">Password</label>
                    </div>
                    <div className="switching">
                        <input type="submit" className="submitBtn" value="Login" onClick={login}/>
                        <p className="switchLogin">Don't have an account? <NavLink to="/signup"><span>Sign up.</span></NavLink></p>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login;
