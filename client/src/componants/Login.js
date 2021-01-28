import React, { useState, useEffect, useRef } from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Headers from './Header';


function Login(props) {
  const [email, setEmail] = useState("")
  const [logedIn, setlogedIn] = useState(false)
  const [password, setPassword] = useState("")

  const login = () => {
    const data = {
      email: email,
      password: password,
    }
    axios.put("http://localhost:8080/user", data).then((response) => {
      if (response.data === "password incorrect" || response.data === "this email is not correct") {
        alert(response.data)
      } else {
        localStorage.setItem("token", response.data)
        localStorage.setItem("loggedIn",true)
        setlogedIn(true)
        props.history.push("/home");
        alert("Welcome !")
      }
    }).catch((err) => { throw err })
  }



  return (
    <Router>
      <div className="App">
        <div>
          <input placeholder="Email " onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={() => login()} >signin</button>
      </div>
    </Router>
  );
}

export default Login;
