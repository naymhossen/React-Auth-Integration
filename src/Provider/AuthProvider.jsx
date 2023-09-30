import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  }

  // Observ auth state change
  useEffect(() => {
    const unSubCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
      console.log("object user", currentUser);
    });
    return () => {
      unSubCribe();
    };
  });

  const authInfo = { user, createUser, signIn, logOut, loding, signInWithGoogle };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
