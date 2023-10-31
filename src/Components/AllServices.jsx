import React from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <div>
      <ul className="text-right">
        <li>
          <Link to="/service/webApp" className="hover:text-green-700">
            Web Application
          </Link>
        </li>
        <li>
          <Link to="/service/mobileApp" className="hover:text-green-700">
            Mobile App
          </Link>
        </li>
        <li>
          <Link to="/service/sqa" className="hover:text-green-700">
            SQA
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AllServices;
