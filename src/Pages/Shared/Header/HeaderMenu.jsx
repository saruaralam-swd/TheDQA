import React from "react";
import { NavLink } from "react-router-dom";

const HeaderMenu = ({ handleToggle }) => {
  return (
    <>
      <NavLink
        onClick={handleToggle}
        to="home"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-orange-500" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">Home</span>
      </NavLink>

      <NavLink
        onClick={handleToggle}
        to="services"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-orange-500" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">Services</span>
      </NavLink>

      <NavLink
        onClick={handleToggle}
        to="aboutUs"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-orange-500" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">About Us</span>
      </NavLink>

      <NavLink
        onClick={handleToggle}
        to="contactUs"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-orange-500" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">Contact Us</span>
      </NavLink>

      <NavLink
        onClick={handleToggle}
        to="blog"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-orange-500" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">Blog</span>
      </NavLink>
    </>
  );
};

export default HeaderMenu;
