import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    //if theme === light then going dark else going light
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return [theme, switchTheme];
};

export default useTheme;
