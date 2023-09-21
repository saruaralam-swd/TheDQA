import React from "react";
import HomeServices from "../Home/HomeServices";
import Projects from "../AboutUs/Projects";
import HomeWhoChoseUs from "../Home/HomeWhoChoseUs";

const Services = () => {
  return (
    <>
      <section className="h-[300px] bg-gray-100 flex items-center justify-center">
        <h2 className="text-5xl font-semibold">Services</h2>
      </section>

      <HomeServices />
      <Projects />
      <HomeWhoChoseUs />
    </>
  );
};

export default Services;
