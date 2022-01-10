import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Used from './pages/Used/Used';
import Trade from './pages/Trade/Trade';
import Navbar from './Components/Navbar/Navbar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import AddItem from './pages/AddItem/AddItem';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import UsedProductDetails from './pages/UsedProductDetails/UsedProductDetails';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import Account from './pages/Account/Account';
import EditProfile from './pages/EditProfile/EditProfile';
import auth from "./Services/AuthService"
import { set } from 'mongoose';


const App = () => {


  const [user,setUser] = useState({
    email:undefined
  })
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const result = auth.getUser();
    console.log(result)
    if(result !== undefined){
      setUser(result.email);
      setLogged(true)
    }
  }, [setLogged])

  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path='/' exact>
             <Home/> 
          </Route>
          <Route path='/shop' exact>
            <Shop/>
          </Route>
          <Route path='/used' exact>
            <Used/>
          </Route>
          <Route path='/trade' exact>
            <Trade/>
          </Route>
          <Route path='/contact' exact>
            <Contact/>
          </Route>
          <Route path='/signup' exact>
            <Signup/>
          </Route>
          <Route path='/login' exact>
            <Login setLoginUser={setUser}/>
          </Route>
          <Route path='/additem' exact>
            <AddItem/>
          </Route>
          <Route path='/productdetails' exact>
            <ProductDetails/>
          </Route>
          <Route path='/used/:id' exact>
            <UsedProductDetails/>
          </Route>
          <Route path='/favorites' exact>
            {logged ? <Favorites/>: <Login />}
          </Route>
          <Route path='/cart' exact>
          {logged ? <Cart/>: <Login />}
          </Route>
          <Route path='/account' exact>
          {logged ? <Account/>: <Login />}
          </Route>
          <Route path='/editprofile' exact>
            {logged ? <EditProfile/> : <Login />}
          </Route>
          {/* <Route path="/posts/:id" component={UsedProductDetails} /> */}
          {/* redirect goes back to home page if we add /anythinggg */}
          <Redirect to="/"></Redirect> 
        </Switch>
      </main>
    </Router>
  );
}

export default App;
 