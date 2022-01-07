import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './shop.css'

const Shop = () => {
    return (
        <div className='gradiedbg'>
            <div className='gradiedtop'> 
                <h1 className='titre'>Welcome to AllUnid's shop!</h1>
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
            </div>
            {/* <div className="wave"></div> */}
            {/* <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="images/intro1.jpeg" alt="Card thingy cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-primary">fav</a>
                    <button>Details</button>
                    <button>Fav</button>
                </div>
            </div> */}
            <div className='container'>
            <div class="row">
                <div class="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/intro1.jpeg" style={{ width: '18rem' }, {height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Card.Text>
                          Price: 20$
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <NavLink to='/productdetails'>
                                <Button variant="primary">Product Details</Button>
                            </NavLink>
                            <Button variant="primary" style={{marginLeft: 'auto'}}><i class="fas fa-heart"></i></Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div class="col-sm">
                    <Card style={{ width: '18rem' }, {height:"385px"}}>
                    <Card.Img variant="top" src="images/intro2.jpeg" style={{ width: '18rem' }, {height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Kortasiye</Card.Title>
                        <Card.Text>
                          Contains pens, pencils, a ruler, a sharpener and an eraser.
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <Button variant="primary">Product Details</Button>
                            <Button variant="primary" style={{marginLefy: 'auto'}}>fav</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div class="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/intro3.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <Button variant="primary">Product Details</Button>
                            <Button variant="info" style={{marginLefy: 'auto'}}>fav</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div class="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/intro1.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <Button variant="primary">Product Details</Button>
                            <Button variant="primary" style={{marginLefy: 'auto'}}>fav</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/intro1.jpeg" style={{ width: '18rem' }, {height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Card.Text>
                          Price: 20$
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <NavLink to='/productdetails'>
                                <Button variant="primary">Product Details</Button>
                            </NavLink>
                            <Button variant="primary" style={{marginLeft: 'auto'}}><i class="fas fa-heart"></i></Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div class="col-sm">
                    <Card style={{ width: '18rem' }, {height:"385px"}}>
                    <Card.Img variant="top" src="images/intro2.jpeg" style={{ width: '18rem' }, {height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Kortasiye</Card.Title>
                        <Card.Text>
                          Contains pens, pencils, a ruler, a sharpener and an eraser.
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <Button variant="primary">Product Details</Button>
                            <Button variant="primary" style={{marginLefy: 'auto'}}>fav</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div class="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/intro3.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <Button variant="primary">Product Details</Button>
                            <Button variant="info" style={{marginLefy: 'auto'}}>fav</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div class="col-sm">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/intro1.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <Button variant="primary">Product Details</Button>
                            <Button variant="primary" style={{marginLefy: 'auto'}}>fav</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Shop;