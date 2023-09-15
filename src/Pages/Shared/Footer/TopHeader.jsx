import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SiGooglemaps } from "react-icons/si";

const TopHeader = () => {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-7">
        <div className="bg-[#03082D] p-5 overflow-hidden">
          <div className="flex justify-between items-center gap-20">
            <div className="flex items-center gap-5 ">
              <p className="bg-orange-500 p-3 rounded-md">
                <PhoneIcon className="w-6 h-6" />
              </p>
              <div>
                <p>+8951452142</p>
                <p>Give us a call</p>
              </div>
            </div>

            <div>
              <PhoneIcon className="w-10 h-10 text-[#181C3C] inline-block" />
            </div>
          </div>
        </div>

        <div className="bg-[#03082D] p-5 overflow-hidden my-5 md:my-0">
          <div className="flex justify-between items-center gap-20">
            <div className="flex items-center gap-5 ">
              <p className="bg-orange-500 p-3 rounded-md">
                <EnvelopeIcon className="w-6 h-6" />
              </p>
              <div>
                <p>+8951452142</p>
                <p>Give us a call</p>
              </div>
            </div>

            <div>
              <EnvelopeIcon className="w-10 h-10 text-[#181C3C] inline-block" />
            </div>
          </div>
        </div>

        <div className="bg-[#03082D] p-5 overflow-hidden">
          <div className="flex justify-between items-center gap-20">
            <div className="flex items-center gap-5 ">
              <p className="bg-orange-500 p-3 rounded-md">
                <SiGooglemaps className="w-6 h-6" />
              </p>
              <div>
                <p>+8951452142</p>
                <p>Give us a call</p>
              </div>
            </div>

            <div>
              <SiGooglemaps className="w-10 h-10 text-[#181C3C] inline-block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
