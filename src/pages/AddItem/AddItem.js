import React, { useState }  from "react";
import { NavLink } from "react-router-dom";
import "./additem.css";
import { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: '0', label: 'Books' },
    { value: '1', label: 'Stationery' },
    { value: '2', label: 'Bags' }
  ]

const AddItem = () => {

    const [status, setStatus] = useState("Add Item");
    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {uname, udescription, ucategory, uprice, uemail, uimage } = e.target.elements;
    let details = {
        uname: uname.value,
        udescription: udescription.value,
        ucategory: ucategory.value,
        uprice: uprice.value,
        uemail: uemail.value,
        uimage: uimage.value
    };
    let response = await fetch("http://localhost:5000/additem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ;charset=utf-8
      },
      body: JSON.stringify(details),
    });
    setStatus("Add Item");
    let result = await response.json();
    alert(result.status);
    };

  return (
    <div className="addingUsed">
        <div className="adding-Container">
            <div className="addingfrm">
            <h1 className="titre">Fill your item's details!</h1>
              <form className="displayingaddition" enctype="multipart/form-data" onSubmit={handleSubmit}>
                  <div>
                  <ul>
                    <li className="infoContainer">
                        <div>
                            <label>
                            Product name:{'   '} &nbsp;
                                <input type='text' id="uname" required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                                Product Description:{'   '} &nbsp;
                                <input type='text' id="udescription" required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>Product Category: &nbsp;
                                {/* <Select options={options} /> */}
                                <select id="ucategory" required>
                                    <option value="0">Books</option>
                                    <option value="1">Stationery</option>
                                    <option value="2">Bags</option>
                                    <option value="3">Electronics</option>
                                    <option value="4">Chemistry tools</option>
                                    <option value="5">Bio tools</option>
                                    <option value="6">Physics tools</option>
                                    <option value="7">Architecture tools</option>
                                </select>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                                Price in LBP:{'   '} &nbsp;
                                <input type='number' id="uprice" required/>
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
                            Enter your email:{'   '} &nbsp;
                                <input type='email' id="uemail" required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                            Add a picture that represents your item:{'   '} &nbsp; 
                                <input type='file' accept="image/x-png,image/gif,image/jpeg" id="uimage" required/>
                            </label>
                        </div>
                    </li>
                    <button type="submit" className="btn btn-success addItemBtn" style={{marginLeft:'200px'}}>{status}</button>
                </ul>
                </div>
              </form>
            </div>
        </div>
        </div>
        
  )
}

export default AddItem;
