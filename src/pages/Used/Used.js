import React, { useEffect, useState } from 'react'
import "./used.css"
import { NavLink } from 'react-router-dom';
import Item from '../../Components/Item/Item';
import axios from 'axios';
import { post } from 'jquery';


const Used = () => {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/posts").then(data => {
            console.log("Data is here")
            setPosts(data.data);
            console.log("From parent:",posts)
        }).catch(err => {
            console.log(err);
        })
    },[setPosts]);

    return (
        <div className='gradiedbg'>
            <div className='gradiedtop'> 
                <h1 className='titre'>Welcome to AllUnid's Used Section!</h1>
                <p className='soustitre'><i>Need to get ready for school but can't afford new items and products? It's alright! You can check  <br></br>our used section where users upload items taht they don't need anymore. </i></p>
                <div className='btn-container'>
                    <button className="category-btn">Books</button>
                    <button className="category-btn">Stationery</button>
                    <button className="category-btn">Bags</button>
                    <button className="category-btn">Electronics</button>
                    <button className="category-btn">Chemistry tools</button>
                    <button className="category-btn">Bio tools</button>
                    <button className="category-btn">Physics tools</button>
                    <button className="category-btn">Architecture tools</button>
                </div>
                <div className='search-bar-div'>
                    <input className='search-bar-input' placeholder=" What are you looking for?"/>
                </div>
                {/* <div className='newPostContainer'>
                    <button className='postBtn'>Add a Post</button>    
                </div>  */}
                <div className="newPostContainer" style={{fontSize:"1.3em"}}>
                    <NavLink to='/additem'>
                        <button className="button5" style={{backgroundColor:"#42cc8c"}}>Add a Post</button>
                    </NavLink>
                </div>
            </div>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <Item key={post._id} post={post} />
                ))
            ) : (
                <h1>Loading data</h1>
            )}
        </div>
    )
}

export default Used;