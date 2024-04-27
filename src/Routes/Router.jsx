import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddTouristsSpots from "../Pages/AddTouristsSpots";
import TouristsSpots from "../Pages/TouristsSpots";
import Add from "../Pages/Add";
import Details from "../Pages/Details";
import MyList from "../Pages/MyList";
import PrivateRoute from "../Pages/PrivateRoute";
import Update from "../Pages/Update";


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
          element:<PrivateRoute><AddTouristsSpots></AddTouristsSpots></PrivateRoute>
        },
        {
          path:'/tourist-spots',
          element:<TouristsSpots></TouristsSpots>,
          // loader: ()=> fetch ('http://localhost:5000/addSpots')
        
        },
        {
          path:'/add',
          element:<Add></Add>
        },
        {
          path:'details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/addSpots/${params.id}`)
        },
        {
          path:'/my-list',
          element:<PrivateRoute><MyList></MyList></PrivateRoute>
        },
        {
          path:'/updateSpot/:id',
          element:<Update></Update>,
          loader:({params})=> fetch(`http://localhost:5000/addSpots/${params.id}`)

        }
      ]
    },
  ]);

export default Router;