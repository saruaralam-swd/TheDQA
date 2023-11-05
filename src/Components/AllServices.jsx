import React from "react";
import { Link, NavLink } from "react-router-dom";
import webImage from "../assets/Services/web/WebApplications.svg";
import mobileImage from "../assets/Services/web/AppDevelopment.svg";
import qualityAssureImage from "../assets/Services/web/QualityAssurance.svg";
import sqaAutomationImage from "../assets/Services/web/sqaAutomation.svg";

const AllServices = () => {
  const services = [
    {
      _id: 1,
      text: "Web Application",
      target: "webApp",
      img: webImage,
    },
    {
      _id: 2,
      text: " Mobile App",
      target: "mobileApp",
      img: mobileImage,
    },
    {
      _id: 3,
      text: " Software Quality Assure",
      target: "sqa",
      img: qualityAssureImage,
    },
    {
      _id: 4,
      text: " Sqa-Automation",
      target: "sqa-automation",
      img: sqaAutomationImage,
    },
  ];

  return (
    <div>
      <div className="py-5">
        {services.map((service) => (
          <NavLink
            key={service._id}
            to={`/service/${service.target}`}
            className={({ isActive }) =>
              isActive
                ? "hover:text-[#01EF9A] border inline-block p-2 mx-2 rounded-md bg-[#000000] text-white transition-all duration-700"
                : "hover:text-[#01EF9A] border inline-block p-2 mx-2 rounded-md bg-[#000000] text-white transition-all duration-700"
            }
          >
            {service.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
