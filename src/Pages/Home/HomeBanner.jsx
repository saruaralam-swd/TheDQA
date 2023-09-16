import React from "react";

const HomeBanner = () => {
  return (
    <section className="md:flex min-h-[500px] border-2 border-orange-900">
      <div className="md:w-1/2 order-1 border border-black flex items-center">
        <div>
          <h2 className="text-5xl font-semibold leading-snug">
            Best Business <br /> Process OutSourcing <br /> (BPO) for Your{" "}
            <br />
            business
          </h2>
          <button className="bg-orange-500 px-5 py-2 rounded-md">
            Get Started
          </button>
          <button className="bg-[#0EBC40] px-5 py-2 rounded-md ml-4">
            Contact Us
          </button>
        </div>
      </div>

      <div className="md:w-1/2 order-2 border border-black flex items-center">
        image coming soon
      </div>
    </section>
  );
};

export default HomeBanner;
