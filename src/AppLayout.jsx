import FoodApp from "./FoodApp"
import Header from "./Header"
import Error from "./Error";
import './Body.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import RestaurantMenu from "./RestaurantMenu";

function AppLayout(){
    return (
        <div>
             <Header/>
             <Outlet/> 
        </div>
    )
    //the OUTLET component as filled with children routes
} 

const appRouter =createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children:[
         {
    path:"/",
    element:<FoodApp/>
     },
    {
    path:"/about",
    element:<About/>
    }, 
    {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
    }
    ],
    errorElement: <Error/>
}
])

export const routerProvider = <RouterProvider router = {appRouter}/>

export default AppLayout