import { createBrowserRouter, useLocation } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Services from "../../Pages/Services/Services";
import Blog from "../../Pages/Blog/Blog";
import WebApplication from "../../Pages/Services/WebApplication";
import MobileApp from "../../Pages/Services/MobileApp";
import SQA from "../../Pages/Services/SQA";
import SqaAutomation from "../../Pages/Services/SqaAutomation";
import Career from "../../Pages/Career/Career";

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
        path: "/home",
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
        path: "/career",
        element: <Career />,
      },
      {
        path: "/service/webApp",
        element: <WebApplication />,
      },
      {
        path: "/service/mobileApp",
        element: <MobileApp />,
      },
      {
        path: "/service/sqa",
        element: <SQA />,
      },
      {
        path: "/service/sqa-automation",
        element: <SqaAutomation />,
      },
    ],
  },
]);
