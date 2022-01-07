import React from 'react'
import "./used.css"
import { NavLink } from 'react-router-dom';


const Used = () => {
    return (
        <div className='gradiedbg'>
            <div className='gradiedtop'> 
                <h1 className='titre'>Welcome to AllUnid's Used Section!</h1>
                <p className='soustitre'><i>Need to get ready for school and don't know where to start? No problem, we've got what you need! <br></br>You can either search directly or after choosing a category. </i></p>
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
            <div className="card itemPost">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src="images/intro1.jpeg" className="img-fluid itemImg" alt=""/>
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Description</p>
                            {/* <a href="#" class="btn btn-primary">Details</a> */}
                            <NavLink to="/useddetails">
                                <button class="btn btn-primary">Details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>         
            </div>
            <div className="card itemPost">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src="images/intro2.jpeg" className="img-fluid itemImg" alt=""/>
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h4 className="card-title">Stationary</h4>
                            <p className="card-text">Bought a long time ago and never used.</p>
                            {/* <a href="#" class="btn btn-primary">Details</a> */}
                            <NavLink to="/useddetails">
                                <button class="btn btn-primary detailsBtn">Details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>         
            </div>
            <div className="card itemPost">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src="images/intro3.jpeg" className="img-fluid itemImg" alt=""/>
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Description</p>
                            {/* <a href="#" class="btn btn-primary">Details</a> */}
                            <NavLink to="/useddetails">
                                <button class="btn btn-primary">Details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    )
}

export default Used;