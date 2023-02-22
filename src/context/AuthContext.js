import { createContext, useContext, useState } from "react";

// create the user context
const AuthContext = createContext();

// create a custom hook to access the user context
export const useUser = () => {
  return useContext(AuthContext);
};

// create a component that provides the user context
export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
