import React, { useState, useEffect, useRef } from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Modal from './Add';
import axios from "axios";
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
} from "react-router-dom";


function Home() {

    const [leads, setLeads] = useState([])
    const [email, setEmail] = useState("malik")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [phoneNum, setphoneNum] = useState("")
    const [locationString, setlocationString] = useState("")
    const [tasks, setTasks] = useState("")
    const [mark, setmark] = useState("Empty")
    const [isOpen, setisOpen] = useState(false)

    const modal = useRef(null)
    const modal2 = useRef(null)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var today = mm + '/' + dd + '/' + yyyy;

    const getLeads = () => {
        axios.get("http://localhost:8080/Leads").then((response) => {
            setLeads(response.data);
            console.log(response);
        }).catch((err) => { throw err })
    }

    const addLeads = () => {
        const data = {
            first_name: fName,
            last_name: lName,
            email: email,
            mobile: phoneNum,
            location_type: tasks,
            location_string: locationString,
        }
        axios.post("http://localhost:8080/Leads", data).then((response) => {
            getLeads();
        }).catch((err) => { throw err })
    }

    const updateLeads = (infoArgumnt) => {
        const data = {
            communication: mark,
        }
        axios.put(`http://localhost:8080/Leads/${infoArgumnt}`, data).then((response) => {
            getLeads();
        }).catch((err) => { throw err })
    }

    const deleteLeads = (infoArgumnt) => {
        axios.delete(`http://localhost:8080/Leads/${infoArgumnt}`).then((response) => {
            getLeads();
            alert(`lead with id ${infoArgumnt} deleted secssussfully`)
        }).catch((err) => { throw err })
    }
    const [Users, setUsers] = useState([])

    const getUsers = () => {
        axios.get("http://localhost:8080/user").then((response) => {
            setUsers(response.data)
        }).catch((err) => { throw err })
    }

    const usersArr = Users.map((e, i) =>
        <option key={i} >{e.user_name} </option>
    )
    const emailArr = Users.map((e, i) =>
        <option>{e.email} </option>
    )
    const autoFill = () => {
        const filterEmail = Users.filter((e) => e.email === email)
        console.log("filterEmail", filterEmail[0]);
        const { user_name, mobile, location, communication } = filterEmail[0]
        console.log(user_name);
        setfName(user_name)
        setlocationString(location)
        setphoneNum(mobile)
        setTasks(communication)
    }
    const leadsArr = leads.map((e, i) => <div key={i} className="span_list_contaner">
        <span>{e.first_name} {e.last_name} </span>
        <span> {e.email} </span>
        <span>{e.mobile} </span>
        <span>{e.communication} </span>
        <span> {e.location_string} </span>
        <span className="lead_modal_btn" >
            <Popup
                trigger={<button className="btn btn-outline-light">Mark Update</button>}
                on='click'
                position="left center"
            >
                <div style={{ boxSizing: "content-box", height: "110px" }}>
                    <input style={{ height: "80px", width: "200px" }} placeholder="Set Mark" onChange={(event) => setmark(event.target.value)} />
                    <button onClick={() => { updateLeads(e.id) }}>save</button>
                </div>
            </Popup>
            <Popup
                trigger={<button className="btn btn-outline-light">Delete</button>}
                position="left center"
            >    are you sure ?
                <div style={{ height: "100px", textAlign: "center" }}>
                    <button style={{ marginTop: "40px" }} className="delete_lead_modal_btn" onClick={() => deleteLeads(e.id)}>contiue</button>
                </div>
            </Popup>
        </span>
    </div>)
    useEffect(() => {
        getLeads();
        getUsers();
    }, [])
    return (
        <Router>
            <div className="App">
                <h1>Tasks List</h1>
                <div className="add_lead_modal_btn">
                    <button onClick={() => modal.current.open()} >Add lead</button>
                </div>
                <div className="span_contaner">
                    <div className="leads_table">
                        <span>Name</span>
                        <span>Email</span>
                        <span>Moblie Num</span>
                        <span>Tasks</span>
                        <span>Location String</span>
                        <span className="lead_modal_btn" >Action</span>
                    </div>
                    {leadsArr}
                </div>
                <div>
                    <Modal ref={modal}>
                        <div className="add_lead_conrainer">
                            <button role="button" className="modal-close1" aria-label="close" onClick={() => modal.current.close()}>
                                x
                             </button>
                            <div>Add Lead</div>
                            <div className="add_lead_form" >
                                <select value={fName} placeholder="first name" onChange={(e) => setfName(e.target.value)}>
                                    {usersArr}
                                </select>
                                <select placeholder="email" onChange={(e) => { setEmail(e.target.value); autoFill() }}>
                                    {emailArr}
                                </select>
                                <input value={phoneNum} placeholder="phone number" onChange={(e) => setphoneNum(e.target.value)} />
                                <input placeholder="tasks" value={tasks} onChange={(e) => setTasks(e.target.value)} />
                                <input value={locationString} placeholder="location " onChange={(e) => setlocationString(e.target.value)} />

                            </div>
                            <div>
                                <button onClick={() => modal.current.close()}>Close</button>
                                <button onClick={() => { addLeads() }}>Save</button>
                            </div>
                        </div>
                    </Modal>

                </div>
            </div>
        </Router>
    );
}

export default Home;
