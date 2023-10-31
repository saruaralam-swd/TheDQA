import React from "react";
import HomeAboutUs from "../Home/HomeAboutUs";
import HomeServices from "../Home/HomeServices";
import Projects from "./Projects";
import OurMission from "./OurMission";
import Motto from "./Motto";
import Slogan from "./Slogan";
import OurValues from "./OurValues";

const AboutUs = () => {
  return (
    <>
      {/* <section className="h-[300px] bg-gray-100 flex items-center justify-center">
        <h2 className="text-5xl font-semibold">About Us</h2>
      </section> */}

      <HomeAboutUs />
      <OurMission />
      <Motto />
      <Slogan />
      <OurValues />
      {/* <HomeServices /> */}
      <Projects />
    </>
  );
};

export default AboutUs;
