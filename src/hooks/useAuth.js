import { useContext } from "react";
import AuthContext from "context/AuthContext";
// create a custom hook to access the user context
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
