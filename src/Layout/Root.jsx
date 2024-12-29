import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Footer from "../Pages/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Provide/Provider";
import Loader from "../Components/Loader";


const Root = () => {
    const [loading , setLoading] = useState(true)
    useEffect( () => {
        fetch('https://travel-server-six.vercel.app/addCountry')
        .then(res =>res.json())
        .then(data =>{
            setLoading(false)
        })
    }, [])
    const { isDarkMode } = useContext(AuthProvider)
    return (
       <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
       
         {
            loading 
            ? 
            <><Loader/></> 
            :
            <>
            <div className="max-w-7xl mx-auto">
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            </>
         }
       </div>
    );
};

export default Root;