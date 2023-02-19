import { createContext, useContext, useState } from "react";

// create the user context
const ThemeContext = createContext();

// create a custom hook to access the user context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// create a component that provides the user context
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState({ light: true });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
