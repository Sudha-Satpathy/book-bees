import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem("users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return(
  <AuthContext.Provider value={[authUser, setAuthUser]}>
    {children}
  </AuthContext.Provider>
  )
};
export const useAuth = () => useContext(AuthContext); 
export default AuthProvider;