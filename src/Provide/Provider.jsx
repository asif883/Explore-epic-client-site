import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../public/firebase";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthProvider = createContext(null);

const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();

const githubLoginProvider = new GithubAuthProvider()

const Provider = ({children}) => {
    const [user , setUser] = useState(null);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser (currentUser)
        }) 
        return () =>{
            unSubscribe()
        } 
      },[])
    // googleLogin
    const singINGoogle = ()=>{
        return signInWithPopup (auth, googleProvider)
     }
    //  githubLogion
    const githubLogin = ()=>{
        return signInWithPopup (auth,githubLoginProvider)
     }

    // register
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

   // Login   
    const logIN =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    // singOut

    const logOut = () =>{
        return signOut(auth)
     }
    const authInfo={
        user,
        createUser,
        logIN,
        singINGoogle,
        githubLogin,
        logOut
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};
Provider.propTypes = {
    children : PropTypes.node
}
export default Provider;