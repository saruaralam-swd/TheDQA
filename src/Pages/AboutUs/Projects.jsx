import React from "react";
import project1 from "../../assets/AboutUsPage/project-1.jpg";
import project2 from "../../assets/AboutUsPage/project-2.avif";
import project3 from "../../assets/AboutUsPage/project-3.avif";
import project4 from "../../assets/AboutUsPage/project-4.webp";

import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  const projects = [
    {
      _id: 1,
      projectImage: project1,
      tag: "Media Marketing",
    },
    {
      _id: 2,
      projectImage: project2,
      tag: "Book Keeping",
    },
    {
      _id: 3,
      projectImage: project3,
      tag: "Technology Services",
    },
    {
      _id: 4,
      projectImage: project4,
      tag: "Data Entry",
    },
  ];

  return (
    <section
      className={
        location.pathname === "/aboutUs"
          ? "mt-12 mb-32 p-5 md:p-10"
          : "my-12 p-5 md:p-10"
      }
    >
      <h6 className="font-xs text-green-500 mb-3 font-semibold text-center">
        Projects
      </h6>
      <h6>
        <h2 className="text-3xl font-semibold text-center">
          Our Recent Project case
        </h2>
      </h6>

      <div className="md:grid grid-cols-4 gap-5 p-10 -yellow-500">
        {projects.map((pro) => (
          <div key={pro._id} className="relative mb-12 md:mb-0  rounded-t-lg">
            <img
              src={pro.projectImage}
              className="w-full h-full object-cover rounded-t-lg"
              alt=""
            />
            <h5 className="absolute w-4/5 left-11 md:left-[10%] bottom-[-27px] shadow-2xl text-center px-5 py-4 bg-white rounded-md">
              {pro.tag}
            </h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
