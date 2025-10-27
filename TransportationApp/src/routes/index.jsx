import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import OurServices from "../pages/OurServices";
import BookShipment from "../pages/BookShipment";

export const router = createBrowserRouter([{
  element:<MainLayout/>,
  children:[{
    path:"/",
    element:<Home/>
  },{
    path:"/our-services",
    element:<OurServices/>
  },{
    path:"/booking",
    element:<BookShipment/>
  }]
}])