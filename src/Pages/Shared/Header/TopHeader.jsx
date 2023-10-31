import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const TopHeader = () => {
  return (
    <section className="bg-[#121316] text-white md:flex justify-between px-8 py-5">
      <div className="flex gap-5 items-center justify-center">
        <p>
          <PhoneIcon className="h-4 w-4 text-orange-500 inline-block" />{" "}
          +8801797093279
        </p>
        <p>
          <PhoneIcon className="h-4 w-4 text-orange-500 inline-block" />{" "}
          +8801719251254
        </p>
        <p>
          <EnvelopeIcon className="h-4 w-4 text-orange-500 inline-block" />{" "}
          info@thedqa.com
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-5 md:mt-0">
        <span className="p-1 rounded-full bg-white">
          <Link>
            <FaFacebookF className="h-5 w-5 text-orange-500" />
          </Link>
        </span>
        <span className="p-1 rounded-full bg-white">
          <Link>
            <FaInstagram className="h-5 w-5 text-orange-500" />
          </Link>
        </span>
        <span className="p-1 rounded-full bg-white">
          <Link>
            <FaTwitter className="h-5 w-5 text-orange-500" />
          </Link>
        </span>
        <span className="p-1 rounded-full bg-white">
          <Link>
            <FaYoutube className="h-5 w-5 text-orange-500" />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default TopHeader;
