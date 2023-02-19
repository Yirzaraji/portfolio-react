import { createContext, useContext, useState } from "react";

// create the user context
const UserContext = createContext();

// create a custom hook to access the user context
export const useUser = () => {
  return useContext(UserContext);
};

// create a component that provides the user context
export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
