import React from 'react';
import {useState} from 'react';
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


const App = () => {

  const [user,setLoginUser] = useState({

  })

  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path='/' exact>
          {/* {
      user && user._id ? <Home/>:<Login/>
    } */}
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
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path='/additem' exact>
            <AddItem/>
          </Route>
          <Route path='/productdetails' exact>
            <ProductDetails/>
          </Route>
          <Route path='/useddetails' exact>
            <UsedProductDetails/>
          </Route>
          <Route path='/favorites' exact>
            <Favorites/>
          </Route>
          <Route path='/cart' exact>
            <Cart/>
          </Route>
          <Route path='/account' exact>
            <Account/>
          </Route>
          <Route path='/editprofile' exact>
            <EditProfile/>
          </Route>
          {/* redirect goes back to home page if we add /anythinggg */}
          <Redirect to="/"></Redirect> 
        </Switch>
      </main>
    </Router>
  );
}

export default App;
 