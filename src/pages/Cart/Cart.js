import React from "react";
import { NavLink } from "react-router-dom";
import "./cart.css";
import {Card, Button} from 'react-bootstrap'


const Cart = () => {
  return (
    // <div className="container">
    //     <h1 className="text-center" style={{paddingTop: "30%"}}>
    //         Favs
    //     </h1>
    // </div>
    <div className="favBg">
        {/* <hr></hr> */}
        <div style={{display:"flex"}}>
            <p className="favTitre">Your Cart!</p>
            <button className="checkoutBtn" style={{backgroundColor:"#42cc8c"}}>Proceed to Checkout!</button>
        </div>
        <hr></hr>
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

export default Cart;
