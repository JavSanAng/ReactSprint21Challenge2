import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
        <>
        <h1> Welcome to the Home </h1>
        <nav>
            <ul>
                <li><Link to="/myjob">My Job</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
        </>
    );
}

export default Home ; 