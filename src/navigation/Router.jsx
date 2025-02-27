import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from '../components/footer/Footer';
import ExtensionGroups from "../pages/extensiongroup";
import Info from "../pages/Info";
import NotFound from "../pages/NotFound";
import NavbarResult from "./Navbar";


// Layout principal com o Navbar e Footer
const MainLayout = () => (
  <div>
    <NavbarResult />
    <Outlet /> 
    <Footer />
  </div>
);

// Definindo as rotas com o layout principal
const router = createHashRouter([
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
        <NavbarResult />
        <NotFound />  
      </div>
    ),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
