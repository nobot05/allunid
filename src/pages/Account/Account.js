import React from "react";
import { NavLink } from "react-router-dom";
import "./account.css";
import {Card, Button} from 'react-bootstrap'
import auth from "../../Services/AuthService";


const Account = () => {

    const logoutUser = () => {
        auth.removeToken();
        window.location.replace("/");
      };

  return (
<div className="addingUsed">
        <div className="adding-Container">
            <div className="profilefrm">
                <div className="topp">
                    <div>
                        <h1 className="userName">John Doe</h1>
                    </div>
                    <div className="buttonsAccount">
                        <NavLink to="/editprofile">
                            <button className="button5" style={{backgroundColor:"#42cc8c"}}>Edit</button>
                        </NavLink>
                        <button className="button5" style={{backgroundColor:"#42cc8c"}} onClick={logoutUser}>Signout</button>
                    </div>
                </div>
            
            <hr></hr>
              <form className="displayingaddition">
                  <div>
                  <ul>
                    <li className="infoContainer">
                        <div>
                            <label>
                            Username: John Doe
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                                Your email: johndoe@gmail.com
                            </label>
                        </div>
                    </li>
                    
                    </ul>
                    </div>
                    <div>
                    <ul>
                    <li className="infoContainer">
                        <div>
                            <label>
                            Your Password: *******
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

export default Account;
