import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosEyeOff,IoMdEye  } from "react-icons/io";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

import { useContext, useState } from "react";
import { AuthProvider } from "../Provide/Provider";
import Swal from "sweetalert2";




const Login = () => {

    const [showPassword, setShowPassword] =useState(false)
    const[password, setPassword] =useState('');
    const {logIN,singINGoogle,githubLogin} = useContext(AuthProvider)

    const location =useLocation()
    const navigate = useNavigate()
    console.log('login page location', location)
      
    const handleChange= (e)=>{
        setPassword(e.target.value)
    }
      
     const handleLogin = e=>{
        e.preventDefault();
        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        


        logIN(email,password)
        .then(result =>{
            console.log(result.user);

            Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Ok'
              });

            navigate(location?.state ? location.state : '/');
        })
        .catch (error =>{
            console.error( error)

            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        })

     }
     const handleGoogleSingIn = ()=>{
        singINGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
     }
    

     const handleGithubLogin = ()=>{
        githubLogin()
        .then()
        .catch()
     }
     return (
        <div>
            
            <div className="max-w-md mx-auto mt-10 shadow-xl rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl text-[#FF9933] font-bold">Login Now</h1>
                </div>
            <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered border border-orange-300" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className=" label-text text-xl font-semibold">Password</span>
                        </label>
                      
                       <input type={showPassword? "text": "password"} 
                            name='password' 
                            placeholder="password" 
                            onChange={handleChange}
                            value={password}
                            className= "input input-bordered border border-orange-300" required />
                      
                            <span  className="absolute right-3 bottom-4 text-xl" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoIosEyeOff></IoIosEyeOff> : <IoMdEye></IoMdEye>
                                }
                            </span>
                       
                        </div>
                   
                    <div className="form-control mt-6">
                    <button className="w-full border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Login</button>
                    </div>
                    
                    <label className="label">
                        <p className="label-text-alt text-lg ">New here? Please <Link to='/register' className="underline text-orange-600 font-medium">Register</Link></p>
                    </label>
            </form>
            <div className="">
                          <h1 className="text-center font-semibold">Or, Login with</h1>
                        <div className="text-center mt-6 pb-8">
                            <button onClick={handleGoogleSingIn} className="mr-3 border border-orange-300 p-1 rounded-xl">
                                <FcGoogle className="w-10 h-10" />
                            </button>
                            <button onClick={handleGithubLogin} className="mr-3 border border-orange-300 p-1 rounded-xl">
                                <FaGithub className="w-10 h-10"/>
                            </button>
                           
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;