import React from 'react';
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



const App = () => {
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
          {/* redirect goes back to home page if we add /anythinggg */}
          <Redirect to="/"></Redirect> 
        </Switch>
      </main>
    </Router>
  );
}

export default App;
 