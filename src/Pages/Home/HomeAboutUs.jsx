import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import aboutUsImg from "../../assets/AboutUs.webp";

const HomeAboutUs = () => {
  return (
    <>
      <section className="md:flex min-h-[500px] px-10 py-8">
        <div className="md:w-1/2 order-2 flex items-center">
          <div>
            <h6 className="font-xs text-green-500 mb-3 font-semibold">
              About Us
            </h6>
            <h2 className="text-3xl font-semibold">
              Our Business is Your life <br /> Making Easier & Comfortable
            </h2>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              mollitia asperiores id autem nostrum accusantium quaerat quasi
              officiis voluptates consequatur.
            </p>
            <div className="mb-3">
              <p className="font-semibold">
                <ArrowLongRightIcon className="w-5 h-5 inline-block text-orange-500 mr-2" />
                <span>Innovative Working Activities</span>
              </p>
              <p className="font-semibold">
                <ArrowLongRightIcon className="w-5 h-5 inline-block text-orange-500 mr-2" />
                <span>100% Guarantee Issued for Client</span>
              </p>
              <p className="font-semibold">
                <ArrowLongRightIcon className="w-5 h-5 inline-block text-orange-500 mr-2" />
                <span>Dedicated Team Member</span>
              </p>
              <p className="font-semibold">
                <ArrowLongRightIcon className="w-5 h-5 inline-block text-orange-500 mr-2" />
                <span>Safe & Secure Environment</span>
              </p>
            </div>
            <>
              <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md">
                More About Us
              </button>
            </>
          </div>
        </div>

        <div className="md:w-1/2 order-1 flex items-center">
          <div>
            <img src={aboutUsImg} className="lg:w-4/5" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAboutUs;
