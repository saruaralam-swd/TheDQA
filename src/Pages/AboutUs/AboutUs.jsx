import React from "react";
import banner from "../../assets/ContactUsPage/Banner.webp";
import HomeAboutUs from "../Home/HomeAboutUs";
import HomeServices from "../Home/HomeServices";
import Projects from "./Projects";

const AboutUs = () => {
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
        <h2 className="text-5xl font-semibold text-white">About Us</h2>
      </section>
      <HomeAboutUs />
      <HomeServices />
      <Projects />
    </>
  );
};

export default AboutUs;
