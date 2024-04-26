import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { useContext } from "react";
import { AuthProvider } from "../Provide/Provider";




const Login = () => {
    const {logIN,singINGoogle,facebookSignIn,githubLogin} = useContext(AuthProvider)

    const location =useLocation()
    const navigate = useNavigate()
    console.log('login page location', location)
    
      
     const handleLogin = e=>{
        e.preventDefault();
        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        


        logIN(email,password)
        .then(result =>{
            console.log(result.user);

            alert('Successfully Login')

            navigate(location?.state ? location.state : '/');
        })
        .catch (error =>{
            console.error( error)

            alert(error.message)
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
     const handleFacebookLogin = ()=>{
        facebookSignIn()
        .then()
        .catch()
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
                    <h1 className="text-4xl text-purple-800 font-bold">Login Now</h1>
                </div>
            <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered border border-purple-600" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered border border-purple-600" required />
                   
                    </div>
                   
                    <div className="form-control mt-6">
                    <button className="border-2 border-purple-600 px-6  rounded-lg py-3 bg-purple-500 text-white  font-semibold">Login</button>
                    </div>
                    
                    <label className="label">
                        <p className="label-text-alt text-lg ">New here? Please <Link to='/register' className="underline text-purple-600 font-medium">Register</Link></p>
                    </label>
            </form>
            <div className="">
                          <h1 className="text-center font-semibold">Or, Login with</h1>
                        <div className="text-center mt-6 pb-8">
                            <button onClick={handleGoogleSingIn} className="mr-3 border border-purple-400 p-1 rounded-xl">
                                <FcGoogle className="w-10 h-10" />
                            </button>
                            <button onClick={handleGithubLogin} className="mr-3 border border-purple-400 p-1 rounded-xl">
                                <FaGithub className="w-10 h-10"/>
                            </button>
                            <button onClick={handleFacebookLogin}  className="mr-3 border border-purple-400 p-1 rounded-xl">
                               <FaFacebook className="w-10 h-10 text-blue-700"/>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;