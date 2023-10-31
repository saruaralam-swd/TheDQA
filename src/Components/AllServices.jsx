import React from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
  const services = [
    {
      _id: 1,
      text: "Web Application",
      target: "webApp",
    },
    {
      _id: 2,
      text: " Mobile App",
      target: "mobileApp",
    },
    {
      _id: 3,
      text: " SQA",
      target: "sqa",
    },
  ];

  return (
    <div>
      <ul className="text-right">
        {services.map((service) => (
          <li key={service._id}>
            <Link
              to={`/service/${service.target}`}
              className="hover:text-green-700"
            >
              {service.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllServices;
