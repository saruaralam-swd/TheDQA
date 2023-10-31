import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideCss/HomeServices.css";
import { Link } from "react-router-dom";
import webApplication from "../../assets/Services/monitor-mobbile.svg";
import mobileApplication from "../../assets/Services/app-development.svg";
import qualityAssurance from "../../assets/Services/Quality-Assurance.svg";

const HomeServices = () => {
  const OurServices = [
    {
      _id: 1,
      icon: webApplication,
      title: "Software Development",
      des: "Create stunning, fast, and secure web apps tailored to attract & retain your clients and generate new revenue streams with a consistent UI on all platforms",
      target: "webApp",
    },
    {
      _id: 2,
      icon: mobileApplication,
      title: "Mobile App Development",
      des: "State-of-the-art, AI-enabled, robust, and smart software solutions at your disposal where the latest technologies are leveraged for unprecedented organization growth",
      target: "mobileApp",
    },
    {
      _id: 3,
      icon: qualityAssurance,
      title: "Software Quality Assurance",
      des: "Our QA engineering team makes your product bug-free, bulletproof and performance-driven throughout both automatic and manual testing.",
      target: "sqa",
    },
    {
      _id: 4,
      icon: qualityAssurance,
      title: "Startup BPO Support",
      des: "Our QA engineering team makes your product bug-free, bulletproof and performance-driven throughout both automatic and manual testing.",
      target: "sqa",
    },
  ];

  return (
    <section className="min-h-[500px] p-5 md:p-10 py-12 bg-no-repeat bg-cover bg-left-top bg-[#121316] text-white">
      <div className="text-center">
        <h6 className="font-xs text-[#00FF9F] my-3 font-semibold">
          Our Services
        </h6>
        <h2 className="text-2xl md:text-3xl font-semibold">
          We Provide Best Business Process Outsourcing (BPO) Services
        </h2>
        <p className="text-sm text-[#8d8f98] mt-5 mb-10">
          Planning and designing your tech solution is just the beginning.{" "}
          <br className="hidden md:block" /> With our full-scale design and
          development services, we stay by your side till you reach your digital
          goals and beyond
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {OurServices.map((service) => (
          <div className="bg-[#1b1c20] hover:bg-[#202124] transition-bg duration-500 rounded-2xl p-7 hover:text-[#00FF9F] flex flex-col justify-between min-h-[280px]">
            <img
              className="w-[50px] h-[50px] mb-5"
              src={service.icon}
              alt={`${service.title} icon`}
            />
            <Link
              to={`/service/${service.target}`}
              className="text-xl font-semibold inline-block mb-5"
            >
              {service.title}
            </Link>
            <p className="text-sm text-[#8d8f98] h-[100px]">
              {service.des.length > 2000
                ? service.des.slice(0, 3000)
                : service.des}
            </p>
            <Link
              to={`/service/${service.target}`}
              className="inline-block text-sm"
            >
              View {service?.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
