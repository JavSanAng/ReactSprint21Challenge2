import React from "react";
import Home from "../pages/Home";
import MyJob from "../pages/MyJob";
import Profile from "../pages/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/myjob" element={<MyJob/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        
        </Router>
    );
};

export default AppRouter;