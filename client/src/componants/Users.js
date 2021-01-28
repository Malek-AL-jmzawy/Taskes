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

function Users() {
    const [Users, setUsers] = useState([])

    const getUsers = () => {
        axios.get("http://localhost:8080/user").then((response) => {
            setUsers(response.data)
        }).catch((err) => { throw err })
    }

    const usersArr = Users.map((e, i) => <div key={i} className="span_list_users">
        <span>{e.user_name} </span>
        <span> {e.email} </span>
        <span>{e.mobile} </span>
        <span>{e.location} </span>
        {/* <span> {e.communication} </span> */}
    </div>)
    useEffect(()=>getUsers(),[])

    return (
        <Router>
            <div className="App">
                <h1>All Users List</h1>
            <div className="span_contaner_users">
                    <div className="users_table">
                        <span>Name</span>
                        <span>Email</span>
                        <span>Moblie Num</span>
                        <span>Location String</span>
                        {/* <span className="lead_modal_btn" >Action</span>
                        <span className="lead_modal_btn" >Task</span> */}
                    </div>
                    {usersArr}
                </div>
            </div>
        </Router>
    );
}

export default Users;
