import { useContext } from "react";
import PropTypes from 'prop-types';

import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Provide/Provider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthProvider);

    const location = useLocation();
    // console.log(location.pathname)

    if(loading){
        return <span className="loading loading-dots loading-lg mt-10"></span>
    }

    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to='/login'> </Navigate>;
}

PrivateRoute.propTypes={
    children: PropTypes.node
}


export default PrivateRoute;