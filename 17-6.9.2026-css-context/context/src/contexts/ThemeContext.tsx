import {createContext} from "react";

interface ThemeContextType {
  theme: string;
}
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
});
export default ThemeContext;