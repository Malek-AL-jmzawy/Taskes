import React, { useState, useEffect, useRef } from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Home from './home';
import Register from './componants/register';
import Login from './componants/Login';
import Users from './componants/Users';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";

function App() {

  const [logedIn, setlogedIn] = useState(localStorage.getItem("loggedIn"))
  console.log(localStorage.getItem("loggedIn"));
 
  return (
    <Router>
      <div className="App">
        <div className="header">
          {logedIn ? (<div><span><Link className="Link" to="/home">home</Link></span>
            <span><Link className="Link" to="/Users">Users</Link></span>
            <a href="/" className="Link" onClick={() => {localStorage.setItem("loggedIn",false);localStorage.clear();}}>
              Log Out
           </a></div>) : (<div> <span><Link className="Link" to="/register">register</Link></span>
              <span><Link className="Link" to="/login">login</Link></span></div>)}
        </div>
        <Route path="/home">
          <Home />
        </Route>

      </div>
    </Router>  
  );
}

export default App;
 