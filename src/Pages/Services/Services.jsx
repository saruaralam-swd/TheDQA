import React from "react";
import banner from "../../assets/ContactUsPage/Banner.webp";
import HomeServices from "../Home/HomeServices";
import Projects from "../AboutUs/Projects";
import HomeWhoChoseUs from "../Home/HomeWhoChoseUs";

const Services = () => {
  const bg = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section
        className="h-[300px] flex items-center justify-center"
        style={bg}
      >
        <h2 className="text-5xl font-semibold text-white">Services</h2>
      </section>

      <HomeServices />
      <Projects />
      <HomeWhoChoseUs />
    </>
  );
};

export default Services;
