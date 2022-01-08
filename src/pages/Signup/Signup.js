import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";
import axios from "axios";

const Signup = () => {

    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
//register function 
   const register = ()=>{
   const {name,email,password} = user
   if (name && email && password){
    axios.post("http://localhost:3000/signup",user )
    .then(res=>console.log(res))
   }
   else{
       alert("invalid input")
   };
}

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
                        {/* <input type="text" className="input" placeholder="a" value={user.name} onChange={handleChange}/> */}
                        <input type="text" className="input" placeholder="a" onChange={handleChange}/>
                        <label for="" className="label">Your Full Name</label>
                    </div>
                    <div className="inputContainer">
                        {/* <input type="text" className="input" placeholder="a" value={user.email} onChange={handleChange}/> */}
                        <input type="email" className="input" placeholder="a" onChange={handleChange} required/>
                        <label for="" className="label">Email</label>
                    </div>
                    <div className="inputContainer">
                        {/* <input type="text" className="input" placeholder="a" value={user.password} onChange={handleChange}/> */}
                        <input type="password" className="input" placeholder="a" onChange={handleChange}/>
                        <label for="" className="label">Password</label>
                    </div>
                    <div className="inputContainer">
                        <input type="password" className="input" placeholder="a"/>
                        <label for="" className="label">Confirm Password</label>
                    </div>
                    <div className="switching">
                        <input type="submit" className="submitBtn" value="Sign up" onClick={register}/>
                        <p className="switchLogin">Already have an account? <NavLink to="/login"><span>Login.</span></NavLink></p>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Signup;
