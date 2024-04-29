import { useContext,  } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../Provide/Provider";
import './Css/nav.css'
import { Tooltip } from 'react-tooltip'

const Nav = () => {
    const {user,logOut,toggleDarkMode} =useContext(AuthProvider);
    

    const handleDarkMode=()=>{
        toggleDarkMode()
    }


    const handleSingOut =()=>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   <NavLink className='mr-6' to='/'> <li>Home</li></NavLink>
                   <NavLink className='mr-6' to='/all-tourist-spots'> <li>All Tourists Spot</li></NavLink>
                   <NavLink className='mr-6' to='/add-tourist-spots'> <li>Add Tourists Spot</li></NavLink>
                   <NavLink className='mr-4' to='/my-list'> <li>My List</li></NavLink>
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
                    user ? <div>
                              <a  
                               id="clickable"
                             > 
                             
                              <img className="w-16 h-16 rounded-full" src={user.
                            photoURL} alt={user.email} /></a>
                            <Tooltip  className="rounded-xl" anchorSelect="#clickable" clickable place="left">
                            <button>
                                <p className="text-lg font-medium">Name:{user.displayName}</p>
                                 <Link ><button onClick={handleSingOut} className="border-2 mr-4  px-2  rounded-lg bg-white text-black  font-semibold">Sing Out</button></Link>
                            </button>
                            </Tooltip>
                        </div>
                     
                  :
           <div>
                <Link to='/register'><button className="border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Register</button></Link>  
                <Link to='/login'><button className="border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Login</button></Link>
           </div> 
         }
        
        <label className="flex cursor-pointer gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
        <input onClick={handleDarkMode} type="checkbox" value="synthwave" className="toggle theme-controller"/>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
        
         </div>
               
             
</div>
    );
};

export default Nav;