import React, { useState }  from "react";
import { NavLink } from "react-router-dom";
import "./additem.css";
import { Component } from 'react'
import Select from 'react-select'
import FormData from 'form-data'
import auth from "../../Services/AuthService";
import axios from "axios";

const options = [
    { value: '0', label: 'Books' },
    { value: '1', label: 'Stationery' },
    { value: '2', label: 'Bags' }
  ]

const AddItem =  () => {

    const [status, setStatus] = useState("Add Item");
    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        sellerEmail: "",
        image: "",
    })
    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {uname, udescription, ucategory, uprice, uemail, uimage } = e.target.elements;
    console.log(e.target.image.files[0]);
    const formData = new FormData();

    let details = {
        title: uname.value,
        description: udescription.value,
        category: ucategory.value,
        price: uprice.value,
        sellerEmail: uemail.value,
        // image: e.target.image.files[0],
    };
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("sellerEmail", form.sellerEmail);
    formData.append("image", form.image);
    let response = await axios.post("http://localhost:5000/api/posts", formData,{
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": auth.getToken()
        // ;charset=utf-8
      },
    }).then(res => {
        alert("YAY");
    }).catch(err => {
        alert("Frick")
        console.log(err);
    });
    setStatus("Add Item");
    // let result = await response.json();
    // alert("We added the item");
    };

    const handleChange = (event) => {
        setForm({
          ...form,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleFileChange = (event) => {
        setForm({
          ...form,
          [event.target.name]: event.target.files[0],
        });
      };

  return (
    <div className="addingUsed">
        <div className="adding-Container">
            <div className="addingfrm">
            <h1 className="titre">Fill your item's details!</h1>
              <form className="displayingaddition" encType="multipart/form-data" onSubmit={handleSubmit}>
                  <div>
                  <ul>
                    <li className="infoContainer">
                        <div>
                            <label>
                            Product name:{'   '} &nbsp;
                                <input name="title" type='text' id="uname" onChange={handleChange} required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                                Product Description:{'   '} &nbsp;
                                <input name="description" type='text' id="udescription" onChange={handleChange} required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>Product Category: &nbsp;
                                {/* <Select options={options} /> */}
                                <select name="category" id="ucategory" onChange={handleChange} required>
                                    <option value="books">Books</option>
                                    <option value="stationery">Stationery</option>
                                    <option value="bags">Bags</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="chemistry tools">Chemistry tools</option>
                                    <option value="biology tools">Bio tools</option>
                                    <option value="physics tools">Physics tools</option>
                                    <option value="architechture tools">Architecture tools</option>
                                </select>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                                Price in LBP:{'   '} &nbsp;
                                <input name="price" type='number' id="uprice" onChange={handleChange} required/>
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
                                <input name="sellerEmail" type='email' id="uemail" onChange={handleChange} required/>
                            </label>
                        </div>
                    </li>
                    <li className="infoContainer">
                        <div>
                            <label>
                            Add a picture that represents your item:{'   '} &nbsp; 
                                <input name="image" type='file' accept="image/x-png,image/gif,image/jpeg" id="uimage" onChange={handleFileChange} required/>
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
