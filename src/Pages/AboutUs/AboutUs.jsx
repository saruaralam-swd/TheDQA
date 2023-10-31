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
      <HomeAboutUs />
      <OurMission />
      <Motto />
      <Slogan />
      <OurValues />
      <HomeServices />
      <Projects />
    </>
  );
};

export default AboutUs;
