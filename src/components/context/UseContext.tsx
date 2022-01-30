import { createContext} from 'react';
import { theme } from './theme';

type ThemeContextProp = {
    children:React.ReactNode
}

export const ThemeContext = createContext(theme)


export const ThemeContextProvider = ({children}:ThemeContextProp) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}