import React from "react";
import img from "../../assets/HomePage/HomeWhoChoseUs.png";
import talkIcon from "../../assets/HomePage/customer-service.png";
import DocumentIcon from "../../assets/HomePage/document.png";
import ClockIcon from "../../assets/HomePage/clock.png";
import "./SlideCss/HomeServices.css";
import { useLocation } from "react-router-dom";

const HomeWhoChoseUs = () => {
  const location = useLocation();

  const ServiceArray = [
    {
      _id: 1,
      title: "Startup-Focused Expertise",
      des: "Our team has a deep understanding of the challenges and opportunities startups face.",
      icon: talkIcon,
    },
    {
      _id: 2,
      title: "Client-Centric Approach",
      des: "We prioritize your startup’s goals, leveraging our expertise to help you succeed.",
      icon: DocumentIcon,
    },
    {
      _id: 3,
      title: "Innovation-Driven",
      des: "We stay at the forefront of technology trends to keep your startup competitive.",
      icon: ClockIcon,
    },
    {
      _id: 4,
      title: "Quality Assurance",
      des: "We ensure your software is reliable, secure, and high-performing",
      icon: ClockIcon,
    },
    {
      _id: 5,
      title: "Transparent Communication",
      des: "We maintain open lines of communication, keeping you informed throughout the development and SQA processes.",
      icon: ClockIcon,
    },
  ];

  return (
    <section
      className={
        location.pathname === "/services"
          ? "min-h-[500px] mt-12 mb-32  p-5 md:p-10"
          : "min-h-[500px] my-12  p-5 md:p-10"
      }
    >
      <h6 className="font-xs text-green-500 mb-3 font-semibold text-center">
        Why Us
      </h6>
      <h6>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-center">
          Why Choose TheDQA for Your Startup?
        </h2>
      </h6>

      <div className="md:grid grid-cols-3 ">
        <div className="flex items-center justify-center md:block">
          <img src={img} alt="who chose us img" />
        </div>

        <div className="col-span-2">
          <div
            className={
              location.pathname === "/services"
                ? "md:grid grid-cols-2 gap-4 mb-32"
                : "md:grid grid-cols-2 gap-4"
            }
          >
            {ServiceArray.map((service) => (
              <div key={service._id} className="p-5 bg-gray-100 my-4 md:my-0">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                    <img className="" src={service.icon} alt="" />
                  </div>
                  <p className="text-sm">{service.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhoChoseUs;
