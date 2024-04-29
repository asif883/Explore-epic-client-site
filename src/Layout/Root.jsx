import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Footer from "../Pages/Footer";


const Root = () => {
    return (
       <div className=" bg-orange-50">
         <div className="max-w-7xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default Root;