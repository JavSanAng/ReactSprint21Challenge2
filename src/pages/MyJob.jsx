import React from "react";
import { Link } from "react-router-dom";

function MyJob(){
    return(
        <>
        <h1>Welcome to my Job!</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default MyJob;