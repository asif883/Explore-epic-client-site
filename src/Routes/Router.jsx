import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddTouristsSpots from "../Pages/AddTouristsSpots";
import TouristsSpots from "../Pages/TouristsSpots";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
        }
        ,
        {
          path:'/register',
          element:<Register></Register>
        }
        ,
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/add-tourist-spots',
          element:<AddTouristsSpots></AddTouristsSpots>
        },
        {
          path:'/tourist-spots',
          element:<TouristsSpots></TouristsSpots>,
          // loader: ()=> fetch ('http://localhost:5000/addSpots')
        
        }
      ]
    },
  ]);

export default Router;