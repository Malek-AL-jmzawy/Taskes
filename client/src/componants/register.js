import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import "reactjs-popup/dist/index.css";
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
function Register() {
    const [user_pic,setuser_pic]=useState("")
    const [userName,setfname]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [location,setLocation]=useState("")
    const [password,setPassword]=useState("")
    const [role_id,setRole_id]=useState("1")

    const newUser = () => {
        const data = {
            user_pic:user_pic,
            user_name: userName,
            email: email,
            mobile: mobile,
            password: password,
            role_id: role_id,
            location:location 
        }
        axios.post("http://localhost:8080/user", data).then((response) => {
            alert(response.data)
        }).catch((err) => { throw err })
    }
    
  return (
    <Router>
      <div className="register">
        <h1>Register</h1> 
      <div className="register_inputs">
        <div> 
      <input  placeholder="user pic URL" onChange={(e)=>setuser_pic(e.target.value)} />
      </div>
      <div>
      <input  placeholder="user name "onChange={(e)=>setfname(e.target.value)} />
      </div> 
      <div>
      <input placeholder="Email " onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div>
      <input  placeholder="Mobile "onChange={(e)=>setMobile(e.target.value)} />
      </div>
      {/* <input onChange={(e)=>setLocation(e.target.value)} /> */}
      <div>
      <input  placeholder="Password " onChange={(e)=>setPassword(e.target.value)} />
      </div>
      {/* <input onChange={(e)=>setRole_id(e.target.value)} /> */}
      <select onChange={(e)=>setLocation(e.target.value)}>
      <option value="zarqa" >zarqa</option>
      <option value="Amman" >Amman</option>
      <option value="irbid" >irbid</option>
      </select>
      <button onClick={()=>newUser()} >signup </button>
      </div>
 
       </div>
    </Router>
  );
}

export default Register;
