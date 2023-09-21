import React from "react";
import HomeAboutUs from "../Home/HomeAboutUs";
import HomeServices from "../Home/HomeServices";
import Projects from "./Projects";

const AboutUs = () => {
  return (
    <>
      <section className="h-[300px] bg-gray-100 flex items-center justify-center">
        <h2 className="text-5xl font-semibold">About Us</h2>
      </section>
      <HomeAboutUs />
      <HomeServices />
      <Projects />
    </>
  );
};

export default AboutUs;
