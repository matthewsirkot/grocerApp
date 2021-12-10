import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home'
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Account from "./components/pages/Account";
import Cart from "./components/pages/Cart";
import Orders from "./components/pages/orders"


function app() {
  return (
      <>
        <Router>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/products' exact component={Products}/>
              <Route path='/cart' exact component={Cart}/>
            <Route path='/account' exact component={Account}/>
              <Route path='/orders' exact component={Orders}/>
          </Switch>
        </Router>
      </>
  );
}

export default app;