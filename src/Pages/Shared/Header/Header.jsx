import React, { useState } from "react";
import TopHeader from "./TopHeader";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { GrLanguage } from "react-icons/gr";

const Header = () => {
  const [isActive, setActive] = useState("false");
  const [isDropDownActive, setDropDownActive] = useState("false");

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleDropDown = () => {
    setDropDownActive(!isDropDownActive);
  };

  return (
    <>
      <TopHeader />

      {/* Desktop Navbar */}
      <section className="hidden md:flex justify-between  px-8 py-5 ">
        <nav className="text-3xl font-bold text-[#32cd32]">
          <Link to="home">Theif</Link>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <div>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-orange-500 text-orange-500 font-normal transition-all duration-300"
                  : "hover:text-orange-500 font-normal transition-all duration-300"
              }
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="services"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-orange-500 text-orange-500 font-normal transition-all duration-300"
                  : "hover:text-orange-500 font-normal transition-all duration-300"
              }
            >
              Services
            </NavLink>
          </div>
          <div>
            <NavLink
              to="aboutUs"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-orange-500 text-orange-500 font-normal transition-all duration-300"
                  : "hover:text-orange-500 font-normal transition-all duration-300"
              }
            >
              About Us
            </NavLink>
          </div>

          <div>
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-orange-500 text-orange-500 font-normal transition-all duration-300"
                  : "hover:text-orange-500 font-normal transition-all duration-300"
              }
            >
              Blog
            </NavLink>
          </div>
          <div>
            <NavLink
              to="contactUs"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-orange-500 text-orange-500 font-normal transition-all duration-300"
                  : "hover:text-orange-500 font-normal transition-all duration-300"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <div>
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-orange-500 text-orange-500 flex items-center gap-2 font-normal transition-all duration-300"
                  : "hover:text-orange-500 flex items-center gap-2 font-normal transition-all duration-300 "
              }
            >
              <span>
                <GrLanguage className="w-4 h-4 inline-block" />
              </span>
              <span>Blog</span>
            </NavLink>
          </div>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md">
            Free Consultation
          </button>
        </div>
      </section>

      {/* Mobile Device Navbar */}
      <section>
        <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
          <div>
            <div className="block cursor-pointer p-4 font-bold">
              <Link to="/">Thief</Link>
            </div>
          </div>

          <button
            onClick={handleToggle}
            className="mobile-menu-button p-4 focus:outline-none hover:bg-gray-300 focus:bg-gray-300"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>

        {/* large screen hidden */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:hidden ${
            isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            {/* Branding & Profile Info */}
            <div>
              <h2 className="text-3xl cursor-pointer font-semibold text-center text-gray-800 flex items-center justify-between">
                <Link onClick={handleToggle} to="/">
                  {" "}
                  Thief
                </Link>
                <XMarkIcon
                  onClick={handleToggle}
                  className="w-8 h-8 hover:bg-gray-300"
                />
              </h2>
            </div>
          </div>

          <div>
            <hr />
            <button className="hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white flex block w-full rounded-full items-center px-4 py-2 mt-5  transition-colors duration-300 transform">
              <ArrowRightOnRectangleIcon className="w-5 h-5 inline-block " />
              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
