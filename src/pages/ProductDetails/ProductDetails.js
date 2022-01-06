import React from "react";
import { NavLink } from "react-router-dom";
import "./productdetails.css";

const ProductDetails = () => {
  return (
    // <div className="container">
    //     <h1 className="text-center" style={{paddingTop: "30%"}}>
    //         Product Details
    //     </h1>
    // </div>
    <div className="usedPageback">
        <div className="usedContenu">
            <p className="titre">Product Details:</p>
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
                                        <span className="namez">Quantity that you wish to order: </span>&nbsp;
                                    <input type='number'/>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </form>
                    <button type="button" class="btn btn-success" style={{marginLeft:'200px'}}>Add to Cart <i className="far fa-shopping-cart"></i></button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductDetails;
