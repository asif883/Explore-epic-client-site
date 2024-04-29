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
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      return setIsDarkMode(prevMode => !prevMode);
    };




    const [user , setUser] = useState(null);
    const [loading , setLoading] =useState(true)




    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser (currentUser)
            setLoading(false)
        }) 
        return () =>{
            unSubscribe()
        } 
      },[])
    // googleLogin
    const singINGoogle = ()=>{
        setLoading(true)
        return signInWithPopup (auth, googleProvider)
     }
    //  githubLogion
    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup (auth,githubLoginProvider)
     }

    // register
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
       
    }

   // Login   
    const logIN =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };

    // singOut

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
     }
    const authInfo={
        user,
        createUser,
        logIN,
        singINGoogle,
        githubLogin,
        logOut,
        loading,
        isDarkMode, toggleDarkMode
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