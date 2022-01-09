import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = (post) => {
    console.log("From item:",post)
  return (
      <React.Fragment>
      {post ? (
    <div className="card itemPost">
    <div className="row no-gutters">
        <div className="col-auto">
            <img src={post.imageUrl} className="img-fluid itemImg" alt="image"/>
        </div>
        <div className="col">
            <div className="card-block px-2">
                <h4 className="card-title">{post.title}</h4>
                <p className="card-text">{post.description}</p>
                {/* <a href="#" class="btn btn-primary">Details</a> */}
                <NavLink to="/useddetails">
                    <button class="btn btn-primary">Details</button>
                </NavLink>
            </div>
        </div>
    </div>         
</div>
      ) : (<h1>1 sec</h1>)}
  </React.Fragment>
  )
}

export default Item
