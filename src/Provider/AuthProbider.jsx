import React, { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProbider = ({ children }) => {
  const createUser = (email, password) => {return createUserWithEmailAndPassword(auth, email, password)};

  const authProvider = {
    name: "ariful@gmail.com",
    createUser
  };
  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};

export default AuthProbider;
