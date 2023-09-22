import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import aboutUsImg from "../../assets/HomePage/HomeAboutUs.webp";

const HomeAboutUs = () => {
  return (
    <>
      <section className="md:flex min-h-[500px] p-5 md:p-10 my-12">
        <div className="md:w-1/2 order-2 flex items-center">
          <div>
            <h6 className="font-xs text-green-500 mb-3 font-semibold">
              About Us
            </h6>
            <h2 className="text-3xl font-semibold">
              Our Business is Your life <br /> Making Easier & Comfortable
            </h2>
            <p className="my-3">
              At Thief, we are a forward-thinking technology agency dedicated to
              delivering cutting-edge solutions. With a team of experienced
              professionals, we specialize in web and app development, IT
              consulting, and more. Our mission is to empower businesses with
              innovative technology, ensuring their success in the digital age
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

        <div className="md:w-1/2 order-1 flex items-center mt-10 md:mt-0">
          <div>
            <img src={aboutUsImg} className="lg:w-4/5" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAboutUs;
