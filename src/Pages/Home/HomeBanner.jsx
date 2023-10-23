import React from "react";
import bannerImg from "../../assets/HomePage/HomeBanner.png";

const HomeBanner = () => {
  return (
    <section className="md:flex min-h-[500px] px-5 py-4 md:px-10 md:py-8 bg-[#F9F7F7]">
      <div className="md:w-1/2 order-1 flex items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold mb-5 space-y-3">
            <span className="inline-block">Best Business</span> <br />
            <span className="inline-block">Process Outsourcing </span> <br />
            <span className="inline-block">(BPO) For Your </span> <br />
            <span className="inline-block">Business</span>
          </h1>
          <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md">
            Get Started
          </button>
          <button className="bg-[#0EBC40] text-white font-semibold px-5 py-2 rounded-md ml-4">
            Contact Us
          </button>
        </div>
      </div>

      <div className="md:w-1/2 order-2 flex items-center">
        <img src={bannerImg} alt="" />
      </div>
    </section>
  );
};

export default HomeBanner;
