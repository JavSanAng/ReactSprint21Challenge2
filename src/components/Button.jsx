import React, { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

function Component(){
    const {theme, toggle} = useContext(ThemeContext);

    return(
        <>
        <button onClick={toggle}>Theme {theme}</button>
        </>
    );
};

export default Component;