import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Services from "../../Pages/Services/Services";
import Blog from "../../Pages/Blog/Blog";
import WebApplication from "../../Pages/Services/WebApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/webApp",
        element: <WebApplication />,
      },
    ],
  },
]);
