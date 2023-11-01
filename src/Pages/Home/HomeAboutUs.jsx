import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import aboutUsImg from "../../assets/HomePage/HomeAboutUs.webp";
import { Link } from "react-router-dom";

const HomeAboutUs = () => {
  return (
    <section className="bg-[#121316] text-white py-12">
      <div className="md:flex min-h-[500px] p-5 md:p-10">
        <div className="md:w-1/2 order-2 flex items-center">
          <div>
            <h6 className="font-xs text-[#00FF85] mb-3 font-semibold">
              About Us
            </h6>
            <h2 className="text-2xl  md:text-3xl mb-4 font-semibold">
              Our Business is Your life <br /> Making Easier & Comfortable
            </h2>
            <p className="my-3">
              At TheDQA.com, we are a dynamic BPO company in the startup
              ecosystem; as your strategic partner, our mission is to empower
              startups with top-notch Software Development and Software Quality
              Assurance services while allowing you to focus on what you do best
              to build your vision. With our motto “Think, Design & Build” and
              our slogan “You Success, Our Support,” we are dedicated to
              empowering startups and software projects, ensuring their success
              and growth.
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
              <Link
                to="aboutUs"
                className="inline-block bg-orange-500 text-white font-semibold px-5 py-2 rounded-md"
              >
                More About Us
              </Link>
            </>
          </div>
        </div>

        <div className="md:w-1/2 order-1 flex items-center mt-10 md:mt-0">
          <div>
            <img src={aboutUsImg} className="lg:w-4/5" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
