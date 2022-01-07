import React from "react";
import { NavLink } from "react-router-dom";
import "./editprofile.css";
import {Card, Button} from 'react-bootstrap'


const EditProfile = () => {
  return (
    // <div className="container">
    //     <h1 className="text-center" style={{paddingTop: "30%"}}>
    //         Favs
    //     </h1>
    // </div>
<div className="addingUsed">
        <div className="adding-Container">
            <div className="profilefrm">
                <div className="topp">
                    <div>
                        <h1 className="userName">John Doe</h1>
                    </div>
                    <div className="buttonsAccount">
                        <button className="button5" style={{backgroundColor:"#42cc8c"}}>Edit</button>
                        <button className="button5" style={{backgroundColor:"#42cc8c"}}>Signout</button>
                    </div>
                </div>
            
            <hr></hr>
              <form className="displayingaddition">
                  <div>
                  <ul>
                    <li className="editContainer">
                        <div>
                            <label>
                            Change your Name: 
                            <input type='text'/>
                            </label>
                        </div>
                    </li>
                    <li className="editContainer">
                        <div>
                            <label>
                                Change your email:
                            <input type='email'/>
                            </label>
                        </div>
                    </li>
                    </ul>
                    </div>
                    <div>
                    <ul>
                    <li className="editContainer">
                        <div>
                            <label>
                            Change your password:
                            <input type='password'/>
                            </label>
                        </div>
                    </li>
                </ul>
                </div>
              </form>
            </div>
        </div>
        </div>

  )
}

export default EditProfile;
