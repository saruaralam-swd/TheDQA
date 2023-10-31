import React, { useState } from "react";
import TopHeader from "./TopHeader";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import HeaderMenu from "./HeaderMenu";
import darkModeLogo from "../../../assets/Logo/DarkModeLogo.jpg";
import "../../../Components/drop";

const Header = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="hidden md:block">
        <TopHeader />
      </div>
      <hr />

      {/* Desktop Navbar */}
      <section className="hidden md:flex justify-between  px-8 py-5 bg-[#121316] text-white">
        <nav className="w-[100px]">
          <Link to="">
            <img className="w-full" src={darkModeLogo} alt="dark mode logo" />
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <div>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "hover:text-orange-500 text-orange-500 font-normal transition-all duration-300"
                  : "hover:text-orange-500 text- font-normal transition-all duration-300"
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
              {/* <span>
                <GrLanguage className="w-4 h-4 inline-block" />
              </span>
              <span>Blog</span> */}
            </NavLink>
          </div>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md">
            Free Consultation
          </button>
        </div>
      </section>

      {/* sidebar Navbar */}
      <section>
        <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
          <div>
            <div className="block cursor-pointer p-4 font-bold">
              <Link to="/" className="text-green-500 font-semibold text-2xl">
                Thief
              </Link>
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
          className={`z-10 md:fixed overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:hidden ${
            isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div className="flex items-center justify-between">
              <Link
                onClick={handleToggle}
                to="/"
                className="text-3xl cursor-pointer font-semibold text-center text-gray-800 "
              >
                {" "}
                Thief
              </Link>

              <XMarkIcon
                onClick={handleToggle}
                className="w-8 h-8 hover:bg-gray-300 cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <HeaderMenu handleToggle={handleToggle} />
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
