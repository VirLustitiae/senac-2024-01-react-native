import { createContext, useState } from 'react';

export const ThemeContext = createContext({});

export default function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light')

    const setDarkMode = () => {
        console.log("SET DARK MODE")
        setTheme('dark')
    }
    const setLightMode = () => {
        setTheme('light')
    }

    const switchTheme = () => {
        setTheme( theme => theme === 'dark' ? 'light' : 'dark' )
    }

    const value = {
        theme: theme,
        setDarkMode: setDarkMode,
        setLightMode: setLightMode,
        isDark: theme === 'dark'
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}