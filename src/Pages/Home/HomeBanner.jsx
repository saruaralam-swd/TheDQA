import React from "react";
import bannerImg from "../../assets/bannerImg.webp";
import backgroundImage from "../../assets/homeBannerBg.png";

const HomeBanner = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="md:flex min-h-[300px] px-5 py-4 md:px-10 md:py-8"
      style={divStyle}
    >
      <div className="md:w-1/2 order-1 flex items-center">
        <div>
          <h2 className="text-6xl md:text-5xl font-semibold  mb-5">
            Best Business <br /> Process OutSourcing <br /> (BPO) for Your{" "}
            <br />
            Business
          </h2>
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
