import React, {createContext, useState} from "react";

const ThemeContext = createContext();

function ThemeProvider ({children}){
    const [theme, setTheme] = useState('light')
    const toggle =()=>{
        if(theme === 'light') {
            return setTheme('dark')
        } else {
            return setTheme('light')
        }
    }

return (
    <ThemeContext.Provider value={{theme, toggle}}>
        {children}
    </ThemeContext.Provider>
)
};

export { ThemeContext, ThemeProvider};