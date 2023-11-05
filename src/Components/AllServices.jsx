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
      <div className="px-4 py-10">
        {services.map((service) => (
          <NavLink
            key={service._id}
            to={`/service/${service.target}`}
            className={({ isActive }) =>
              isActive
                ? "border inline-block px-3 py-2 mx-2 mb-3 rounded-md bg-[#000000] text-[#F97316]  transition-all duration-500"
                : "border inline-block px-3 py-2 mx-2 mb-3 rounded-md hover:bg-[#000000] text-white transition-all duration-500"
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
