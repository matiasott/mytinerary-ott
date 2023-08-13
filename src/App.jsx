import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Componente404 from "./component/additional/Component404";
import DetailCity from "./component/main/city-detail/DetailCity";
import Cities from "./pages/cities/Cities";
import Home from "./pages/home/Home";
import LayoutMain from "./pages/Layout/LayoutMain";


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
        path: "/cities/detailcity/:name",
        element: <DetailCity/>
      },
      {
        path: '*',
        element: <Componente404/>
      }

])

function App() {

  return (

    <RouterProvider router={router} />

  );
}

export default App;