import { createContext, useState, useEffect } from "react";
import axios from "api/axios";

// create the user context
const AuthContext = createContext();

// create a component that provides the user context
export const AuthProvider = (props) => {
  const [auth, setAuth] = useState();
  //console.log(auth);
  useEffect(() => {
    //const jwt = document.cookie.split("=");
    //console.log("jwt: " + jwt[1]);
    async function verifyToken() {
      try {
        const response = await axios.post(
          "api/users/auth/verify",
          {},
          {
            withCredentials: true,
          }
        );
        //console.log("TokenIsValid: " + response.data.isValid);
        setAuth(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
