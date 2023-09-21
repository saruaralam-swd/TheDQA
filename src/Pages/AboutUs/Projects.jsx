import React from "react";
import project1 from "../../assets/AboutUsPage/project-1.jpg";
import project2 from "../../assets/AboutUsPage/project-2.jpg";
import project3 from "../../assets/AboutUsPage/project-3.jpg";
import project4 from "../../assets/AboutUsPage/project-4.jpg";

const Projects = () => {
  return (
    <section className="px- py-12">
      <h6 className="font-xs text-green-500 mb-3 font-semibold text-center">
        Projects
      </h6>
      <h6>
        <h2 className="text-3xl font-semibold mb-5 text-center">
          Our Recent Project case
        </h2>
      </h6>

      <div className="md:grid grid-cols-4 gap-5 p-10 -yellow-500">
        <div className="relative mb-12 md:mb-0  rounded-t-lg">
          <img
            src={project1}
            className="w-full h-full object-cover rounded-t-lg"
            alt=""
          />
          <h5 className="absolute w-4/5 left-11 md:left-[10%] bottom-[-27px] shadow-2xl text-center px-5 py-4 bg-white rounded-md">
            Media Marketing
          </h5>
        </div>

        <div className="relative mb-12 md:mb-0 rounded-t-lg">
          <img
            src={project2}
            className="w-full h-full object-cover rounded-t-lg"
            alt=""
          />
          <h5 className="absolute w-4/5 left-11 md:left-[10%] bottom-[-27px] shadow-lg text-center px-5 py-4 bg-white rounded-md">
            Book Keeping
          </h5>
        </div>

        <div className="relative mb-12 md:mb-0 rounded-t-lg">
          <img
            src={project3}
            className="w-full h-full object-cover rounded-t-lg"
            alt=""
          />
          <h5 className="absolute w-4/5 left-11 md:left-[10%] bottom-[-27px] shadow-lg text-center px-5 py-4 bg-white rounded-md">
            Technology Services
          </h5>
        </div>

        <div className="relative mb-12 md:mb-0 rounded-t-lg">
          <img
            src={project4}
            className="w-full h-full object-cover rounded-t-lg"
            alt=""
          />
          <h5 className="absolute w-4/5 left-11 md:left-[10%] bottom-[-27px] shadow-lg text-center px-5 py-4 bg-white rounded-md">
            Data Entry
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Projects;
