const { createContext, useState, useEffect, useContext } = require("react");
import { DefaultTheme, DarkTheme } from "../themes/theme";

const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)
    const [currentTheme, setCurrentTheme] = useState(DefaultTheme)

    useEffect(() => {
        darkMode ? setCurrentTheme(DarkTheme) : setCurrentTheme(DefaultTheme)
    }, [darkMode])

    const changeTheme = (theme) => {
        switch (theme) {
            case 'default':
                setCurrentTheme(DefaultTheme)
            case 'dark':
                setCurrentTheme(DarkTheme)
        }
    }

    const toggleTheme = () => { setDarkMode(!darkMode) }

    const themeProviderData = {
        darkMode,
        currentTheme,
        changeTheme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={themeProviderData}>
            {children}
        </ThemeContext.Provider>
    )
}