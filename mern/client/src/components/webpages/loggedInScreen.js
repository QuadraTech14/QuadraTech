import '../webpages/loggedInScreen.css';
import React from 'react';
import {Link} from "react-router-dom";
import Navbar from '../navbar.js';

export default function LoggedInScreen() {
    return (
        <div>
            <Navbar />
            <div id="home">
                <h1>What would you like to do</h1>
                <Link to="/Add" > <button className="main-btn new-occ">Add New Occupant</button></Link>
                <Link to="/Occupants"> <button className="main-btn records">See Existing Occupants</button></Link>
            </div>
        </div>
    )
}