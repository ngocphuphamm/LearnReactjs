import {useState,createContext} from 'react'
// theme Context này thuộc về hook
 const ThemeContext =createContext(); 


function Provider ({children}){
    const [theme,setTheme] = useState('dark');
    const handleClick = ()=> {setTheme(theme === 'dark' ? 'light' : 'dark');}
    
    const value = { 
        theme,
        handleClick
    }
     return (    
        <ThemeContext.Provider value = {value}>
            {children}
        </ThemeContext.Provider>
        )

}

export {ThemeContext,Provider};