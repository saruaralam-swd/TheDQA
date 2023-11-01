import React from "react";
import img from "../../assets/HomePage/HomeWhoChoseUs.png";
import "./SlideCss/HomeServices.css";
import { useLocation } from "react-router-dom";

const HomeWhoChoseUs = () => {
  const location = useLocation();

  const ServiceArray = [
    {
      _id: 1,
      title: "Startup-Focused Expertise",
      des: "Our team has a deep understanding of the challenges and opportunities startups face.",
    },
    {
      _id: 2,
      title: "Client-Centric Approach",
      des: "We prioritize your startup’s goals, leveraging our expertise to help you succeed.",
    },
    {
      _id: 3,
      title: "Innovation-Driven",
      des: "We stay at the forefront of technology trends to keep your startup competitive.",
    },
    {
      _id: 4,
      title: "Quality Assurance",
      des: "We ensure your software is reliable, secure, and high-performing",
    },
    {
      _id: 5,
      title: "Transparent Communication",
      des: "We maintain open lines of communication, keeping you informed throughout the development and SQA processes.",
    },
  ];

  return (
    <section className="min-h-[500px] bg-[#121316] p-5 md:p-10">
      <h6 className="font-xs text-[#00FF85] mb-3 font-semibold text-center">
        Why Us
      </h6>
      <h6>
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-5 text-center">
          Why Choose TheDQA for Your Startup?
        </h2>
      </h6>

      <div className="md:grid grid-cols-3 ">
        <div className="flex items-center justify-center md:block">
          <img src={img} alt="who chose us img" />
        </div>

        <div className="col-span-2">
          <div className="md:grid grid-cols-2 gap-4 pb-10">
            {ServiceArray.map((service) => (
              <div
                key={service._id}
                className="p-5 bg-[#1b1c20] text-white my-4 md:my-0"
              >
                <div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h4>
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
