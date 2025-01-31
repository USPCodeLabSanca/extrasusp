import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Institute from "../pages/Institute";
import Navbar_result from "./Navbar";
import NotFound from "../pages/NotFound";
import Footer from '../components/footer/Footer';
import Page from "../pages/Group";


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
        element: <Home />,
      },
      {
        path: "/institute/:id",  
        element: <Institute />,
      },
      {
        path: "/institute/:instituteId/page/:groupId",  
        element: <Page />,
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
