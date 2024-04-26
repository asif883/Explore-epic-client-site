import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../Provide/Provider";
import './Css/nav.css'

const Nav = () => {
    const {user,logOut} =useContext(AuthProvider);

    const handleSingOut =()=>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <Link to='/'><p className="text-4xl font-bold">Ex<span className="text-[#FF9933]">plo</span>re-Ep<span className="text-[#FF9933]">ic</span></p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">

                   <NavLink className='mr-6' to='/'> <li>Home</li></NavLink>
                   <NavLink className='mr-6' to='/all-tourist-spots'> <li>All Tourists Spot</li></NavLink>
                   <NavLink className='mr-6' to='/add-tourist-spots'> <li>Add Tourists Spot</li></NavLink>
                   <NavLink className='mr-4' to='/my-list'> <li>My List</li></NavLink>
                   
                    </ul>
                </div>
                <div className="navbar-end">
                {
          user ?  <div className="dropdown dropdown-hover">
          <div  tabIndex={0} role="button" className="btn btn-ghost m-1"><img className="w-16 h-16 rounded-full" src='https://i.ibb.co/YRM9Cdz/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg' alt={user.email} /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/profile'><li className="font-semibold">Profile</li></Link>
            
           
          </ul>
         </div>
          :
           <div>
                <Link to='/register'><button className="border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Register</button></Link>  
           </div> 
         }
         {
          user ? <Link ><button onClick={handleSingOut} className="border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Sing Out</button></Link>
          :
          <Link to='/login'><button className="border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Login</button></Link>
         }
                </div>
</div>
    );
};

export default Nav;