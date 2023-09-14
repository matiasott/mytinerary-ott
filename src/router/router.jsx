import { createBrowserRouter } from "react-router-dom";
import Componente404 from "../component/additional/Component404";
import DetailCity from "../component/main/city-detail/DetailCity";
import Cities from "../pages/cities/Cities";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/cities",
      element: <Cities />
    },
    {
      path: "/cities/detailcity/:id",
      element: <DetailCity/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: '*',
      element: <Componente404/>
    }

])

export default router;