import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-400">Oops!</h1>
        <p className="my-5">Sorry, an unexpected error has occurred.</p>
        <Link
          className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-md text-white font-semibold"
          to="/"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
