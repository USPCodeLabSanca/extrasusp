import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Info from "../pages/Info";
import Navbar_result from "./Navbar";
import NotFound from "../pages/NotFound";
import Footer from '../components/footer/Footer';
import ExtensionGroups from "../pages/extensiongroup";


// Layout principal com o Navbar e Footer
const MainLayout = () => (
  <div>
    <Navbar_result />
    <Outlet /> 
    <Footer />
  </div>
);

// Definindo as rotas com o layout principal
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        path: "/",  
        element: <ExtensionGroups />,
      },
      {
        path: "/info",
        element: <Info/>,
      },

     
      {
        path: "/notfound", 
        element: <NotFound />,
      },
    ],
    errorElement: (
      <div>
        <Navbar_result />
        <NotFound />  
      </div>
    ),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
