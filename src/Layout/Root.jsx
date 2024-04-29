import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Footer from "../Pages/Footer";
import { useContext } from "react";
import { AuthProvider } from "../Provide/Provider";


const Root = () => {
    const { isDarkMode } = useContext(AuthProvider)
    return (
       <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
       
         <div className="max-w-7xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default Root;