import React from "react";
import { UserProvider } from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export default Providers;
