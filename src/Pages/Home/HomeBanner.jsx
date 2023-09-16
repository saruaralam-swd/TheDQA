import React from "react";

const HomeBanner = () => {
  return (
    <section className="flex min-h-[500px] border-2 border-orange-900">
      <div className="w-1/2 border border-black flex items-center">
        <div>
          <h2 className="text-5xl font-semibold">
            Best Business <br /> Process OutSourcing (BPO) for Your business
          </h2>
          <button className="bg-orange-500 px-5 py-2 rounded-md">
            Get Started
          </button>
          <button className="bg-[#0EBC40] px-5 py-2 rounded-md ml-4">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-1/2 border border-black flex items-center">image</div>
    </section>
  );
};

export default HomeBanner;
