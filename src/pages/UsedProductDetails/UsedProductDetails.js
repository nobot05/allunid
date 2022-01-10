import React from "react";
import { NavLink } from "react-router-dom";
import "./usedproductdetails.css";

const UsedProductDetails = () => {
    
  return (
    <div className="usedPageback">
        <div className="usedContenu">
            <p className="titre">Used Product Details:</p>
            <div className="allinfo">
                <div>
                    <img className="produitImg" src="images/intro1.jpeg"></img>
                </div>
                <div>
                    <form>
                        <ul>
                            <li className="infoContainer">
                                <div>
                                    <label>
                                        <span className="namez">Product name: </span>Quelque chose.
                                    </label>
                                </div>
                            </li>
                            <li className="infoContainer">
                                <div>
                                    <label>
                                        <span className="namez">Product Description: </span>Quelque chose.
                                    </label>
                                </div>
                            </li>
                            <li className="infoContainer">
                                <div>
                                    <label>
                                        <span className="namez">Product Category: </span>Quelque chose.
                                    </label>
                                </div>
                            </li>
                            <li className="infoContainer">
                                <div>
                                    <label>
                                        <span className="namez">Product Price: </span>Quelque chose.
                                    </label>
                                </div>
                            </li>
                            <li className="infoContainer">
                                <div>
                                    <label>
                                        <span className="namez">Contact Seller: </span>&nbsp;
                                        <a href="mailto:nour20hk@gmail.com">nour20hk@gmail.com</a>  
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UsedProductDetails;
