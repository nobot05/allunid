import React from "react";
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
  return (
    <div className="addingUsed">
        <div className="adding-Container">
            <div className="addingfrm">
            <h1 className="titre">Fill your item's details!</h1>
              <form className="displayingaddition">
                  <div>
                  <ul>
                    <li className="infoContainer">
                        <div>
                            <label>
                            Product name:{'   '} &nbsp;
                                <input type='text' required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                                Product Description:{'   '} &nbsp;
                                <input type='text' required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>Product Category: &nbsp;
                                {/* <Select options={options} /> */}
                                <select required>
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
                                <input type='number' required/>
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
                                <input type='email' required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                            Add a picture that represents your item:{'   '} &nbsp; 
                                <input type='file' accept="image/x-png,image/gif,image/jpeg" required/>
                            </label>
                        </div>
                    </li>
                    <button type="submit" class="btn btn-success addItemBtn" style={{marginLeft:'200px'}}>Add Item</button>
                </ul>
                </div>
              </form>
            </div>
        </div>
        </div>
        
  )
}

export default AddItem;
