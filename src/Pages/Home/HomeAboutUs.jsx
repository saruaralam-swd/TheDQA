import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const HomeAboutUs = () => {
  return (
    <>
      <section className="md:flex min-h-[500px] border-2 border-orange-900">
        <div className="md:w-1/2 order-2 border border-black flex items-center">
          <div>
            <h6 className="font-xs text-green-500 mb-3">About Us</h6>
            <h2 className="text-3xl font-semibold">
              Our Business is Your life <br /> Making Easier & Comfortable
            </h2>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              mollitia asperiores id autem nostrum accusantium quaerat quasi
              officiis voluptates consequatur.
            </p>
            <div>
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
          </div>
        </div>

        <div className="md:w-1/2 order-1 border border-black flex items-center">
          image coming soon
        </div>
      </section>
    </>
  );
};

export default HomeAboutUs;
