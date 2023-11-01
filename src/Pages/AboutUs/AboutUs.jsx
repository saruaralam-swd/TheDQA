import React from "react";
import HomeAboutUs from "../Home/HomeAboutUs";
import HomeServices from "../Home/HomeServices";
import Projects from "./Projects";
import OurValues from "./OurValues";

const AboutUs = () => {
  return (
    <>
      <HomeAboutUs />

      <div className="bg-[#121316] text-white">
        <section className="p-5">
          <div className="md:flex">
            <div className="md:w-2/6 border-b-2 border-b-green-600 md:border-b-0  md:border-r-2 md:border-r-green-600 md:flex items-center justify-center">
              <h1 className="text-2xl md:text-3xl  md:mb-3 font-semibold ">
                Our Missions
              </h1>
            </div>

            <div className="md:pl-2">
              <h6 className="my-2 text-xl">Empowering Startup Success</h6>
              <p className="text-sm">
                Our mission is to empower startups with the exceptional
                services, tools, and expertise needed to bring their innovative
                software projects to life.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="p-5">
          <div className="md:flex">
            <div className="md:w-2/6 border-b-2 border-b-green-600 md:border-b-0  md:border-r-2 md:border-r-green-600 md:flex items-center justify-center">
              <h1 className="text-2xl md:text-3xl  md:mb-3 font-semibold ">
                Motto
              </h1>
            </div>

            <div className="md:pl-2">
              <h6 className="text-xl md:text-4xl">“Think, Design & Build”</h6>
            </div>
          </div>
        </section>

        <section className="p-5">
          <div className="md:flex">
            <div className="md:w-2/6 border-b-2 border-b-green-600 md:border-b-0  md:border-r-2 md:border-r-green-600 md:flex items-center justify-center">
              <h1 className="text-2xl md:text-3xl  md:mb-3 font-semibold ">
                Slogan
              </h1>
            </div>

            <div className="md:pl-2">
              <h6 className="text-xl md:text-4xl">
                “Your Success, Our Support”
              </h6>
            </div>
          </div>
        </section>
      </div>

      <OurValues />
      <HomeServices />
      <Projects />
    </>
  );
};

export default AboutUs;
