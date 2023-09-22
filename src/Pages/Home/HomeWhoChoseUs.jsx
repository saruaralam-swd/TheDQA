import React from "react";
import img from "../../assets/HomePage/HomeWhoChoseUs.png";
import talkIcon from "../../assets/HomePage/customer-service.png";
import DocumentIcon from "../../assets/HomePage/document.png";
import ClockIcon from "../../assets/HomePage/clock.png";
import "./SlideCss/HomeServices.css";
import { useLocation } from "react-router-dom";

const HomeWhoChoseUs = () => {
  const location = useLocation();

  const slides = [
    {
      _id: 1,
      title: "Top Customer Services",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat.",
      icon: talkIcon,
    },
    {
      _id: 2,
      title: "Highly Personalized",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat.",
      icon: DocumentIcon,
    },
    {
      _id: 3,
      title: "Passionate Talent",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat.",
      icon: ClockIcon,
    },
    {
      _id: 4,
      title: "Quick Response Team",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat.",
      icon: ClockIcon,
    },
  ];

  return (
    <section
      className={
        location.pathname === "/services"
          ? "min-h-[500px] mt-12 mb-32 border p-5 md:p-10"
          : "min-h-[500px] my-12 border p-5 md:p-10"
      }
    >
      <h6 className="font-xs text-green-500 mb-3 font-semibold text-center">
        Who ChoseUs
      </h6>
      <h6>
        <h2 className="text-3xl font-semibold mb-5 text-center">
          Why You will Give Us Priority
        </h2>
      </h6>

      <div className="md:grid grid-cols-3 ">
        <div className="flex items-center justify-center md:block">
          <img src={img} alt="who chose us img" />
        </div>

        <div className="col-span-2">
          <div className="md:grid grid-cols-2 gap-4">
            {slides.map((slide) => (
              <div key={slide._id} className="p-5 bg-gray-100 my-4 md:my-0">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-xl font-semibold">{slide.title}</h4>
                    <img className="" src={slide.icon} alt="" />
                  </div>
                  <p className="text-sm">{slide.des}</p>
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
