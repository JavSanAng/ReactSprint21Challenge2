import React from "react";
import { Link } from "react-router-dom";

function Profile(){
    return(
        <>
        <h1>Welcome to my profile!</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aspernatur praesentium sed, dignissimos neque in ut repellendus fugit, velit adipisci cum possimus esse quidem beatae illo alias dolorem? Reiciendis, mollitia!</p>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/myjob">My Job</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Profile; 