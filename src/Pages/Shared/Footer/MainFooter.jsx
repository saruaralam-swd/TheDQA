import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";

const MainFooter = () => {
  // const handleNewsLetterBtn = (e) => {
  //   e.preventDefault();
  //   toast.success("Click Done!");
  // };

  return (
    <>
      <div className="grid md:grid-cols-6 gap-5">
        <div className="col-span-2 mb-10 md:mb-0">
          <h2 className="text-3xl font-semibold">Thedqa.com</h2>
          <p className="text-[15px] leading-7 my-3 md:my-5">
            We are excited to be your fellow traveler on the startup path,
            offering support, innovation, and dedication to your success.
          </p>
          <div className="flex gap-4">
            <span className="bg-gray-100 text-orange-500 hover:text-orange-700 px-2 py-1">
              <FaFacebookF className="w-4 h-4 inline-block" />
            </span>
            <span className="bg-gray-100 text-orange-500 hover:text-orange-700 px-2 py-1">
              <FaLinkedin className="w-4 h-4 inline-block" />
            </span>
            <span className="bg-gray-100 text-orange-500 hover:text-orange-700 px-2 py-1">
              <FaPinterest className="w-4 h-4 inline-block" />
            </span>
            <span className="bg-gray-100 text-orange-500 hover:text-orange-700 px-2 py-1">
              <FaInstagram className="w-4 h-4 inline-block" />
            </span>
          </div>
        </div>

        <div className="mb-10 md:mb-0">
          <h4 className="text-xl mb-3 md:mb-5 font-semibold">UseFul Links</h4>
          <nav>
            <p className="mb-2">
              <Link
                to=""
                className="hover:text-orange-500 transition-all duration-300 text-[15px]"
              >
                Home
              </Link>
            </p>
            <p className="mb-2">
              <Link
                to="aboutUs"
                className="hover:text-orange-500 transition-all duration-300 text-[15px]"
              >
                About Us
              </Link>
            </p>
            <p className="mb-2">
              <Link
                to=""
                className="hover:text-orange-500 transition-all duration-300 text-[15px]"
              >
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link
                to=""
                className="hover:text-orange-500 transition-all duration-300 text-[15px]"
              >
                Term $ condition
              </Link>
            </p>
          </nav>
        </div>

        <div className="mb-10 md:mb-0">
          <h4 className="text-xl mb-3 md:mb-5 font-semibold">Quick Links</h4>
          <nav>
            <p className="mb-2">
              <Link
                to="blog"
                className="hover:text-orange-500 transition-all duration-300 text-[15px]"
              >
                Blog
              </Link>
            </p>
            <p className="mb-2">
              <Link
                to="contactUs"
                className="hover:text-orange-500 transition-all duration-300 text-[15px]"
              >
                Contact Us
              </Link>
            </p>
            <p className="mb-2">
              <Link
                to="services"
                className="hover:text-orange-500 transition-all duration-300 text-[15px]"
              >
                Services
              </Link>
            </p>
          </nav>
        </div>

        <div className="col-span-2">
          {/* <h4 className="text-xl mb-3 md:mb-5 font-semibold">Newsletter</h4>
          <p className="text-[15px] leading-7 my-3 md:my-5">
            Stay connected for a world of insights, inspiration, and success.
            Subscribe now and be part of our thriving community
          </p>
          <form onSubmit={handleNewsLetterBtn} className="flex">
            <input
              type="email"
              className="w-full bg-[#0E1125] text-[#4D5E70] px-4 py-3 border border-[#F97316] focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Enter Your Gmail"
              name=""
              id=""
            />
            <button className="px-4 py-2 bg-orange-500">
              <IoIosSend className="w-5 h-5" />
            </button>
          </form> */}
          {""}
        </div>
      </div>
      <hr className="w-full mt-3" />
      <p className="text-center mt-4">
        Copyright © 2023 thedqa.com - All Rights Reserved.
      </p>
    </>
  );
};

export default MainFooter;
