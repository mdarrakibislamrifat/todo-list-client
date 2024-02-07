import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";


export const AuthContext=createContext();
const auth = getAuth(app);



// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

const [loading,setLoading]=useState(true);
const [user,setUser]=useState();


const createUser=(email,password)=>{
    setLoading(true);
 return createUserWithEmailAndPassword(auth,email,password)
}

const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      
    });
    return () => {
      unsubscribe();
    };
  }, []);


    const authInfo={
       user,loading,createUser,googleSignIn,logOut,signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;