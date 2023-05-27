import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
const getInitialState = () => {
  const initState = localStorage.getItem("authData");
  return initState ? JSON.parse(initState) : "";
};
const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState();
  useEffect(() => {
    setAuth(getInitialState);
  }, []);
  return <AuthContext.Provider value={(auth, setAuth)}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
